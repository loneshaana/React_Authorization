import React from 'react';
const Store = React.createContext();


const createStore = () =>{
     return class extends React.Component{
         state ={
            Author:"Anwarulhaq",
            users:[],
            isChecked:undefined
         }

         updateState = (key ,value) =>{
                this.setState(prevState =>{
                    return {[key] : value};
                });
         }

         filterOnDob =({target}) =>{
            if(target.checked)
            {
                const users = this.state.users;
                const data = users.sort(function(a,b){
                    return a.dob > b.dob;
                });
                this.setState({users:data,isChecked:'dob'});
            }else{
                this.setState({isChecked:undefined})
            }
         }

         filterOnName = ({target}) =>{
             if(target.checked)
                {
                    const users = this.state.users;
                    const data = users.sort(function(a,b){
                        return a.username > b.username;
                    });
                    this.setState({users:data,isChecked:'name'});
                }else{
                    this.setState({isChecked:undefined})
                }
         }

         readOnly = () =>{
            const state = Object.assign({},this.state,this.state)
            let newObj = {
                get:function(){return state}
            }
            return newObj.get();
         }

         render(){
             const {Root} = this.props;
            return <Store.Provider value={{
                store:{
                    state:this.state,
                    updateState:this.updateState,
                    readOnly:this.readOnly,
                    filterOnDob:this.filterOnDob,
                    filterOnName:this.filterOnName
                }
            }}>
                    <Store.Consumer>
                        {(store) =>(
                            <React.Fragment>
                               <Root {...store} />
                            </React.Fragment>
                        )}
                    </Store.Consumer>
            </Store.Provider>
         }
    }
}

export default createStore;