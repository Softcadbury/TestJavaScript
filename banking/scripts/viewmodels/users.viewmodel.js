define('users.viewmodel',
    ['context', 'user.model'],
    function (context, User) {
        var selectedUser = ko.observable();
        var newUserName = ko.observable('');
        
        // Change the selected user
        function changeSelectedUser(data) {
            if (selectedUser()) {
                selectedUser().isSelected(false);    
            }
            
            selectedUser(data);
            selectedUser().isSelected(true);
        }
        
        // Add a user
        function addUser() {
            if (newUserName().trim()) {
                context.users.push(new User(newUserName().trim()));
                newUserName('');
            }
        }
        
        return {
            isUsersViewVisible: context.isUsersViewVisible,
            users: context.users,
            selectedUser: selectedUser,
            newUserName: newUserName,
            changeSelectedUser: changeSelectedUser,
            addUser: addUser
        };
    });