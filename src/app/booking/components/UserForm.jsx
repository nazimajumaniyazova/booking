"use client";
import { Input, Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../validations/userSchema";
import { useBookingStore } from "../store/bookingStore";
import StepNavigation from "./common/StepNavigation";

export default function UserForm({ onNext, onPrev }) {
  const { user, setUser } = useBookingStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: user,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setUser(data);
    onNext();
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Enter Your Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">First name</label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Last name</label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Phone</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <Input placeholder="+998..." {...field} />}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Email (optional)</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Comment (optional)</label>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => <Input.TextArea rows={3} {...field} />}
          />
        </div>

        <StepNavigation
          onPrev={onPrev}
          onNext={handleSubmit(onSubmit)}
          nextDisabled={!isValid}
          loading={isSubmitting}
        />
      </form>
    </Card>
  );
}
