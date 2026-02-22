export interface StateCapitalData {
  state: string;
  capital: string;
  latitude: number;
  longitude: number;
  mbbs_average_salary: number;
  md_average_salary: number;
  ms_average_salary: number;
  dm_average_salary: number;
  mch_average_salary: number;
}

export const stateCapitals: StateCapitalData[] = [
  { state: 'Andhra Pradesh', capital: 'Amaravati', latitude: 16.5062, longitude: 80.6480, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Arunachal Pradesh', capital: 'Itanagar', latitude: 27.0844, longitude: 93.6053, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
  { state: 'Assam', capital: 'Dispur', latitude: 26.1433, longitude: 91.7933, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
  { state: 'Bihar', capital: 'Patna', latitude: 25.5941, longitude: 85.1376, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Chhattisgarh', capital: 'Raipur', latitude: 21.2514, longitude: 81.6296, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Goa', capital: 'Panaji', latitude: 15.4909, longitude: 73.8278, mbbs_average_salary: 35000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
  { state: 'Gujarat', capital: 'Gandhinagar', latitude: 23.2156, longitude: 72.6369, mbbs_average_salary: 75000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
  { state: 'Haryana', capital: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, mbbs_average_salary: 90000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
  { state: 'Himachal Pradesh', capital: 'Shimla', latitude: 31.1048, longitude: 77.1734, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Jharkhand', capital: 'Ranchi', latitude: 23.3441, longitude: 85.3096, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
  { state: 'Karnataka', capital: 'Bengaluru', latitude: 12.9716, longitude: 77.5946, mbbs_average_salary: 80000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
  { state: 'Kerala', capital: 'Thiruvananthapuram', latitude: 8.5241, longitude: 76.9366, mbbs_average_salary: 40000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
  { state: 'Madhya Pradesh', capital: 'Bhopal', latitude: 23.2599, longitude: 77.4126, mbbs_average_salary: 50000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Maharashtra', capital: 'Mumbai', latitude: 19.0760, longitude: 72.8777, mbbs_average_salary: 100000, md_average_salary: 160000, ms_average_salary: 190000, dm_average_salary: 240000, mch_average_salary: 290000 },
  { state: 'Manipur', capital: 'Imphal', latitude: 24.8170, longitude: 93.9368, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Meghalaya', capital: 'Shillong', latitude: 25.5788, longitude: 91.8933, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
  { state: 'Mizoram', capital: 'Aizawl', latitude: 23.7271, longitude: 92.7176, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Nagaland', capital: 'Kohima', latitude: 25.6751, longitude: 94.1105, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Odisha', capital: 'Bhubaneswar', latitude: 20.2961, longitude: 85.8245, mbbs_average_salary: 90000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Punjab', capital: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, mbbs_average_salary: 90000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
  { state: 'Rajasthan', capital: 'Jaipur', latitude: 26.9124, longitude: 75.7873, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
  { state: 'Sikkim', capital: 'Gangtok', latitude: 27.3314, longitude: 88.6138, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Tamil Nadu', capital: 'Chennai', latitude: 13.0827, longitude: 80.2707, mbbs_average_salary: 45000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
  { state: 'Telangana', capital: 'Hyderabad', latitude: 17.3850, longitude: 78.4867, mbbs_average_salary: 65000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
  { state: 'Tripura', capital: 'Agartala', latitude: 23.8315, longitude: 91.2868, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Uttar Pradesh', capital: 'Lucknow', latitude: 26.8467, longitude: 80.9462, mbbs_average_salary: 60000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
  { state: 'Uttarakhand', capital: 'Dehradun', latitude: 30.3165, longitude: 78.0322, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
  { state: 'West Bengal', capital: 'Kolkata', latitude: 22.5726, longitude: 88.3639, mbbs_average_salary: 40000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
  { state: 'Andaman and Nicobar Islands', capital: 'Port Blair', latitude: 11.6234, longitude: 92.7265, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
  { state: 'Chandigarh', capital: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, mbbs_average_salary: 90000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
  { state: 'Dadra and Nagar Haveli and Daman and Diu', capital: 'Daman', latitude: 20.4283, longitude: 72.8397, mbbs_average_salary: 75000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Delhi', capital: 'New Delhi', latitude: 28.6139, longitude: 77.2090, mbbs_average_salary: 95000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
  { state: 'Jammu and Kashmir', capital: 'Srinagar', latitude: 34.0837, longitude: 74.7973, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Ladakh', capital: 'Leh', latitude: 34.1526, longitude: 77.5770, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
  { state: 'Lakshadweep', capital: 'Kavaratti', latitude: 10.5667, longitude: 72.6417, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
  { state: 'Puducherry', capital: 'Pondicherry', latitude: 11.9416, longitude: 79.8083, mbbs_average_salary: 70000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 }
];
