import { StyleSheet, Text, SafeAreaView , TextInput , TouchableOpacity , FlatList ,View, Alert, Modal,Pressable  } from 'react-native'
import React, { useState } from 'react'


const Home = () => {
 const [Input, setInput] = useState('')
 const [todo, settodo] = useState<string[]>([])
 const [index, setIndex] = useState(0)
 const [modalVisible, setModalVisible] = useState(false);
 const [updateInput, setUpdateInput] = useState('')


//  addtodo
const addtodo = () => {
  console.log(Input);
  todo.push (Input)
  setInput('')
  settodo([...todo ])
}
// delete todo
const deleteTodo =(index :any )=>{
  console.log('del');
  todo.splice(index , 1)
  settodo([...todo])
}

// editTodo

const editTodo = (index : any) =>{
  console.log(updateInput, index)
  todo.splice(index , 1 , updateInput)
  settodo([...todo])
  setModalVisible(false)
}


  return (
  <SafeAreaView  style = {styles.container}>
    <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        marginTop : 50
      }}>Todo App</Text>

<TextInput
        style={styles.input}
        onChangeText={setInput}
        value={Input} 
        placeholder='Enter Todo'
        />

<TouchableOpacity style={styles.button} onPress={addtodo}>
        <Text>Press Here</Text>
      </TouchableOpacity>


      {todo.length > 0 ? <FlatList 
      style={{ marginTop: 20 }}
      data = {todo}
      renderItem={({ item, index}) => {
        return <View  style={styles.item}>
          <Text  style ={styles.title}>{item}</Text>

          {/* delete */}
     <View style ={styles.actionButtons}>
          <TouchableOpacity style={styles.del} onPress={deleteTodo}>
        <Text style ={styles.white}>Delete</Text>
      </TouchableOpacity>

        {/* edit */}
      <TouchableOpacity style={styles.edit} onPress={() => { 
       setModalVisible(true); 
       setIndex(index); }}>
        <Text style ={styles.white}>Edit</Text>
      </TouchableOpacity>
     </View>

        </View> 


      }}
      keyExtractor={(item , Index ) => Index.toString()}
      /> : <Text style={{ ...styles.title, color: 'black', margin: 20 }}>No Todo Found...</Text>}

      {/* modal for edit button */}
      
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Todo!</Text>
              <TextInput
                style={styles.updateInput}
                onChangeText={setUpdateInput}
                value={updateInput}
              />
              <Pressable
                style={[styles.btn, styles.buttonClose]}
                onPress={() => editTodo(index)}>
                <Text style={styles.textStyle}>Update Todo</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      </View>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create ({
  container:{
    flex : 1
  },
  input:{
    height: 40,
    marginHorizontal: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 120
  } ,
  title: {
    fontSize: 32,
    color: 'black',
    textAlign: 'center'
  },
  item: {
    backgroundColor: '#ffe633',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  del :{
    color: "white", // Text ka color white hoga
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5
  },
  edit :{
    color: "white", // Text ka color white hoga
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5

  },
  actionButtons: {
    flexDirection :'row',
    gap : 30,
    justifyContent: 'center',
    marginTop: 20
  },
  white: {
    color : 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  updateInput: {
    margin: 20,
    width: 200,
    borderWidth: 1,
  },
  

})

export default Home