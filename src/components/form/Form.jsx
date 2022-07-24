import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const Form = ({ subject, services }) => {
  // handle form state and submission
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  useEffect(() => {
    setValue("subject", subject);
  }, []);

  // sending data to graphcms
  async function onSubmit(data) {
    try {
      console.log(data);
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  // form structure: subject, name, email, location, description
  return (
    <div className="flex flex-col w-full lg:w-2/3">
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
        <input
          placeholder="location"
          {...register("location")}
          className="w-full rounded-2xl px-4 py-2 mb-4 bg-primary-100 "
        />
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <input
              placeholder="name"
              {...register("name", { required: true })}
              className="w-full rounded-2xl px-4 py-2 bg-primary-100"
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
              className="w-full rounded-2xl px-4 py-2 bg-primary-100"
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
          className="w-full my-4 rounded-2xl h-40 px-4 py-2 bg-primary-100"
        />
        {errors.description && (
          <span className="text-red-500 text-sm italic">
            This field is required
          </span>
        )}
        <div className="flex items-center">
          <input
            type="submit"
            value={isSubmitting ? "Submitting" : "Submit"}
            className="cursor-pointer text-primary-100 bg-secondary-200 px-4 py-2 rounded-2xl hover:bg-secondary-400 hover:scale-105 transition-all"
          />
          {isSubmitted && (
            <p className="mb-0 italic p-4">
              Thank you for your submission, we&apos;ll reach out shortly!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
