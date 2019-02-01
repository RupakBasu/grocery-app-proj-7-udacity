import React from 'react';


class Search extends React.Component {

  render() {
    const styles= {
      searchbox:{
        // textAlign: 'center',
        // width: '70%',
        background:'yellow',

      },

    }
    return(
      <div className = 'SearchBox'style={styles.searchbox}>
        <form>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    )
  }
}

export default Search;
