import axios from 'axios'

// The API endpoint where bills are located
const billsUrl = `http://localhost:8080/Backend_Payment-1.0-SNAPSHOT/api/student/get_all_details`

// Gets all bills which belong to a user
const getUserBills = async (student) => {
    const response = await axios.get(`${billsUrl}/${student.student_id}`)
  
  // The .data field would now contain the bills of the users
  return response.data
}


const exportObject = { getUserBills }

export default exportObject

