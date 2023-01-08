<template>
  <v-data-table
    :headers="headers"
    :items="plans"
    sort-by="calories"
    class="elevation-1"
  >

    <!--    <template v-slot:item.avatar="{item}">-->
    <!--      <v-avatar-->
    <!--      >-->
    <!--        <img :src="item.avatar" alt="alt">-->
    <!--      </v-avatar>-->
    <!--    </template>-->

    <template v-slot:item.status="{ item }">
      <v-chip
        :color=getStatusColor(item.status)
        dark
      >
        <h5 v-if="item.status === 1">
          Active
        </h5>

        <h5 v-else>
          DeActive
        </h5>
      </v-chip>
    </template>


    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>plans</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              outlined
              dark
              class="mb-2 castalk--text"
              v-bind="attrs"
              v-on="on"
            >
              New Plan
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.volume"
                      label="Volume"
                    ></v-text-field>
                  </v-col>



                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-checkbox
                      v-model="editedItem.status"
                      label="Activation"
                    ></v-checkbox>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>

      <v-icon
        small
        @click="show(item)"
      >
        mdi-eye
      </v-icon>
    </template>
    <!--    <template v-slot:no-data>-->
    <!--      <v-btn-->
    <!--        color="primary"-->
    <!--        @click="initialize"-->
    <!--      >-->
    <!--        Reset-->
    <!--      </v-btn>-->
    <!--    </template>-->
  </v-data-table>
</template>

<script>
import Notiflix from "notiflix";

export default {
  props: {
    plans: {
      required: true,
      type: Array,
    }
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,


    headers: [
      // {
      //   align: 'start',
      //   sortable: false,
      //   value: 'name',
      // },
      // {text: '#', value: 'id'},
      {text: 'Name', value: 'name'},
      {text: 'Price', value: 'price'},
      {text: 'Volume', value: 'volume'},
      {text: 'Status', value: 'status'},
      {text: 'Registered_At', value: 'created_at_human'},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      price: '',
      volume: '',
      status: '',
    },
    defaultItem: {
      name: '',
      price: '',
      volume: '',
      status: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    console.log(this.plans);
  },

  methods: {

    editItem(item) {
      this.editedIndex = this.plans.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.plans.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const res = await this.$axios.$post(process.env.baseUrl + `PlanAdminPage/delete`,
        {"plan_id": this.editedItem.id});

      if (res.code === 200) {
        this.plans.splice(this.editedIndex, 1);
        Notiflix.Report.success('Success', res.messages[0], 'OK');
      } else {
        Notiflix.Report.failure('Failed', res.messages[0], 'OK');
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {

      if (this.editedIndex > -1) {
        const res = await this.$axios.$post(process.env.baseUrl + `PlanAdminPage/update`,
          {
            "plan_id": this.editedItem.id,
            "name": this.editedItem.name,
            "price": this.editedItem.price,
            "volume": this.editedItem.volume,
            "status": this.editedItem.status ? 1 : 0,
          }
        )
          .then(res => {
            Notiflix.Report.success('Success', res.messages[0], 'OK');
            Object.assign(this.plans[this.editedIndex], this.editedItem);
            console.log(this.editedItem.status);

          }).catch(({response}) => {
            Notiflix.Report.failure("Failed", Object.values(response.data.errors)[0][0], 'OK');

          });
      } else {
        const res = await this.$axios.$post(process.env.baseUrl + `PlanAdminPage/create`,
          {
            "name": this.editedItem.name,
            "price": this.editedItem.price,
            "volume": this.editedItem.volume,
            "status": this.editedItem.status ? 1 : 0,
          }
        )
          .then(res => {
            Notiflix.Report.success('Success', res.messages[0], 'OK');

          }).catch(({response}) => {
            Notiflix.Report.failure("Failed", Object.values(response.data.errors)[0][0], 'OK');

          });
        this.plans.push(this.editedItem);
      }





      this.close();
    },


    async show(item) {
      await this.$router.push(`/plans/${item.id}`);
    },

    getStatusColor(status) {
      return status === 1 ? "green" : "red";
    },
  },
};
</script>

<style scoped>

</style>
