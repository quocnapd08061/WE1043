let person = {
    cccd: '05151515151',
    ho: 'Hoang',
    ten: 'Ha',
    email: 'anhquoc1k98@gmail.com',
    namsinh: 1998,
    getFullName: function() {
        let fullName = this.ho + ' ' + this.ten;
        return fullName;
    }
};

// Test
alert(person.getFullName()); // Kết quả: "Hoang Ha"

