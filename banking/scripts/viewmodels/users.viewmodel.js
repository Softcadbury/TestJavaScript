define('users.viewmodel',
    ['context', 'user.model'],
    function (context, User) {
        var selectedUser = ko.observable();
        var newUserName = ko.observable('');

        // Change the selected user
        function changeSelectedUser(data) {
            if (selectedUser()) {
                selectedUser().isSelected(false);
                
                if (selectedUser() == data) {
                    selectedUser(null);
                    return;
                }
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
        
        // Delete the selected user
        function deleteUser(data) {
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