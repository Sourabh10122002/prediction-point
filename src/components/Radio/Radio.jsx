import './Radio.css';

const Radio = ({ selectedRadioValue, setSelectedRadioValue }) => {

    const handleRadioChange = (value) => {
        setSelectedRadioValue(value);
    };

    return (
        <div className='radio-center'>
            <div className='radio-input-label'>
                <label htmlFor="option1">
                    <input type="radio" id="option1" value="option1" checked={selectedRadioValue === "option1"} onChange={() => handleRadioChange("option1")} />
                    Less than 5</label>
            </div>
            <div className='radio-input-label'>
                <label htmlFor="option2">
                    <input type="radio" id="option2" value="option2" checked={selectedRadioValue === "option2"} onChange={() => handleRadioChange("option2")} />
                    Equal to 5</label>
            </div>
            <div className='radio-input-label'>
                <label htmlFor="option3">
                    <input type="radio" id="option3" value="option3" checked={selectedRadioValue === "option3"} onChange={() => handleRadioChange("option3")} />
                    More than 5</label>
            </div>

        </div>
    )
}

export default Radio