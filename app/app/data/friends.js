
var friends = [
  {
    name: "Elon",
    photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg?w968",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Bill",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtcfQJh1oGFoTDuUZBTmqlsQCi_kafocoSyB7Icmc1A7ToUUI",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    name: "Steve",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZ6TWcXHovYRA3BcT4HadUO9qV2dUbO5BTQZtUyeRu5_4YRwcNw",
    scores: [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    name: "Evan",
    photo: "data:image/jpeg;base64,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",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name: "Sundar",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEipEVA1SEWdV77JoF_vC4N0l7KtXx_n6hOqgCRXKdgRNxJHQ",
    scores: [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    name: "Resig",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfA4ozUzxV3F8AtLO9GGbDJVQ8FD2ZcHBS96G3EQbGotJuzn3S",
    scores: [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
