// NotificationPopup.js
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import {
  NotificationButton,
  NotificationBadge,
  DialogOverlay,
  DialogContent,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  AlertContainer,
  AlertTitle,
  NotificationItem,
  NotificationTitle,
  NotificationMessage,
  NotificationTime
} from './NotificationPopupStyles';

export default function NotificationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const notificationCount = 5; // This could be dynamic based on actual notifications

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <NotificationButton onClick={toggleDialog}>
        <Bell size={20} />
        <NotificationBadge>{notificationCount}</NotificationBadge>
      </NotificationButton>

      {isOpen && (
        <DialogOverlay onClick={toggleDialog}>
          <DialogContent onClick={(e) => e.stopPropagation()}>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <AlertContainer variant="default">
                  <AlertTitle>System Maintenance</AlertTitle>
                  <p>Scheduled maintenance will occur on Sunday at 2 AM UTC. Expect brief service interruptions.</p>
                </AlertContainer>
                <NotificationItem type="info">
                  <NotificationTitle>New Feature</NotificationTitle>
                  <NotificationMessage>Check out our new dashboard layout!</NotificationMessage>
                  <NotificationTime>2 hours ago</NotificationTime>
                </NotificationItem>
                <NotificationItem type="success">
                  <NotificationTitle>Task Completed</NotificationTitle>
                  <NotificationMessage>Your report has been successfully generated.</NotificationMessage>
                  <NotificationTime>4 hours ago</NotificationTime>
                </NotificationItem>
                <NotificationItem type="error">
                  <NotificationTitle>Upload Failed</NotificationTitle>
                  <NotificationMessage>There was an error uploading your file. Please try again.</NotificationMessage>
                  <NotificationTime>1 day ago</NotificationTime>
                </NotificationItem>
                <NotificationItem type="warning">
                  <NotificationTitle>Storage Limit</NotificationTitle>
                  <NotificationMessage>You're approaching your storage limit. Consider upgrading your plan.</NotificationMessage>
                  <NotificationTime>2 days ago</NotificationTime>
                </NotificationItem>
              </CardContent>
            </Card>
          </DialogContent>
        </DialogOverlay>
      )}
    </>
  );
}
