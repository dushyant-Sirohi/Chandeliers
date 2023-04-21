$(document).ready(function () {
  // create the slideshow object
  var slideshow = createSlideshow();

  var slides = [
    {
      href: "../images/pr1.jpg",
      title:
        "This is a magnificent piece of art. It hangs in the center of a grand ballroom, illuminating the space with its sparkling crystals and golden metalwork. Each crystal catches the light in a unique way, casting rainbows across the room. The chandelier's design is intricate and delicate, with small flowers and leaves adorning the metal arms. It's a stunning sight to behold, and adds an air of elegance and sophistication to any event held in the ballroom.",
    },
    {
      href: "../images/pr2.jpg",
      title:
        "This chandelier is a bold and modern piece. It hangs in a sleek and contemporary living room, adding a touch of glamour to the space. The chandelier is made of polished chrome, and its arms are arranged in a geometric pattern. The lights themselves are minimalist, small white orbs that cast a warm and inviting glow. The overall effect is striking, and the chandelier is a perfect complement to the room's clean lines and simple decor.",
    },
    {
      href: "../images/pr3.jpg",
      title:
        "This chandelier is a rustic and charming piece. It hangs in a cozy farmhouse kitchen, casting a warm and inviting light over the table. The chandelier is made of wrought iron, and its arms are adorned with small glass lanterns. The glass is frosted, giving the light a soft and gentle quality. The chandelier's design is simple and unassuming, but it adds a touch of warmth and comfort to the space.",
    },
    {
      href: "../images/pr5.jpg",
      title:
        "This is a unique and eclectic piece. It hangs in a bohemian-inspired living room, adding a touch of whimsy and personality to the space. The chandelier is made of a variety of materials, including colorful glass beads, metal wire, and feathers. The lights themselves are small bulbs nestled within the intricate design. The overall effect is playful and artistic, and the chandelier is a perfect complement to the room's eclectic decor.",
    },
  ];

  slideshow.loadImages(slides).startSlideShow($("#image"), $("#caption"));
});
