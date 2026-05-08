const ValidPassword = () => <h4>Valid Password</h4>
const InvalidPassword = () => <h4>Invalid Password</h4>

export const Password = ({ isValid }) => {
    return  isValid ? <ValidPassword /> : <InvalidPassword />
};



