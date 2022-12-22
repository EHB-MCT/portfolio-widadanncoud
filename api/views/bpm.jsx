var React = require('react');

const styles = {
    '*': {
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif',
    },
    nav: {
      backgroundColor: '#333',
      color: '#fff',
      fontSize: 16,
      padding: 10,
      marginBottom: 20,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 10px',
    },
    main: {
      width: '50%',
      margin: '0 auto',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: 4,
      overflow: 'hidden',
      backgroundColor: '#f2f2f2',
      marginTop: 20,
      padding: 20,
      borderRadius: 5,
    },
    title: {
      color: '#333',
      padding: 10,
      fontSize: 18,
    },
    description: {
      padding: 10,
      fontSize: 14,
    },
    heart: {
      float: 'right',
      color: 'red',
    },
    'input[type=submit]': {
      width: '100%',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '14px 20px',
      margin: '8px 0',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
    },
    'input[type=submit]:hover': {
      backgroundColor: '#45a049',
    },
  };
  
function Bpm() {
    return (
        <>
            <nav style={styles.nav}>
                <a style={styles.navLink} href="/">Home</a> | <a style={styles.navLink} href="bpm">My BPM's</a>
            </nav>
            <main style={styles.main} id="parent">
                <h1>All my saved BPM's</h1>
            </main>
        </>
    )
}
  
module.exports = Bpm;