import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ subject, services }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log("subject", subject);
    setValue("subject", subject);
  }, []);

  // form structure: subject, name, email, location, description
  return (
    <div className="flex flex-col w-1/2">
      <h3>Contact us</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <select
          {...register("subject", { required: true })}
          className="w-full rounded-2xl mb-4 px-4 py-2"
        >
          {services.map((service) => {
            return (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            );
          })}
        </select>
        {errors.subject && (
          <span className="text-red-500 text-sm italic">
            This field is required
          </span>
        )}
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <input
              defaultValue={""}
              placeholder="name"
              {...register("name", { required: true })}
              className="w-full rounded-2xl px-4 py-2"
            />
            {errors.name && (
              <span className="text-red-500 text-sm italic">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full">
            <input
              type={"email"}
              defaultValue={""}
              placeholder="email"
              {...register("email", { required: true })}
              className="w-full rounded-2xl px-4 py-2"
            />
            {errors.email && (
              <span className="text-red-500 text-sm italic">
                This field is required
              </span>
            )}
          </div>
        </div>
        <textarea
          {...register("description")}
          className="w-full my-4 rounded-2xl h-40 px-4 py-2"
        />
        {errors.description && (
          <span className="text-red-500 text-sm italic">
            This field is required
          </span>
        )}

        <input
          type="submit"
          className="cursor-pointer text-primary-100 bg-secondary-200 px-4 py-2 rounded-2xl"
        />
      </form>
    </div>
  );
};

export default Form;
