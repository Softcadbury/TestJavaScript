define('users.viewmodel',
    ['context', 'user.model'],
    function (context, User) {
        var selectedUser = ko.observable();
        var newUserName = ko.observable('');
        
        context.users.push(new User('Romain'));

        // Change the selected user
        function changeSelectedUser(user) {
            if (selectedUser()) {
                selectedUser().isSelected(false);
                
                if (selectedUser() == user) {
                    selectedUser(null);
                    return;
                }
            }

            selectedUser(user);
            selectedUser().isSelected(true);
        }

        // Add a user
        function addUser() {
            if (newUserName().trim()) {
                context.users.push(new User(newUserName().trim()));
                newUserName('');
            }
        }
        
        // Delete the selected user
        function deleteUser() {
            if (selectedUser()) {
                context.users.remove(selectedUser());
                selectedUser(null);
            }
        }

        return {
            isUsersViewVisible: context.isUsersViewVisible,
            users: context.users,
            selectedUser: selectedUser,
            newUserName: newUserName,
            changeSelectedUser: changeSelectedUser,
            addUser: addUser,
            deleteUser: deleteUser
        };
    });