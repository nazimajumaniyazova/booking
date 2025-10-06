import ConsultationTypeSelect from "../components/ConsultationTypeSelect";
import ServiceSelect from "../components/ServiceSelect";
import SpecialistSelect from "../components/SpecialistSelect";
import DateTimePicker from "../components/DateTimePicker";
import UserForm from "../components/UserForm";
import VerificationStep from "../components/VerificationStep";
import PaymentForm from "../components/PaymentForm";
import ConfirmationScreen from "../components/ConfirmationScreen";

export const steps = [
  { key: "type", title: "Type", component: ConsultationTypeSelect },
  { key: "service", title: "Service", component: ServiceSelect },
  { key: "specialist", title: "Specialist", component: SpecialistSelect },
  { key: "datetime", title: "Date/Time", component: DateTimePicker },
  { key: "details", title: "Details", component: UserForm },
  { key: "verification", title: "Verification", component: VerificationStep },
  { key: "payment", title: "Payment", component: PaymentForm },
  { key: "confirmation", title: "Confirmation", component: ConfirmationScreen },
];
