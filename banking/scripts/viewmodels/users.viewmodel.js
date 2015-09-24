define('users.viewmodel',
    ['context', 'data', 'user.model'],
    function (context, data, User) {
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
                data.saveUsers();
                newUserName('');
            }
        }
        
        // Delete the selected user
        function deleteUser() {
            if (selectedUser()) {
                context.users.remove(selectedUser());
                data.saveUsers();
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