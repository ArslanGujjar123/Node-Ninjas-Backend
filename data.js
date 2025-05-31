export const messages = [
    {
        "itemID": "664a7c881d92b2f67f3c1234",
        "sender": "Alice123",
        "receiver": "Bob456",
        "content": "Hey, I found your lost item. Can we meet?",
        "timestamp": "2025-05-30T12:30:45.678Z",
        "read": false
    },
    {
        "itemID": "664a7c881d92b2f67f3c1235",
        "sender": "Bob456",
        "receiver": "Alice123",
        "content": "Thanks! Where can I pick it up?",
        "timestamp": "2025-05-30T12:35:20.123Z",
        "read": true
    },
    {
        "itemID": "664a7c881d92b2f67f3c1236",
        "sender": "Charlie789",
        "receiver": "Dave567",
        "content": "Hey, did you lose a wallet near the cafeteria?",
        "timestamp": "2025-05-29T14:20:30.345Z",
        "read": false
    },
    {
        "itemID": "664a7c881d92b2f67f3c1237",
        "sender": "Dave567",
        "receiver": "Charlie789",
        "content": "Yes, that's mine! Thanks for reaching out!",
        "timestamp": "2025-05-29T14:25:10.678Z",
        "read": true
    }
]


export const items = [
    {
        name: "Black Backpack",
        category: "Bags",
        dateLost: new Date("2025-04-28"),
        description: "A black backpack with a laptop inside.",
        location: "Library",
        user_id: "68399d3f5befd03c76a375c0", // Alice Johnson
        imageUrl: "https://example.com/backpack.jpg",
        type: "Lost",
        createdAt: new Date()
    },
    {
        name: "Car Keys",
        category: "Keys",
        dateLost: new Date("2025-05-01"),
        description: "A set of car keys with a Honda logo.",
        location: "Parking Lot A",
        user_id: "68399d3f5befd03c76a375c1", // Bob Smith
        imageUrl: "https://example.com/keys.jpg",
        type: "Lost",
        createdAt: new Date()
    },
    {
        name: "Smartphone",
        category: "Electronics",
        dateLost: new Date("2025-04-30"),
        description: "A black iPhone with a cracked screen.",
        location: "Cafeteria",
        user_id: "68399d3f5befd03c76a375c2", // Charlie Davis
        imageUrl: "https://example.com/iphone.jpg",
        type: "Lost",
        createdAt: new Date()
    },
    {
        name: "Wallet",
        category: "Accessories",
        dateLost: new Date("2025-04-29"),
        description: "A brown leather wallet with credit cards inside.",
        location: "Gym",
        user_id: "68399d3f5befd03c76a375c3", // Dave Wilson
        imageUrl: "https://example.com/wallet.jpg",
        type: "Lost",
        createdAt: new Date()
    },
    {
        name: "Gold Bracelet",
        category: "Jewelry",
        dateLost: new Date("2025-05-02"),
        description: "A thin gold bracelet with a small heart charm.",
        location: "Restroom near Library",
        user_id: "68399d3f5befd03c76a375c0", // Alice Johnson
        imageUrl: "https://example.com/bracelet.jpg",
        type: "Lost",
        createdAt: new Date()
    },
    {
        name: "Water Bottle",
        category: "Essentials",
        dateLost: new Date("2025-05-04"),
        description: "A blue Hydro Flask water bottle with stickers.",
        location: "Sports Ground",
        user_id: "68399d3f5befd03c76a375c1", // Bob Smith
        imageUrl: "https://example.com/waterbottle.jpg",
        type: "Found",
        createdAt: new Date()
    },
    {
        name: "Notebook",
        category: "Stationery",
        dateLost: new Date("2025-05-03"),
        description: "A spiral notebook with handwritten notes.",
        location: "Classroom B102",
        user_id: "68399d3f5befd03c76a375c2", // Charlie Davis
        imageUrl: "https://example.com/notebook.jpg",
        type: "Found",
        createdAt: new Date()
    },
    {
        name: "Earphones",
        category: "Electronics",
        dateLost: new Date("2025-05-05"),
        description: "White AirPods with the case missing.",
        location: "Auditorium",
        user_id: "68399d3f5befd03c76a375c3", // Dave Wilson
        imageUrl: "https://example.com/earphones.jpg",
        type: "Found",
        createdAt: new Date()
    },
    {
        name: "Watch",
        category: "Accessories",
        dateLost: new Date("2025-05-06"),
        description: "A silver wristwatch with black leather straps.",
        location: "Computer Lab",
        user_id: "68399d3f5befd03c76a375c0", // Alice Johnson
        imageUrl: "https://example.com/watch.jpg",
        type: "Found",
        createdAt: new Date()
    },
    {
        name: "USB Drive",
        category: "Electronics",
        dateLost: new Date("2025-05-07"),
        description: "A 32GB USB drive with academic files.",
        location: "Library Study Room",
        user_id: "68399d3f5befd03c76a375c1", // Bob Smith
        imageUrl: "https://example.com/usbdrive.jpg",
        type: "Found",
        createdAt: new Date()
    }
]

export const users = [
    {
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "password": "hashed_password_here",
        "role": "Student",
        "createdAt": "2025-05-01T08:00:00.000Z"
    },
    {
        "name": "Bob Smith",
        "email": "bob@example.com",
        "password": "hashed_password_here",
        "role": "Admin",
        "createdAt": "2025-05-02T09:30:00.000Z"
    },
    {
        "name": "Charlie Davis",
        "email": "charlie@example.com",
        "password": "hashed_password_here",
        "role": "Student",
        "createdAt": "2025-05-03T10:45:00.000Z"
    },
    {
        "name": "Dave Wilson",
        "email": "dave@example.com",
        "password": "hashed_password_here",
        "role": "Student",
        "createdAt": "2025-05-04T11:15:00.000Z"
    }
]
export const claims = [
    {
        found_item_id: "68399d435befd03c76a375c7", // Black Wallet
        claimant_user_id: "68399d3f5befd03c76a375c2", // Charlie Davis
        justification: "I lost my wallet at the library on the same day. It has my student ID inside.",
        status: "Pending",
        createdAt: new Date()
    },
    {
        found_item_id: "68399d435befd03c76a375c8", // Red Backpack
        claimant_user_id: "68399d3f5befd03c76a375c3", // Dave Wilson
        justification: "This backpack looks exactly like mine, which I misplaced in the cafeteria.",
        status: "Dispute",
        createdAt: new Date()
    },
    {
        found_item_id: "68399d435befd03c76a375c9", // Gold Necklace
        claimant_user_id: "68399d3f5befd03c76a375c0", // Alice Johnson
        justification: "I lost a similar gold necklace at the gym. The pendant shape matches mine.",
        status: "Pending",
        createdAt: new Date()
    },
    {
        found_item_id: "68399d435befd03c76a375ca", // Phone Charger
        claimant_user_id: "68399d3f5befd03c76a375c1", // Bob Smith
        justification: "This charger looks like the one I left in the lecture hall. It's a rare model.",
        status: "Approved",
        createdAt: new Date()
    },
    {
        found_item_id: "683aae8826b7d9e97e7c40f8", // Black Backpack
        claimant_user_id: "68399d3f5befd03c76a375c3", // Dave Wilson
        justification: "I lost my black backpack at the library last month. It has my initials on it.",
        status: "Denied",
        createdAt: new Date()
    },
    {
        found_item_id: "683aae8826b7d9e97e7c40f9", // Car Keys
        claimant_user_id: "68399d3f5befd03c76a375c0", // Alice Johnson
        justification: "I misplaced my Honda car keys in the parking lot. These match my set.",
        status: "Pending",
        createdAt: new Date()
    },
    {
        found_item_id: "683aae8826b7d9e97e7c40fa", // Smartphone
        claimant_user_id: "68399d3f5befd03c76a375c2", // Charlie Davis
        justification: "I dropped my iPhone in the cafeteria. This matches the description.",
        status: "Approved",
        createdAt: new Date()
    },
    {
        found_item_id: "683aae8826b7d9e97e7c40fb", // Wallet
        claimant_user_id: "68399d3f5befd03c76a375c1", // Bob Smith
        justification: "I lost a brown wallet at the gym with my driving license inside.",
        status: "Dispute",
        createdAt: new Date()
    },
    {
        found_item_id: "683aae8826b7d9e97e7c40fc", // Gold Bracelet
        claimant_user_id: "68399d3f5befd03c76a375c3", // Dave Wilson
        justification: "This bracelet looks identical to the one I lost in the restroom near the library.",
        status: "Pending",
        createdAt: new Date()
    },
    {
        found_item_id: "683aae8826b7d9e97e7c40fd", // Water Bottle
        claimant_user_id: "68399d3f5befd03c76a375c0", // Alice Johnson
        justification: "I lost my Hydro Flask at the sports ground. It has stickers from my trips.",
        status: "Approved",
        createdAt: new Date()
    }
];


