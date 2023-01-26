import Button from 'react-bootstrap/Button';


const Boton = (props) => {
    const {text} = props;
    return <Button type="submit" variant="dark">{text}</Button>
};

export default Boton;