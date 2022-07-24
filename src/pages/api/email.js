import { GraphQLClient } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ body }, res) => {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.hygraph.com/v2/cl4jqcjg253ik01xvavpha67n/master",
    {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_EMAIL_ENDPOINT}`,
      },
    }
  );

  const { FormSubission } = await graphcms.request(
    `mutation FormSubmission($data: EmailCreateInput!) {
      createEmail(data: $data) {
        name
        email
        location
        description
        subject
      }
    }`,
    {
      data: body.data,
    }
  );

  res.status(201).json();
};
