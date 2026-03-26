"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Menu",          id: "menu"},
        {
          name: "Specials",          id: "specials"},
        {
          name: "About",          id: "about"},
        {
          name: "Hours",          id: "hours"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="What's Cook'n"
      button={{
        text: "Order Now",        href: "tel:+13307261622"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Serving Comfort Since 1995"
      description="Where every meal feels like home, made fresh with love."
      buttons={[
        {
          text: "Call Now",          href: "tel:+13307261622"},
        {
          text: "View Menu",          href: "#menu"},
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg"
      imageAlt="Cozy diner breakfast table with pancakes, coffee, and sunlight"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Story: A Youngstown Tradition"
      description="Established in 1995, What's Cook'n has been a beloved fixture in Mathews Square, Youngstown, for decades. We pride ourselves on serving homemade, comforting meals in a warm and friendly atmosphere. From our hearty breakfasts to our classic diner favorites, every dish is prepared with love and a commitment to quality. We're more than just a restaurant; we're a place where memories are made, and every guest feels like family."
      metrics={[
        {
          value: "1995",          title: "Established"},
        {
          value: "29+",          title: "Years Serving"},
      ]}
      tag="Our Heritage"
      imageSrc="http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg"
      imageAlt="Interior of a warm, welcoming diner with booths and natural light"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "big-breakfast",          brand: "Breakfast",          name: "The Big Breakfast",          price: "$12.99",          rating: 5,
          reviewCount: "250+",          imageSrc: "http://img.b2bpic.net/free-photo/english-breakfast-toast-egg-bacon-vegetables-rustic-style-wooden-table_2829-19799.jpg",          imageAlt: "A plate of Big Breakfast with eggs, bacon, toast, and pancakes"},
        {
          id: "rice-pudding",          brand: "Dessert",          name: "Creamy Rice Pudding",          price: "$4.50",          rating: 5,
          reviewCount: "120+",          imageSrc: "http://img.b2bpic.net/free-photo/traditional-turkish-sutlac-sutlach-cooked-served-with-cinnamon-sticks_114579-1838.jpg",          imageAlt: "Bowl of creamy rice pudding with cinnamon"},
        {
          id: "lemon-meringue-pie",          brand: "Dessert",          name: "Lemon Meringue Pie",          price: "$5.99/slice",          rating: 5,
          reviewCount: "180+",          imageSrc: "http://img.b2bpic.net/free-photo/cookie-topped-with-banana-slices_141793-646.jpg",          imageAlt: "Slice of lemon meringue pie with a tall, fluffy meringue"},
        {
          id: "cherry-pie",          brand: "Dessert",          name: "Classic Cherry Pie",          price: "$5.99/slice",          rating: 5,
          reviewCount: "150+",          imageSrc: "http://img.b2bpic.net/free-photo/cottagecore-food-inspiration-still-life_23-2150152985.jpg",          imageAlt: "Slice of homemade cherry pie with lattice crust"},
        {
          id: "chicken-noodle-soup",          brand: "Soup",          name: "Chicken Noodle Soup",          price: "$4.99/bowl",          rating: 5,
          reviewCount: "90+",          imageSrc: "http://img.b2bpic.net/free-photo/ramen-noodles_74190-1945.jpg",          imageAlt: "Warm bowl of chicken noodle soup with vegetables"},
        {
          id: "stuffed-pepper-soup",          brand: "Soup",          name: "Hearty Stuffed Pepper Soup",          price: "$5.50/bowl",          rating: 5,
          reviewCount: "75+",          imageSrc: "http://img.b2bpic.net/free-photo/ramen-noodles_74190-1945.jpg",          imageAlt: "Hearty bowl of stuffed pepper soup"},
      ]}
      title="Our Delicious Menu"
      description="Explore our full menu of classic diner fare, from hearty breakfasts to comforting lunch and dinner options. Made fresh daily with the finest ingredients."
    />
  </div>

  <div id="specials" data-section="specials">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Homemade Soups (Daily Rotating)",          "Classic Milkshakes",          "Diner Burgers",          "Fresh Coffee & Tea"],
      }}
      positiveCard={{
        items: [
          "Big Breakfast (All Day)",          "Creamy Rice Pudding",          "Zesty Lemon Meringue Pie",          "Comforting Chicken Noodle Soup",          "Rich Stuffed Pepper Soup"],
      }}
      title="Today's Specials & Diner Favorites"
      description="Our chalkboard features daily rotating specials alongside timeless classics that keep our regulars coming back for more. Don't miss out on these delicious selections!"
      tag="Chef's Picks"
    />
  </div>

  <div id="hours" data-section="hours">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "mon",          value: "Closed",          title: "Monday",          description: "The diner is closed on Monday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with closed sign for Monday."
        },
        {
          id: "tue",          value: "Closed",          title: "Tuesday",          description: "The diner is closed on Tuesday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with closed sign for Tuesday."
        },
        {
          id: "wed",          value: "8:00 AM – 2:00 PM",          title: "Wednesday",          description: "Open from 8:00 AM to 2:00 PM on Wednesday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with food for Wednesday hours."
        },
        {
          id: "thu",          value: "8:00 AM – 2:00 PM",          title: "Thursday",          description: "Open from 8:00 AM to 2:00 PM on Thursday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with food for Thursday hours."
        },
        {
          id: "fri",          value: "8:00 AM – 6:00 PM",          title: "Friday",          description: "Open from 8:00 AM to 6:00 PM on Friday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with food for Friday extended hours."
        },
        {
          id: "sat",          value: "8:00 AM – 2:00 PM",          title: "Saturday",          description: "Open from 8:00 AM to 2:00 PM on Saturday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with food for Saturday hours."
        },
        {
          id: "sun",          value: "8:00 AM – 2:00 PM",          title: "Sunday",          description: "Open from 8:00 AM to 2:00 PM on Sunday.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg",          imageAlt: "Diner table with food for Sunday hours."
        },
      ]}
      title="Our Opening Hours"
      description="We welcome you with warm smiles and delicious food. Check our weekly schedule below. Note: Friday hours may vary."
      tag="Plan Your Visit"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",          name: "Sarah P.",          handle: "@sarah_eats",          testimonial: "What's Cook'n is our go-to spot for breakfast! The Big Breakfast is incredible, and the staff always makes us feel right at home. It's truly a Youngstown gem!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-young-redhead-woman-with-charming-smile-healthy-clean-skin_273609-9036.jpg",          imageAlt: "Sarah P. customer photo"},
        {
          id: "2",          name: "Mark D.",          handle: "@mark_travels",          testimonial: "Stopped by on a road trip and was blown away. The Lemon Meringue Pie was the best I've ever had. Such a warm, welcoming diner with genuine comfort food.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-shaking-hands-restaurant_23-2148395405.jpg",          imageAlt: "Mark D. customer photo"},
        {
          id: "3",          name: "Jessica L.",          handle: "@jessica_local",          testimonial: "You haven't truly experienced Youngstown until you've had a meal at What's Cook'n. It's nostalgia on a plate, with flavors that remind you of grandma's cooking. Absolutely love it!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-adult-smiling-woman-wearing-white-clothing-looking-directly-camera-with-happy-expression-posing-green-meadow-sunset-sunrise_176532-14789.jpg",          imageAlt: "Jessica L. customer photo"},
        {
          id: "4",          name: "Robert K.",          handle: "@robert_foodie",          testimonial: "Every time I'm in town, I make sure to visit. The Chicken Noodle Soup is perfect, and the service is always top-notch. A true classic diner experience!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-girl-choosing-you_1262-17150.jpg",          imageAlt: "Robert K. customer photo"},
      ]}
      showRating={true}
      title="What Our Customers Say"
      description="Hear from our beloved patrons about their experiences at What's Cook'n. We're proud to be a local favorite!"
      tag="Loved by Locals"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "Where are you located?",          content: "We are proudly located at 6007 South Ave, Youngstown, OH 44512, within Mathews Square."},
        {
          id: "faq2",          title: "Do you offer takeout?",          content: "Yes, all our delicious menu items are available for takeout. Just give us a call during opening hours to place your order!"},
      ]}
      ctaTitle="Visit Us or Get in Touch"
      ctaDescription="We're conveniently located in Mathews Square. Stop by for a delicious meal, or give us a call to place an order or ask a question."
      ctaButton={{
        text: "Call What's Cook'n",        href: "tel:+13307261622"}}
      ctaIcon={Phone}
      accordionAnimationType="smooth"
      showCard={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/top-view-food-banquet_23-2149893493.jpg"
      imageAlt="Cozy diner interior at What's Cook'n"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Specials",              href: "#specials"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Hours",              href: "#hours"},
          ],
        },
        {
          title: "Contact Us",          items: [
            {
              label: "Call: +1 330-726-1622",              href: "tel:+13307261622"},
            {
              label: "Visit: 6007 South Ave",              href: "#contact"},
          ],
        },
      ]}
      logoText="What's Cook'n"
      copyrightText="© 2024 What's Cook'n. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
