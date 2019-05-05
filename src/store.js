import React from 'react';
const Store = React.createContext();


const createStore = () =>{
  
     return class extends React.Component{
         state ={
            Author:"Anwarulhaq"
         }

         updateState = (...obj) =>{
             if(obj instanceof Array){
                this.setState(prevState =>{
                    const key =obj[0];
                    const value = obj[1];
                    return {[key] : value};
                });
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
                    readOnly:this.readOnly
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