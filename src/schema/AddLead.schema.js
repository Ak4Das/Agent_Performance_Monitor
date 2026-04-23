import * as yup from "yup"

export const addLeadSchema = yup.object({
  name: yup.string().required("Please enter lead name"),
  source:yup.string().required("Please mention a source"),
  salesAgent: yup.string().required("Please assign a Sales agent"),
  status: yup.string().required("Mention lead status"),
  tags: yup.string().required("Choose a tag"),
  timeToClose: yup.number().min(1).required("Mention time to close"),
  priority: yup.string().required("Please mention priority"),
  phone: yup.string().required("Please enter lead phone number"),
})