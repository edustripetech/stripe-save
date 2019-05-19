export default {
  users: [
    {
      id: 1,
      firstName: "Olayinka",
      lastName: "Adetunji",
      address: "Ikeja, Lagos",
      email: "ade@olatunji.com",
      password: "password1",
      phoneNumber: "09088983928"
    },
    {
      id: 2,
      firstName: "Tolulope",
      lastName: "Odueke",
      address: "Ogba, Lagos",
      email: "tolu@odeueke.com",
      password: "password1",
      phoneNumber: "076003729347"
    },
    {
      id: 3,
      firstName: "Babajide ",
      lastName: "Esho",
      address: "Apapa, Lagos",
      email: "esho@jide.com",
      password: "password123",
      phoneNumber: "0832983928"
    }
  ],
  accounts: [
    {
      id: 1,
      owner: 1,
      accountNumber: "00456782732",
      balance: 877,
      savingsInterval: 2629800000, // one month
      splitPayments: true,
      accountToBeSplitWith: 3,
      splitPercentage: 50
    },
    {
      id: 2,
      owner: 3,
      accountNumber: "00454834783",
      balance: 53838877,
      savingsInterval: 604800000, // one week
      splitPayments: false,
      accountToBeSplitWith: null,
      splitPercentage: null
    },
    {
      id: 3,
      owner: 1,
      accountNumber: "0089434732",
      balance: 53838877,
      savingsInterval: 604800000, // one week
      splitPayments: true,
      accountToBeSplitWith: 1,
      splitPercentage: 50
    }
  ]
};
