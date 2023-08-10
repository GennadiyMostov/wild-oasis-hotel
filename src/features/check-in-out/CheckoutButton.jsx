import Button from '../../ui/Button';
import useCheckout from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckout();
  return (
    <Button
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
      variation='primary'
      size='small'
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
