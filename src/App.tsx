import './App.css';
import Advice from './components/Advice';

function App() {
    return (
        <div
            style={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Advice />
        </div>
    );
}

export default App;
