// NotificationPopupStyles.js
import styled, { css } from 'styled-components';

export const NotificationButton = styled.button`
  position: relative;
  background: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: #e53e3e;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const DialogContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 28rem;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Card = styled.div`
  width: 100%;
`;

export const CardHeader = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const AlertContainer = styled.div`
  background-color: ${({ variant }) => (variant === 'destructive' ? '#FEE2E2' : '#E0F2FE')};
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const AlertTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const NotificationItem = styled.div`
  background-color: ${({ type }) => {
    switch (type) {
      case 'info': return '#E0F2FE';
      case 'success': return '#DCFCE7';
      case 'error': return '#FEE2E2';
      case 'warning': return '#FEF3C7';
      default: return '#F3F4F6';
    }
  }};
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const NotificationTitle = styled.h4`
  font-weight: bold;
`;

export const NotificationMessage = styled.p`
  color: #4B5563;
  font-size: 0.875rem;
`;

export const NotificationTime = styled.p`
  color: #6B7280;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;
