import styled from "styled-components";

const renderTextField = ({ field, form: { touched, errors }, ...props }) => (
    <InputContainer>
        <label className="text-lg font-medium" htmlFor={field.name}>{props.label}</label>
        <input
            placeholder={props.placeholder}
            required
            name={field.name}
            value={field.value}
            {...props}
        />
        {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
        )}
    </InputContainer>
);

export default renderTextField;

//styles

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    > label {
        font-size: 20px;
        margin-bottom: 14px;
    }
    > input {
        width: 100%;
        padding: 15px;
        margin-bottom: 18px;
        border-radius: 5px;
        border: 1px solid #d9d8d8;
    }
`;
