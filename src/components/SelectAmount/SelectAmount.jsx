import './SelectAmount.css';

const SelectAmount = ({ amount, setAmount }) => {

    function handleSelect(e) {
        e.preventDefault();
        const value = Number(e.target.value);
        setAmount(value);
    }
    return (
        <div className='select-center'>
            <h2>Amount:</h2>
            <select value={amount} onChange={handleSelect} className='select-field'>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="500">500</option>
            </select>
        </div>
    )
}

export default SelectAmount