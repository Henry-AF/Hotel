import express from 'express';
const router = express.Router();

router.get('/dashboard', (req, res) => {
  const data = [
    { name: 'Pablo Antônio', email: 'pablo@example.com', reserved_rooms: 2, date: '15/06/2024 - 18/06/2024' },
    { name: 'Carlos Santos', email: 'carlos.santos@example.com', reserved_rooms: 1, date: '20/07/2024 - 25/07/2024' },
    { name: 'João Silva', email: 'joao.silva@example.com', reserved_rooms: 2, date: '10/08/2024 - 15/08/2024' },
    { name: 'Maria Oliveira', email: 'maria.oliveira@example.com', reserved_rooms: 1, date: '05/09/2024 - 07/09/2024' },
    { name: 'Lucas Fernandes', email: 'lucas.fernandes@example.com', reserved_rooms: 1, date: '15/06/2024 - 18/06/2024' },
    { name: 'Ana Pereira', email: 'ana.pereira@example.com', reserved_rooms: 2, date: '22/10/2024 - 25/10/2024' },
    { name: 'Carlos Souza', email: 'carlos.souza@example.com', reserved_rooms: 3, date: '15/11/2024 - 18/11/2024' },
    { name: 'Ana Silva', email: 'ana.silva@example.com', reserved_rooms: 1, date: '03/12/2024 - 06/12/2024' },
    { name: 'Pedro Souza', email: 'pedro.souza@example.com', reserved_rooms: 1, date: '15/06/2024 - 18/06/2024' },
    { name: 'Leonardo', email: 'leo@example.com', reserved_rooms: 2, date: '15/06/2024 - 18/06/2024' },
    { name: 'Juliana Roberta', email: 'juliana@example.com', reserved_rooms: 4, date: '15/06/2024 - 18/06/2024' }
  ];

  const stats = {
    occupied_rooms: 49,
    gross_income: '918,87',
    occupancy_rate: 89,
    cancellation_fee: 7.73
  };

  res.render('dashboard/admin-dashboard', { data, stats });
});

export default router;
