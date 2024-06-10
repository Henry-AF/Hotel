import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set 'views' directory for any views being rendered
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Render landing page on root access
app.get('/', (req, res) => {
  res.render('landing/landing'); // Renderiza a view 'landing.ejs' na primeira visita
});

// Import routes
import adminRoutes from './controllers/admin.js';
app.use(adminRoutes);
import login from './controllers/login.js';
app.use(login);
import cadastro from './controllers/cadastro.js';
app.use(cadastro);
import dashboard from './controllers/dashboard.js';
app.use(dashboard);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
