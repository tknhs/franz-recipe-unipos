module.exports = (Franz) => {
  const getMessages = () => {
    const unreadNotifications = document.querySelectorAll('.headerNotify_item.is-unread');
    Franz.setBadge(unreadNotifications.length);
  }

  Franz.loop(getMessages);
}
