import {SellLine, Order} from '../models/Buying';

const SellLines = [
  new SellLine(
    '1',
    'Air Jordan 1 High OG Patent Bred',
    2,
    19.99,
    'https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-high-og-patent-bred-555088-063-1.png?v=1639669875',
  ),
  new SellLine(
    '2',
    'Air Jordan 1 Low GS Legend Blue',
    1,
    29.99,
    'https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-1-low-gs-legend-blue.png',
  ),
  new SellLine(
    '3',
    'Jordan 4 Retro University Blue',
    5,
    9.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
  ),
  new SellLine(
    '4',
    'Jordan 1 High OG Varsity Red (2022)',
    3,
    39.99,
    'https://www.sneakerhype.eu/cdn/shop/products/file_2d5615e9-91ed-4802-8764-cecb01d0edc4.png?v=1710155044',
  ),
  new SellLine(
    '5',
    'Air Jordan 1 Low Black University Blue White',
    4,
    15.99,
    'https://sneakernerds.com/cdn/shop/products/1.png?v=1676565286',
  ),
];

const Orders = [
  new Order('order001', 'Pending', '2024-08-15T10:30:00Z', [
    SellLines[0],
    SellLines[1],
  ]),
  new Order('order002', 'Pending', '2024-08-16T14:45:00Z', [
    SellLines[2],
    SellLines[3],
  ]),
  new Order('order003', 'Completed', '2024-08-17T09:00:00Z', [
    SellLines[4],
    SellLines[1],
  ]),
];

export default Orders;
