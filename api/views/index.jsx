var React = require('react');

const styles = {
    root: {
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
    form: {
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        padding: 20,
        borderRadius: 5,
    },
    inputNumber: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
        cursor: 'pointer',
    },
    inputFile: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
    },
    inputDate: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
    },
    inputTime: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textarea: {
        width: '100%',
        height: 150,
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
    },    
    submit: {
        width: '100',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
}

function Home() {
    return (
        <>
          <nav style={styles.nav}>
            <a style={styles.navLink} href="/">Home</a> | <a style={styles.navLink} href="bpm">My BPM's</a>
          </nav>
          <main style={styles.main}>
            <h1>Save your BPM's</h1>
            <form style={styles.form} action="/crud/create-bpm" method="POST">
              <label style={styles.label} for="quantity">Enter a bpm:</label>
              <br />
              <input
               style={styles.inputNumber}
                type="number"
                id="quantity"
                name="quantity"
                min="60"
                max="150"
                step="1"
                value="60"
                required
              />
              <br />
              <label style={styles.label} for="date">Select a date:</label>
              <br />
              <input style={styles.inputDate} type="date" id="date" name="date" required />
              <br />
              <label style={styles.label} for="time">Select time:</label>
              <br />
              <input style={styles.inputTime} type="time" id="time" name="time" value="12:00" required />
              <br />
              <label style={styles.label} for="message">
                Write a small description of what you where doing:
              </label>
              <br />
              <textarea style={styles.textarea} id="message" name="message" required />
              <br />
              <input style={styles.submit} type="submit" value="Submit" />
            </form>
          </main>
        </>
      );      
}

module.exports = Home;
