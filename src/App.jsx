import React, { useEffect, useMemo, useState } from "react";

const dishes = [
  {
    id: "bhel-puri",
    name: "Bombay bhel puri",
    tag: "A little sweet, a little heat",
    price: 9,
    category: "chaat",
    image: "photo-1601050690597-df0568f70950",
    alt: "Golden crispy samosas served with chutney",
    description: "Puffed rice, crunchy sev, tangy chutneys, and a squeeze of lime.",
  },
  {
    id: "pav-bhaji",
    name: "Butter pav bhaji",
    tag: "Our all-time favourite",
    price: 16,
    category: "classics",
    image: "photo-1603894584373-5ac82b2ae398",
    alt: "A rich Indian curry topped with herbs",
    description: "Slow-cooked spiced veggies, toasted buttery buns, and plenty of onion.",
  },
  {
    id: "pani-puri",
    name: "Pani puri party",
    tag: "The hands-on one",
    price: 12,
    category: "chaat",
    image: "photo-1626777552726-4a6b54c97e46",
    alt: "Crispy Indian street-food snacks garnished with herbs",
    description: "Six crisp puris, potato, chickpeas, and our punchy mint pani.",
  },
  {
    id: "mango-lassi",
    name: "Mango lassi",
    tag: "Cool as a cucumber",
    price: 7,
    category: "sips",
    image: "photo-1570197788417-0e82375c9371",
    alt: "A refreshing mango drink in a glass",
    description: "Ripe mango, creamy yogurt, a whisper of cardamom. Lovely and cold.",
  },
  {
    id: "samosa-chaat",
    name: "Samosa chaat",
    tag: "Crispy, saucy, dreamy",
    price: 11,
    category: "chaat",
    image: "photo-1601050690597-df0568f70950",
    alt: "Golden samosas served with chutney",
    description: "Crushed samosas, chickpea curry, cool yogurt, and tamarind chutney.",
  },
  {
    id: "dahi-puri",
    name: "Dahi puri",
    tag: "Cool meets crunchy",
    price: 10,
    category: "chaat",
    image: "photo-1626777552726-4a6b54c97e46",
    alt: "Indian street-food chaat finished with fresh herbs",
    description: "Little puris filled with potato, chilled yogurt, chutneys, and sev.",
  },
  {
    id: "vada-pav",
    name: "Vada pav",
    tag: "Mumbai in every bite",
    price: 10,
    category: "classics",
    image: "photo-1606755962773-d324e0a13086",
    alt: "A toasted Indian-style sandwich with a crisp golden outside",
    description: "Spiced potato fritter, soft pav, dry garlic chutney, and green chilli.",
  },
  {
    id: "masala-dosa",
    name: "Masala dosa",
    tag: "Golden, crisp, and savoury",
    price: 15,
    category: "classics",
    image: "photo-1589302168068-964664d93dc0",
    alt: "A hearty Indian meal served with fresh herbs",
    description: "Paper-thin dosa with spiced potato, coconut chutney, and warm sambar.",
  },
  {
    id: "kathi-roll",
    name: "Paneer kathi roll",
    tag: "Wrapped up and ready",
    price: 14,
    category: "classics",
    image: "photo-1603894584373-5ac82b2ae398",
    alt: "A richly spiced Indian dish garnished with herbs",
    description: "Smoky paneer, crunchy onions, and mint chutney tucked into a flaky paratha.",
  },
  {
    id: "jalebi-rabri",
    name: "Jalebi & rabri",
    tag: "A sweet little spiral",
    price: 9,
    category: "sips",
    image: "photo-1488477181946-6428a0291777",
    alt: "A creamy dessert served fresh",
    description: "Warm, syrupy jalebi with a spoonful of chilled, silky rabri.",
  },
  {
    id: "cutting-chai",
    name: "Cutting chai",
    tag: "Small cup, big comfort",
    price: 4,
    category: "sips",
    image: "photo-1576092768241-dec231879fc3",
    alt: "A freshly brewed cup of tea",
    description: "Strong, milky tea simmered with ginger and warming spices.",
  },
];

const filters = [
  { id: "all", label: "All the good stuff" },
  { id: "chaat", label: "Chaat & crunch" },
  { id: "classics", label: "Street classics" },
  { id: "sips", label: "Sips & sweets" },
];

function Brand({ footer = false }) {
  return (
    <a className={`wordmark${footer ? " wordmark-footer" : ""}`} href="#home" aria-label="Masala Mile home">
      <span className="wordmark-icon" aria-hidden="true">✳</span>
      <span>masala<span className="wordmark-light">mile</span></span>
    </a>
  );
}

function Header({ cartCount, onOpenOrder }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="announcement">
        <p>Good food, good mood. <span>Now serving every day.</span></p>
        <a href="#visit">Find your way to us <span aria-hidden="true">↗</span></a>
      </div>
      <header className="site-header">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span><span></span><span></span>
        </button>
        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
          <a href="#menu" onClick={closeMenu}>Our menu</a>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#visit" onClick={closeMenu}>Come by</a>
          <a className="nav-cta" href="#visit" onClick={closeMenu}>Book a table <span aria-hidden="true">↗</span></a>
          <button className="nav-order" type="button" onClick={() => { closeMenu(); onOpenOrder(); }}>
            Your order <span className="cart-count">{cartCount}</span>
          </button>
        </nav>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot"></span> A little taste of the streets</p>
        <h1>Big flavours.<br />No <em>shortcuts.</em></h1>
        <p className="hero-description">
          From the first crackle of a pani puri to that last bite of pav bhaji —
          this is the street food we grew up loving, made fresh for you.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#menu">Explore the menu <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="#story">A little about us <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-note">
          <span className="note-stars" aria-label="Five stars">★★★★★</span>
          <span>Made with love, served with a little extra chutney.</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1400&q=85"
          alt="A colourful spread of Indian curry, rice, and fresh herbs"
        />
        <div className="hero-sticker"><span>Fresh off</span><span>the tawa</span><span className="sticker-star" aria-hidden="true">✳</span></div>
        <p className="image-caption"><span>01</span> A feast worth slowing down for</p>
      </div>
      <div className="hero-side-note" aria-hidden="true">SPICE IS ALWAYS NICE · EST. 2024</div>
    </section>
  );
}

function Ticker() {
  const messages = ["Fresh from the tawa", "Made with a little more love", "Big street-food energy"];
  return (
    <section className="ticker" aria-label="Our promise">
      <div className="ticker-track">
        {[...messages, ...messages, ...messages, ...messages].map((message, index) => (
          <span className="ticker-item" key={`${message}-${index}`}>
            {message}<i aria-hidden="true">✳</i>
          </span>
        ))}
      </div>
    </section>
  );
}

function DishCard({ dish, index, onAdd }) {
  const imageUrl = `https://images.unsplash.com/${dish.image}?auto=format&fit=crop&w=900&q=80`;
  return (
    <article className="dish-card" style={{ "--card-index": index }}>
      <div className="dish-image">
        <img src={imageUrl} alt={dish.alt} loading="lazy" />
        <span className="dish-number">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="dish-info">
        <div><h3>{dish.name}</h3><span className="dish-tag">{dish.tag}</span></div>
        <span className="dish-price">${dish.price}</span>
      </div>
      <p>{dish.description}</p>
      <button className="add-button" type="button" onClick={() => onAdd(dish)}>
        Add to your order <span aria-hidden="true">+</span>
      </button>
    </article>
  );
}

function Menu({ onAdd }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleDishes = useMemo(
    () => dishes.filter((dish) => activeFilter === "all" || dish.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="menu-section section-wrap" id="menu">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot"></span> The good stuff</p>
          <h2>Street food,<br /><em>made our way.</em></h2>
        </div>
        <p className="section-intro">
          Familiar favourites, bold little twists, and all the chutney you can handle.
          Everything is made fresh, right here.
        </p>
      </div>
      <div className="menu-toolbar reveal">
        <div className="menu-filters" role="group" aria-label="Filter menu items">
          {filters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter.id ? " active" : ""}`}
              type="button"
              data-filter={filter.id}
              aria-pressed={activeFilter === filter.id}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="menu-note">A few of our favourites <span aria-hidden="true">↘</span></span>
      </div>
      <div className="menu-grid" aria-live="polite">
        {visibleDishes.map((dish, index) => (
          <DishCard dish={dish} index={index} key={dish.id} onAdd={onAdd} />
        ))}
      </div>
      <p className="menu-disclaimer">Our menu changes with the seasons. Ask us about today's specials and dietary options.</p>
    </section>
  );
}

function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-image">
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85" alt="Friends sharing a meal around a table" loading="lazy" />
        <span className="story-image-note">There's always room<br />for one more.</span>
      </div>
      <div className="story-copy reveal">
        <p className="eyebrow eyebrow-light"><span className="eyebrow-dot"></span> From our kitchen to yours</p>
        <h2>More than a meal.<br /><em>A feeling.</em></h2>
        <p>
          The best food memories aren't made sitting still. They're the extra
          pani puri your friend dared you to eat, the pav passed around the
          table, the chai that turned into one more story.
        </p>
        <p>
          We bring that joyful, come-as-you-are spirit to every plate. Good
          ingredients, recipes with roots, and a seat for everyone.
        </p>
        <a className="button button-light" href="#visit">Come on in <span aria-hidden="true">↗</span></a>
        <span className="story-doodle" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}

function Visit() {
  const [confirmation, setConfirmation] = useState("");
  const [minimumDate, setMinimumDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setMinimumDate(new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10));
  }, []);

  function submitReservation(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setConfirmation(`Thanks, ${formData.get("name")}! Give us a call to confirm your table.`);
    event.currentTarget.reset();
  }

  return (
    <section className="visit-section section-wrap" id="visit">
      <div className="visit-copy reveal">
        <p className="eyebrow"><span className="eyebrow-dot"></span> Your seat is waiting</p>
        <h2>Come hungry.<br /><em>Leave happy.</em></h2>
        <p>Drop in for a quick chaat, stay for another round. There's always something fresh on the tawa.</p>
        <div className="visit-details">
          <div><span className="detail-label">Find us</span><p>42 Market Street<br />Your neighbourhood, ON</p></div>
          <div><span className="detail-label">Come by</span><p>Mon – Sun<br />11:30 am – 10:00 pm</p></div>
        </div>
        <a className="text-link" href="https://maps.google.com/?q=42+Market+Street" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
      </div>
      <form className="reservation-form reveal" onSubmit={submitReservation}>
        <p className="form-eyebrow">A table for your people</p>
        <h3>Save your spot.</h3>
        <label htmlFor="guest-name">Your name</label>
        <input id="guest-name" name="name" type="text" placeholder="What should we call you?" required />
        <div className="form-row">
          <div>
            <label htmlFor="guest-count">Your party</label>
            <select id="guest-count" name="guests" required defaultValue="">
              <option value="" disabled>How many?</option>
              <option>1 person</option><option>2 people</option><option>3 people</option>
              <option>4 people</option><option>5 people</option><option>6+ people</option>
            </select>
          </div>
          <div>
            <label htmlFor="visit-date">When</label>
            <input id="visit-date" name="date" type="date" min={minimumDate} required />
          </div>
        </div>
        <button className="button button-dark form-submit" type="submit">Request a table <span aria-hidden="true">↗</span></button>
        <p className="form-message" aria-live="polite">{confirmation}</p>
        <p className="form-footnote">For bigger get-togethers, give us a call and we'll make it special.</p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand footer />
        <p>Good food has a way<br />of bringing us together.</p>
        <a className="footer-social" href="https://instagram.com" target="_blank" rel="noreferrer">Follow along on Instagram <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Masala Mile. Made with a little extra love.</span>
        <a href="#home">Back to the top ↑</a>
      </div>
    </footer>
  );
}

function OrderDialog({ cart, onClose, onQuantityChange, onClear, onCheckout }) {
  const entries = dishes.filter((dish) => cart[dish.id]);
  const total = entries.reduce((sum, dish) => sum + dish.price * cart[dish.id], 0);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("dialog-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("dialog-open");
    };
  }, [onClose]);

  return (
    <div className="order-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="order-dialog" role="dialog" aria-modal="true" aria-labelledby="order-title">
        <button className="dialog-close" type="button" aria-label="Close order" onClick={onClose}>×</button>
        <p className="form-eyebrow">Good choices</p>
        <h2 id="order-title">Your order<span className="order-count">{entries.reduce((sum, dish) => sum + cart[dish.id], 0)}</span></h2>
        {entries.length === 0 ? (
          <p className="empty-order">Your order is looking a little empty. Find a new favourite on the menu.</p>
        ) : (
          <>
            <div className="order-items">
              {entries.map((dish) => (
                <div className="order-item" key={dish.id}>
                  <div><h3>{dish.name}</h3><span>${dish.price} each</span></div>
                  <div className="quantity-control">
                    <button type="button" aria-label={`Remove one ${dish.name}`} onClick={() => onQuantityChange(dish.id, -1)}>−</button>
                    <span>{cart[dish.id]}</span>
                    <button type="button" aria-label={`Add one ${dish.name}`} onClick={() => onQuantityChange(dish.id, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total"><span>Estimated total</span><strong>${total}</strong></div>
            <button className="button button-dark form-submit" type="button" onClick={onCheckout}>Place order request <span aria-hidden="true">↗</span></button>
            <button className="clear-order" type="button" onClick={onClear}>Clear order</button>
          </>
        )}
      </section>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState({});
  const [orderOpen, setOrderOpen] = useState(false);
  const [toast, setToast] = useState("");
  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function addToOrder(dish) {
    setCart((currentCart) => ({
      ...currentCart,
      [dish.id]: (currentCart[dish.id] || 0) + 1,
    }));
    setToast(`${dish.name} added to your order`);
  }

  function changeQuantity(dishId, change) {
    setCart((currentCart) => {
      const nextQuantity = (currentCart[dishId] || 0) + change;
      if (nextQuantity <= 0) {
        const { [dishId]: removed, ...remaining } = currentCart;
        return remaining;
      }
      return { ...currentCart, [dishId]: nextQuantity };
    });
  }

  function checkout() {
    setCart({});
    setOrderOpen(false);
    setToast("Order saved! Call us to arrange pickup.");
  }

  return (
    <>
      <Header cartCount={cartCount} onOpenOrder={() => setOrderOpen(true)} />
      <main>
        <Hero />
        <Ticker />
        <Menu onAdd={addToOrder} />
        <Story />
        <Visit />
      </main>
      <Footer />
      {cartCount > 0 && (
        <button className="floating-order" type="button" onClick={() => setOrderOpen(true)}>
          <span aria-hidden="true">✳</span> Your order <span className="floating-count">{cartCount}</span>
        </button>
      )}
      {toast && <div className="toast-message" role="status">{toast}</div>}
      {orderOpen && (
        <OrderDialog
          cart={cart}
          onClose={() => setOrderOpen(false)}
          onQuantityChange={changeQuantity}
          onClear={() => setCart({})}
          onCheckout={checkout}
        />
      )}
    </>
  );
}
