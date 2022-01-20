export interface RegistrationChatter {
    screenName?: string;
    selectedChatRoom?: string;
}

export const initialRegistration: RegistrationChatter = { screenName: '' };

export const availableChatRooms: string[] = ['Stuff', 'Fun with Taxes', 'Mystic1-4U'];
