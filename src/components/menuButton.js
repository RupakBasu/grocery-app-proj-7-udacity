import React from 'react';



class MenuButton extends React.Component {

  render() {
    const styles= {
      container:{
        alignItems:'center',
        color: 'blue',
        alignItmes:'center',
      }
    }
    return(
      <div>
        <button style={styles.container}>
          This is a button
        </button>
      </div>
    )
  }
}


export default MenuButton;
