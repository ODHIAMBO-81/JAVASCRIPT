import { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({ name:"", age:"", email:""});

    useEffect(() => {
        axios.get("https://localhost:5000/users").then(res => setStudents(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/users", form).then(() => {
            setForm({ name:"", age:"", email:"" });
            return axios.get("http://localhost:5000/users").then(res =>setStudents(res.data));
        });
    };

    return (
        <div style={[ width: "400px", margin:"auto"]}>
            <h2>Students</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value= {form.name} onChange={e => setForm({ ...form, name:
                   e.target.value  
                })} required />
                <input placeholder="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} required />
                <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target})} required />
                <button type="submit">Add Student</button>
            </form>

            <ul>
                {students.map((s) =>(
                  <li key={s._id}>
                    {s._name} ({s.age}) - {s.email}
                  </li>
                ))}
            </ul>
            </div>
    );
};

export default StudentList;