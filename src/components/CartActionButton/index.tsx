import Button from "../Button";
import Styles from "./CartAction.module.css";

type CartActionButtonProps = {
    handleRedirect: () => void;
}

const CartActionButton = ({ handleRedirect }: CartActionButtonProps) => {
    return (
      <div className={Styles.cartActions}>
        <Button
          onClick={handleRedirect}
          variant="secondary"
        >
          Continuar comprando
        </Button>
        <Button
          onClick={() => console.log("pagamento")}
        >
          Ir para pagamento
        </Button>
      </div>
    );
}

export default CartActionButton;