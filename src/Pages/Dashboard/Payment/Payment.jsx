import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51PQE7DHli5uCXsCAQZ9XkZ6SceJRVpDVfHXGbkHFjuM7TzY8b8I0r9U9s0IfTBZ4A3wIJoLNaRFVAcbTNvU5EP7j00yJbX1ayi');
const Payment = () => {
    return (
        <div>
            {/* <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle> */}
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;