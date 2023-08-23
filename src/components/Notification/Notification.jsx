import { NotificationText } from './Notification.styled';

export function Notification({ message }) {
  return (
    <>
      <NotificationText>{message}</NotificationText>
    </>
  );
}
