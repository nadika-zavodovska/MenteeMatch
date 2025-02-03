import { useState, useEffect } from "react";

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("All");

    const initialUsers = [
        { id: 1, name: "Tom", email: "tom@example.com", type: "mentor" },
        { id: 2, name: "James", email: "james@example.com", type: "mentee" },
        { id: 3, name: "Maria", email: "maria@example.com", type: "mentee" },
        { id: 4, name: "Tim", email: "tim@example.com", type: "mentor" },
    ];

    // Load users from localStorage or set hard-coded users if none exist
    useEffect(() => {
        const storedUsers = localStorage.getItem("users");

        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            // If no users in localStorage, set the initial users
            setUsers(initialUsers);
            localStorage.setItem("users", JSON.stringify(initialUsers)); // Save them to localStorage
        }
    }, []);

    // Save users to localStorage whenever they change
    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem("users", JSON.stringify(users)); // Update localStorage
        }
    }, [users]);
    // Filter users based on user type
    const filteredUsers = filter === "All" ? users : users.filter((user) => user.type === filter);

    const resetLocalStorage = () => {
        localStorage.setItem("users", JSON.stringify(initialUsers)); // Reset localStorage to initial users
        setUsers(initialUsers); // Update state with the initial users
    };
    return (
        <div id="admin-dashboard">
            <h1>Admin Dashboard</h1>

            {/* Filter dropdown */}
            <div>
                <label htmlFor="user-type-filter">Filter by user type: </label>
                <select
                    id="user-type-filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="mentor">Mentor</option>
                    <option value="mentee">Mentee</option>
                </select>
            </div>

            {/* Table to display users */}
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <a href="#">{user.name}</a>
                            </td>
                            <td>
                                <a href="#">{user.email}</a>
                            </td>
                            <td>
                                <a href="#">{user.type}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={resetLocalStorage}>Reset to Initial Users</button>
        </div>
    );
}

export default AdminDashboard;
