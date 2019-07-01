<template>
  <div id="app">
  <table border='1' width='100%' style='border-collapse: collapse;'>
   <tr>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Email</th>
     <th>Actions</th>
   </tr>

   <tr v-for='contact in contacts'>
     <td>{{ contact.firstName }}</td>
     <td>{{ contact.lastName }}</td>
     <td>{{ contact.email }}</td>
     <td>
      <input type="button" @click="selectContact(contact)" value="Select">
      <input type="button" @click="deleteContact(contact.id)" value="Delete">
     </td> 
   </tr>
 </table>

 </br>

    <form>
      <label>First Name</label>
      <input type="text" name="firstName" v-model="firstName">
      </br>

      <label>Last Name</label>
      <input type="text" name="lastName" v-model="lastName">
      </br>

      <label>Email</label>
      <input type="email" name="email" v-model="email">
      </br>
      
      <input v-if="!id" type="button" @click="createContact(firstName, lastName, email)" value="Add">
      <input v-if="id" type="button" @click="updateContact(id, firstName, lastName, email)" value="Update">
      <input type="button" @click="clearForm()" value="Clear">
    </form>
</div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'app',
  data(){
    return {
      id: null,
      firstName: '',
      lastName: '',
      email: ''}
  },
  apollo: {
    contacts: gql`query {
      contacts {
        id,
        firstName,
        lastName,
        email
      }
    }`,
  },
  methods: {
    createContact(firstName, lastName, email){
      console.log(`Create contact: ${email}`)
      this.$apollo.mutate({
          mutation: gql`mutation createContact($firstName: String!, $lastName: String!, $email: String!){
            createContact(firstName: $firstName, lastName: $lastName, email: $email) {
              id,
              firstName,
              lastName,
              email}
          }`,
          variables:{
            firstName: firstName,
            lastName: lastName,
            email: email
          }
        }
      )
      location.reload();
    },
    updateContact(id, firstName, lastName, email){
      console.log(`Update contact: # ${id}`)
      this.$apollo.mutate({
          mutation: gql`mutation updateContact($id: ID!, $firstName: String!, $lastName: String!, $email: String!){
            updateContact(id: $id, firstName: $firstName, lastName: $lastName, email: $email)
          `,
          variables:{
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email
          }
        }
      )
      location.reload();
    },
    deleteContact(id){
      console.log(`Delete contact: # ${id}`)
      this.$apollo.mutate({
          mutation: gql`mutation deleteContact($id: ID!){
            deleteContact(id: $id)
          }`,
          variables:{
            id: id,
          }
        }
      )
      location.reload();
    },
    selectContact(contact){
      this.id = contact.id;
      this.firstName = contact.firstName;
      this.lastName = contact.lastName;
      this.email = contact.email;
    },
    clearForm(){
      this.id = null;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    }    
  }
}
</script>
<style>
</style>