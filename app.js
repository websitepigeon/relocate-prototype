const customers = [
  {
    id: "CUS-001",
    firstName: "Jack",
    lastName: "alfredo",
    email: "Jackal@shadcnstudio.com",
    status: "Active",
    mobile: "+44 984874498",
    phone: "+44 203 111 9821",
    address: "14 Baker St",
    city: "London",
    postcode: "NW1 6XE",
    company: "Shadcn Studio",
    dob: "",
  },
  {
    id: "CUS-002",
    firstName: "Maria",
    lastName: "Gonzalez",
    email: "maria.g@shadcnstudio.com",
    status: "Inactive",
    mobile: "-",
    phone: "+44 161 555 0191",
    address: "32 Victoria Rd",
    city: "Manchester",
    postcode: "M14 6HJ",
    company: "North Field",
    dob: "",
  },
  {
    id: "CUS-003",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@shadcnstudio.com",
    status: "Active",
    mobile: "+44 7700 900123",
    phone: "+44 121 555 0184",
    address: "8 Oxford Lane",
    city: "Birmingham",
    postcode: "B5 5NR",
    company: "Oxford Lane Ltd",
    dob: "1990-03-02",
  },
  {
    id: "CUS-004",
    firstName: "Emily",
    lastName: "Carter",
    email: "emily.carter@shadcnstudio.com",
    status: "Active",
    mobile: "+44 7700 900456",
    phone: "+44 113 555 0148",
    address: "56 Regent St",
    city: "Leeds",
    postcode: "LS2 7QA",
    company: "Carter Home",
    dob: "",
  },
  {
    id: "CUS-005",
    firstName: "David",
    lastName: "Lee",
    email: "david.lee@shadcnstudio.com",
    status: "Active",
    mobile: "+44 7700 900789",
    phone: "+44 117 555 0120",
    address: "3 Kings Ave",
    city: "Bristol",
    postcode: "BS1 4ST",
    company: "Lee & Co",
    dob: "",
  },
  {
    id: "CUS-006",
    firstName: "Sophia",
    lastName: "Patel",
    email: "sophia.patel@shadcnstudio.com",
    status: "Active",
    mobile: "+44 7700 900234",
    phone: "+44 131 555 0119",
    address: "21 Park Rd",
    city: "Edinburgh",
    postcode: "EH1 2NG",
    company: "Patel Design",
    dob: "",
  },
  {
    id: "CUS-007",
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@shadowstudio.com",
    status: "Active",
    mobile: "+44 771234567",
    phone: "+44 161 555 0104",
    address: "45 High St",
    city: "Manchester",
    postcode: "M1 8HQ",
    company: "Shadow Studio",
    dob: "",
  },
  {
    id: "CUS-008",
    firstName: "Sarah",
    lastName: "Chen",
    email: "sarah.chen@shadowstudio.com",
    status: "Active",
    mobile: "+44 781234578",
    phone: "+44 121 555 0142",
    address: "12 Queen St",
    city: "Birmingham",
    postcode: "B1 1AA",
    company: "Chen Advisory",
    dob: "",
  },
  {
    id: "CUS-009",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@shadowstudio.com",
    status: "Active",
    mobile: "+44 792345689",
    phone: "+44 151 555 0162",
    address: "78 King Rd",
    city: "Liverpool",
    postcode: "L1 7AZ",
    company: "Brown Logistics",
    dob: "",
  },
  {
    id: "CUS-010",
    firstName: "Emma",
    lastName: "Thompson",
    email: "emma.thompson@shadowstudio.com",
    status: "Active",
    mobile: "+44 734567891",
    phone: "+44 1904 555 0137",
    address: "5 Castle St",
    city: "York",
    postcode: "YO1 9SA",
    company: "Castle Supply",
    dob: "",
  },
];

const customerAccountExtras = {
  "CUS-001": {
    suffix: "-",
    country: "United Kingdom",
    referredBy: "Inspiration site",
    keepInformed: true,
    paLead: "Rodney Charles",
    companyAddress: "24 Great Portland St",
    companyPostcode: "W1W 8QJ",
    companyCity: "London",
    customerProject: "Spring tailoring refresh",
  },
  "CUS-002": {
    suffix: "-",
    country: "United Kingdom",
    referredBy: "Custom link",
    keepInformed: false,
    paLead: "Sarah Johnson",
    companyAddress: "18 Deansgate",
    companyPostcode: "M3 2BW",
    companyCity: "Manchester",
    customerProject: "Wedding party fittings",
  },
  "CUS-003": {
    suffix: "-",
    country: "United Kingdom",
    referredBy: "Walk in",
    keepInformed: true,
    paLead: "James Porter",
    companyAddress: "8 Oxford Lane",
    companyPostcode: "B5 5NR",
    companyCity: "Birmingham",
    customerProject: "Formal wear review",
  },
};

const appDefaultMigrationKey = "relocate-defaults-2026-07-03";
if (!localStorage.getItem(appDefaultMigrationKey)) {
  const storedFont = localStorage.getItem("relocate-font");
  const storedContentWidth = localStorage.getItem("relocate-content-width");
  if (!storedFont || storedFont === "figtree") localStorage.setItem("relocate-font", "ibm-plex-sans");
  if (!storedContentWidth || storedContentWidth === "full") localStorage.setItem("relocate-content-width", "max");
  localStorage.setItem(appDefaultMigrationKey, "true");
}

const copyEditStorageKey = "relocate-copy-edit-overrides";

function parseCopyEditOverrides() {
  try {
    const parsed = JSON.parse(localStorage.getItem(copyEditStorageKey) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

const storeSwitchOptions = [
  { id: "atelier-munro-eef-maas", label: "Atelier Munro (Eef Maas)" },
  { id: "atelier-munro-antwerpen", label: "Atelier Munro Antwerpen" },
  { id: "atelier-munro-beethovenstraat-amsterdam", label: "Atelier Munro Beethovenstraat Amsterdam" },
  { id: "atelier-munro-toronto", label: "Atelier Munro Toronto" },
  { id: "atelier-munro-de-witte-duif", label: "Atelier Munro x De Witte Duif" },
  { id: "atelier-munro-ferner-jacobsen", label: "Atelier Munro x Ferner Jacobsen" },
  { id: "atelier-munro-mario-seattle", label: "Atelier Munro x Mario Seattle" },
  { id: "employee-shop-munro-tailoring", label: "EMPLOYEE SHOP - Munro Tailoring" },
  { id: "munro-tailoring-samples-fotography", label: "Munro Tailoring - Samples Fotography" },
  { id: "private-label-test-sample-account", label: "Private label - Test and SAMPLE Account" },
];

const helpCenterCategories = [
  { id: "using-gocreate", label: "Using GoCreate", description: "Platform workflows and daily tasks." },
  { id: "fittools-posture", label: "FitTools: Posture", description: "Balance and posture adjustments." },
  { id: "fittools-circumference", label: "FitTools: Circumference", description: "Width changes around the body." },
  { id: "fittools-length", label: "FitTools: Length", description: "Sleeve, body and leg length changes." },
  { id: "design-options", label: "Design Options", description: "Visual guides for configurable product details." },
];

const helpCenterChapters = [
  { id: "using-gocreate", label: "Using GoCreate", description: "Platform workflows", categories: ["using-gocreate"] },
  { id: "fittools", label: "FitTools", description: "Posture, circumference and length", categories: ["fittools-posture", "fittools-circumference", "fittools-length"] },
  { id: "design-options", label: "Design Options", description: "Product option guidance", categories: ["design-options"] },
  { id: "support", label: "Support", description: "Issues, pricing and stock checks", categories: ["using-gocreate"] },
];

const helpCenterSupportArticles = new Set([
  "using-gocreate-check-cutlength-prices",
  "using-gocreate-check-stock-availability",
  "using-gocreate-report-order-issue",
]);

const helpCenterArticles = {
  "using-gocreate-add-customer": {
    category: "using-gocreate",
    title: "How to add a new customer",
    summary: "Create a customer record before building orders, FitProfiles or store communication.",
    type: "guide",
    body: [
      "Open Customers, choose Add customer, then complete the customer name and contact details.",
      "Add company information when the order belongs to a store, business account or wedding group.",
      "Once saved, the customer can be used for CustomMade orders, ReadyMade orders and FitProfiles.",
    ],
    related: ["using-gocreate-place-custommade-order", "using-gocreate-place-readymade-order"],
  },
  "using-gocreate-place-custommade-order": {
    category: "using-gocreate",
    title: "How to place a CustomMade order",
    summary: "Start from Orders, choose Create order, then complete product, FitProfile, FitTools and checkout details.",
    type: "guide",
    media: { kind: "video", label: "CustomMade order walkthrough" },
    body: [
      "Use CustomMade when the order needs customer measurements, FitProfile information, FitTools or Design Options.",
      "Complete Basic information first. This loads the right FitProfile, FitTools and Design Options for the selected item.",
      "Review the summary before submitting so fabric, lining, pricing and order details are visible in one place.",
    ],
    related: ["using-gocreate-add-customer", "fittools-posture-raise-collar", "design-knitwear-necklines"],
  },
  "using-gocreate-place-readymade-order": {
    category: "using-gocreate",
    title: "How to place a ReadyMade order",
    summary: "Use ReadyMade for stock-led orders that do not need the full CustomMade build flow.",
    type: "guide",
    body: [
      "Choose ReadyMade from the order creation modal.",
      "Select the item, product details and stock information, then continue through the old ReadyMade screen while migration is in progress.",
      "Only use this route for products that do not require a CustomMade FitProfile.",
    ],
    related: ["using-gocreate-place-custommade-order"],
  },
  "using-gocreate-edit-copy-duplicate-order": {
    category: "using-gocreate",
    title: "How to edit, copy or duplicate an order",
    summary: "Use row actions to repeat or adjust an existing order without rebuilding from scratch.",
    type: "guide",
    body: [
      "Open the Actions menu from the order row.",
      "Use Copy order when you need the same order information elsewhere. Use Duplicate order when creating a similar follow-up order.",
      "Use Add remark when the order needs context without changing the core order details.",
    ],
    related: ["using-gocreate-change-order-status"],
  },
  "using-gocreate-change-order-status": {
    category: "using-gocreate",
    title: "How to change an order to on hold or cancelled",
    summary: "Change order status from the order row, the selected-orders action bar or the order detail Actions menu.",
    type: "guide",
    body: [
      "For a single order, use the status chip when the change is simple.",
      "For multiple orders, select rows and use the sticky action bar at the bottom of the table.",
      "Use On hold when work should pause. Use Cancelled only when the order should no longer progress.",
    ],
    related: ["using-gocreate-edit-copy-duplicate-order"],
  },
  "using-gocreate-check-cutlength-prices": {
    category: "using-gocreate",
    title: "How to check CutLength prices",
    summary: "Use Fabric R.Price rules to understand CutLength pricing before confirming fabric choices.",
    type: "guide",
    body: [
      "Open R.Price from Other, then search for the fabric or price category.",
      "Check whether the selected item supports CutLength and whether extra costs apply.",
      "Use the price category and fabric code from the inventory page to cross-check the correct rule.",
    ],
    related: ["using-gocreate-check-stock-availability"],
  },
  "using-gocreate-check-stock-availability": {
    category: "using-gocreate",
    title: "How to check stock availability",
    summary: "Use Stock Inventory to confirm availability before placing or changing an order.",
    type: "guide",
    body: [
      "Open Stock Inventory and search by fabric code, description or product type.",
      "Use availability, extra days and CutLength indicators before confirming the order.",
      "Use Scan fabric when you need to look up several fabrics quickly.",
    ],
    related: ["using-gocreate-check-cutlength-prices"],
  },
  "using-gocreate-default-design-options": {
    category: "using-gocreate",
    title: "How to set default Design Options",
    summary: "Defaults help stores keep product configuration consistent.",
    type: "guide",
    body: [
      "Open Shop Settings and choose the relevant product defaults.",
      "Adjust which Design Options should appear by default in order creation.",
      "Review the order summary after changing defaults to make sure the expected options are loaded.",
    ],
    related: ["design-knitwear-necklines"],
  },
  "using-gocreate-retail-prices": {
    category: "using-gocreate",
    title: "How to add or change retail prices",
    summary: "Manage product pricing before orders are confirmed.",
    type: "guide",
    body: [
      "Use the price tools from the relevant product or fabric area.",
      "Check retail price, service charge and outstanding amount in the order detail view.",
      "Use remarks when a temporary price exception needs to be explained.",
    ],
    related: ["using-gocreate-report-order-issue"],
  },
  "using-gocreate-report-order-issue": {
    category: "using-gocreate",
    title: "How to report an order issue",
    summary: "Send a clear issue report with order context and supporting details.",
    type: "guide",
    body: [
      "Open Actions from the order row and choose Report order issue, or use Report an Issue from the sidebar.",
      "Add the affected order number, a short description and any useful image or video.",
      "Keep the issue specific so the support team can route it quickly.",
    ],
    related: ["using-gocreate-edit-copy-duplicate-order"],
  },
  "fittools-posture-raise-collar": {
    category: "fittools-posture",
    title: "Raise collar",
    summary: "Use when the jacket sits too low at the back neck or creates a collar gap.",
    type: "fittool",
    media: { kind: "video", label: "Raise collar FitTool video" },
    body: [
      "Raise collar adjusts the balance around the neck and upper back.",
      "Use this when the garment needs to sit higher against the shirt collar.",
      "Check this together with collar pleat when the issue appears around the back neck.",
    ],
    related: ["fittools-posture-collar-pleat", "fittools-posture-arms-backwards"],
  },
  "fittools-posture-collar-pleat": {
    category: "fittools-posture",
    title: "Collar pleat",
    summary: "Use when excess fabric appears below the collar at the back neck.",
    type: "fittool",
    media: { kind: "video", label: "Collar pleat FitTool video" },
    body: [
      "Collar pleat is used to solve fabric build-up beneath the back collar.",
      "Assess this while the customer is standing naturally.",
      "If the jacket also sits away from the neck, compare with Raise collar.",
    ],
    related: ["fittools-posture-raise-collar"],
  },
  "fittools-posture-raise-closing-button": {
    category: "fittools-posture",
    title: "Raise closing button",
    summary: "Move the visual closing point higher when the jacket balance needs it.",
    type: "fittool",
    media: { kind: "video", label: "Raise closing button FitTool video" },
    body: ["Use this when the fastening point is visually sitting too low for the customer or garment style."],
    related: ["fittools-posture-lower-closing-button"],
  },
  "fittools-posture-lower-closing-button": {
    category: "fittools-posture",
    title: "Lower closing button",
    summary: "Move the visual closing point lower when the jacket balance needs it.",
    type: "fittool",
    media: { kind: "video", label: "Lower closing button FitTool video" },
    body: ["Use this when the fastening point is visually sitting too high for the customer or garment style."],
    related: ["fittools-posture-raise-closing-button"],
  },
  "fittools-posture-arms-backwards": {
    category: "fittools-posture",
    title: "Arms backwards",
    summary: "Use when the sleeve pitch needs to move backwards for the customer's posture.",
    type: "fittool",
    media: { kind: "video", label: "Arms backwards FitTool video" },
    body: ["Adjust sleeve pitch when sleeves do not hang cleanly from the customer's natural arm position."],
    related: ["fittools-posture-raise-collar"],
  },
  "fittools-posture-rise": {
    category: "fittools-posture",
    title: "Raise or lower total rise",
    summary: "Change the trouser rise when the seat and waist position need posture correction.",
    type: "fittool",
    media: { kind: "video", label: "Trouser rise FitTool video" },
    body: ["Use raise total rise or lower total rise based on where the trouser waist and seat need to sit."],
    related: ["fittools-length-leg"],
  },
  "fittools-circumference-jacket": {
    category: "fittools-circumference",
    title: "Jacket circumference changes",
    summary: "Let out or take in shoulder, back, waist, hip, upper arm and cuff areas.",
    type: "fittool",
    body: [
      "Use circumference FitTools when the garment is too tight or too loose around the body.",
      "For jackets, common areas are shoulder, back, waist, hip, upper arm and cuff.",
      "Choose the smallest adjustment that solves the visible fit issue.",
    ],
    list: ["Let out / take in 1/2 shoulder", "Let out / take in 1/2 back", "Let out / take in 1/2 waist", "Let out / take in 1/2 hip", "Let out / take in 1/2 upper arm only", "Let out / take in 1/2 cuff"],
    related: ["fittools-circumference-trouser"],
  },
  "fittools-circumference-trouser": {
    category: "fittools-circumference",
    title: "Trouser circumference changes",
    summary: "Let out or take in trouser waist, seat, thigh, knee and hem areas.",
    type: "fittool",
    body: [
      "Use trouser circumference FitTools when the trouser needs more or less room.",
      "Left and right versions can share the same guidance when the method is identical.",
      "Check the customer's posture before changing seat or thigh values.",
    ],
    list: ["Let out / take in 1/2 waist", "Let out / take in 1/2 seat", "Let out / take in 1/2 thigh", "Let out / take in 1/2 knee", "Let out / take in 1/2 hem"],
    related: ["fittools-length-leg", "fittools-circumference-jacket"],
  },
  "fittools-length-body": {
    category: "fittools-length",
    title: "Body and sleeve length",
    summary: "Lengthen or shorten garment body and sleeve lengths.",
    type: "fittool",
    body: [
      "Use length changes when the garment proportions are correct but the end point is too high or too low.",
      "Sleeve left and right can share the same guidance, with separate values only when the customer's arms differ.",
    ],
    list: ["Lengthen length", "Shorten length", "Lengthen sleeve", "Shorten sleeve"],
    related: ["fittools-length-leg"],
  },
  "fittools-length-leg": {
    category: "fittools-length",
    title: "Leg length",
    summary: "Lengthen or shorten trouser legs.",
    type: "fittool",
    body: [
      "Use leg length changes when the trouser break or hem position needs adjustment.",
      "Left and right can share the same article because the method is the same.",
    ],
    list: ["Lengthen leg", "Shorten leg"],
    related: ["fittools-posture-rise"],
  },
  "design-knitwear-necklines": {
    category: "design-options",
    title: "Knitwear necklines and closures",
    summary: "Compare the available knitwear neckline and closure options.",
    type: "design",
    body: [
      "Use this page when choosing the visible front style for knitwear.",
      "Each option can be selected in Design Options, depending on the model and product setup.",
    ],
    designOptions: [
      { title: "Crew neck", text: "Available as crew neck 1.8 cm, crew neck 3.0 cm or crew neck t-shirt." },
      { title: "V-neck", text: "Available as V-neck 1.8 cm, V-neck 3.0 cm, deep V-neck 1.8 cm or deep V-neck 3.0 cm." },
      { title: "Turtle neck", text: "Available as turtle neck, mock neck 5.5 cm or mock neck 6.5 cm." },
      { title: "Polo", text: "Available with buttons, without buttons or with zip." },
      { title: "One-piece collar polo", text: "A cleaner polo collar construction with a single-piece collar." },
      { title: "Zip", text: "Available as half zip, full zip or full zip with baseball collar." },
    ],
    related: ["using-gocreate-default-design-options", "using-gocreate-place-custommade-order"],
  },
  "design-jacket-essentials": {
    category: "design-options",
    title: "Jacket Design Options",
    summary: "Understand common jacket choices like canvas, closure, lapel and pockets.",
    type: "design",
    body: [
      "Use Jacket Design Options to control the visible style of the jacket.",
      "Common decisions include canvassing, closure and lapel, lower gorge, lapel width, pockets and lining style.",
    ],
    related: ["using-gocreate-default-design-options"],
  },
};

const fabricCoreFilterDefaults = {
  item: { label: "Item", value: "2 piece suit" },
  make: { label: "Make", value: "traditional" },
  cl: { label: "Cut Length", value: "Any" },
};

const fabricCoreFilterKeys = new Set(Object.keys(fabricCoreFilterDefaults));

function defaultFabricFilters() {
  return Object.fromEntries(Object.entries(fabricCoreFilterDefaults).map(([key, filter]) => [key, { ...filter }]));
}

function ensureFabricCoreFilters() {
  Object.entries(fabricCoreFilterDefaults).forEach(([key, filter]) => {
    if (!state.fabricFilters[key]?.value) state.fabricFilters[key] = { ...filter };
  });
}

const defaultDemoSlowSpeed = Number(localStorage.getItem("relocate-demo-slow-speed") || 3);

const state = {
  prototypeGateUnlocked: sessionStorage.getItem("relocate-prototype-gate-unlocked") === "true",
  editingId: null,
  currentPage: "home",
  loggedIn: true,
  selectedCustomerId: null,
  activeMenuId: null,
  activeMenuPosition: null,
  activeNavPopout: null,
  activeNavSubpopout: null,
  copyEditMode: localStorage.getItem("relocate-copy-edit-mode") === "true",
  copyEditOverrides: parseCopyEditOverrides(),
  copyEditDraftOverrides: parseCopyEditOverrides(),
  copyEditSessionStartedAt: new Date().toISOString(),
  activeCopyEditId: null,
  activeDatePickerInput: null,
  activeDatePickerMonth: null,
  companyInfoVisible: false,
  theme: localStorage.getItem("relocate-theme") || "canvas",
  mode: localStorage.getItem("relocate-mode") || "light",
  font: localStorage.getItem("relocate-font") || "ibm-plex-sans",
  interfaceDensity: localStorage.getItem("relocate-density") || "comfortable",
  tokenInspectorEnabled: localStorage.getItem("relocate-token-inspector") === "true",
  tokenInspectorPinnedNode: null,
  accountSettingsTab: "account",
  accountSettingsSelect: null,
  demoSlowMode: true,
  demoSlowSpeed: Number.isFinite(defaultDemoSlowSpeed) ? Math.min(8, Math.max(1, defaultDemoSlowSpeed)) : 3,
  demoSlowTimer: null,
  demoSlowBypass: false,
  demoSlowBooted: false,
  demoUiLagTimer: null,
  demoUiLagTarget: null,
  demoDataLoading: null,
  demoDataLoadingTimer: null,
  selectedStoreId: localStorage.getItem("relocate-selected-store-id") || "atelier-munro-eef-maas",
  loginFlow: "login",
  loginUsername: "george.cauter@taylormade.example",
  loginPassword: "prototype",
  loginError: "",
  resetCooldownUntil: 0,
  resetCooldownTimer: null,
  reportIssueArea: "",
  reportIssuePriority: "Low",
  deliveryEmailFrequency: "Per order",
  deliveryProduct: "Suits / Coats",
  deliveryMonth: "July",
  invoiceQuery: "",
  invoiceDateFrom: "",
  invoiceDateTo: "",
  invoiceStatusFilter: "",
  invoiceStatusMenuOpen: false,
  invoicePage: 1,
  invoicePageSize: 10,
  invoicePageSizeOpen: false,
  selectedInvoices: new Set(),
  activeInvoiceNumber: null,
  invoiceViewPanelCloseTimer: null,
  downloadsUnlocked: false,
  downloadsPasswordError: false,
  orderFormView: "library",
  orderFormSearchQuery: "",
  editingOrderFormId: null,
  previewOrderFormId: "of-001",
  orderFormPreviewUnlocked: false,
  activeOrderFormPart: "jacket",
  orderFormStartItem: "Outerwear",
  orderFormStartCategory: "trousers",
  orderFormStartSearch: "",
  orderFormStartSelectedItemId: "trousers-standard",
  activeOrderFormDesignValueIndex: null,
  activeHelpArticleId: "using-gocreate-place-custommade-order",
  activeHelpChapterId: "",
  helpCenterSearch: "",
  favoriteTools: new Set(JSON.parse(localStorage.getItem("relocate-favorite-tools") || '["delivery","downloads","alerts","inspiration","report-issue"]')),
  createOrderFlowCategory: "trousers",
  createOrderFlowSearch: "",
  createOrderFlowSelectedItemId: "",
  onePageOrderItem: "knitwear",
  onePageOrderCollapsedSections: new Set(["fitTools", "payment", "orderDetails"]),
  onePageOrderSameBasicInfo: false,
  onePageOrderRunningInfoCollapsed: false,
  activeOnePageOrderCardIndex: null,
  activeOnePageOrderCardTab: "general",
  onePageOrderStep: "basic",
  onePageOrderActiveFitGarment: "jacket",
  onePageOrderGarmentFitProfiles: {},
  activeOnePageOrderSelect: null,
  activeOnePageOrderSelectPosition: null,
  activeOnePageFabricSearch: null,
  activeOnePageFabricSearchPosition: null,
  activeOnePageMaterialSearch: null,
  activeOnePageMaterialSearchPosition: null,
  onePageOrderDesignCopyRows: new Set(),
  onePageOrderFields: {
    salesAssociate: "Sophie de Wit",
    item: "Knitwear",
    knitwearItem: "Knit",
    quantity: "1",
    model: "V-Neck",
    make: "Traditional",
    fabric: "K10139 heathered grey cashmere",
    knitType: "Single Yarn Solid",
    fitProfileMode: "create",
    fitProfileName: "[Knit] 03-Jul-2026",
    fitProfileSearchQuery: "",
    fitProfileExisting: "[Knit] 03-Jul-2026",
    tryOnFit: "K40",
    tryOnSize: "52",
    hipWaist: "0",
    length: "0",
    sleeveLength: "0",
    shortSleeveLength: "0",
    neckline: "V-neck (1.8 cm)",
    armholeStyle: "Classic",
    detailing: "Standard Rib",
    sleeveStyle: "",
    chestPocket: "None",
    sidePockets: "None",
    contrastOption: "No Contrast",
    contrastColor: "No Contrast",
    shopOrderNumber: "",
    occasion: "",
    reviewed: false,
  },
  onePageOrderLines: [],
  onePageOrderDesigns: [],
  onePageOrderPayments: [],
  onePageOrderDetails: [],
  onePageOrderRemarks: JSON.parse(localStorage.getItem("relocate-one-page-order-remarks") || "{}"),
  onePageOrderTrouserFitTools: {},
  onePageOrderFitToolsLevel: "standard",
  orderFormDesignModalPart: null,
  orderFormDraft: null,
  inspirationColors: {
    primary: "#6A6C6B",
    background: "#F5F5F5",
    button: "#616362",
    buttonText: "#FFFFFF",
  },
  inspirationLogoPreviewUrl: null,
  inspirationHomepagePreviewUrl: null,
  shopSettingsSection: "currencyLogo",
  shopEmployeeQuery: "",
  salesAssociateQuery: "",
  shopItemQuery: "",
  expandedShopFitToolParts: new Set(["jacket"]),
  activeShopFitToolPart: null,
  activeShopFitToolFit: null,
  customerFieldTab: "regular",
  editingSalesAssociateId: null,
  activeSalesAssociateActionId: null,
  activeSalesAssociateActionPosition: null,
  shopSettingsDirty: false,
  shopSettingsSnapshot: null,
  pendingShopSettingsNavigation: null,
  comicSansEnabled: localStorage.getItem("relocate-comic-sans") === "true",
  denseModeEnabled: localStorage.getItem("relocate-density") === "dense",
  contentWidthMode: localStorage.getItem("relocate-content-width") || "max",
  gdprMaskEnabled: localStorage.getItem("relocate-gdpr-mask") === "true",
  globalChromeHidden: localStorage.getItem("relocate-ggg-global-chrome-hidden") === "true",
  dashboardOverlayHidden: false,
  homeSearchMode: "order",
  homeSearchQuery: "",
  actionColumnSide: "left",
  sidebarAccountPosition: localStorage.getItem("relocate-sidebar-account-position-v2") || "bottom",
  sidebarNestMode: localStorage.getItem("relocate-sidebar-nest-mode") || "section",
  suiteModeUnlocked: localStorage.getItem("relocate-suite-mode-2028") === "true",
  activeSuiteApp: localStorage.getItem("relocate-active-suite-app") || "gocreate",
  lastGoCreatePage: localStorage.getItem("relocate-last-gocreate-page") || "home",
  accountMenuAdvanced: false,
  secretActionSequence: "",
  onePageOrderStepJumpUnlocked: localStorage.getItem("relocate-order-step-jump-unlocked") === "true",
  customerPage: 1,
  customerPageSize: 5,
  customerPageSizeOpen: false,
  customerSort: { key: "fullName", direction: "asc" },
  pendingDeleteCustomerId: null,
  advancedFilters: {},
  homeFieldsVisible: false,
  companyFieldsVisible: false,
  detailFilters: {
    item: new Set(),
    status: new Set(),
    type: new Set(),
  },
  detailOrdersPage: 1,
  detailOrdersPageSize: 5,
  detailOrdersPageSizeOpen: false,
  activeDetailFilterCategory: "status",
  detailFilterCategoryQuery: "",
  detailFilterOptionQuery: "",
  ordersSearchQuery: "",
  ordersStructuredSearchDraft: {
    order: "",
    firstName: "",
    lastName: "",
  },
  ordersStructuredSearch: {
    order: "",
    firstName: "",
    lastName: "",
  },
  ordersSearchFirstMode: false,
  ordersPage: 1,
  ordersPageSize: 10,
  ordersPageSizeOpen: false,
  ordersStatusFilter: new Set(),
  ordersStatusQuery: "",
  activeOrdersStatusPosition: null,
  ordersSelectQueries: {},
  activeOrdersItemCategory: "All",
  readyMadeDraftStatusFilter: new Set(),
  deletedReadyMadeDraftIds: new Set(),
  ordersAdvancedOpen: false,
  ordersAdvancedSearch: {
    order: "",
    rmName: "",
    firstName: "",
    lastName: "",
    companyName: "",
    deliveryNumber: "",
    receiptId: "",
  },
  ordersTypeUnlocked: false,
  ordersType: "CustomMade",
  ordersFilters: {
    salesAssociate: new Set(),
    legend: new Set(),
    item: new Set(),
  },
  ordersDateFilters: {
    processedDateFrom: "",
    processedDateTo: "",
  },
  ordersFavoritesUnlocked: localStorage.getItem("relocate-orders-favorites-unlocked") === "true",
  ordersFavoriteFilters: JSON.parse(localStorage.getItem("relocate-orders-favorite-filters") || "[]"),
  ordersColumnSettingsUnlocked: localStorage.getItem("relocate-orders-column-settings-unlocked") === "true",
  ordersColumnOrder: JSON.parse(localStorage.getItem("relocate-orders-column-order") || "[]"),
  draggedOrdersColumn: null,
  selectedOrderId: null,
  orderDetailTab: "info",
  orderDetailInfoVisible: localStorage.getItem("relocate-order-detail-info-visible") !== "false",
  orderDetailPieceMode: "3-piece",
  orderDetailActivePart: "jacket",
  orderDetailCollapsedSections: new Set(),
  orderDetailOpenFitTools: new Set(["jacket", "trouser", "waistcoat"]),
  orderDetailOpenDesignSections: new Set([
    "jacket:essentials",
    "jacket:details",
    "jacket:branding",
    "trouser:essentials",
    "trouser:details",
    "trouser:branding",
    "waistcoat:essentials",
    "waistcoat:details",
    "waistcoat:branding",
  ]),
  orderDetailFinishedMeasurementsOpen: true,
  orderDetailSidePanelCloseTimer: null,
  customerDetailSidePanelCloseTimer: null,
  orderRemarks: JSON.parse(localStorage.getItem("relocate-order-remarks") || "{}"),
  activeOrderRemarksModalId: null,
  orderDetailStatusDraft: "",
  ordersViews: {
    product: true,
    pricing: true,
    dates: true,
  },
  selectedOrders: new Set(),
  selectedDetailOrders: new Set(),
  ordersBulkStatus: "",
  statusUpdateContext: "orders",
  inlineStatusOrderId: null,
  activeOrdersBulkActionsPosition: null,
  activeOrdersBulkStatusPosition: null,
  activeOrdersPrintPosition: null,
  ordersSort: { key: "order", direction: "asc" },
  activeStandaloneOrderActionId: null,
  activeStandaloneOrderActionPosition: null,
  activeStandaloneOrderPrintId: null,
  activeStandaloneOrderPrintPosition: null,
  detailTab: "orders",
  activeOrderActionId: null,
  activeOrderActionPosition: null,
  activeFitProfileId: null,
  activeFitProfileActionId: null,
  activeFitProfileActionPosition: null,
  editingFitProfileId: null,
  copyingFitProfileId: null,
  renamingFitProfileId: null,
  editFitProfileSaveChoice: "create",
  creatingFitProfile: false,
  createFitProfileLevel: "standard",
  createFitProfilePackage: "three-piece",
  createFitProfileCustomerId: null,
  createFitProfileGarment: "jacket",
  createFitProfileSavedItems: new Set(),
  createFitProfileCollapsedSections: new Set(),
  createFitProfileSelections: {},
  createFitProfileToolValues: {},
  createFitProfileMode: "create",
  createFitProfileOrderQuery: "",
  activeCreateFitProfileSelect: null,
  activeCreateFitProfileSelectPosition: null,
  activeFitToolSelect: null,
  activeFitToolSelectPosition: null,
  activeFitToolDirection: null,
  fitProfileHistoryVisible: false,
  activeFitProfileFilterCategory: "item",
  fitProfilesPage: 1,
  fitProfilesPageSize: 5,
  fitProfilesPageSizeOpen: false,
  fitProfileNameQuery: "",
  fitProfileFilterCategoryQuery: "",
  fitProfileFilterOptionQuery: "",
  fitProfileFilters: {
    status: new Set(),
    item: new Set(),
    productLine: new Set(),
  },
  globalSearchQuery: "",
  language: localStorage.getItem("relocate-language") || "en",
  fabricDescriptionVisible: true,
  fabricFutureFeaturesUnlocked: localStorage.getItem("relocate-fabric-future-features-unlocked") === "true",
  fabricAdvancedFiltersOpen: false,
  fabricChipFiltersVisible: localStorage.getItem("relocate-fabric-chip-filters-visible") === "true",
  fabricFavoritesUnlocked: localStorage.getItem("relocate-fabric-favorites-unlocked") === "true",
  fabricFavoriteFilters: JSON.parse(localStorage.getItem("relocate-fabric-favorite-filters") || "[]"),
  activeFabricSelect: null,
  activeFabricSelectInstance: null,
  activeFabricSelectPosition: null,
  activeFabricExportPosition: null,
  activeFabricActionId: null,
  activeFabricActionPosition: null,
  activeOrdersSelect: null,
  activeOrdersSelectInstance: null,
  activeOrdersSelectPosition: null,
  activeOrdersCascadeOpen: false,
  activeOrdersCascadeCategory: "Clothing",
  fabricFilters: defaultFabricFilters(),
  fabricPage: 1,
  fabricPageSize: 25,
  fabricPageSizeOpen: false,
  fabricSort: { key: "id", direction: "asc" },
  labelSearchQuery: "",
  labelPage: 1,
  labelPageSize: 25,
  labelPageSizeOpen: false,
  fabricScannerStream: null,
  fabricScannerMode: "ready",
  fabricScannerActiveMode: "webcam",
  fabricScannerView: "scan",
  fabricScannerResultIds: [],
  fabricScannerCameraReady: false,
  fabricScannerCameraError: "",
  activeFabricPriceId: null,
};

const fr = {
  Home: "Accueil",
  Customers: "Clients",
  Customer: "Client",
  Order: "Commande",
  English: "Anglais",
  "Customer page": "Page client",
  Dashboard: "Tableau de bord",
  "Work in progress": "Travail en cours",
  "Hide overlay": "Masquer le voile",
  Orders: "Commandes",
  "Stock Inventory": "Inventaire",
  "Delivery dates": "Dates de livraison",
  Downloads: "Téléchargements",
  "Custom Size Creator": "Créateur de tailles personnalisées",
  Other: "Autre",
  Settings: "Paramètres",
  Account: "Compte",
  Admin: "Administration",
  Tools: "Outils",
  "Helpful links": "Liens utiles",
  "Inspiration site": "Site d'inspiration",
  "Custom link": "Lien personnalisé",
  "Switch stores": "Changer de boutique",
  "Change Password": "Changer le mot de passe",
  "Dark mode": "Mode sombre",
  "Change theme": "Changer de thème",
  Font: "Police",
  Logout: "Déconnexion",
  "Marketing tools": "Outils marketing",
  Documents: "Documents",
  "FitTool Videos": "Vidéos FitTool",
  "Order Form": "Formulaire de commande",
  App: "Application",
  Invoices: "Factures",
  "Shop Settings": "Paramètres boutique",
  "Shop Api": "API boutique",
  Styles: "Styles",
  Reports: "Rapports",
  General: "Général",
  Checkout: "Paiement",
  Notifications: "Notifications",
  Alerts: "Alertes",
  Rules: "Règles",
  "Price lists": "Listes de prix",
  Discounts: "Remises",
  "Delivery Calendar": "Calendrier de livraison",
  "Delivery Date Calculator": "Calculateur de date de livraison",
  "Estimate delivery dates for orders processed before 16:00 CET.": "Estimez les dates de livraison pour les commandes traitées avant 16:00 CET.",
  "Order processed before 16:00 CET": "Commande traitée avant 16:00 CET",
  Stock: "Stock",
  "Fast Track": "Fast Track",
  "Delay legend": "Légende des retards",
  "Coloured delivery cells show how much delay is included in the displayed date.": "Les cellules colorées indiquent le retard inclus dans la date affichée.",
  "5 weeks": "5 semaines",
  "4 weeks": "4 semaines",
  "3 weeks": "3 semaines",
  "2 weeks": "2 semaines",
  "1 week": "1 semaine",
  "No delay": "Aucun retard",
  "These dates are indicative only and may be subject to revision.": "Ces dates sont indicatives et peuvent être révisées.",
  "Delivery time adjustments": "Ajustements des délais de livraison",
  "Handmade orders:": "Commandes faites main :",
  "Delivery is adjusted by an additional 1 week.": "La livraison est ajustée d'une semaine supplémentaire.",
  "ReadyMade orders:": "Commandes ReadyMade :",
  "Delivery might be adjusted to a later date.": "La livraison peut être reportée à une date ultérieure.",
  "UK CL suppliers:": "Fournisseurs UK CL :",
  "Delivery might be adjusted by an additional 1 week due to Brexit-related delays.": "La livraison peut être ajustée d'une semaine supplémentaire en raison de retards liés au Brexit.",
  "Urgent orders:": "Commandes urgentes :",
  "Delivery time is 2 to 8 days shorter.": "Le délai de livraison est réduit de 2 à 8 jours.",
  "Fast Track orders:": "Commandes Fast Track :",
  "Average delivery time is 5 days from production.": "Le délai moyen de livraison est de 5 jours à partir de la production.",
  Disclaimer: "Clause de non-responsabilité",
  "The dates are valid for the upcoming 12 weeks for orders with materials in stock at Ateliers.": "Les dates sont valables pour les 12 prochaines semaines pour les commandes dont les matières sont en stock aux ateliers.",
  "Expected delivery dates provided are indicative, with the latest dates being up to 1 week later.": "Les dates de livraison prévues sont indicatives, avec une date finale pouvant aller jusqu'à une semaine plus tard.",
  "The expected delivery date on your order details is always leading.": "La date de livraison prévue indiquée dans les détails de votre commande fait toujours foi.",
  "Actual delivery dates may vary due to unforeseen circumstances.": "Les dates de livraison réelles peuvent varier en raison de circonstances imprévues.",
  "If you need your order by a specific date, please contact your account manager to discuss possibilities.": "Si vous avez besoin de votre commande à une date précise, contactez votre account manager pour discuter des possibilités.",
  "No rights can be claimed based on the delivery calendar.": "Aucun droit ne peut être revendiqué sur la base du calendrier de livraison.",
  "The delays are already considered in the displayed expected delivery dates.": "Les retards sont déjà pris en compte dans les dates de livraison prévues affichées.",
  "Delivery dates might be updated at any time.": "Les dates de livraison peuvent être mises à jour à tout moment.",
  Fabrics: "Tissus",
  Lining: "Doublure",
  Labels: "Étiquettes",
  Suits: "Costumes",
  Shirts: "Chemises",
  Overcoats: "Manteaux",
  Shoes: "Chaussures",
  Ties: "Cravates",
  Pants: "Pantalons",
  Knitwear: "Maille",
  Vests: "Gilets",
  "Type to search": "Rechercher",
  Language: "Langue",
  "Open account": "Ouvrir le compte",
  "Search Customer details": "Rechercher les détails du client",
  "Advanced search": "Recherche avancée",
  "Advanced Search": "Recherche avancée",
  Export: "Exporter",
  "Add Customer": "Ajouter un client",
  "Showing all result": "Tous les résultats",
  "Showing results containing": "Résultats contenant",
  View: "Vue",
  Summary: "Résumé",
  "Company information": "Informations société",
  User: "Utilisateur",
  Status: "Statut",
  Basic: "Basique",
  "First name": "Prénom",
  "Last name": "Nom",
  Initials: "Initiales",
  Suffix: "Suffixe",
  "Mobile number": "Numéro mobile",
  "Phone number": "Numéro de téléphone",
  Address: "Adresse",
  "Postal code": "Code postal",
  City: "Ville",
  Country: "Pays",
  "Date of birth": "Date de naissance",
  "E-mail": "E-mail",
  "Referred by": "Recommandé par",
  "Keep informed": "Rester informé",
  "PA Lead": "Responsable PA",
  Company: "Société",
  "Company name": "Nom de la société",
  "Company address": "Adresse de la société",
  "Company postal code": "Code postal de la société",
  "Company city": "Ville de la société",
  "Customer project": "Projet client",
  Actions: "Actions",
  Showing: "Affichage",
  Previous: "Précédent",
  Next: "Suivant",
  Back: "Retour",
  "Edit account": "Modifier le compte",
  "Edit Customer": "Modifier le client",
  "Remove customer": "Supprimer le client",
  "Delete customer": "Supprimer le client",
  "Remove customer?": "Supprimer le client ?",
  "Are you sure you want to remove {name} as a customer?": "Êtes-vous sûr de vouloir supprimer {name} comme client ?",
  "Create order": "Créer une commande",
  "Your ride ends here": "Votre partie s'arrête ici",
  "Please insert another 20 cents to continue playing.": "Veuillez insérer 20 centimes supplémentaires pour continuer.",
  "Order creation is intentionally not included in this test build.": "La création de commande n'est volontairement pas incluse dans cette version de test.",
  "In workshop": "En atelier",
  "On hold": "En attente",
  "On Hold": "En attente",
  "Out for delivery": "En livraison",
  Cancelled: "Annulé",
  Fabric: "Tissu",
  "Processed date": "Date de traitement",
  "Updated delivery date": "Date de livraison mise à jour",
  "R.Price": "Prix R.",
  "Down payment": "Acompte",
  Outstanding: "Restant dû",
  Apply: "Appliquer",
  "Urgent/Wedding": "Urgent/Mariage",
  Yes: "Oui",
  No: "Non",
  FitProfiles: "Profils d'ajustement",
  "Body Measurements": "Mesures corporelles",
  "Account information": "Informations du compte",
  "Search Order number or customer name...": "Rechercher un numéro de commande ou un client...",
  "Add Filters": "Ajouter des filtres",
  Items: "Articles",
  "Item type": "Type d'article",
  Clear: "Effacer",
  "Apply filters": "Appliquer les filtres",
  Product: "Produit",
  "Suits / Coats": "Costumes / Manteaux",
  Trousers: "Pantalons",
  Jackets: "Vestes",
  July: "Juillet",
  August: "Août",
  September: "Septembre",
  Monday: "Lundi",
  Tuesday: "Mardi",
  Wednesday: "Mercredi",
  Thursday: "Jeudi",
  Friday: "Vendredi",
  Saturday: "Samedi",
  Sunday: "Dimanche",
  Pricing: "Tarifs",
  Dates: "Dates",
  "Order · Customer": "Commande · Client",
  "Quality issue": "Problème qualité",
  Created: "Créé",
  Updated: "Mis à jour",
  "Expected delivery date": "Date de livraison prévue",
  Fitprofile: "Profil d'ajustement",
  Part: "Pièce",
  TryOn: "Essayage",
  Fit: "Coupe",
  "Last edited": "Dernière modification",
  "Create FitProfile": "Créer un profil d'ajustement",
  "Fill in any information you might know": "Renseignez toute information connue",
  "First name": "Prénom",
  "Last name": "Nom",
  "Phone number": "Numéro de téléphone",
  Email: "E-mail",
  "Delivery date update email frequency": "Fréquence des e-mails de mise à jour de date de livraison",
  "Do not send": "Ne pas envoyer",
  "Per order": "Par commande",
  "Per day": "Par jour",
  DesignOptions: "Options de conception",
  "Configure design choices available when creating an order.": "Configurez les choix de conception disponibles lors de la création d'une commande.",
  "Coming Soon": "Bientôt disponible",
  City: "Ville",
  Postcode: "Code postal",
  Cancel: "Annuler",
  Search: "Rechercher",
  "Create customer": "Créer un client",
  "Customer details": "Détails du client",
  "Contact details": "Coordonnées",
  "Address details": "Adresse",
  "Account preferences": "Préférences du compte",
  "Edit information": "Modifier les informations",
  "Save changes": "Enregistrer",
  Done: "Terminé",
  "Create Customer": "Créer le client",
  "Email address": "Adresse e-mail",
  "Date of Birth": "Date de naissance",
  Optional: "Facultatif",
  "Add home address": "Ajouter une adresse personnelle",
  "Add company details": "Ajouter les informations société",
  "Home address": "Adresse personnelle",
  "Company details": "Informations société",
  "Keep informed?": "Rester informé ?",
  "Save 20%": "Économisez 20 %",
  "Search customers, FitProfiles, orders, or pages...": "Rechercher clients, profils d'ajustement, commandes ou pages...",
  "No matches yet. Try a customer name, an order number, a TryOn number, or a page name.": "Aucun résultat. Essayez un nom de client, un numéro de commande, un numéro d'essayage ou une page.",
  "Orders and numbers": "Commandes et numéros",
  Pages: "Pages",
  Navigation: "Navigation",
  Appearance: "Apparence",
  Password: "Mot de passe",
  Adjust: "Modifier",
  "Update password": "Mettre à jour le mot de passe",
  "Current password": "Mot de passe actuel",
  "New password": "Nouveau mot de passe",
  "Confirm password": "Confirmer le mot de passe",
  "Change theme": "Changer de thème",
  "Choose the visual theme for the workspace.": "Choisissez le thème visuel de l'espace de travail.",
  Canvas: "Canvas",
  Green: "Vert",
  Neutral: "Neutre",
  Amber: "Ambre",
  Blue: "Bleu",
  Cyan: "Cyan",
  Emerald: "Émeraude",
  Fuchsia: "Fuchsia",
  Indigo: "Indigo",
  Lime: "Citron vert",
  Orange: "Orange",
  Pink: "Rose",
  Purple: "Violet",
  Red: "Rouge",
  Rose: "Rose",
  Sky: "Ciel",
  Teal: "Sarcelle",
  Violet: "Violet",
  Yellow: "Jaune",
  "Current soft neutral theme.": "Thème neutre doux actuel.",
  Noir: "Noir",
  "Black, white, and grey.": "Noir, blanc et gris.",
  "Corporate Blue": "Bleu corporate",
  Legacy: "Héritage",
  Theme: "Thème",
  Light: "Clair",
  Dark: "Sombre",
  "Interface size": "Taille de l'interface",
  Dense: "Dense",
  Comfortable: "Confortable",
  Large: "Grande",
  "Quiet monochrome accent.": "Accent monochrome discret.",
  "Warm amber accent.": "Accent ambre chaleureux.",
  "Clear blue accent.": "Accent bleu clair.",
  "Bright cyan accent.": "Accent cyan vif.",
  "Fresh emerald accent.": "Accent émeraude frais.",
  "Vivid fuchsia accent.": "Accent fuchsia vif.",
  "Focused indigo accent.": "Accent indigo précis.",
  "Sharp lime accent.": "Accent citron vert net.",
  "Warm orange accent.": "Accent orange chaleureux.",
  "Soft pink accent.": "Accent rose doux.",
  "Rich purple accent.": "Accent violet profond.",
  "Strong red accent.": "Accent rouge fort.",
  "Rose accent.": "Accent rose.",
  "Airy sky accent.": "Accent ciel léger.",
  "Balanced teal accent.": "Accent sarcelle équilibré.",
  "Clean violet accent.": "Accent violet net.",
  "Bright yellow accent.": "Accent jaune vif.",
  Figtree: "Figtree",
  Geist: "Geist",
  Inter: "Inter",
  "IBM Plex Sans": "IBM Plex Sans",
  Arial: "Arial",
  "Crisp blue business theme.": "Thème professionnel bleu net.",
  "Created by Rodney Charles": "Créé par Rodney Charles",
  "Created by Sarah Johnson": "Créé par Sarah Johnson",
  "Show history": "Afficher l'historique",
  "Hide history": "Masquer l'historique",
  "History over time": "Historique dans le temps",
  "Earlier saved versions for this FitProfile.": "Versions enregistrées précédentes pour ce profil d'ajustement.",
  Date: "Date",
  Version: "Version",
  "Updated by": "Mis à jour par",
  "Fit / TryOn": "Coupe / TryOn",
  "FitTools changed": "FitTools modifiés",
  "Measurements changed": "Mesures modifiées",
  Print: "Imprimer",
  Copy: "Copier",
  Edit: "Modifier",
  FitTools: "FitTools",
  "Last updated 08-Feb-14 04:26": "Dernière mise à jour 08-Feb-14 04:26",
  Approved: "Approuvé",
  "Desired measurements": "Mesures souhaitées",
  "Final values used for this profile": "Valeurs finales utilisées pour ce profil",
  "*without influences from designoption(s) and fabrics": "*sans influence des options de conception et des tissus",
  Measurement: "Mesure",
  Current: "Actuel",
  "Updated from previous profile": "Mis à jour depuis le profil précédent",
  "Create from Previous order": "Créer depuis une commande précédente",
  "View customer": "Voir le client",
  "View FitProfile": "Voir le profil d'ajustement",
  "Edit FitProfile": "Modifier le profil d'ajustement",
  "Print FitProfile": "Imprimer le profil d'ajustement",
  "Pause FitProfile": "Mettre le profil d'ajustement en pause",
  "Reactivate FitProfile": "Réactiver le profil d'ajustement",
  "Delete FitProfile": "Supprimer le profil d'ajustement",
  "No customer results match these filters.": "Aucun client ne correspond à ces filtres.",
  "No orders match these filters.": "Aucune commande ne correspond à ces filtres.",
  "No FitProfiles match these filters.": "Aucun profil d'ajustement ne correspond à ces filtres.",
  "Suit Fabric Inventory": "Inventaire des tissus costume",
  "Search fabric": "Rechercher un tissu",
  "Scan fabric": "Scanner un tissu",
  "Advanced Filters": "Filtres avancés",
  "All fabric filter options for this inventory.": "Toutes les options de filtre tissu pour cet inventaire.",
  "Cut Length": "Longueur de coupe",
  "Sold out since": "Épuisé depuis",
  "Extra days": "Jours supplémentaires",
  "Price cat": "Catégorie prix",
  "Fabric on order": "Tissu commandé",
  Atelier: "Atelier",
  Description: "Description",
  Collection: "Collection",
  Season: "Saison",
  Price: "Prix",
  Available: "Disponible",
  "Sold out": "Épuisé",
  Make: "Façon",
  Fabric: "Tissu",
  "Extra day(s)": "Jour(s) supplémentaire(s)",
  Bunches: "Liasses",
  Composition: "Composition",
  Availability: "Disponibilité",
  "Sold out since(From)": "Épuisé depuis (à partir de)",
  "Both atelier": "Les deux ateliers",
  "Apply filters": "Appliquer les filtres",
  "Fabric scan opened.": "Scanner tissu ouvert.",
  "Export ready for fabric inventory.": "Export prêt pour l'inventaire tissu.",
  "Fabric filters applied.": "Filtres tissu appliqués.",
  "Fabric filters reset.": "Filtres tissu réinitialisés.",
  "No fabric results match this search.": "Aucun tissu ne correspond à cette recherche.",
  "Search FitProfile name": "Rechercher un profil d'ajustement",
  "Copy FitProfile": "Copier le profil d'ajustement",
  "Edit FitProfile name": "Modifier le nom du profil d'ajustement",
  "FitProfile name": "Nom du profil d'ajustement",
  Filters: "Filtres",
  "Search filter": "Rechercher un filtre",
  "Reset filters": "Réinitialiser les filtres",
  "Reset filter": "Réinitialiser le filtre",
  "Product line": "Ligne produit",
  Item: "Article",
  "No filter options found.": "Aucune option de filtre trouvée.",
  Active: "Actif",
  Inactive: "Inactif",
  Delivered: "Livré",
  Reset: "Réinitialiser",
  Download: "Télécharger",
  "Invoice number": "Numéro de facture",
  "Search invoice number": "Rechercher un numéro de facture",
  "Invoice date": "Date de facture",
  To: "À",
  "Invoice due date": "Date d'échéance",
  "Invoice amount": "Montant de la facture",
  "Outstanding amount": "Montant restant dû",
  "Search and download invoice PDFs for this account.": "Recherchez et téléchargez les factures PDF de ce compte.",
  "No invoices match these filters.": "Aucune facture ne correspond à ces filtres.",
  "Total record(s)": "Total des enregistrements",
  "Page size 10": "Taille de page 10",
  Regular: "Régulier",
  standard: "standard",
  "Create New": "Créer",
  "Go to the main dashboard": "Aller au tableau de bord principal",
  "Customer overview and account records": "Vue d'ensemble des clients et dossiers de compte",
  "Orders, CustomMade and ReadyMade drafts": "Commandes, CustomMade et brouillons ReadyMade",
  "Fabrics, lining and labels": "Tissus, doublures et étiquettes",
  "Delivery calendar and calculator": "Calendrier et calculateur de livraison",
  "Documents, order forms and videos": "Documents, formulaires de commande et vidéos",
  "Open the custom size workflow": "Ouvrir le flux de tailles personnalisées",
  "Shop and account settings": "Paramètres boutique et compte",
  "Amsterdam showroom setup and operating rules.": "Configuration et règles de fonctionnement du showroom d'Amsterdam.",
  "Currency & logo": "Devise et logo",
  "Currency & Logo": "Devise et logo",
  "Manage the shop currency and logo used across customer-facing documents.": "Gérez la devise et le logo utilisés dans les documents destinés aux clients.",
  "Account manager": "Account manager",
  "Phone number:": "Numéro de téléphone :",
  Currency: "Devise",
  "Shop logo": "Logo de la boutique",
  "Logo file": "Fichier logo",
  Upload: "Importer",
  "Optional - JPG, PNG or SVG": "Facultatif - JPG, PNG ou SVG",
  "Optional - JPG or PNG": "Facultatif - JPG ou PNG",
  "Optional - JPG, PNG or MP4": "Facultatif - JPG, PNG ou MP4",
  "Preferred logo dimensions": "Dimensions recommandées du logo",
  "Height: maximum 120 pixels": "Hauteur : maximum 120 pixels",
  "Width: maximum 500 pixels": "Largeur : maximum 500 pixels",
  "Inspiration area": "Espace inspiration",
  "Brand the separate inspiration area site with its own logo, landing image and colour palette.": "Personnalisez le site d'inspiration séparé avec son propre logo, son image d'accueil et sa palette de couleurs.",
  "Update your store logo for the inspiration area.": "Mettez à jour le logo de votre boutique pour l'espace inspiration.",
  "Homepage image": "Image de page d'accueil",
  "Appears on the landing page of your branded storefront.": "Apparaît sur la page d'accueil de votre boutique de marque.",
  "Landing image": "Image d'accueil",
  "JPG max 4000 x 4000 pixels. Recommended aspect ratio 1:1.": "JPG max 4000 x 4000 pixels. Format recommandé 1:1.",
  "Brand primary color": "Couleur principale de la marque",
  "Select or customize the main brand colour for the separate inspiration area.": "Sélectionnez ou personnalisez la couleur principale de l'espace inspiration séparé.",
  "Brand background color": "Couleur d'arrière-plan de la marque",
  "Select or customize the background colour of the branded storefront.": "Sélectionnez ou personnalisez la couleur d'arrière-plan de la boutique de marque.",
  "Button color": "Couleur du bouton",
  "Select or customize the button colour used on the inspiration area.": "Sélectionnez ou personnalisez la couleur du bouton utilisé dans l'espace inspiration.",
  "Button text color": "Couleur du texte du bouton",
  "Use a colour with high contrast against the button colour.": "Utilisez une couleur avec un fort contraste par rapport au bouton.",
  "Button preview": "Aperçu du bouton",
  "Example of your inspiration area colours in use.": "Exemple d'utilisation des couleurs de l'espace inspiration.",
  "Example button": "Bouton exemple",
  Custom: "Personnalisé",
  "Shop Employees": "Employés boutique",
  "Sales Associates": "Associés de vente",
  "Customer Fields": "Champs client",
  "Size Labels": "Étiquettes de taille",
  "BM shirt calculator": "Calculateur chemise BM",
  "Employee overview and access permissions.": "Aperçu des employés et droits d'accès.",
  "No matching employees found.": "Aucun employé correspondant trouvé.",
  "No matching sales associates found.": "Aucun associé de vente correspondant trouvé.",
  "No matching items found.": "Aucun article correspondant trouvé.",
  "Add sales associate": "Ajouter un associé de vente",
  "Edit sales associate": "Modifier l'associé de vente",
  "Sales associate": "Associé de vente",
  "Part level linking": "Lien au niveau pièce",
  "Edit name": "Modifier le nom",
  Delete: "Supprimer",
  "Enter a sales associate name.": "Saisissez un nom d'associé de vente.",
  "Sales associate updated.": "Associé de vente mis à jour.",
  "Shop settings saved.": "Paramètres boutique enregistrés.",
  "No shop setting changes to save.": "Aucun changement de paramètre boutique à enregistrer.",
  "Report an issue": "Signaler un problème",
  "Send a clear note to the support team with the context they need.": "Envoyez une note claire à l'équipe support avec le contexte nécessaire.",
  "Area of issue": "Zone du problème",
  "Choose an area": "Choisir une zone",
  Priority: "Priorité",
  Low: "Basse",
  Medium: "Moyenne",
  High: "Haute",
  "Client name": "Nom du client",
  "Customer or company name": "Nom du client ou de la société",
  "Describe your issue": "Décrivez votre problème",
  "Share what happened, what you expected, and anything the team should check.": "Expliquez ce qui s'est passé, ce que vous attendiez et ce que l'équipe doit vérifier.",
  Attachment: "Pièce jointe",
  "Context & technical details": "Contexte et détails techniques",
  "Device & browser": "Appareil et navigateur",
  "Current page": "Page actuelle",
  "Auto detected": "Détecté automatiquement",
  "Report issue": "Signaler le problème",
  "Issue report ready to send.": "Rapport de problème prêt à envoyer.",
  "Customer FitProfile table and details": "Tableau et détails des profils d'ajustement client",
  "Customer measurement records": "Dossiers de mesures du client",
  "Customer updated.": "Client mis à jour.",
  "Customer created.": "Client créé.",
  "FitProfile print view ready.": "Vue d'impression du profil d'ajustement prête.",
  "Copied into a new FitProfile draft.": "Copié dans un nouveau brouillon de profil d'ajustement.",
  "FitProfile editing opened.": "Modification du profil d'ajustement ouverte.",
  "Figtree font applied.": "Police Figtree appliquée.",
  "Geist font applied.": "Police Geist appliquée.",
  "Inter font applied.": "Police Inter appliquée.",
  "IBM Plex Sans font applied.": "Police IBM Plex Sans appliquée.",
  "Arial font applied.": "Police Arial appliquée.",
  "Dense interface enabled.": "Interface dense activée.",
  "Comfortable interface enabled.": "Interface confortable activée.",
  "Large interface enabled.": "Grande interface activée.",
  "Password updated.": "Mot de passe mis à jour.",
  "Complete all password fields.": "Complétez tous les champs de mot de passe.",
  "New passwords do not match.": "Les nouveaux mots de passe ne correspondent pas.",
  "Logout flow is not connected yet.": "Le parcours de déconnexion n'est pas encore connecté.",
  "English selected.": "Anglais sélectionné.",
};

const orders = [
  {
    id: "PLTSA.AMS.NL.2353949",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Cancelled",
    item: "2-piece suit",
    fabric: "6067 (LP - SU) l.brown-sand wool-silk-linen glencheck",
    fitProfileId: "FIT-001",
    processedDate: "19-Feb-2026 13:01",
    expectedDeliveryDate: "12-Mar-2026",
    updatedDeliveryDate: "-",
    price: "125.00",
    downPayment: "0.00",
    outstanding: "125.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2353948",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Cancelled",
    item: "2-piece suit",
    fabric: "6067 (LP - SU) l.brown-sand wool-silk-linen glencheck",
    fitProfileId: "FIT-001",
    processedDate: "-",
    expectedDeliveryDate: "-",
    updatedDeliveryDate: "-",
    price: "125.00",
    downPayment: "0.00",
    outstanding: "125.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2339104",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Out for delivery",
    item: "2-piece suit",
    fabric: "6067 (LP - SU) l.brown-sand wool-silk-linen glencheck",
    fitProfileId: "FIT-001",
    processedDate: "26-Jan-2026 16:32",
    expectedDeliveryDate: "12-Feb-2026",
    updatedDeliveryDate: "12-Feb-2026",
    price: "125.00",
    downPayment: "0.00",
    outstanding: "125.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2339095",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Out for delivery",
    item: "Informal jacket + trouser",
    fabric: "SEER006 sand stretch cotton seersucker",
    fitProfileId: "FIT-002",
    processedDate: "26-Jan-2026 16:32",
    expectedDeliveryDate: "12-Feb-2026",
    updatedDeliveryDate: "12-Feb-2026",
    price: "0.00",
    downPayment: "0.00",
    outstanding: "0.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2339093",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Out for delivery",
    item: "Informal jacket + trouser",
    fabric: "6074 red stretch wool-linen blend tropical",
    fitProfileId: "FIT-002",
    processedDate: "26-Jan-2026 16:32",
    expectedDeliveryDate: "12-Feb-2026",
    updatedDeliveryDate: "12-Feb-2026",
    price: "0.00",
    downPayment: "0.00",
    outstanding: "0.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2339092",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Out for delivery",
    item: "Informal jacket",
    fabric: "6082 (LP - LW) denim blue linen-wool-silk sharkskin",
    fitProfileId: "FIT-001",
    processedDate: "26-Jan-2026 16:32",
    expectedDeliveryDate: "12-Feb-2026",
    updatedDeliveryDate: "12-Feb-2026",
    price: "0.00",
    downPayment: "0.00",
    outstanding: "0.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2339076-2-2",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Out for delivery",
    item: "Jacket",
    fabric: "9196 (LP - STE) sky blue-ivory wool-cotton-silk-linen glencheck and storm grey windowpane",
    fitProfileId: "FIT-001",
    processedDate: "26-Jan-2026 16:32",
    expectedDeliveryDate: "12-Feb-2026",
    updatedDeliveryDate: "12-Feb-2026",
    price: "0.00",
    downPayment: "0.00",
    outstanding: "0.00",
    type: "CustomMade",
    flagged: false,
  },
  {
    id: "PLTSA.AMS.NL.2339063-2",
    customerId: "CUS-001",
    customer: "Jack alfredo",
    legend: "DU",
    status: "Out for delivery",
    item: "Jacket",
    fabric: "9191 (LP - STE) l.pink-ivory wool-cotton-silk-linen glencheck and storm grey windowpane",
    fitProfileId: "FIT-001",
    processedDate: "26-Jan-2026 16:32",
    expectedDeliveryDate: "12-Feb-2026",
    updatedDeliveryDate: "12-Feb-2026",
    price: "25.00",
    downPayment: "0.00",
    outstanding: "25.00",
    type: "CustomMade",
    flagged: false,
  },
];

const standaloneOrderSeeds = [
  ["PLTSA.AMS.NL.1241201", "James Porter", "CUS-001", "In workshop", "0", "Shirt", "Shirt - Dress", "SH00001 | blue cotton fine twill", "14 Baker St, London"],
  ["PLTSA.LON.UK.9124067", "Sarah Johnson", "CUS-002", "On Hold", "2", "Jacket", "Jacket - Formal", "JA00018 | navy wool hopsack", "32 Victoria Rd, Manch."],
  ["PLTSA.PAR.FR.7821130", "David Kim", "CUS-003", "Delivered", "12", "Trousers", "Trousers - Pleated", "TR00044 | charcoal flannel", "8 Oxford Lane, Birm."],
  ["PLTSA.AMS.NL.5529148", "Emma Clarke", "CUS-004", "In workshop", "1", "Waistcoat", "Waistcoat - Slim", "WA00012 | olive wool twill", "56 Regent St, Leeds"],
  ["PLTSA.BER.DE.3308129", "Oliver Grant", "CUS-005", "On Hold", "4", "Overcoat", "Overcoat - Classic", "OC00008 | camel cashmere", "3 Kings Ave, Bristol"],
  ["PLTSA.MAD.ES.6612044", "Charlotte Evans", "CUS-006", "Delivered", "5", "Shirt", "Shirt - Casual", "SH00022 | white oxford", "21 Park Rd, Edinburgh"],
  ["PLTSA.ROM.IT.2209451", "Maya Laurent", "CUS-007", "In workshop", "3", "Jacket", "Jacket - Casual", "JA00031 | brown linen", "45 High St, Manchester"],
  ["PLTSA.CPH.DK.4491208", "Rodney Charles", "CUS-008", "Delivered", "7", "Trousers", "Trousers - Dress", "TR00029 | black wool", "12 Queen St, Birmingham"],
  ["PLTSA.ZRH.CH.7783102", "Priya Shah", "CUS-009", "On Hold", "9", "Waistcoat", "Waistcoat - Dress", "WA00025 | grey herringbone", "78 King Rd, Liverpool"],
  ["PLTSA.DUB.IE.5539020", "Noah Bennett", "CUS-010", "In workshop", "6", "Overcoat", "Overcoat - Raglan", "OC00017 | navy melton", "5 Castle St, York"],
];

const orderLegendTypes = [
  null,
  { key: "urgentWedding", label: "Orange (Urgent/Wedding)", color: "bg-orange-100 text-orange-700", icon: "spark" },
  null,
  { key: "urgent", label: "Red (Urgent)", color: "bg-red-50 text-red-600", icon: "flag" },
  null,
  { key: "issueProgress", label: "Red (Order issue in progress)", color: "bg-red-50 text-red-600", icon: "alert" },
  null,
  { key: "delayed", label: "Purple (Order delayed)", color: "bg-purple-100 text-purple-700", icon: "clock" },
  { key: "duplicate", label: "Blue (Duplicate)", color: "bg-sky-100 text-sky-700", icon: "copy" },
  null,
  { key: "issueAnalysed", label: "Green (Order issue analysed)", color: "bg-emerald-50 text-emerald-700", icon: "check" },
  null,
  { key: "changedShip", label: "Yellow (Changed Ship to)", color: "bg-yellow-100 text-yellow-800", icon: "truck" },
  { key: "blocked", label: "Red (Order Blocked)", color: "bg-red-50 text-red-600", icon: "ban" },
  null,
  { key: "covid", label: "Orange in yellow (COVID-19 Issue)", color: "bg-yellow-100 text-orange-700", icon: "alert" },
  { key: "fastTrack", label: "Green (FastTrack)", color: "bg-emerald-50 text-emerald-700", icon: "zap" },
  null,
  { key: "draftIssue", label: "Orange (order issue in draft status)", color: "bg-orange-50 text-orange-600", icon: "file" },
];

const orderStatusOptions = [
  "On hold",
  "Processed",
  "Payment Requested",
  "RM Draft approval in process",
  "Process pending",
  "In workshop",
  "In transit",
  "Out for delivery",
  "Received",
  "In alteration",
  "Delivered to customer",
  "Cancelled",
  "Partial ReMade",
  "ReMade",
  "Refused by customer",
  "Partial Refused by customer",
];

const visibleOrderStatuses = ["On hold", "Processed", "In workshop", "Out for delivery", "Received"];
const orderItemGroups = [
  {
    label: "Clothing",
    items: [
      "Informal jacket",
      "Informal jacket + trouser",
      "2-piece suit",
      "2-piece suit + extra trousers",
      "3-piece suit",
      "3-piece suit + extra trousers",
      "Jacket",
      "Trousers",
      "Waistcoat",
      "Bermudas",
      "Jacket + Bermudas",
      "Shirt",
      "Chinos",
      "Jeans / 5 Pockets",
      "Vest",
      "Knit",
      "Leisure pants",
      "Leisure shorts",
    ],
  },
  { label: "Outerwear", items: ["Coat", "Detachable liner", "Coat + Detachable liner", "Overcoat", "Pea coat", "Quilted vest"] },
  { label: "Shoes", items: ["Runner", "Premium Goodyear", "Contemporary round", "Formal round", "Sneaker", "City loafer"] },
  { label: "Accessories", items: ["Belt - Made in Portugal", "Tie", "Pocket square", "Bow tie", "Cummerbund", "Scarf", "Beanie"] },
];
const orderItems = [...new Set(orderItemGroups.flatMap((group) => group.items))];
const orderFilterItems = orderItems;
const orderItemCategoryOptions = orderItemGroups.map((group) => group.label);
const readyMadeOrderNames = ["Comfort Fit", "Test", "Try On"];
const orderSalesAssociates = [...new Set(standaloneOrderSeeds.map((seed) => seed[1]))];
const orderLegendFilterOptions = orderLegendTypes.filter(Boolean);
const ordersSelectOptions = {
  salesAssociate: orderSalesAssociates,
  legend: orderLegendFilterOptions.map((legend) => ({ label: legend.label.replace(/^[^(]+\((.+)\)$/, "$1"), value: legend.key })),
  item: orderFilterItems,
};
const ordersFavoriteDefinitions = {
  processedDateFrom: { type: "date", label: "Processed date from", width: "sm:w-[190px]" },
  processedDateTo: { type: "date", label: "Processed date to", width: "sm:w-[190px]" },
};
const defaultOrdersColumnOrder = [
  "legend",
  "item",
  "order",
  "readyMadeOrder",
  "customer",
  "status",
  "salesAssociate",
  "qualityIssueStatus",
  "daysInStatus",
  "subProductPart",
  "fabric",
  "processedDate",
  "expectedDeliveryDate",
  "updatedDeliveryDate",
  "latestDeliveryDate",
  "tryOn",
  "price",
  "createdDate",
  "onHoldDate",
  "serviceCharge",
  "discount",
  "selectedUrgentDeliveryDate",
];

function orderItemFabricMarkup(order) {
  const fabricLabel = formatOrderDetailFabricLabel(order.fabric || "-");
  const swatch = swatchForFabric(order.fabric);
  return `
    <div class="flex min-w-0 items-center gap-3">
      <span class="fabric-swatch-preview h-8 w-8 shrink-0 rounded-md border border-border" data-fabric-swatch="${escapeAttr(swatch)}" style="--fabric-swatch:${escapeAttr(swatch)};height:32px;width:32px;" tabindex="0" aria-label="Zoom fabric swatch for ${escapeAttr(fabricLabel)}"></span>
      <span class="min-w-0">
        <span class="block truncate font-medium text-foreground">${escapeHtml(fabricLabel)}</span>
        <span class="block truncate text-xs text-muted-foreground">${escapeHtml(order.item || "-")}</span>
      </span>
    </div>
  `;
}

const ordersColumnDefinitions = {
  legend: { label: "Legend", width: 90, render: (order) => orderLegendMarkup(order.legend) },
  order: { label: "Order", width: 230, render: orderNumberMarkup },
  readyMadeOrder: { label: "ReadyMade order", width: 170, render: (order) => `<span class="font-medium">${escapeHtml(order.readyMadeOrder)}</span>` },
  salesAssociate: { label: "Sales associate", width: 150, render: (order) => `<span class="block truncate text-muted-foreground">${order.salesAssociate}</span>` },
  customer: { label: "Customer", width: 190, render: orderCustomerMarkup },
  status: { label: "Order status", width: 150, render: (order) => orderStatusMarkup(order.status, order.id) },
  qualityIssueStatus: { label: "Quality Issue Status", width: 140, render: (order) => `<span class="text-muted-foreground">${order.qualityIssueStatus}</span>` },
  daysInStatus: { label: "Days in status", width: 110, render: (order) => `<span class="text-muted-foreground">${order.daysInStatus}</span>` },
  item: { label: "Item", width: 270, render: orderItemFabricMarkup },
  subProductPart: { label: "Sub Product/Part", width: 260, view: "product", render: (order) => `<span class="whitespace-nowrap text-muted-foreground">${order.subProductPart}</span>` },
  fabric: { label: "Fabric", width: 260, view: "product", render: (order) => `<span class="block truncate text-muted-foreground">${order.fabric}</span>` },
  processedDate: { label: "Processed date", width: 170, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.processedDate}</span>` },
  expectedDeliveryDate: { label: "Expected delivery date", width: 180, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.expectedDeliveryDate}</span>` },
  updatedDeliveryDate: { label: "Updated delivery date", width: 180, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.updatedDeliveryDate}</span>` },
  latestDeliveryDate: { label: "Latest delivery date", width: 180, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.latestDeliveryDate}</span>` },
  tryOn: { label: "TryOn", width: 160, view: "product", render: (order) => `<span class="whitespace-nowrap text-muted-foreground">${order.tryOn}</span>` },
  price: { label: "R. Price (incl. discount)", width: 150, view: "pricing", render: (order) => `<span class="text-muted-foreground">${order.price}</span>` },
  createdDate: { label: "Order created date", width: 170, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.createdDate}</span>` },
  onHoldDate: { label: "On-hold date", width: 140, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.onHoldDate}</span>` },
  serviceCharge: { label: "Service charge", width: 120, view: "pricing", render: (order) => `<span class="text-muted-foreground">${order.serviceCharge}</span>` },
  discount: { label: "Discount", width: 120, view: "pricing", render: (order) => `<span class="text-muted-foreground">${order.discount}</span>` },
  selectedUrgentDeliveryDate: { label: "Selected urgent delivery date", width: 220, view: "dates", render: (order) => `<span class="text-muted-foreground">${order.selectedUrgentDeliveryDate}</span>` },
};

function normalizeOrdersColumnOrder(order) {
  const nextOrder = order.filter((key) => key !== "salesAssociate");
  const itemIndex = nextOrder.indexOf("item");
  const orderIndex = nextOrder.indexOf("order");
  if (itemIndex >= 0 && orderIndex >= 0 && itemIndex > orderIndex) {
    nextOrder.splice(itemIndex, 1);
    nextOrder.splice(nextOrder.indexOf("order"), 0, "item");
  }
  const statusIndex = nextOrder.indexOf("status");
  if (statusIndex >= 0) {
    nextOrder.splice(statusIndex + 1, 0, "salesAssociate");
  } else {
    nextOrder.push("salesAssociate");
  }
  return nextOrder;
}

const standaloneOrders = Array.from({ length: 50 }, (_, index) => {
  const seed = standaloneOrderSeeds[index % standaloneOrderSeeds.length];
  const type = ["CustomMade", "ReadyMade", "ReadyMade drafts"][index % 3];
  const item = orderItems[index % orderItems.length];
  const status = visibleOrderStatuses[index % visibleOrderStatuses.length];
  const customer = customers.find((item) => item.id === seed[2]) || customers[index % customers.length];
  const orderPrefix = type === "CustomMade" ? "PLTSA" : type === "ReadyMade" ? "RMDA" : "DRFT";
  const order = `${orderPrefix}.${["AMS", "LON", "PAR", "BER", "CPH"][index % 5]}.${["NL", "UK", "FR", "DE", "DK"][index % 5]}.${String(1200000 + index * 3791).padStart(7, "0")}`;
  const rmName = type === "ReadyMade" ? readyMadeOrderNames[Math.floor(index / 3) % readyMadeOrderNames.length] : "";
  return {
    id: `${order}-${String(index + 1).padStart(2, "0")}`,
    legend: orderLegendTypes[index % orderLegendTypes.length],
    order,
    rmName,
    readyMadeOrder: rmName,
    salesAssociate: seed[1],
    customerId: customer.id,
    customer: fullName(customer),
    customerFirstName: customer.firstName,
    customerLastName: customer.lastName,
    companyName: customer.company || "",
    companyId: `CMP-${String(3000 + index).padStart(4, "0")}`,
    deliveryNumber: `DN-${["AMS", "LON", "PAR", "BER", "CPH"][index % 5]}-${String(70000 + index * 17)}`,
    receiptId: `RCPT-${String(900000 + index * 41)}`,
    status,
    qualityIssueStatus: index % 9 === 0 ? "Review" : "-",
    daysInStatus: String((index * 2) % 15),
    item,
    subProductPart: `${item} - ${index % 2 ? "Casual" : "Dress"}`,
    fabric: index % 4 === 0 ? "SH00007 | white poplin" : "SH00001 | blue cotton fine twill",
    processedDate: `${String(1 + (index % 28)).padStart(2, "0")}-${["Mar", "Apr", "May", "Jun"][Math.floor(index / 13) % 4]}-2026 13:49`,
    expectedDeliveryDate: "26-Mar-2026",
    updatedDeliveryDate: index % 3 === 0 ? "-" : "26-Mar-2026",
    latestDeliveryDate: index % 3 === 0 ? "11-Jun-2026" : "04-Jun-2026",
    tryOn: `Shirt Slim 2.0 - ${39 + (index % 4)}`,
    price: "0.00",
    createdDate: "10-Mar-2026",
    onHoldDate: status === "On hold" ? "10-Oct-2025" : "-",
    serviceCharge: "0.00",
    discount: "0.00",
    selectedUrgentDeliveryDate: index % 7 === 0 ? "28-Mar-2026" : "-",
    type,
  };
});

const reviewSuitOrders = [
  {
    order: "PLTSA.AMS.NL.0002001",
    customerId: "CUS-001",
    salesAssociate: "James Porter",
    status: "In workshop",
    item: "2-piece suit",
    subProductPart: "Jacket + Trouser - Formal",
    fabric: "JA00018 | navy wool hopsack",
    tryOn: "Jacket Regular - 50 / Trouser Regular - 50",
  },
  {
    order: "PLTSA.AMS.NL.0002002",
    customerId: "CUS-002",
    salesAssociate: "Sarah Johnson",
    status: "Processed",
    item: "3-piece suit",
    subProductPart: "Jacket + Trouser + Waistcoat - Wedding",
    fabric: "WA00025 | grey herringbone",
    tryOn: "Jacket Slim - 48 / Trouser Slim - 48 / Waistcoat Slim - 48",
  },
  {
    order: "PLTSA.AMS.NL.0002003",
    customerId: "CUS-003",
    salesAssociate: "David Kim",
    status: "On hold",
    item: "2-piece suit",
    subProductPart: "Jacket + Trouser - Business",
    fabric: "TR00044 | charcoal flannel",
    tryOn: "Jacket Comfort - 52 / Trouser Comfort - 52",
  },
  {
    order: "PLTSA.AMS.NL.0002004",
    customerId: "CUS-004",
    salesAssociate: "Emma Clarke",
    status: "In workshop",
    item: "3-piece suit",
    subProductPart: "Jacket + Trouser + Waistcoat - Formal",
    fabric: "9196 sky blue-ivory wool-cotton-silk-linen glencheck",
    tryOn: "Jacket Regular - 50 / Trouser Regular - 50 / Waistcoat Regular - 50",
  },
  {
    order: "PLTSA.AMS.NL.0002005",
    customerId: "CUS-005",
    salesAssociate: "Oliver Grant",
    status: "Out for delivery",
    item: "2-piece suit",
    subProductPart: "Jacket + Trouser - Dinner",
    fabric: "JA00031 | brown linen",
    tryOn: "Jacket Slim 2.0 - 46 / Trouser Slim 2.0 - 46",
  },
  {
    order: "PLTSA.AMS.NL.0002006",
    customerId: "CUS-006",
    salesAssociate: "Charlotte Evans",
    status: "Received",
    item: "3-piece suit",
    subProductPart: "Jacket + Trouser + Waistcoat - Black tie",
    fabric: "EF055 black stretch brushed wool twill",
    tryOn: "Jacket Regular - 54 / Trouser Regular - 54 / Waistcoat Regular - 54",
  },
].map((entry, index) => {
  const customer = customers.find((item) => item.id === entry.customerId) || customers[index % customers.length];
  return {
    id: `${entry.order}-review`,
    legend: orderLegendTypes[(index + 1) % orderLegendTypes.length],
    order: entry.order,
    rmName: "",
    readyMadeOrder: "",
    salesAssociate: entry.salesAssociate,
    customerId: customer.id,
    customer: fullName(customer),
    customerFirstName: customer.firstName,
    customerLastName: customer.lastName,
    companyName: customer.company || "",
    companyId: `CMP-SUIT-${String(index + 1).padStart(2, "0")}`,
    deliveryNumber: `DN-SUIT-${String(72000 + index)}`,
    receiptId: `RCPT-SUIT-${String(910000 + index)}`,
    status: entry.status,
    qualityIssueStatus: index % 2 ? "-" : "Review",
    daysInStatus: String(index + 1),
    item: entry.item,
    subProductPart: entry.subProductPart,
    fabric: entry.fabric,
    processedDate: `${String(14 + index).padStart(2, "0")}-Jun-2026 11:20`,
    expectedDeliveryDate: "18-Jul-2026",
    updatedDeliveryDate: index % 2 ? "18-Jul-2026" : "-",
    latestDeliveryDate: "25-Jul-2026",
    tryOn: entry.tryOn,
    price: index % 2 ? "1,740.00" : "1,420.00",
    createdDate: `${String(10 + index).padStart(2, "0")}-Jun-2026`,
    onHoldDate: entry.status === "On hold" ? "15-Jun-2026" : "-",
    serviceCharge: "0.00",
    discount: "0.00",
    selectedUrgentDeliveryDate: index === 1 ? "12-Jul-2026" : "-",
    type: "CustomMade",
  };
});

standaloneOrders.unshift(...reviewSuitOrders);

const readyMadeDraftStatusOptions = ["New", "Ordered"];
const readyMadeDraftItemOptions = ["Informal jacket", "Jeans / 5 Pockets"];
const readyMadeDraftRows = [
  {
    orderName: "test",
    item: "Informal jacket",
    fabric: "VBC024 - 586.861/771 m.blue s110 wool sharkskin",
    lining: "7628 slate blue",
    extraLining: "",
    createdDate: "16-Jun-2026",
    updatedDate: "16-Jun-2026",
    desiredDeliveryDate: "",
    status: "New",
    orderNumber: "",
    quantity: "4",
  },
  {
    orderName: "9092",
    item: "Informal jacket",
    fabric: "9092 merlot silk-wool with micro-design",
    lining: "7494 midnight blue",
    extraLining: "",
    createdDate: "23-Jul-2024",
    updatedDate: "23-Jul-2024",
    desiredDeliveryDate: "",
    status: "Ordered",
    orderNumber: "PLTSA.AMS.NL.2014549-2-02",
    quantity: "0",
  },
  {
    orderName: "mid blue 34",
    item: "Jeans / 5 Pockets",
    fabric: "DEN014 m.blue super stretch",
    lining: "",
    extraLining: "",
    createdDate: "05-Jan-2023",
    updatedDate: "26-Jan-2023",
    desiredDeliveryDate: "",
    status: "Ordered",
    orderNumber: "PLTSA.AMS.NL.1676016-50-50",
    quantity: "0",
  },
  {
    orderName: "Light blue 32",
    item: "Jeans / 5 Pockets",
    fabric: "DEN014 m.blue super stretch",
    lining: "",
    extraLining: "",
    createdDate: "05-Jan-2023",
    updatedDate: "26-Jan-2023",
    desiredDeliveryDate: "",
    status: "Ordered",
    orderNumber: "PLTSA.AMS.NL.1676017-50-50",
    quantity: "0",
  },
  {
    orderName: "black sample 33",
    item: "Jeans / 5 Pockets",
    fabric: "DEN015 deep black super stretch",
    lining: "",
    extraLining: "",
    createdDate: "05-Jan-2023",
    updatedDate: "26-Jan-2023",
    desiredDeliveryDate: "",
    status: "Ordered",
    orderNumber: "PLTSA.AMS.NL.1676019-50-50",
    quantity: "0",
  },
];

const readyMadeDraftOrders = readyMadeDraftRows.map((draft, index) => ({
  id: `ready-made-draft-${index + 1}`,
  type: "ReadyMade drafts",
  legend: null,
  order: draft.orderNumber || draft.orderName,
  rmName: draft.orderName,
  readyMadeOrder: draft.orderName,
  orderName: draft.orderName,
  salesAssociate: "",
  customerId: "",
  customer: draft.orderName,
  customerFirstName: "",
  customerLastName: "",
  companyId: "",
  deliveryNumber: "",
  receiptId: "",
  status: draft.status,
  qualityIssueStatus: "-",
  daysInStatus: "0",
  item: draft.item,
  subProductPart: draft.item,
  fabric: draft.fabric,
  lining: draft.lining,
  extraLining: draft.extraLining,
  createdDate: draft.createdDate,
  updatedDate: draft.updatedDate,
  desiredDeliveryDate: draft.desiredDeliveryDate,
  processedDate: draft.createdDate,
  expectedDeliveryDate: draft.desiredDeliveryDate || "-",
  updatedDeliveryDate: draft.updatedDate || "-",
  latestDeliveryDate: draft.desiredDeliveryDate || "-",
  tryOn: "-",
  price: "0.00",
  onHoldDate: "-",
  serviceCharge: "0.00",
  discount: "0.00",
  selectedUrgentDeliveryDate: "-",
  orderNumber: draft.orderNumber,
  quantity: draft.quantity,
}));

function draftValueMarkup(value, className = "") {
  const displayValue = value || "-";
  return `<span class="${className}">${escapeHtml(displayValue)}</span>`;
}

const readyMadeDraftColumnDefinitions = [
  { key: "orderName", label: "Order name", width: 150, render: (order) => draftValueMarkup(order.orderName, "font-medium") },
  { key: "item", label: "Item", width: 160, render: (order) => draftValueMarkup(order.item) },
  { key: "fabric", label: "Fabric", width: 320, render: (order) => draftValueMarkup(order.fabric, "block max-w-[300px] truncate") },
  { key: "lining", label: "Lining", width: 170, render: (order) => draftValueMarkup(order.lining) },
  { key: "extraLining", label: "Extra Lining", width: 130, render: (order) => draftValueMarkup(order.extraLining) },
  { key: "createdDate", label: "Created date", width: 140, render: (order) => draftValueMarkup(order.createdDate) },
  { key: "updatedDate", label: "Updated date", width: 140, render: (order) => draftValueMarkup(order.updatedDate) },
  { key: "desiredDeliveryDate", label: "Desired Delivery Date", width: 180, render: (order) => draftValueMarkup(order.desiredDeliveryDate) },
  { key: "status", label: "Order status", width: 120, render: (order) => orderStatusMarkup(order.status) },
  { key: "orderNumber", label: "Order Number", width: 230, render: (order) => draftValueMarkup(order.orderNumber) },
  { key: "quantity", label: "Quantity", width: 100, render: (order) => draftValueMarkup(order.quantity) },
];

const customerSortAccessors = {
  fullName: (customer) => fullName(customer),
  status: (customer) => customer.status,
  mobile: (customer) => customer.mobile,
  company: (customer) => customer.company,
  companyAddress: (customer) => fullAddress(customer),
};

const orderSortAccessors = {
  legend: (order) => order.legend?.label || "",
  order: (order) => order.order,
  readyMadeOrder: (order) => order.readyMadeOrder,
  orderName: (order) => order.orderName,
  salesAssociate: (order) => order.salesAssociate,
  customer: (order) => order.customer,
  status: (order) => order.status,
  qualityIssueStatus: (order) => order.qualityIssueStatus,
  daysInStatus: (order) => order.daysInStatus,
  item: (order) => order.item,
  subProductPart: (order) => order.subProductPart,
  fabric: (order) => order.fabric,
  lining: (order) => order.lining,
  extraLining: (order) => order.extraLining,
  processedDate: (order) => order.processedDate,
  expectedDeliveryDate: (order) => order.expectedDeliveryDate,
  updatedDeliveryDate: (order) => order.updatedDeliveryDate,
  latestDeliveryDate: (order) => order.latestDeliveryDate,
  tryOn: (order) => order.tryOn,
  price: (order) => order.price,
  createdDate: (order) => order.createdDate,
  updatedDate: (order) => order.updatedDate,
  desiredDeliveryDate: (order) => order.desiredDeliveryDate,
  onHoldDate: (order) => order.onHoldDate,
  serviceCharge: (order) => order.serviceCharge,
  discount: (order) => order.discount,
  selectedUrgentDeliveryDate: (order) => order.selectedUrgentDeliveryDate,
  orderNumber: (order) => order.orderNumber,
  quantity: (order) => order.quantity,
};

const fabricSortAccessors = {
  id: (fabric) => fabric.id,
  availability: (fabric) => fabric.availability,
  soldOutSince: (fabric) => fabric.soldOutSince,
  cutLength: (fabric) => fabric.cutLength,
  extraDays: (fabric) => fabric.extraDays,
  priceCat: (fabric) => fabric.priceCat,
  onOrder: (fabric) => fabric.onOrder,
  atelier: (fabric) => fabric.atelier,
  description: (fabric) => fabric.description,
  collection: (fabric) => fabric.collection,
  season: (fabric) => fabric.season,
};

const largeOrdersColumnWidths = {
  legend: 110,
  order: 390,
  salesAssociate: 230,
  customer: 340,
  status: 170,
  item: 140,
};

function ordersColumnWidth(column) {
  if (state.interfaceDensity !== "large") return column.width;
  return largeOrdersColumnWidths[column.key] || Math.ceil(column.width * 1.12);
}

const fitProfiles = [
  {
    id: "FIT-001",
    label: "Jacket — 27 May 2026",
    garment: "Jacket",
    part: "Knitwear",
    range: "K40",
    status: "Active",
    tryOn: "48",
    detailTryOn: "52",
    fit: "Regular",
    creator: "Rodney Charles",
    productLine: "MTM",
    lastEdited: "17-Jun-2026",
    created: "17-Jun-2026",
  },
  {
    id: "FIT-002",
    label: "Trousers — 27 May 2026",
    garment: "Trousers",
    part: "Shirt",
    range: "Slim 2.0",
    status: "Active",
    tryOn: "50",
    fit: "Regular",
    creator: "Sarah Johnson",
    productLine: "MTM",
    lastEdited: "24-Jun-2026",
    created: "17-Jun-2026",
  },
  {
    id: "FIT-003",
    label: "Waistcoat — 27 May 2026",
    garment: "Waistcoat",
    part: "Waistcoat",
    range: "Slim 2.0",
    status: "Active",
    tryOn: "52",
    fit: "Regular 2.0",
    creator: "Rodney Charles",
    productLine: "RTW",
    lastEdited: "17-Jun-2026",
    created: "17-Jun-2026",
  },
  {
    id: "FIT-004",
    label: "Shirt — 03 June 2026",
    garment: "Shirt",
    part: "Shirt",
    range: "Slim 3.0",
    status: "Active",
    tryOn: "54",
    fit: "Slim",
    creator: "Maya Laurent",
    productLine: "MTM",
    lastEdited: "25-Jun-2026",
    created: "03-Jun-2026",
  },
  {
    id: "FIT-005",
    label: "Overcoat — 09 June 2026",
    garment: "Overcoat",
    part: "Overcoat",
    range: "Classic 1.0",
    status: "Inactive",
    tryOn: "46",
    fit: "Relaxed",
    creator: "Rodney Charles",
    productLine: "RTW",
    lastEdited: "20-Jun-2026",
    created: "09-Jun-2026",
  },
  {
    id: "FIT-006",
    label: "Chino — 12 June 2026",
    garment: "Chino",
    part: "Trousers",
    range: "Urban 2.0",
    status: "Active",
    tryOn: "49",
    fit: "Regular",
    creator: "Sarah Johnson",
    productLine: "RTW",
    lastEdited: "26-Jun-2026",
    created: "12-Jun-2026",
  },
];

const fitToolAdjustments = [
  ["Stooped posture", "+0.50", "+0.25"],
  ["Slope shoulder R", "-1.50", "-1.00"],
  ["Slope shoulder L", "-1.00", "-0.50"],
  ["Take in 1/2 shoulder", "-0.50", "-0.50"],
  ["Let out 1/2 chest front", "+0.50", "standard"],
  ["Take in 1/2 waist", "-1.00", "-0.50"],
  ["Take in 1/2 hip", "-2.00", "-1.50"],
  ["Take in 1/2 centre front", "-1.00", "-0.50"],
  ["Take in upper arm & armhole", "-1.00", "-0.50"],
  ["Take in 1/2 cuff", "-1.00", "-1.00"],
  ["Shorten length", "-2.00", "-1.50"],
  ["Lengthen sleeve R", "+2.50", "+2.00"],
  ["Lengthen sleeve L", "+2.50", "+2.00"],
  ["Chest dart", "standard", "standard"],
  ["Forward shoulders", "no", "yes"],
  ["Neck dart", "no", "no"],
];

const createFitProfileSections = [
  {
    id: "posture",
    label: "Posture",
    level: "simple",
    pairs: [
      ["Stooped posture", "Erect posture"],
      ["Square shoulder R", "Slope shoulder R"],
      ["Square shoulder L", "Slope shoulder L"],
      ["Raise closing button", "Lower closing button"],
      ["Raise armhole", "Lower armhole"],
      ["Arms backwards", "Arms forwards"],
    ],
  },
  {
    id: "circumference",
    label: "Circumference",
    level: "standard",
    pairs: [
      ["Let out 1/2 shoulder", "Take in 1/2 shoulder"],
      ["Let out 1/2 back", "Take in 1/2 back"],
      ["Let out 1/2 chest front", "Take in 1/2 chest front"],
      ["Let out 1/2 waist", "Take in 1/2 waist"],
      ["Let out 1/2 hip", "Take in 1/2 hip"],
      ["Let out upper arm & armhole", "Take in upper arm & armhole"],
    ],
  },
  {
    id: "length",
    label: "Length",
    level: "expert",
    pairs: [
      ["Raise side pockets", "Lower side pockets"],
      ["Raise vent(s)", "Lower vent(s)"],
      ["Shorten length", "Lengthen length"],
      ["Shorten sleeve R", "Lengthen sleeve R"],
      ["Shorten sleeve L", "Lengthen sleeve L"],
      ["Raise chest pocket", "Lower chest pocket"],
    ],
  },
];

const createFitProfileFinishedMeasurements = {
  jacket: [
    ["Shoulder", "41.40"],
    ["1/2 Back", "20.60"],
    ["1/2 Waist", "43.50"],
    ["Sleeve length R", "41.90"],
    ["Sleeve length L", "41.90"],
    ["Back length", "72.00"],
  ],
  trousers: [
    ["Waist", "42.00"],
    ["Seat", "51.20"],
    ["Thigh", "31.00"],
    ["Knee", "22.50"],
    ["Bottom", "18.50"],
    ["Inside leg", "78.00"],
  ],
  waistcoat: [
    ["Chest", "49.00"],
    ["Waist", "44.00"],
    ["Front length", "58.00"],
    ["Back length", "54.00"],
    ["Shoulder", "13.50"],
  ],
};

const createFitProfileGarments = [
  { id: "jacket", label: "Jacket", colour: "bg-emerald-500", fit: "Slim", size: "42" },
  { id: "trousers", label: "Trousers", colour: "bg-orange-500", fit: "T40", size: "50" },
  { id: "waistcoat", label: "Waistcoat", colour: "bg-red-500", fit: "Slim", size: "48" },
  { id: "shirt", label: "Shirt", colour: "bg-sky-500", fit: "Slim 2.0", size: "39" },
  { id: "overcoat", label: "Overcoat", colour: "bg-indigo-500", fit: "Classic 1.0", size: "46" },
  { id: "bermuda", label: "Bermuda", colour: "bg-amber-500", fit: "Regular", size: "50" },
  { id: "chino", label: "Chino", colour: "bg-lime-600", fit: "Urban 2.0", size: "49" },
  { id: "formal-round", label: "Formal round", colour: "bg-stone-500", fit: "Regular", size: "48" },
];

const createFitProfilePackages = [
  { id: "jacket", label: "Jacket", itemIds: ["jacket"] },
  { id: "trousers", label: "Trousers", itemIds: ["trousers"] },
  { id: "waistcoat", label: "Waistcoat", itemIds: ["waistcoat"] },
  { id: "shirt", label: "Shirt", itemIds: ["shirt"] },
  { id: "overcoat", label: "Overcoat", itemIds: ["overcoat"] },
  { id: "bermuda", label: "Bermuda", itemIds: ["bermuda"] },
  { id: "chino", label: "Chino", itemIds: ["chino"] },
  { id: "formal-round", label: "Formal round", itemIds: ["formal-round"] },
  { id: "two-piece", label: "2-piece suit", itemIds: ["jacket", "trousers"] },
  { id: "three-piece", label: "3-piece suit", itemIds: ["jacket", "trousers", "waistcoat"] },
  { id: "jacket-bermuda", label: "Jacket + Bermuda", itemIds: ["jacket", "bermuda"] },
];

const createFitProfileLevels = [
  { id: "simple", label: "Level 1" },
  { id: "standard", label: "Level 2" },
  { id: "expert", label: "Level 3" },
];

const createFitProfileTryOnFits = ["Regular", "Slim", "SuperSlim", "Slim2.0", "Comfort"];
const createFitProfileTryOnSizes = Array.from({ length: 20 }, (_, index) => String(32 + index * 2));

const onePageOrderItemOptions = [
  { id: "two-piece", label: "2-Piece Suit", item: "2-Piece Suit" },
  { id: "knitwear", label: "Knitwear", item: "Knitwear" },
  { id: "trousers", label: "Trousers", item: "Trousers" },
];

const createOrderFlowCategories = [
  { id: "formal", label: "Formal Suits & Jackets" },
  { id: "informal", label: "Informal Suits & Jackets" },
  { id: "trousers", label: "Trousers & Pants" },
  { id: "vests", label: "Vests" },
  { id: "shirts", label: "Shirts" },
  { id: "knitwear", label: "Knitwear" },
  { id: "outerwear", label: "Outerwear" },
  { id: "shoes-belts", label: "Shoes & Belts" },
  { id: "accessories", label: "(Bow)Ties, Pocket Squares & Cummerbunds" },
];

const createOrderFlowItems = {
  formal: [
    { id: "formal-two-piece", label: "2-Piece Suit", flowItem: "two-piece", fieldKey: "item", fieldValue: "2-Piece Suit", tag: "Work in progress (7 step)" },
    ...[
      "2-Piece Suit + Extra Trousers",
      "3-Piece Suit",
      "Jacket",
      "Trousers",
      "Waistcoat",
      "Jacket + Bermudas",
      "3-Piece Suit + Extra Trousers",
    ].map((label, index) => ({ id: `formal-disabled-${index}`, label, disabled: true })),
  ],
  informal: [
    { id: "informal-jacket", label: "Informal Jacket", disabled: true },
    { id: "legacy-informal-jacket-trouser", label: "Informal Jacket + Trouser", legacyReadyMade: true, tag: "Work in progress (Legacy)" },
    { id: "informal-trousers", label: "Trousers", disabled: true },
  ],
  trousers: [
    { id: "trousers-standard", label: "Trousers", flowItem: "trousers", fieldKey: "trouserItem", fieldValue: "Trousers", tag: "Work in progress (1 page)" },
    { id: "trousers-chino", label: "Chino", flowItem: "trousers", fieldKey: "trouserItem", fieldValue: "Chino", tag: "Work in progress (1 page)" },
    { id: "trousers-jeans", label: "Jeans/5 Pockets", flowItem: "trousers", fieldKey: "trouserItem", fieldValue: "Jeans/5 Pockets", tag: "Work in progress (1 page)" },
    { id: "trousers-bermudas", label: "Bermudas", flowItem: "trousers", fieldKey: "trouserItem", fieldValue: "Bermudas", tag: "Work in progress (1 page)" },
  ],
  knitwear: [
    { id: "knitwear-knit", label: "Knit", flowItem: "knitwear", fieldKey: "knitwearItem", fieldValue: "Knit", note: "Skip the TryOn - Convert from a Jacket FitProfile" },
    { id: "knitwear-leisure-pants", label: "Leisure Pants", flowItem: "knitwear", fieldKey: "knitwearItem", fieldValue: "Leisure Pants" },
    { id: "knitwear-leisure-shorts", label: "Leisure Shorts", flowItem: "knitwear", fieldKey: "knitwearItem", fieldValue: "Leisure Shorts" },
    { id: "knitwear-scarf", label: "Scarf", flowItem: "knitwear", fieldKey: "knitwearItem", fieldValue: "Scarf" },
    { id: "knitwear-beanie", label: "Beanie", flowItem: "knitwear", fieldKey: "knitwearItem", fieldValue: "Beanie" },
  ],
};

const onePageOrderSections = [
  { id: "primary", label: "Primary info", required: true },
  { id: "fitProfile", label: "FitProfile", required: true },
  { id: "fitTools", label: "FitTools", required: false },
  { id: "design", label: "Design", required: true },
  { id: "payment", label: "Payment", required: false },
  { id: "orderDetails", label: "Order Details", required: true },
];

const multiPageOrderSteps = [
  { id: "basic", label: "Basic info", sectionId: "primary" },
  { id: "fitProfile", label: "FitProfile", sectionId: "fitProfile" },
  { id: "fitTools", label: "FitTools", sectionId: "fitTools" },
  { id: "design", label: "Design options", sectionId: "design" },
  { id: "branding", label: "Branding options", sectionId: "branding" },
  { id: "summary", label: "Summary", sectionId: "summary" },
  { id: "checkout", label: "Checkout", sectionId: "checkout" },
];

const onePageOrderSelectOptions = {
  salesAssociate: [],
  item: ["Knitwear", "2-Piece Suit", "Trousers"],
  knitwearItem: ["Knit", "Leisure Pants", "Leisure Shorts", "Scarf", "Beanie"],
  quantity: ["1", "2", "3", "4"],
  model: ["V-Neck", "Crew neck", "Cardigan", "Polo knit"],
  jacketModel: ["Standard", "Soft jacket", "Formal jacket", "Dinner jacket"],
  suitTrouserModel: ["Standard", "Dress", "Smart", "Flat front"],
  jacketStyle: ["none", "Single breasted", "Double breasted", "Tuxedo"],
  trouserStyle: ["none", "Flat front", "Single pleat", "Double pleat"],
  jacketMake: ["traditional", "sartorial", "unconstructed"],
  canvas: ["standard", "half canvas", "full canvas"],
  suitTrouserMake: ["traditional", "sartorial"],
  liningMode: ["manually select", "best match in solid", "best match in bemberg"],
  trouserItem: ["Trousers", "Chino", "Jeans/5 Pockets", "Bermudas"],
  trouserModel: ["Design from scratch", "Dress", "Smart", "Drawstring"],
  trouserMake: ["Traditional", "Sartorial"],
  make: ["Traditional", "Modern", "Soft Make"],
  knitType: ["Single Yarn Solid", "Half English Rib", "Cable Knit", "Fine Gauge"],
  tryOnFit: ["K40", "K42", "Regular", "Slim", "Comfort"],
  tryOnSize: ["48", "50", "52", "54", "56"],
  trouserTryOnFit: ["T40", "T30"],
  trouserTryOnSize: Array.from({ length: 21 }, (_, index) => String(30 + index * 2)),
  hipWaist: ["0", "+0.5", "+1.0", "-0.5", "-1.0"],
  length: ["0", "+1.0", "+2.0", "-1.0", "-2.0"],
  sleeveLength: ["0", "+1.0", "+2.0", "-1.0", "-2.0"],
  shortSleeveLength: ["0", "+1.0", "-1.0"],
  neckline: ["V-neck (1.8 cm)", "Crew neck", "Zip neck", "Roll neck"],
  armholeStyle: ["Classic", "Relaxed", "High Armhole"],
  detailing: ["Standard Rib", "Plain Hem", "Contrast Rib"],
  sleeveStyle: ["", "Long Sleeve", "Short Sleeve"],
  chestPocket: ["None", "Left Chest Pocket"],
  sidePockets: ["None", "Side Pockets"],
  contrastOption: ["No Contrast", "Contrast Cuffs", "Contrast Collar"],
  contrastColor: ["No Contrast", "Navy", "Charcoal", "Cream"],
  monogramPosition: ["", "Inside neck", "Chest", "Cuff"],
  monogramColour: ["", "Tone on tone", "Navy", "Charcoal", "Cream"],
  monogramFont: ["", "Block", "Script", "Serif"],
  brandingHangtag: ["", "Hangtag", "Private label hangtag", "No hangtag"],
  trouserDetailing: ["Dress", "Smart", "Drawstring", "Design from scratch"],
  trouserWaistband: ["Buckle & Strap (Metal)", "Button", "Drawstring", "Elasticated"],
  trouserExtendedWaistband: ["No", "Yes"],
  trouserBuckleLoop: ["No", "Yes"],
  trouserClosure: ["Zip Fly", "Button Fly"],
  trouserClosingButton: ["", "Horn", "Mother of Pearl", "Metal"],
  trouserPocketLining: ["POC002 Off-White", "POC001 White", "POC010 Navy", "Self Fabric"],
  trouserFrontStyle: ["Flat Front", "Single Pleat", "Double Pleat"],
  trouserPleatDirection: ["No Pleats", "Forward", "Reverse"],
  trouserPleatDepth: ["No Pleats", "Shallow", "Standard", "Deep"],
  trouserPressedCrease: ["No", "Yes"],
  trouserPintuck: ["No", "Yes"],
  trouserSidePockets: ["Slanted", "Straight", "Western"],
  trouserCargoPockets: ["None", "Single", "Double"],
  trouserBackPockets: ["Welt with Button", "Welt", "Patch", "None"],
  trouserHemFinish: ["Standard (1,2 cm)", "Turn-Up", "Ribbed", "Plain"],
  trouserBackPatch: ["None", "Leather Patch", "Fabric Patch"],
  paymentMethod: ["", "Cash", "Card", "Bank transfer", "Invoice"],
  occasion: ["", "Wedding", "Business", "Casual", "Travel"],
};

const onePageOrderMeasurements = [
  ["Shoulder", "44.0", "44.0"],
  ["1/2 Chest", "56.0", "56.0"],
  ["1/2 Hip", "46.0", "46.0"],
  ["1/2 Cuff long sleeve", "11.0", "11.0"],
  ["1/2 Cuff short sleeve", "17.0", "17.0"],
  ["Sleeve length long", "65.0", "65.0"],
  ["Sleeve length short", "25.0", "25.0"],
  ["Length", "69.0", "69.0"],
];

const onePageOrderTrouserMeasurements = [
  ["Waist", "42.0", "42.0"],
  ["Seat", "51.0", "51.0"],
  ["Thigh", "31.0", "31.0"],
  ["Knee", "22.5", "22.5"],
  ["Bottom", "18.5", "18.5"],
  ["Inside leg", "78.0", "78.0"],
];

const onePageOrderTrouserFitToolRows = [
  ["waist", "Waist bigger", "Waist smaller"],
  ["hip", "Hip bigger", "Hip smaller"],
  ["seat", "Seat bigger", "Seat smaller"],
  ["thigh", "Thigh bigger", "Thigh smaller"],
  ["knee", "Knee bigger", "Knee smaller"],
  ["bottomWidth", "Bottom width bigger", "Bottom width smaller"],
  ["frontRise", "Front rise higher", "Front rise lower"],
  ["backRise", "Back rise higher", "Back rise lower"],
  ["length", "Length longer", "Length shorter"],
];

const desiredMeasurements = [
  ["Shoulder", "47.7", "47.2"],
  ["1/2 Back", "23.7", "23.5"],
  ["1/2 Waist", "53.5", "52.8"],
  ["Sleeve length R", "46.9", "46.5"],
  ["Sleeve length L", "46.9", "46.5"],
  ["Back length", "78.5", "78.0"],
  ["MorningCoat - Back Length", "110.5", "110.0"],
];

function fitProfileHistoryVersions(profile) {
  const tryOn = profile.detailTryOn || profile.tryOn;
  return [
    {
      version: "Current",
      date: profile.lastEdited,
      fitTryOn: `${profile.fit} / ${tryOn}`,
    },
    {
      version: "v3",
      date: "03-Jun-2026",
      fitTryOn: `${profile.fit} / ${Number(tryOn) - 2 || tryOn}`,
    },
    {
      version: "v2",
      date: "20-May-2026",
      fitTryOn: `Regular / ${Number(tryOn) - 4 || tryOn}`,
    },
    {
      version: "v1",
      date: "22-Apr-2026",
      fitTryOn: `Regular / ${Number(tryOn) - 4 || tryOn}`,
    },
  ];
}

function stepTowardBaseline(value, steps = 1) {
  if (value === "standard") return "standard";
  if (value === "yes" || value === "no") return steps > 1 ? "no" : value;
  const numeric = Number.parseFloat(String(value).replace("+", ""));
  if (Number.isNaN(numeric)) return value || "standard";
  const signed = String(value).trim().startsWith("+") || String(value).trim().startsWith("-");
  const next = signed ? numeric - Math.sign(numeric || 1) * 0.5 * steps : numeric - 0.3 * steps;
  if (signed && Math.abs(next) < 0.25) return "standard";
  const rounded = next.toFixed(2);
  return signed && next > 0 ? `+${rounded}` : rounded;
}

function fitProfileHistoryValue(current, previous, index) {
  if (index === 0) return current;
  if (index === 1) return previous;
  if (index === 2) return stepTowardBaseline(previous, 1);
  return stepTowardBaseline(previous, 2);
}

function fitProfileHistoryMatrix(groups, versions) {
  const valueVersions = versions.map((entry, index) => ({
    ...entry,
    index,
    label: index === 0 ? "Current value" : entry.version,
  }));
  const rows = groups.flatMap((group) =>
    group.items.map(([label, current, previous]) => ({
      group: group.label,
      label,
      current,
      previous,
    })),
  );

  return `
    <div class="max-h-[460px] overflow-auto rounded-[12px] border border-border">
      <table class="fit-history-table w-full text-sm">
        <thead class="bg-secondary text-xs font-medium uppercase tracking-normal text-muted-foreground">
          <tr>
            <th class="sticky left-0 top-0 z-20 min-w-[240px] bg-secondary">Measurement</th>
            ${valueVersions.map((entry) => `<th class="sticky top-0 z-10 min-w-[160px] bg-secondary">${escapeHtml(entry.label)}<span class="mt-1 block normal-case text-muted-foreground">${escapeHtml(entry.date)}</span></th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map((row) => {
              const currentValue = fitProfileHistoryValue(row.current, row.previous, 0);
              return `
                <tr>
                  <td class="sticky left-0 z-10 bg-card">
                    <span class="block font-medium text-foreground">${escapeHtml(row.label)}</span>
                    <span class="mt-1 block text-xs text-muted-foreground">${escapeHtml(row.group)}</span>
                  </td>
                  ${valueVersions
                    .map((entry) => {
                      const value = fitProfileHistoryValue(row.current, row.previous, entry.index);
                      const changed = entry.index > 0 && value !== currentValue;
                      return `
                        <td class="${entry.index === 0 ? "font-semibold text-foreground" : changed ? "bg-amber-50/60 font-medium text-foreground" : "text-muted-foreground"}">
                          ${escapeHtml(value)}
                        </td>
                      `;
                    })
                    .join("")}
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

const fitProfileFilterConfig = [
  {
    key: "status",
    label: "Status",
    options: [
      { value: "Active", label: "Active", tone: "bg-emerald-500" },
      { value: "Inactive", label: "Inactive", tone: "bg-red-500" },
    ],
  },
  {
    key: "item",
    label: "Item",
    options: [
      { value: "Jacket", label: "Jacket" },
      { value: "Trousers", label: "Trousers" },
      { value: "Waistcoat", label: "Waistcoat" },
      { value: "Shirt", label: "Shirt" },
      { value: "Overcoat", label: "Overcoat" },
      { value: "Bermuda", label: "Bermuda" },
      { value: "Pea coat", label: "Pea coat" },
      { value: "5 Pocket", label: "5 Pocket" },
      { value: "Chino", label: "Chino" },
      { value: "Formal round", label: "Formal round" },
      { value: "Sneaker", label: "Sneaker" },
    ],
  },
  {
    key: "productLine",
    label: "Product line",
    options: [
      { value: "MTM", label: "MTM" },
      { value: "RTW", label: "RTW" },
    ],
  },
];

const detailFilterConfig = [
  {
    key: "status",
    label: "Order status",
    options: [
      { value: "Cancelled", label: "Cancelled", tone: "bg-red-500" },
      { value: "Out for delivery", label: "Out for delivery", tone: "bg-emerald-500" },
      { value: "In workshop", label: "In workshop", tone: "bg-sky-500" },
      { value: "On hold", label: "On hold", tone: "bg-orange-500" },
    ],
  },
  {
    key: "item",
    label: "Item",
    options: [
      { value: "2-piece suit", label: "2-piece suit" },
      { value: "Informal jacket + trouser", label: "Informal jacket + trouser" },
      { value: "Informal jacket", label: "Informal jacket" },
      { value: "Jacket", label: "Jacket" },
    ],
  },
  {
    key: "type",
    label: "Item type",
    options: [
      { value: "CustomMade", label: "CustomMade" },
      { value: "ReadyMade", label: "ReadyMade" },
      { value: "Draft", label: "Draft" },
    ],
  },
];

const advancedFields = [
  ["firstName", "First name", "advFirstName"],
  ["lastName", "Last name", "advLastName"],
  ["mobile", "Mobile number", "advMobile"],
  ["phone", "Phone number", "advPhone"],
  ["email", "Email", "advEmail"],
  ["city", "City", "advCity"],
  ["address", "Address", "advAddress"],
  ["postcode", "Postcode", "advPostcode"],
  ["company", "Company name", "advCompany"],
];

const searchablePages = [
  { id: "home", label: "Home", group: "Navigation", description: "Go to the main dashboard" },
  { id: "customers", label: "Customers", group: "Navigation", description: "Customer overview and account records" },
  { id: "orders", label: "Orders", group: "Navigation", description: "Orders, CustomMade and ReadyMade drafts" },
  { id: "stock", label: "Stock Inventory", group: "Navigation", description: "Fabrics, lining and labels" },
  { id: "suit-fabrics", label: "Suit Fabric Inventory", group: "Stock Inventory", description: "Suit fabrics, availability and pricing" },
  { id: "label-stock", label: "Label inventory", group: "Stock Inventory", description: "Labels, availability, production code and atelier" },
  { id: "delivery", label: "Delivery Calendar", group: "Navigation", description: "Estimate delivery dates by product and processed date" },
  { id: "invoices", label: "Invoices", group: "Navigation", description: "Search and download account invoices" },
  { id: "downloads", label: "Downloads", group: "Navigation", description: "Documents, order forms and videos" },
  { id: "custom-size", label: "Custom Size Creator", group: "Navigation", description: "Open the custom size workflow" },
  { id: "shop-settings", label: "Shop Settings", group: "Other", description: "Currency, employees, fit tools and shop setup" },
  { id: "settings", label: "Settings", group: "Navigation", description: "Account appearance and preferences" },
  { id: "fitprofiles", label: "FitProfiles", group: "Customer page", description: "Customer FitProfile table and details" },
  { id: "measurements", label: "Body Measurements", group: "Customer page", description: "Customer measurement records" },
];

const suiteApps = {
  gocreate: {
    label: "GoCreate",
    eyebrow: "GoCreate Suite",
    description: "The order, customer and inventory workspace you have been building.",
  },
  goschedule: {
    label: "GoSchedule",
    eyebrow: "Booking platform",
    description: "A future booking workspace for appointments, calendars and store scheduling.",
  },
  goview: {
    label: "GoView",
    eyebrow: "Shopping and AI visualiser",
    description: "A future shopping and AI visualiser workspace for browsing, outfit previewing and client-facing views.",
  },
};

const deliveryCalendarProducts = ["Suits / Coats", "Shirts", "Knitwear", "Trousers", "Jackets"];
const deliveryCalendarMonths = [
  { label: "July", year: 2026, monthIndex: 6, days: 31 },
  { label: "August", year: 2026, monthIndex: 7, days: 31 },
  { label: "September", year: 2026, monthIndex: 8, days: 30 },
];
const deliveryLeadTimes = {
  "Suits / Coats": { stock: 20, cutLength: 57, fastTrack: 16 },
  Shirts: { stock: 19, cutLength: 43, fastTrack: 14 },
  Knitwear: { stock: 22, cutLength: 50, fastTrack: 15 },
  Trousers: { stock: 20, cutLength: 45, fastTrack: 14 },
  Jackets: { stock: 21, cutLength: 54, fastTrack: 15 },
};
const deliveryDelayClasses = {
  1: "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-100",
  2: "bg-sky-50 text-sky-800 ring-1 ring-inset ring-sky-100",
  3: "bg-rose-50 text-rose-800 ring-1 ring-inset ring-rose-100",
  4: "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-100",
  5: "bg-red-50 text-red-800 ring-1 ring-inset ring-red-100",
};

const orderFormProductLines = ["CustomMade", "ReadyMade"];
const orderFormItems = [
  "2-piece suit",
  "3-piece suit",
  "Jacket",
  "Trousers",
  "Chino",
  "Jeans/5 Pockets",
  "Bermudas",
  "Knit",
  "Leisure Pants",
  "Leisure Shorts",
  "Scarf",
  "Beanie",
  "Shirt",
  "Overcoat",
];
const orderFormMakes = ["Handmade", "Machine made", "Fast Track"];
const orderFormFits = ["Regular", "Slim", "Slim 2.0", "Classic", "Modern", "Relaxed", "T40"];
const orderFormParts = [
  { id: "jacket", label: "Jacket", items: ["2-piece suit", "3-piece suit", "Jacket"] },
  { id: "trousers", label: "Trousers", items: ["2-piece suit", "3-piece suit", "Trousers", "Chino", "Jeans/5 Pockets", "Bermudas"] },
  { id: "waistcoat", label: "Waistcoat", items: ["3-piece suit"] },
  { id: "knitwear", label: "Knitwear", items: ["Knit"] },
  { id: "leisurePants", label: "Leisure Pants", items: ["Leisure Pants"] },
  { id: "leisureShorts", label: "Leisure Shorts", items: ["Leisure Shorts"] },
  { id: "scarf", label: "Scarf", items: ["Scarf"] },
  { id: "beanie", label: "Beanie", items: ["Beanie"] },
  { id: "shirt", label: "Shirt", items: ["Shirt"] },
  { id: "overcoat", label: "Overcoat", items: ["Overcoat"] },
];
const orderFormDesignOptions = {
  jacket: ["Lapel style", "Lapel width", "Buttons", "Pockets", "Vents", "Lining", "Sleeve buttons", "Monogram"],
  trousers: ["Pleats", "Side pockets", "Back pockets", "Waistband", "Belt loops", "Turn-ups", "Side adjusters", "Hem style"],
  waistcoat: ["Front style", "Back fabric", "Buttons", "Pockets"],
  knitwear: ["Neckline", "Rib", "Sleeve", "Hem", "Monogram"],
  leisurePants: ["Waistband", "Drawstring", "Pocket style", "Cuff"],
  leisureShorts: ["Waistband", "Drawstring", "Pocket style", "Hem"],
  scarf: ["Edge finish", "Monogram"],
  beanie: ["Rib", "Turn-up", "Monogram"],
  shirt: ["Collar", "Cuffs", "Placket", "Pocket", "Contrast fabric", "Monogram"],
  overcoat: ["Collar", "Closure", "Pockets", "Back vent", "Lining", "Sleeve tab"],
};

const orderFormDesignOptionValueDefaults = {
  "Lapel style": ["Notch", "Peak", "Shawl"],
  "Lapel width": ["Slim", "Regular", "Wide"],
  Buttons: ["1 button", "2 buttons", "3 buttons", "Double breasted"],
  Pockets: ["Flap", "Jetted", "Patch"],
  Vents: ["No vent", "Single vent", "Double vent"],
  Lining: ["Full lining", "Half lining", "Unlined"],
  "Sleeve buttons": ["3 buttons", "4 buttons", "Working cuffs"],
  Monogram: ["None", "Initials", "Full name"],
  Pleats: ["None", "Single", "Double"],
  "Side pockets": ["Slanted", "Straight", "Western"],
  "Back pockets": ["None", "One pocket", "Two pockets"],
  Waistband: ["Standard", "Extended", "Elasticated"],
  "Belt loops": ["No", "Yes"],
  "Turn-ups": ["No", "Yes"],
  "Side adjusters": ["No", "Yes"],
  "Hem style": ["Plain", "Cuffed", "Raw"],
  "Front style": ["Single breasted", "Double breasted"],
  "Back fabric": ["Lining", "Self fabric"],
  Neckline: ["V-neck", "Crew neck", "Polo", "Zip neck"],
  Rib: ["Standard rib", "Half English rib", "Full English rib"],
  Sleeve: ["Long sleeve", "Short sleeve", "Sleeveless"],
  Hem: ["Ribbed", "Plain", "Split hem"],
  Drawstring: ["No", "Inside", "Outside"],
  "Pocket style": ["No pockets", "Side pockets", "Patch pockets"],
  Cuff: ["Open", "Elasticated", "Ribbed"],
  "Edge finish": ["Plain", "Fringe", "Ribbed"],
  "Turn-up": ["No", "Yes"],
  Collar: ["Classic", "Cutaway", "Button down", "Mandarin"],
  Cuffs: ["Single cuff", "Double cuff", "Button cuff"],
  Placket: ["Standard", "Hidden", "No placket"],
  Pocket: ["No pocket", "One pocket", "Two pockets"],
  "Contrast fabric": ["No", "Collar", "Cuffs", "Collar and cuffs"],
  Closure: ["Buttons", "Zip", "Belted"],
  "Back vent": ["No vent", "Single vent", "Double vent"],
  "Sleeve tab": ["No", "Yes"],
};

function defaultOrderFormOptionValues(name) {
  return (orderFormDesignOptionValueDefaults[name] || ["Standard", "Alternative"]).map((label) => ({ label, enabled: true }));
}

function normalizeOrderFormOption(option) {
  const values = Array.isArray(option.values) && option.values.length ? option.values : defaultOrderFormOptionValues(option.name);
  return {
    ...option,
    enabled: option.enabled !== false,
    values: values.map((value) => (typeof value === "string" ? { label: value, enabled: true } : { ...value, enabled: value.enabled !== false })),
  };
}

const defaultOrderFormOptions = (partId, disabled = []) =>
  (orderFormDesignOptions[partId] || []).map((name) => normalizeOrderFormOption({ name, enabled: !disabled.includes(name) }));

let orderForms = [
  {
    id: "of-001",
    name: "3-piece Slim Handmade",
    productLine: "CustomMade",
    item: "3-piece suit",
    make: "Handmade",
    fit: "Slim",
    parts: ["jacket", "trousers", "waistcoat"],
    partFits: { jacket: "Slim 2.0", trousers: "Regular", waistcoat: "Regular" },
    designOptions: {
      jacket: defaultOrderFormOptions("jacket"),
      trousers: defaultOrderFormOptions("trousers", ["Turn-ups", "Hem style"]),
      waistcoat: defaultOrderFormOptions("waistcoat"),
    },
    lastEdited: "02 Jul 2026",
    createdBy: "George Cauter",
  },
  {
    id: "of-002",
    name: "Quick trouser form",
    productLine: "CustomMade",
    item: "Trousers",
    make: "Machine made",
    fit: "Modern",
    parts: ["trousers"],
    partFits: { trousers: "T40" },
    designOptions: {
      trousers: defaultOrderFormOptions("trousers", ["Back pockets", "Turn-ups"]),
    },
    lastEdited: "30 Jun 2026",
    createdBy: "George Cauter",
  },
  {
    id: "of-003",
    name: "Shirt only essentials",
    productLine: "ReadyMade",
    item: "Shirt",
    make: "Fast Track",
    fit: "Classic",
    parts: ["shirt"],
    partFits: { shirt: "Classic" },
    designOptions: {
      shirt: defaultOrderFormOptions("shirt", ["Contrast fabric"]),
    },
    lastEdited: "28 Jun 2026",
    createdBy: "George Cauter",
  },
];

function deliveryDateLabel(date) {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" });
}

function deliveryWeekdayLabel(date) {
  return date.toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" });
}

function addDeliveryDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function nextDeliveryBatchDate(date, leadDays, batchDay = 5) {
  const next = addDeliveryDays(date, leadDays);
  const daysUntilBatch = (batchDay - next.getUTCDay() + 7) % 7;
  next.setUTCDate(next.getUTCDate() + daysUntilBatch);
  return next;
}

function delayWeeksForDelivery(product, method, day) {
  if (method === "stock") return day >= 11 && day <= 15 ? 3 : 0;
  if (method === "fastTrack") return day <= 6 ? 3 : 0;

  const productOffset = Math.max(0, deliveryCalendarProducts.indexOf(product));
  const adjustedDay = day + productOffset;
  if (adjustedDay <= 5) return 2;
  if (adjustedDay <= 12) return 4;
  if (adjustedDay <= 19) return 1;
  return 0;
}

function deliveryDateWithDelay(processDate, leadDays, delayWeeks, batchDay) {
  const date = nextDeliveryBatchDate(processDate, leadDays + delayWeeks * 7, batchDay);
  return deliveryDateLabel(date);
}

function buildDeliveryCalendarData() {
  return deliveryCalendarProducts.reduce((productMap, product) => {
    productMap[product] = deliveryCalendarMonths.reduce((monthMap, month) => {
      const leadTimes = deliveryLeadTimes[product];
      monthMap[month.label] = Array.from({ length: month.days }, (_, index) => {
        const day = index + 1;
        const processDate = new Date(Date.UTC(month.year, month.monthIndex, day));
        const delayWeeks = {
          stock: delayWeeksForDelivery(product, "stock", day),
          cutLength: delayWeeksForDelivery(product, "cutLength", day),
          fastTrack: delayWeeksForDelivery(product, "fastTrack", day),
        };
        return {
          processDate,
          weekday: deliveryWeekdayLabel(processDate),
          processLabel: deliveryDateLabel(processDate),
          stockDate: deliveryDateWithDelay(processDate, leadTimes.stock, delayWeeks.stock, 5),
          cutLengthDate: deliveryDateWithDelay(processDate, leadTimes.cutLength, delayWeeks.cutLength, 5),
          fastTrackDate: deliveryDateWithDelay(processDate, leadTimes.fastTrack, delayWeeks.fastTrack, 1),
          delayWeeks,
        };
      });
      return monthMap;
    }, {});
    return productMap;
  }, {});
}

const deliveryCalendarData = buildDeliveryCalendarData();

const invoices = [
  { number: "11604135", date: "2016-05-23", dueDate: "2016-06-22", amount: 158.29, outstanding: 0 },
  { number: "11605842", date: "2026-01-14", dueDate: "2026-02-13", amount: 842.5, outstanding: 0 },
  { number: "11606118", date: "2026-02-28", dueDate: "2026-03-30", amount: 1240, outstanding: 240 },
  { number: "11607492", date: "2026-04-11", dueDate: "2026-05-11", amount: 389.95, outstanding: 0 },
  { number: "11608306", date: "2026-05-26", dueDate: "2026-06-25", amount: 2115.75, outstanding: 615.75 },
  { number: "11609140", date: "2026-06-18", dueDate: "2026-07-18", amount: 670, outstanding: 670 },
  { number: "11609418", date: "2026-06-24", dueDate: "2026-07-24", amount: 148.5, outstanding: 0 },
  { number: "11609733", date: "2026-07-02", dueDate: "2026-08-01", amount: 920, outstanding: 0 },
  { number: "11610185", date: "2026-07-15", dueDate: "2026-08-14", amount: 1780.2, outstanding: 1780.2 },
  { number: "11610462", date: "2026-08-03", dueDate: "2026-09-02", amount: 430, outstanding: 0 },
  { number: "11610977", date: "2026-08-21", dueDate: "2026-09-20", amount: 1265.95, outstanding: 265.95 },
  { number: "11611306", date: "2026-09-08", dueDate: "2026-10-08", amount: 310.75, outstanding: 0 },
];

const inspirationColorFields = [
  {
    key: "primary",
    label: "Brand primary color",
    helper: "Select or customize the main brand colour for the separate inspiration area.",
    swatches: ["#616362", "#FFFFFF", "#073B82"],
  },
  {
    key: "background",
    label: "Brand background color",
    helper: "Select or customize the background colour of the branded storefront.",
    swatches: ["#F5F5F5", "#FFFFFF", "#D7D7D7"],
  },
  {
    key: "button",
    label: "Button color",
    helper: "Select or customize the button colour used on the inspiration area.",
    swatches: ["#616362", "#FFFFFF", "#073B82"],
  },
  {
    key: "buttonText",
    label: "Button text color",
    helper: "Use a colour with high contrast against the button colour.",
    swatches: ["#FFFFFF", "#616362", "#073B82"],
  },
];

const shopEmployees = [
  { lastName: "Hartley", firstName: "Nia", userName: "nia.hartley", lastLogin: "28-Aug-2025 16:17", pPrice: false, viewOnly: false },
  { lastName: "Mercer", firstName: "Felix", userName: "felix.mercer", lastLogin: "01-Jul-2026 10:12", pPrice: true, viewOnly: false },
  { lastName: "Quinn", firstName: "Elise", userName: "elise.quinn", lastLogin: "22-Sep-2025 11:25", pPrice: true, viewOnly: false },
  { lastName: "Laurent", firstName: "Theo", userName: "theo.laurent", lastLogin: "No matching records found", pPrice: false, viewOnly: false },
  { lastName: "Novak", firstName: "Mara", userName: "mara.novak", lastLogin: "No matching records found", pPrice: true, viewOnly: false },
  { lastName: "Bennett", firstName: "Oliver", userName: "oliver.bennett", lastLogin: "01-Jul-2026 14:17", pPrice: true, viewOnly: false },
  { lastName: "Foster", firstName: "Yara", userName: "yara.foster", lastLogin: "01-Jul-2026 11:55", pPrice: true, viewOnly: false },
  { lastName: "Kapoor", firstName: "Milan", userName: "milan.kapoor", lastLogin: "10-Jun-2026 11:34", pPrice: true, viewOnly: false },
];

let salesAssociates = [
  { id: "sales-sophie", name: "Sophie de Wit", partLevelLinking: "" },
  { id: "sales-luca", name: "Luca Moretti", partLevelLinking: "" },
  { id: "sales-amara", name: "Amara Singh", partLevelLinking: "" },
  { id: "sales-marco", name: "Felix Mercer", partLevelLinking: "" },
  { id: "sales-sam", name: "Elise Quinn", partLevelLinking: "" },
];

const shopItems = [
  { sequence: 0, item: "Informal jacket", enabled: true },
  { sequence: 0, item: "Informal jacket + trouser", enabled: true },
  { sequence: 0, item: "2-piece suit", enabled: true },
  { sequence: 0, item: "2-piece suit + extra trousers", enabled: true },
  { sequence: 0, item: "3-piece suit", enabled: true },
  { sequence: 0, item: "Jacket", enabled: true },
  { sequence: 0, item: "Trousers", enabled: true },
  { sequence: 0, item: "Waistcoat", enabled: true },
  { sequence: 0, item: "Bermudas", enabled: true },
  { sequence: 0, item: "Shirt", enabled: true },
  { sequence: 0, item: "Chinos", enabled: true },
  { sequence: 0, item: "Jeans / 5 Pockets", enabled: true },
  { sequence: 0, item: "Coat", enabled: true },
  { sequence: 0, item: "Detachable liner", enabled: true },
  { sequence: 0, item: "Coat + Detachable liner", enabled: true },
  { sequence: 0, item: "Overcoat", enabled: true },
  { sequence: 0, item: "Pea coat", enabled: true },
  { sequence: 0, item: "Tie", enabled: true },
  { sequence: 0, item: "Pocket square", enabled: true },
  { sequence: 0, item: "Bow tie", enabled: true },
  { sequence: 10, item: "Jacket + Bermudas", enabled: true },
  { sequence: 15, item: "3-piece suit + extra trousers", enabled: true },
  { sequence: 60, item: "Quilted vest", enabled: true },
  { sequence: 61, item: "Vest", enabled: true },
  { sequence: 73, item: "Cummerbund", enabled: true },
  { sequence: 74, item: "Knit", enabled: true },
  { sequence: 75, item: "Leisure pants", enabled: true },
  { sequence: 76, item: "Leisure shorts", enabled: true },
  { sequence: 77, item: "Scarf", enabled: true },
  { sequence: 78, item: "Beanie", enabled: true },
  { sequence: 79, item: "Formal round", enabled: true },
  { sequence: 80, item: "Premium Goodyear", enabled: true },
  { sequence: 81, item: "Contemporary round", enabled: true },
  { sequence: 82, item: "Sneaker", enabled: true },
  { sequence: 83, item: "City loafer", enabled: true },
  { sequence: 84, item: "Runner", enabled: true },
  { sequence: 85, item: "Belt - Made in Portugal", enabled: true },
];

const shopFitToolNames = [
  "Stooped posture",
  "Erect posture",
  "Take in 1/2 collar",
  "Raise collar",
  "Collar pleat",
  "Slope shoulder R",
  "Slope shoulder L",
  "Square shoulder R",
  "Square shoulder L",
  "Let out 1/2 shoulder",
  "Take in 1/2 shoulder",
  "Let out 1/2 back",
  "Take in 1/2 back",
  "Let out 1/2 chest front",
  "Take in 1/2 chest front",
  "Raise side pockets",
  "Lower side pockets",
  "Raise vent(s)",
  "Lower vent(s)",
  "Lengthen sleeve R",
  "Shorten sleeve R",
  "Lengthen sleeve L",
  "Shorten sleeve L",
  "Lengthen jacket",
  "Shorten jacket",
  "Lower closing button",
  "Raise closing button",
  "Chest dart",
  "Seat adjustment",
  "Balance front",
  "Balance back",
  "Armhole adjustment",
];

const enabledToolNames = (disabledNames = []) => shopFitToolNames.map((name) => ({ name, enabled: !disabledNames.includes(name) }));

const shopFitToolParts = [
  {
    id: "jacket",
    part: "Jacket",
    fits: [
      { id: "comfort", name: "Comfort", tools: enabledToolNames(["Lower closing button", "Raise closing button"]) },
      { id: "slim", name: "Slim", tools: enabledToolNames(["Let out 1/2 shoulder", "Let out 1/2 back", "Raise collar", "Lower vent(s)", "Chest dart", "Seat adjustment"]) },
      { id: "classic", name: "Classic", tools: enabledToolNames([]) },
      { id: "modern", name: "Modern", tools: enabledToolNames(["Collar pleat", "Lower side pockets", "Balance back"]) },
      { id: "relaxed", name: "Relaxed", tools: enabledToolNames(["Take in 1/2 collar", "Take in 1/2 shoulder", "Take in 1/2 chest front"]) },
    ],
  },
  {
    id: "overcoat",
    part: "Overcoat",
    fits: [
      { id: "standard", name: "Standard", tools: enabledToolNames(["Chest dart", "Lower closing button"]) },
    ],
  },
  {
    id: "trousers",
    part: "Trousers",
    fits: [
      { id: "regular", name: "Regular", tools: enabledToolNames(["Armhole adjustment", "Collar pleat", "Raise collar", "Lower vent(s)"]) },
      { id: "slim", name: "Slim", tools: enabledToolNames(["Let out 1/2 shoulder", "Let out 1/2 back", "Raise side pockets", "Lower side pockets", "Balance back"]) },
      { id: "relaxed", name: "Relaxed", tools: enabledToolNames(["Take in 1/2 collar", "Take in 1/2 shoulder", "Take in 1/2 back"]) },
    ],
  },
];

const customerFieldGroups = [
  {
    group: "Basic",
    fields: [
      { key: "firstName", label: "First name", form: true, overview: true, mandatory: true },
      { key: "lastName", label: "Last name", form: true, overview: true, mandatory: true },
      { key: "initials", label: "Initials", form: false, overview: false, mandatory: false },
      { key: "suffix", label: "Suffix", form: false, overview: false, mandatory: false },
      { key: "address", label: "Address", form: true, overview: true, mandatory: false },
      { key: "postalCode", label: "Postal code", form: true, overview: true, mandatory: false },
      { key: "city", label: "City", form: true, overview: true, mandatory: false },
      { key: "country", label: "Country", form: true, overview: true, mandatory: false },
      { key: "dateOfBirth", label: "Date of birth", form: true, overview: true, mandatory: false },
      { key: "phoneNumber", label: "Phone number", form: true, overview: true, mandatory: false },
      { key: "mobileNumber", label: "Mobile number", form: true, overview: true, mandatory: false },
      { key: "email", label: "E-mail", form: true, overview: true, mandatory: false },
      { key: "referredBy", label: "Referred by", form: false, overview: false, mandatory: false },
      { key: "keepInformed", label: "Keep informed", form: true, overview: false, mandatory: false },
      { key: "paLead", label: "PA Lead", form: false, overview: false, mandatory: false },
    ],
  },
  {
    group: "Company",
    fields: [
      { key: "companyName", label: "Company name", form: true, overview: true, mandatory: false },
      { key: "companyAddress", label: "Company address", form: true, overview: true, mandatory: false },
      { key: "companyPostalCode", label: "Company postal code", form: true, overview: true, mandatory: false },
      { key: "companyCity", label: "Company city", form: true, overview: true, mandatory: false },
      { key: "customerProject", label: "Customer project", form: true, overview: true, mandatory: false },
    ],
  },
];

let customCustomerFields = [
  { id: "custom-shoe-size", name: "Shoe size", appearsAfter: "Date of birth", overview: false, mandatory: false, searchVisible: false },
  { id: "custom-promo", name: "Название промо акции", appearsAfter: "Last name", overview: false, mandatory: false, searchVisible: false },
  { id: "custom-3", name: "", appearsAfter: "City", overview: false, mandatory: false, searchVisible: false },
  { id: "custom-4", name: "", appearsAfter: "Mobile number", overview: false, mandatory: false, searchVisible: false },
  { id: "custom-5", name: "", appearsAfter: "Date of birth", overview: false, mandatory: false, searchVisible: false },
];

const customFieldPlacementOptions = [
  "First name",
  "Last name",
  "Initials",
  "Suffix",
  "Address",
  "Postal code",
  "City",
  "Country",
  "Date of birth",
  "Phone number",
  "Mobile number",
  "E-mail",
  "Referred by",
  "Keep informed",
  "PA Lead",
  "Company name",
  "Company address",
  "Company postal code",
  "Company city",
  "Customer project",
];

const fabricSelectOptions = {
  item: ["2 piece suit", "Jacket", "Trousers", "Waistcoats", "3-piece suits", "Bermudas", "Informal jacket"],
  make: ["traditional", "traditional full canvas", "handmade", "unconstructed", "unconstructed handmade"],
  cl: ["Any", "Yes", "No"],
  availability: ["Available", "Sold out"],
  extraDays: ["Yes", "No"],
  atelier: ["Both atelier", "Suits A", "Suits B"],
  bunches: ["Seasonal", "Core", "Archive"],
  season: ["FW27", "FW26", "FW21", "SS24", "SS20"],
  composition: ["Wool", "Wool silk", "Linen blend"],
};

const fabricFilterDefinitions = {
  availability: { label: "Availability", placeholder: "Any status", width: "sm:w-[176px]", type: "select" },
  soldOutSince: { label: "Sold out since", placeholder: "", width: "sm:w-[176px]", type: "date" },
  extraDays: { label: "Extra days", placeholder: "Any", width: "sm:w-[150px]", type: "select" },
  atelier: { label: "Atelier", placeholder: "Any atelier", width: "sm:w-[172px]", type: "select" },
  bunches: { label: "Bunches", placeholder: "Any bunch", width: "sm:w-[172px]", type: "select" },
  season: { label: "Season", placeholder: "Any season", width: "sm:w-[158px]", type: "select" },
  composition: { label: "Composition", placeholder: "Any composition", width: "sm:w-[204px]", type: "select" },
};

const fabricInventory = [
  {
    id: "F360484-15",
    note: "Cut Length",
    swatch: "#747560",
    availability: "Available",
    soldOutSince: "-",
    cutLength: true,
    extraDays: "+10 days",
    priceCat: "CM AA, RM AA",
    onOrder: "120",
    atelier: "Suits A",
    item: "Jacket",
    make: "traditional",
    cl: "Yes",
    bunches: "Seasonal",
    composition: "Wool",
    description: "S100-310gr",
    collection: "Seasonal",
    season: "FW27",
  },
  {
    id: "F360484-12",
    note: "",
    swatch: "#1cae9c",
    availability: "Sold out",
    soldOutSince: "12-Feb-2020",
    cutLength: false,
    extraDays: "-",
    priceCat: "CM AA, RM AA",
    onOrder: "-",
    atelier: "Suits A",
    item: "2 piece suit",
    make: "traditional full canvas",
    cl: "No",
    bunches: "Seasonal",
    composition: "Wool silk",
    description: "S100-280gr",
    collection: "Seasonal",
    season: "FW26",
  },
  {
    id: "FM11789-49",
    note: "",
    swatch: "#969b55",
    availability: "Available",
    soldOutSince: "-",
    cutLength: false,
    extraDays: "-",
    priceCat: "CM CLO1, RM CLO1, AM RM CLO1",
    onOrder: "300",
    atelier: "Suits B",
    item: "Trousers",
    make: "handmade",
    cl: "No",
    bunches: "Core",
    composition: "Wool",
    description: "S130-280gr",
    collection: "Seasonal",
    season: "FW21",
  },
  {
    id: "FM11797-65",
    note: "",
    swatch: "#0f4699",
    availability: "Sold out",
    soldOutSince: "13-Apr-2021",
    cutLength: false,
    extraDays: "-",
    priceCat: "CM CLO1,RM CLO1, AM RM CLO1",
    onOrder: "-",
    atelier: "Suits B",
    item: "Waistcoats",
    make: "unconstructed",
    cl: "No",
    bunches: "Archive",
    composition: "Wool silk",
    description: "S120-260gr",
    collection: "Seasonal",
    season: "SS24",
  },
  {
    id: "FM12009-28",
    note: "Cut Length",
    swatch: "#0f4699",
    availability: "Available",
    soldOutSince: "-",
    cutLength: true,
    extraDays: "-",
    priceCat: "03-Mar-2026",
    onOrder: "46",
    atelier: "Suits B",
    item: "Informal jacket",
    make: "unconstructed handmade",
    cl: "Yes",
    bunches: "Core",
    composition: "Linen blend",
    description: "S110-260gr",
    collection: "Seasonal",
    season: "SS20",
  },
];

const generatedFabricItems = ["2 piece suit", "Jacket", "Trousers", "Waistcoats", "3-piece suits", "Bermudas", "Informal jacket"];
const generatedFabricMakes = ["traditional", "traditional full canvas", "handmade", "unconstructed", "unconstructed handmade"];
const generatedFabricSeasons = ["FW27", "FW26", "FW24", "SS24", "SS23", "FW21", "SS20"];
const generatedFabricSwatches = ["#6f735b", "#1a7f74", "#233f87", "#8e9273", "#4f4741", "#9bafa1", "#493f5c", "#c0a875", "#2f4f4f"];

fabricInventory.push(
  ...Array.from({ length: 145 }, (_, index) => {
    const cutLength = index % 4 === 0 || index % 9 === 0;
    const soldOut = index % 5 === 1 || index % 8 === 3;
    const item = index % 3 === 0 ? "2 piece suit" : generatedFabricItems[index % generatedFabricItems.length];
    const make = index % 3 === 0 ? "traditional" : generatedFabricMakes[index % generatedFabricMakes.length];
    const season = generatedFabricSeasons[index % generatedFabricSeasons.length];
    const weightStart = 100 + ((index * 5) % 45);
    const weightEnd = 240 + ((index * 10) % 90);

    return {
      id: `FM${String(12100 + index).padStart(5, "0")}-${String(((index + 3) * 7) % 90 + 10).padStart(2, "0")}`,
      note: cutLength ? "Cut Length" : "",
      swatch: generatedFabricSwatches[index % generatedFabricSwatches.length],
      availability: soldOut ? "Sold out" : "Available",
      soldOutSince: soldOut ? `${String((index % 24) + 1).padStart(2, "0")}-${["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index % 6]}-${2020 + (index % 5)}` : "-",
      cutLength,
      extraDays: cutLength ? `+${10 + (index % 4) * 5} days` : "-",
      priceCat: index % 3 === 0 ? "CM AA, RM AA" : index % 3 === 1 ? "CM CLO1, RM CLO1, AM RM CLO1" : "CM PREMIUM, RM PREMIUM",
      onOrder: soldOut ? "-" : String(40 + ((index * 17) % 280)),
      atelier: index % 2 === 0 ? "Suits A" : "Suits B",
      item,
      make,
      cl: cutLength ? "Yes" : "No",
      bunches: index % 3 === 0 ? "Seasonal" : index % 3 === 1 ? "Core" : "Archive",
      composition: index % 4 === 0 ? "Linen blend" : index % 4 === 1 ? "Wool silk" : "Wool",
      description: `S${weightStart}-${weightEnd}gr`,
      collection: index % 4 === 0 ? "Core" : index % 4 === 1 ? "Archive" : "Seasonal",
      season,
    };
  }),
);

const labelInventory = [
  { id: "Hangtag", code: "10444", swatch: "#18294c", availability: "Available", productionCode: "H BL-8", atelier: "Suits A" },
  { id: "Hangtag", code: "336", swatch: "#0b1c2d", availability: "Low Stock", productionCode: "H BL-8", atelier: "Made in Italy" },
  { id: "Hangtag", code: "-", swatch: "#263e52", availability: "Unavailable", productionCode: "H BL-8", atelier: "Suits B / Outerwear" },
  { id: "Hangtag", code: "10444", swatch: "#d8c69a", availability: "Available", productionCode: "H BL-8", atelier: "Suits B / Outerwear" },
  { id: "Hangtag", code: "10444", swatch: "#c4b579", availability: "Available", productionCode: "H BL-8", atelier: "Suits A" },
  { id: "Hangtag", code: "-", swatch: "#6c7e8e", availability: "Unavailable", productionCode: "H BL-8", atelier: "Suits B / Outerwear" },
  { id: "Hangtag", code: "65.61m", swatch: "#444947", availability: "Available", productionCode: "H BL-8", atelier: "Suits A" },
  { id: "Hangtag", code: "16.3m", swatch: "#2d702f", availability: "Available", productionCode: "H-BL-08-92", atelier: "Suits A" },
  { id: "Hangtag", code: "156.91m", swatch: "#397a55", availability: "Available", productionCode: "H-BL-08-92", atelier: "Suits B / Outerwear" },
  { id: "Hangtag", code: "32.20m", swatch: "#15483d", availability: "Available", productionCode: "H-BL-08-92", atelier: "Suits B / Outerwear" },
];

const labelStatusCycle = ["Available", "Available", "Available", "Low Stock", "Available", "Unavailable", "Unavailable"];
const labelAteliers = ["Suits A", "Made in Italy", "Suits B / Outerwear", "Outerwear A", "Shirts A"];
const labelSwatches = ["#18294c", "#0b1c2d", "#263e52", "#d8c69a", "#c4b579", "#6c7e8e", "#444947", "#2d702f", "#397a55", "#15483d"];

labelInventory.push(
  ...Array.from({ length: 139 }, (_, index) => ({
    id: index % 5 === 0 ? "Care label" : index % 4 === 0 ? "Brand label" : "Hangtag",
    code: index % 6 === 0 ? `${48 + index}.0m` : index % 3 === 0 ? "10444" : String(340 + index),
    swatch: labelSwatches[index % labelSwatches.length],
    availability: labelStatusCycle[index % labelStatusCycle.length],
    productionCode: index % 4 === 0 ? "H-BL-08-92" : "H BL-8",
    atelier: labelAteliers[index % labelAteliers.length],
  })),
);

const fabricPriceItems = [
  "2-piece suit",
  "Jacket",
  "Trousers",
  "Waistcoat",
  "3-piece suit",
  "2-piece suit + extra trousers",
  "3-piece suit + extra trousers",
  "Bermudas",
  "Jacket + Bermudas",
  "Overcoat",
  "Pea coat",
];

const el = (id) => document.getElementById(id);

function initAmbientPixelGrid() {
  const canvas = el("ambientPixelGrid");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  const cellSize = 32;
  const state = {
    width: 0,
    height: 0,
    dpr: 1,
    columns: 0,
    rows: 0,
    brightness: [],
    chroma: [],
    base: [250, 250, 248],
    primary: [106, 108, 107],
    seam: [230, 231, 226],
    isDark: false,
    noiseAmount: 0.014,
    chromaAmount: 0.008,
    glowStrength: 0.075,
    seamAlpha: 0.28,
    target: { x: window.innerWidth * 0.58, y: window.innerHeight * 0.38 },
    glow: { x: window.innerWidth * 0.58, y: window.innerHeight * 0.38 },
  };

  function clamp(value, min = 0, max = 255) {
    return Math.max(min, Math.min(max, value));
  }

  function hslToRgb(h, s, l) {
    const hue = (((h % 360) + 360) % 360) / 360;
    const sat = s / 100;
    const light = l / 100;
    if (sat === 0) {
      const gray = Math.round(light * 255);
      return [gray, gray, gray];
    }
    const q = light < 0.5 ? light * (1 + sat) : light + sat - light * sat;
    const p = 2 * light - q;
    const hueToRgb = (tValue) => {
      let t = tValue;
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    return [
      Math.round(hueToRgb(hue + 1 / 3) * 255),
      Math.round(hueToRgb(hue) * 255),
      Math.round(hueToRgb(hue - 1 / 3) * 255),
    ];
  }

  function readHslVariable(name, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const match = raw.match(/(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)%/);
    if (!match) return fallback;
    return hslToRgb(Number(match[1]), Number(match[2]), Number(match[3]));
  }

  function mixRgb(a, b, amount) {
    return [
      a[0] + (b[0] - a[0]) * amount,
      a[1] + (b[1] - a[1]) * amount,
      a[2] + (b[2] - a[2]) * amount,
    ];
  }

  function rgba(color, alpha = 1) {
    return `rgba(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])}, ${alpha})`;
  }

  function refreshColors() {
    state.isDark = document.documentElement.dataset.mode === "dark";
    state.base = readHslVariable("--dashboard-background", state.base);
    const primary = readHslVariable("--primary", state.primary);
    const primaryForeground = readHslVariable("--primary-foreground", [255, 255, 255]);
    state.primary = state.isDark ? mixRgb(primary, primaryForeground, 0.16) : primary;
    const foreground = readHslVariable("--foreground", [0, 0, 0]);
    state.seam = mixRgb(state.base, foreground, state.isDark ? 0.11 : 0.035);
    state.noiseAmount = state.isDark ? 0.022 : 0.014;
    state.chromaAmount = state.isDark ? 0.014 : 0.008;
    state.glowStrength = state.isDark ? 0.14 : 0.075;
    state.seamAlpha = state.isDark ? 0.42 : 0.28;
  }

  function randomizeCells() {
    const total = state.columns * state.rows;
    state.brightness = Array.from({ length: total }, () => (Math.random() - 0.5) * state.noiseAmount);
    state.chroma = Array.from({ length: total }, () => (Math.random() - 0.5) * state.chromaAmount);
  }

  function resize() {
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    canvas.width = Math.ceil(state.width * state.dpr);
    canvas.height = Math.ceil(state.height * state.dpr);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    const columns = Math.ceil(state.width / cellSize) + 1;
    const rows = Math.ceil(state.height / cellSize) + 1;
    refreshColors();
    if (columns !== state.columns || rows !== state.rows) {
      state.columns = columns;
      state.rows = rows;
      randomizeCells();
    }
  }

  function draw() {
    state.glow.x += (state.target.x - state.glow.x) * 0.02;
    state.glow.y += (state.target.y - state.glow.y) * 0.02;

    context.clearRect(0, 0, state.width, state.height);
    context.fillStyle = rgba(state.base, 1);
    context.fillRect(0, 0, state.width, state.height);

    const radius = Math.max(360, Math.min(state.width * 0.52, 760));
    for (let row = 0; row < state.rows; row += 1) {
      for (let column = 0; column < state.columns; column += 1) {
        const index = row * state.columns + column;
        const x = column * cellSize;
        const y = row * cellSize;
        const centerX = x + cellSize / 2;
        const centerY = y + cellSize / 2;
        const distance = Math.hypot(centerX - state.glow.x, centerY - state.glow.y);
        const falloff = Math.max(0, 1 - distance / radius);
        const influence = Math.pow(falloff, 2.8) * state.glowStrength;
        const colorNoise = influence > 0 ? state.chroma[index] : 0;
        const baseBrightness = 1 + state.brightness[index];
        const colored = mixRgb(state.base, state.primary, Math.max(0, influence + colorNoise));
        context.fillStyle = rgba([
          clamp(colored[0] * baseBrightness),
          clamp(colored[1] * baseBrightness),
          clamp(colored[2] * baseBrightness),
        ]);
        context.fillRect(x, y, cellSize, cellSize);
      }
    }

    context.strokeStyle = rgba(state.seam, state.seamAlpha);
    context.lineWidth = 1;
    context.beginPath();
    for (let x = 0.5; x <= state.width + cellSize; x += cellSize) {
      context.moveTo(x, 0);
      context.lineTo(x, state.height);
    }
    for (let y = 0.5; y <= state.height + cellSize; y += cellSize) {
      context.moveTo(0, y);
      context.lineTo(state.width, y);
    }
    context.stroke();

    window.requestAnimationFrame(draw);
  }

  window.addEventListener("pointermove", (event) => {
    state.target.x = event.clientX;
    state.target.y = event.clientY;
  });
  window.addEventListener("resize", resize);
  window.refreshAmbientPixelGrid = () => {
    refreshColors();
    randomizeCells();
  };

  new MutationObserver(window.refreshAmbientPixelGrid).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "data-mode"],
  });

  resize();
  draw();
}

function translateRaw(value) {
  if (state.language !== "fr") return value;
  const trimmed = value.trim();
  if (!trimmed) return value;
  if (fr[trimmed]) return value.replace(trimmed, fr[trimmed]);
  const itemMatch = trimmed.match(/^(\d+) items$/);
  if (itemMatch) return value.replace(trimmed, `${itemMatch[1]} articles`);
  const totalRecordMatch = trimmed.match(/^Total record\(s\) (\d+)$/);
  if (totalRecordMatch) return value.replace(trimmed, `Total des enregistrements ${totalRecordMatch[1]}`);
  const delayMatch = trimmed.match(/^(\d+) week(s)? delay$/);
  if (delayMatch) return value.replace(trimmed, `${delayMatch[1]} semaine${delayMatch[1] === "1" ? "" : "s"} de retard`);
  const invoiceDownloadMatch = trimmed.match(/^Invoice (.+) download ready\.$/);
  if (invoiceDownloadMatch) return value.replace(trimmed, `Téléchargement de la facture ${invoiceDownloadMatch[1]} prêt.`);
  const downloadInvoiceMatch = trimmed.match(/^Download invoice (.+)$/);
  if (downloadInvoiceMatch) return value.replace(trimmed, `Télécharger la facture ${downloadInvoiceMatch[1]}`);
  const themeAppliedMatch = trimmed.match(/^(.+) theme applied\.$/);
  if (themeAppliedMatch) return value.replace(trimmed, `Thème ${fr[themeAppliedMatch[1]] || themeAppliedMatch[1]} appliqué.`);
  const modeAppliedMatch = trimmed.match(/^(.+) mode applied\.$/);
  if (modeAppliedMatch) return value.replace(trimmed, `Mode ${fr[modeAppliedMatch[1]] || modeAppliedMatch[1]} appliqué.`);
  const addedMatch = trimmed.match(/^(.+) added\.$/);
  if (addedMatch) return value.replace(trimmed, `${addedMatch[1]} ajouté.`);
  const deletedMatch = trimmed.match(/^(.+) deleted\.$/);
  if (deletedMatch) return value.replace(trimmed, `${deletedMatch[1]} supprimé.`);
  const labelValueMatch = trimmed.match(/^(.+): (.+)$/);
  if (labelValueMatch && fr[labelValueMatch[1]]) return value.replace(trimmed, `${fr[labelValueMatch[1]]} : ${labelValueMatch[2]}`);
  const ofMatch = trimmed.match(/^of (\d+)$/);
  if (ofMatch) return value.replace(trimmed, `sur ${ofMatch[1]}`);
  const latestMatch = trimmed.match(/^Latest: (.+)$/);
  if (latestMatch) return value.replace(trimmed, `Dernier : ${latestMatch[1]}`);
  const fitMatch = trimmed.match(/^Fit - (.+)$/);
  if (fitMatch) return value.replace(trimmed, `Coupe - ${fr[fitMatch[1]] || fitMatch[1]}`);
  const tryOnMatch = trimmed.match(/^TryOn - (.+)$/);
  if (tryOnMatch) return value.replace(trimmed, `Essayage - ${tryOnMatch[1]}`);
  const createdByMatch = trimmed.match(/^Created by (.+)$/);
  if (createdByMatch) return value.replace(trimmed, `Créé par ${createdByMatch[1]}`);
  const lastUpdatedMatch = trimmed.match(/^Last updated (.+)$/);
  if (lastUpdatedMatch) return value.replace(trimmed, `Dernière mise à jour ${lastUpdatedMatch[1]}`);
  const fitProfileMatch = trimmed.match(/^FitProfile - (.+)$/);
  if (fitProfileMatch) return value.replace(trimmed, `Profil d'ajustement - ${fitProfileMatch[1]}`);
  const openedOrderMatch = trimmed.match(/^Opened order (.+)\.$/);
  if (openedOrderMatch) return value.replace(trimmed, `Commande ${openedOrderMatch[1]} ouverte.`);
  const exportMatch = trimmed.match(/^Export ready for (\d+) customers\.$/);
  if (exportMatch) return value.replace(trimmed, `Export prêt pour ${exportMatch[1]} clients.`);
  const orderExportMatch = trimmed.match(/^Export ready for (\d+) orders\.$/);
  if (orderExportMatch) return value.replace(trimmed, `Export prêt pour ${orderExportMatch[1]} commandes.`);
  const fitStartedMatch = trimmed.match(/^FitProfile started for (.+)\.$/);
  if (fitStartedMatch) return value.replace(trimmed, `Profil d'ajustement démarré pour ${fitStartedMatch[1]}.`);
  const editingProfileMatch = trimmed.match(/^Editing (.+)\.$/);
  if (editingProfileMatch) return value.replace(trimmed, `Modification de ${editingProfileMatch[1]}.`);
  const printReadyMatch = trimmed.match(/^Print ready for (.+)\.$/);
  if (printReadyMatch) return value.replace(trimmed, `Impression prête pour ${printReadyMatch[1]}.`);
  const profileStatusMatch = trimmed.match(/^(.+) is now (active|inactive)\.$/);
  if (profileStatusMatch) return value.replace(trimmed, `${profileStatusMatch[1]} est maintenant ${profileStatusMatch[2] === "active" ? "actif" : "inactif"}.`);
  const selectedMatch = trimmed.match(/^(.+) selected\.$/);
  if (selectedMatch) return value.replace(trimmed, `${fr[selectedMatch[1]] || selectedMatch[1]} sélectionné.`);
  const comingNextMatch = trimmed.match(/^(.+) coming next\.$/);
  if (comingNextMatch) return value.replace(trimmed, `${fr[comingNextMatch[1]] || comingNextMatch[1]} arrive bientôt.`);
  return value;
}

function setText(target, value) {
  const node = typeof target === "string" ? el(target) : target;
  if (!node) return;
  node.dataset.i18nOriginalText = value;
  node.textContent = state.language === "fr" ? translateRaw(value) : value;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function translatePage(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "SVG", "PATH"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.parentElement.dataset.i18nOriginalText) node.parentElement.dataset.i18nOriginalText = node.nodeValue;
    const original = node.parentElement.dataset.i18nOriginalText;
    node.nodeValue = state.language === "fr" ? translateRaw(original) : original;
  });

  root.querySelectorAll?.("[placeholder], [title]").forEach((node) => {
    ["placeholder", "title"].forEach((attr) => {
      if (!node.hasAttribute(attr)) return;
      const originalAttr = `i18nOriginal${attr[0].toUpperCase()}${attr.slice(1)}`;
      if (!node.dataset[originalAttr]) node.dataset[originalAttr] = node.getAttribute(attr);
      const original = node.dataset[originalAttr];
      node.setAttribute(attr, state.language === "fr" ? translateRaw(original) : original);
    });
  });
}

function applyLanguage() {
  localStorage.setItem("relocate-language", state.language);
  document.documentElement.lang = state.language === "fr" ? "fr" : "en";
  document.querySelectorAll("[data-language-check]").forEach((check) => {
    check.classList.toggle("hidden", check.dataset.languageCheck !== state.language);
  });
  renderPrimaryNavigation();
  if (state.currentPage === "home") renderDashboard();
  if (state.currentPage === "overview") renderRows();
  if (state.currentPage === "detail") renderCustomerAccount(customers.find((customer) => customer.id === state.selectedCustomerId) || customers[0]);
  if (state.currentPage === "createFitProfile") renderCreateFitProfileWorkspace();
  if (state.currentPage === "onePageOrder") renderOnePageOrderPage();
  if (state.currentPage === "orders") renderOrdersPage();
  if (state.currentPage === "orderDetail") renderOrderDetailTab();
  if (state.currentPage === "fabricInventory") renderFabricInventory();
  if (state.currentPage === "labelInventory") renderLabelInventory();
  if (state.currentPage === "shopSettings") renderShopSettingsPage();
  if (state.currentPage === "deliveryCalendar") renderDeliveryCalendar();
  if (state.currentPage === "invoices") renderInvoicesPage();
  if (state.currentPage === "downloads") renderDownloadsPage();
  if (el("reportIssueModal")?.classList.contains("open")) renderReportIssueModal();
  if (el("accountSettingsModal")?.classList.contains("open")) renderAccountSettingsModal();
  translatePage();
}

function fullName(customer) {
  return `${customer.firstName} ${customer.lastName}`.trim();
}

function currentCustomer() {
  return customers.find((customer) => customer.id === state.selectedCustomerId) || customers[0];
}

function customerEmailDisplay(customer) {
  if (!state.gdprMaskEnabled) return customer.email;
  const first = (customer.firstName || "John").replace(/[^a-z]/gi, "").slice(0, 2).toLowerCase() || "jo";
  const last = (customer.lastName || "Doe").replace(/[^a-z]/gi, "").slice(-2).toLowerCase() || "oe";
  return `${first}••••${last}@example.com`;
}

function initials(customer) {
  return `${customer.firstName[0] || ""}${customer.lastName[0] || ""}`.toUpperCase();
}

function fullAddress(customer) {
  return [customer.address, customer.city].filter(Boolean).join(", ");
}

function icon(name, classes = "") {
  const icons = {
    dots: '<path d="M12 8h.01M12 12h.01M12 16h.01"></path>',
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
    calendar: '<path d="M8 2v4M16 2v4M3 10h18"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path>',
    edit: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>',
    "book-open": '<path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3V6a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1z"></path><path d="M21 18a1 1 0 0 0-1-1h-5a3 3 0 0 0-3 3V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1z"></path>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.5-3.5a2 2 0 0 0-2.83 0L6 20"></path>',
    play: '<polygon points="6 3 20 12 6 21 6 3"></polygon>',
    trash: '<path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m6 6 1 14h10l1-14"></path><path d="M10 11v5M14 11v5"></path>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22V15"></path>',
    printer: '<path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.7 6.1L3 16"></path><path d="M3 21v-5h5"></path><path d="M3 12a9 9 0 0 1 15.7-6.1L21 8"></path><path d="M21 3v5h-5"></path>',
    plus: '<path d="M12 5v14M5 12h14"></path>',
    minus: '<path d="M5 12h14"></path>',
    check: '<path d="m5 12 4 4L19 6"></path>',
    square: '<rect x="5" y="5" width="14" height="14" rx="2"></rect>',
    "check-square": '<rect x="5" y="5" width="14" height="14" rx="2"></rect><path d="m8.5 12 2.5 2.5L16 9"></path>',
    "minus-square": '<rect x="5" y="5" width="14" height="14" rx="2"></rect><path d="M9 12h6"></path>',
    "arrow-left": '<path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>',
    "arrow-up": '<path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path>',
    "arrow-down": '<path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path>',
    "arrow-up-down": '<path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path>',
    "chevron-left": '<path d="m15 18-6-6 6-6"></path>',
    "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
    "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
    "chevrons-left": '<path d="m11 17-5-5 5-5"></path><path d="m18 17-5-5 5-5"></path>',
    "chevrons-right": '<path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path>',
    info: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  };
  return `<svg class="icon ${classes}" viewBox="0 0 24 24">${icons[name] || ""}</svg>`;
}

function fieldValue(customer, key) {
  if (key === "address") return fullAddress(customer);
  return String(customer[key] || "");
}

function getQuickQuery() {
  return el("customerSearch").value.trim().toLowerCase();
}

function filteredCustomers() {
  const query = getQuickQuery();
  return customers.filter((customer) => {
    const searchable = [
      customer.firstName,
      customer.lastName,
      fullName(customer),
      customer.email,
      customer.mobile,
      customer.phone,
      customer.address,
      customer.city,
      customer.postcode,
      customer.company,
      customer.status,
    ]
      .join(" ")
      .toLowerCase();

    const quickMatch = !query || searchable.includes(query);
    const advancedMatch = Object.entries(state.advancedFilters).every(([key, value]) =>
      fieldValue(customer, key).toLowerCase().includes(value.toLowerCase()),
    );
    return quickMatch && advancedMatch;
  });
}

function statusMarkup(status) {
  const cls = status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600";
  return `<span class="status ${cls}">${status}</span>`;
}

function orderStatusClass(status) {
  return {
    "In workshop": "bg-sky-100 text-sky-700",
    "On hold": "bg-orange-50 text-orange-600",
    Processed: "bg-emerald-50 text-emerald-700",
    "Out for delivery": "bg-emerald-50 text-emerald-700",
    Received: "bg-secondary text-foreground",
    "Payment Requested": "bg-yellow-100 text-yellow-800",
    "RM Draft approval in process": "bg-sky-100 text-sky-700",
    "Process pending": "bg-secondary text-muted-foreground",
    "In transit": "bg-sky-100 text-sky-700",
    "In alteration": "bg-purple-100 text-purple-700",
    "Delivered to customer": "bg-emerald-50 text-emerald-700",
    Cancelled: "bg-red-50 text-red-600",
    "Partial ReMade": "bg-orange-50 text-orange-600",
    ReMade: "bg-orange-50 text-orange-600",
    "Refused by customer": "bg-red-50 text-red-600",
    "Partial Refused by customer": "bg-red-50 text-red-600",
    New: "bg-sky-100 text-sky-700",
    Ordered: "bg-emerald-50 text-emerald-700",
  }[status] || "bg-secondary text-muted-foreground";
}

function orderStatusMarkup(status, orderId = "") {
  const cls = orderStatusClass(status);
  if (orderId) {
    return `
      <button class="status order-status-chip ${cls}" data-order-status-chip="${escapeAttr(orderId)}" type="button" aria-haspopup="menu" title="Change order status">
        <span>${escapeHtml(status)}</span>
        <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
    `;
  }
  return `<span class="status ${cls}">${escapeHtml(status)}</span>`;
}

function softFilterMark(selected, partial = false) {
  if (!selected && !partial) return "";
  return `
    <svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24">
      ${partial ? '<path d="M5 12h14"></path>' : '<path d="m5 12 4 4L19 6"></path>'}
    </svg>
  `;
}

function renderOrdersStatusMenu() {
  const query = state.ordersStatusQuery.trim().toLowerCase();
  const statusOptions = ordersStatusOptionsForCurrentView();
  const visibleStatuses = statusOptions.filter((status) => !query || status.toLowerCase().includes(query));
  const allSelected = statusOptions.length > 0 && statusOptions.every((status) => state.ordersStatusFilter.has(status));
  const someSelected = statusOptions.some((status) => state.ordersStatusFilter.has(status)) && !allSelected;
  const menu = el("ordersStatusMenu");
  if (state.activeOrdersStatusPosition) {
    const width = Math.min(Math.max(state.activeOrdersStatusPosition.width, 320), window.innerWidth - 32);
    const left = Math.min(Math.max(state.activeOrdersStatusPosition.left, 16), window.innerWidth - width - 16);
    menu.style.left = `${left}px`;
    menu.style.top = `${state.activeOrdersStatusPosition.top}px`;
    menu.style.width = `${width}px`;
  }
  el("ordersStatusOptions").innerHTML = `
    <button class="fabric-select-option ${allSelected ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-orders-status-action="selectAll" type="button">
      <span>Select all</span>
      ${softFilterMark(allSelected, someSelected)}
    </button>
    ${visibleStatuses
      .map(
        (status) => `
          <button class="fabric-select-option flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-orders-status-option="${status}" type="button">
            <span class="min-w-0 truncate">${escapeHtml(status)}</span>
            ${softFilterMark(state.ordersStatusFilter.has(status))}
          </button>
        `,
      )
    .join("")}
  `;
  const searchInput = el("ordersStatusSearch");
  if (searchInput) searchInput.value = state.ordersStatusQuery;
}

function renderOrdersPrintMenu() {
  const menu = el("ordersPrintMenu");
  if (!menu) return;
  if (!state.activeOrdersPrintPosition) {
    menu.classList.remove("open");
    return;
  }
  const width = Math.min(Math.max(state.activeOrdersPrintPosition.width, 260), window.innerWidth - 32);
  const left = Math.min(Math.max(state.activeOrdersPrintPosition.left, 16), window.innerWidth - width - 16);
  menu.style.left = `${left}px`;
  menu.style.top = `${state.activeOrdersPrintPosition.top}px`;
  menu.style.width = `${width}px`;
  menu.innerHTML = ordersPrintOptions
    .map(
      (item) => `
        <button class="popout-item justify-start" data-orders-print-option="${item.key}" type="button">
          <span>${escapeHtml(item.label)}</span>
        </button>
      `,
    )
    .join("");
  translatePage(menu);
  menu.classList.add("open");
}

function ordersStatusLabel() {
  const count = state.ordersStatusFilter.size;
  if (!count) return "Order status";
  if (count === 1) return Array.from(state.ordersStatusFilter)[0];
  return `${count} order statuses`;
}

function syncOrdersStatusFields() {
  document.querySelectorAll(".orders-status-label").forEach((label) => {
    const active = state.ordersStatusFilter.size > 0;
    label.textContent = ordersStatusLabel();
    label.classList.toggle("text-muted-foreground", !active);
    label.classList.toggle("text-foreground", active);
  });
}

function syncOrdersSelectField(key) {
  document.querySelectorAll(`[data-orders-select="${key}"]`).forEach((field) => {
    const values = state.ordersFilters[key] || new Set();
    const value = values.size === 1 ? Array.from(values)[0] : "";
    const option = ordersSelectOptionsForCurrentView(key).find((item) => (typeof item === "string" ? item : item.value) === value);
    const displayValue = typeof option === "object" ? option.label : value;
    field.dataset.value = value;
    const label = field.querySelector(".fabric-select-label");
    if (!label) return;
    label.textContent = values.size > 1 ? `${values.size} selected` : displayValue || field.dataset.filterPlaceholder || "Any";
    label.classList.toggle("text-muted-foreground", !values.size);
    label.classList.toggle("text-foreground", Boolean(values.size));
  });
}

function syncOrdersDateFilterField(key, value) {
  state.ordersDateFilters[key] = value || "";
  document.querySelectorAll(`[data-orders-date-filter="${key}"]`).forEach((field) => {
    field.value = value || "";
    syncDateDisplayFor(field);
  });
}

function formatIsoDateForDisplay(value) {
  if (!value) return "";
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return value;
  return `${match[3]}-${match[2]}-${match[1]}`;
}

function parseDisplayDate(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  const displayMatch = trimmed.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (displayMatch) return `${displayMatch[3]}-${displayMatch[2]}-${displayMatch[1]}`;
  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) return trimmed;
  return null;
}

function dateDisplayInputFor(nativeInput) {
  const field = nativeInput?.closest("[data-date-field]");
  if (!field) return null;
  return field.querySelector("[data-date-display], [data-date-display-for]");
}

function nativeDateInputFor(node) {
  const field = node?.closest("[data-date-field]");
  if (!field) return null;
  const targetId = node.dataset.datePickerTrigger || node.dataset.dateDisplayFor;
  if (targetId) return el(targetId);
  return field.querySelector("[data-date-native]");
}

function syncDateDisplayFor(nativeInput) {
  const display = dateDisplayInputFor(nativeInput);
  if (display) display.value = formatIsoDateForDisplay(nativeInput?.value || "");
}

function syncAllDateDisplays(root = document) {
  root.querySelectorAll("[data-date-native]").forEach((input) => syncDateDisplayFor(input));
}

function dateFromIso(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function isoFromDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function datePickerMenu() {
  let menu = el("datePickerMenu");
  if (menu) return menu;
  menu = document.createElement("div");
  menu.id = "datePickerMenu";
  menu.className = "date-picker-popout hidden";
  document.body.appendChild(menu);
  return menu;
}

function closeDatePicker() {
  state.activeDatePickerInput = null;
  state.activeDatePickerMonth = null;
  datePickerMenu().classList.add("hidden");
}

function setDatePickerMonth(offset) {
  const current = state.activeDatePickerMonth || new Date();
  state.activeDatePickerMonth = new Date(current.getFullYear(), current.getMonth() + offset, 1);
  renderDatePickerMenu();
}

function selectDatePickerDay(value) {
  const input = state.activeDatePickerInput;
  if (!input) return;
  input.value = value;
  syncDateDisplayFor(input);
  input.dispatchEvent(new Event("input", { bubbles: true }));
  closeDatePicker();
}

function renderDatePickerMenu() {
  const input = state.activeDatePickerInput;
  const menu = datePickerMenu();
  if (!input || !document.body.contains(input)) {
    closeDatePicker();
    return;
  }

  const field = input.closest("[data-date-field]");
  const selected = dateFromIso(input.value);
  const today = new Date();
  const view = state.activeDatePickerMonth || new Date((selected || today).getFullYear(), (selected || today).getMonth(), 1);
  state.activeDatePickerMonth = new Date(view.getFullYear(), view.getMonth(), 1);
  const monthLabel = view.toLocaleString("en-GB", { month: "long", year: "numeric" });
  const firstDay = new Date(view.getFullYear(), view.getMonth(), 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(view.getFullYear(), view.getMonth(), 1 - mondayOffset);
  const selectedIso = selected ? isoFromDate(selected) : "";
  const todayIso = isoFromDate(today);
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const days = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
    const iso = isoFromDate(day);
    const classes = [
      "date-picker-day",
      day.getMonth() !== view.getMonth() ? "outside" : "",
      iso === selectedIso ? "selected" : "",
      iso === todayIso ? "today" : "",
    ].filter(Boolean).join(" ");
    return `<button class="${classes}" data-date-picker-day="${iso}" type="button">${day.getDate()}</button>`;
  }).join("");

  menu.innerHTML = `
    <div class="mb-3 flex items-center justify-between gap-2">
      <button class="flex h-8 w-8 items-center justify-center rounded-md hover:bg-secondary" data-date-picker-month="-1" type="button" aria-label="Previous month">${icon("chevron-left", "h-4 w-4")}</button>
      <div class="text-sm font-semibold">${escapeHtml(monthLabel)}</div>
      <button class="flex h-8 w-8 items-center justify-center rounded-md hover:bg-secondary" data-date-picker-month="1" type="button" aria-label="Next month">${icon("chevron-right", "h-4 w-4")}</button>
    </div>
    <div class="date-picker-calendar">
      ${weekdays.map((day) => `<div class="date-picker-weekday">${day}</div>`).join("")}
      ${days}
    </div>
  `;

  const rect = field?.getBoundingClientRect() || input.getBoundingClientRect();
  const width = 292;
  const left = Math.min(Math.max(rect.left, 12), window.innerWidth - width - 12);
  menu.style.left = `${left}px`;
  menu.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - 340)}px`;
  menu.classList.remove("hidden");
}

function openDatePicker(nativeInput) {
  if (!nativeInput) return;
  const selected = dateFromIso(nativeInput.value);
  const today = new Date();
  state.activeDatePickerInput = nativeInput;
  state.activeDatePickerMonth = new Date((selected || today).getFullYear(), (selected || today).getMonth(), 1);
  renderDatePickerMenu();
}

function dateFieldMarkup(attributes = "") {
  return `
    <div class="field date-field" data-date-field>
      <button class="date-picker-trigger" data-date-picker-trigger type="button" aria-label="Open date picker">
        ${icon("calendar", "h-4 w-4")}
      </button>
      <input class="date-display-input" type="text" inputmode="numeric" placeholder="DD-MM-YYYY" data-date-display />
      <input class="date-native-picker" type="hidden" data-date-native ${attributes} />
    </div>
  `;
}

function syncOrdersExposedFilterFields() {
  syncOrdersSelectField("salesAssociate");
  syncOrdersSelectField("legend");
  syncOrdersSelectField("item");
  syncOrdersCascadeItemField();
  Object.entries(state.ordersDateFilters).forEach(([key, value]) => syncOrdersDateFilterField(key, value));
}

function activeOrderItemGroupsForMenu() {
  if (state.activeOrdersItemCategory === "All") return orderItemGroups;
  return orderItemGroups.filter((group) => group.label === state.activeOrdersItemCategory);
}

function openOrdersSelect(field) {
  if (!field.dataset.selectInstance) {
    field.dataset.selectInstance = `orders-select-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
  const rect = field.getBoundingClientRect();
  const isOpen = state.activeOrdersSelect === field.dataset.ordersSelect && state.activeOrdersSelectInstance === field.dataset.selectInstance;
  el("ordersStatusMenu").classList.remove("open");
  el("ordersBulkStatusMenu")?.classList.remove("open");
  state.activeOrdersStatusPosition = null;
  state.activeOrdersBulkStatusPosition = null;
  state.activeOrdersPrintPosition = null;
  state.activeOrdersSelect = isOpen ? null : field.dataset.ordersSelect;
  state.activeOrdersSelectInstance = isOpen ? null : field.dataset.selectInstance;
  state.activeOrdersSelectPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
  renderOrdersSelectMenu();
}

function renderOrdersSelectMenu() {
  const menu = el("ordersSelectMenu");
  document.querySelectorAll("[data-orders-select]").forEach((button) => {
    button.setAttribute(
      "aria-expanded",
      state.activeOrdersSelect === button.dataset.ordersSelect && state.activeOrdersSelectInstance === button.dataset.selectInstance ? "true" : "false",
    );
  });
  if (!state.activeOrdersSelect) {
    menu.classList.remove("open");
    return;
  }

  const activeButton = document.querySelector(`[data-orders-select="${state.activeOrdersSelect}"][data-select-instance="${state.activeOrdersSelectInstance}"]`);
  const values = state.ordersFilters[state.activeOrdersSelect] || new Set();
  const options = ordersSelectOptionsForCurrentView(state.activeOrdersSelect);
  const query = (state.ordersSelectQueries[state.activeOrdersSelect] || "").trim().toLowerCase();
  const groupedItemOptions = state.activeOrdersSelect === "item" && !isReadyMadeDraftsOrdersView();
  const searchableOrdersSelect = ["salesAssociate", "legend", "item"].includes(state.activeOrdersSelect);
  const searchPlaceholders = {
    salesAssociate: "Search sales associate",
    legend: "Search legend",
    item: "Search items",
  };
  const itemTabs = ["All", ...orderItemCategoryOptions];
  const optionMarkup = groupedItemOptions
    ? activeOrderItemGroupsForMenu()
        .map((group) => {
          const matches = group.items.filter((item) => !query || item.toLowerCase().includes(query));
          if (!matches.length) return "";
          const showGroupLabel = state.activeOrdersItemCategory === "All";
          return `
            ${showGroupLabel ? `<div class="px-3 pb-1 pt-2 text-xs font-medium text-muted-foreground">${escapeHtml(group.label)}</div>` : ""}
            ${matches
              .map((item) => {
                const selected = values.has(item);
                return `
                  <button class="orders-select-option fabric-select-option ${selected ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="${escapeAttr(item)}">
                    <span class="min-w-0 truncate">${escapeHtml(item)}</span>
                    ${softFilterMark(selected)}
                  </button>
                `;
              })
              .join("")}
          `;
        })
        .join("") || `<div class="px-3 py-6 text-center text-sm text-muted-foreground">No items match this search.</div>`
    : options
        .filter((option) => {
          const label = typeof option === "string" ? option : option.label;
          return !query || label.toLowerCase().includes(query);
        })
        .map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const label = typeof option === "string" ? option : option.label;
          const selected = values.has(value);
          return `
            <button class="orders-select-option fabric-select-option ${selected ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="${escapeAttr(value)}">
              <span class="min-w-0 truncate">${escapeHtml(label)}</span>
              ${softFilterMark(selected)}
            </button>
          `;
        })
        .join("") || `<div class="px-3 py-6 text-center text-sm text-muted-foreground">No options match this search.</div>`;
  menu.innerHTML = `
    ${
      searchableOrdersSelect
        ? `
          <div class="sticky top-0 z-10 border-b border-border bg-card p-2">
            <label class="relative block">
              <svg class="icon absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
              <input class="field h-9 pl-8 text-sm" data-orders-select-search="${escapeAttr(state.activeOrdersSelect)}" placeholder="${escapeAttr(searchPlaceholders[state.activeOrdersSelect] || "Search")}" value="${escapeAttr(state.ordersSelectQueries[state.activeOrdersSelect] || "")}" />
            </label>
            ${
              state.activeOrdersSelect === "item" && !isReadyMadeDraftsOrdersView()
                ? `<div class="mt-2 flex gap-1 overflow-x-auto pb-1" aria-label="Item pages">
                    ${itemTabs
                      .map(
                        (tab) => `
                          <button class="shrink-0 rounded-md px-2 py-1 text-xs ${
                            state.activeOrdersItemCategory === tab ? "bg-secondary text-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary"
                          }" data-orders-item-tab="${escapeAttr(tab)}" type="button">${escapeHtml(tab)}</button>
                        `,
                      )
                      .join("")}
                  </div>`
                : ""
            }
          </div>
        `
        : ""
    }
    <button class="orders-select-option fabric-select-option ${!values.size ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="">
      <span>${activeButton?.dataset.filterPlaceholder || "Any"}</span>
      ${!values.size ? '<svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>' : ""}
    </button>
    <div class="${state.activeOrdersSelect === "item" ? "max-h-[360px] overflow-y-auto pb-1" : ""}">
      ${optionMarkup}
    </div>
  `;
  if (activeButton) positionFloatingSelectMenu(menu, activeButton, state.activeOrdersSelect === "item" ? 420 : 260);
  translatePage(menu);
  const searchInput = menu.querySelector("[data-orders-select-search]");
  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
  }
}

function closeOrdersCascadeItemMenu() {
  state.activeOrdersCascadeOpen = false;
  const menu = el("ordersCascadeItemMenu");
  if (menu) menu.classList.remove("open");
  const button = el("ordersCascadeItemBtn");
  if (button) button.setAttribute("aria-expanded", "false");
}

function syncOrdersCascadeItemField() {
  const label = el("ordersCascadeItemLabel");
  if (!label) return;
  const values = state.ordersFilters.item || new Set();
  if (!values.size) {
    label.textContent = "Any item";
    label.classList.add("text-muted-foreground");
    return;
  }
  label.textContent = values.size === 1 ? [...values][0] : `${values.size} items`;
  label.classList.remove("text-muted-foreground");
}

function renderOrdersCascadeItemMenu() {
  const menu = el("ordersCascadeItemMenu");
  const button = el("ordersCascadeItemBtn");
  if (!menu || !button) return;
  syncOrdersCascadeItemField();
  button.setAttribute("aria-expanded", state.activeOrdersCascadeOpen ? "true" : "false");
  if (!state.activeOrdersCascadeOpen || isReadyMadeDraftsOrdersView()) {
    menu.classList.remove("open");
    return;
  }
  if (!orderItemCategoryOptions.includes(state.activeOrdersCascadeCategory)) {
    state.activeOrdersCascadeCategory = orderItemCategoryOptions[0] || "Clothing";
  }
  const activeGroup = orderItemGroups.find((group) => group.label === state.activeOrdersCascadeCategory) || orderItemGroups[0];
  const selectedItems = state.ordersFilters.item || new Set();
  const selectedInGroup = activeGroup.items.filter((item) => selectedItems.has(item)).length;
  const allInGroupSelected = selectedInGroup === activeGroup.items.length;
  const someInGroupSelected = selectedInGroup > 0 && !allInGroupSelected;
  menu.innerHTML = `
    <div class="orders-cascade-grid grid grid-cols-[200px_minmax(0,1fr)]">
      <div class="border-r border-border p-1">
        <button class="orders-cascade-clear fabric-select-option ${!selectedItems.size ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-orders-cascade-clear type="button">
          <span>Any item</span>
          ${softFilterMark(!selectedItems.size)}
        </button>
        <div class="mt-1 border-t border-border pt-1">
          ${orderItemGroups
            .map(
              (group) => `
                <button class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left ${
                  state.activeOrdersCascadeCategory === group.label ? "bg-secondary text-foreground" : "hover:bg-secondary"
                }" data-orders-cascade-category="${escapeAttr(group.label)}" type="button">
                  <span class="truncate">${escapeHtml(group.label)}</span>
                  <svg class="icon h-4 w-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="orders-cascade-items p-1">
        <button class="fabric-select-option ${allInGroupSelected ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-orders-cascade-category-toggle="${escapeAttr(activeGroup.label)}" type="button">
          <span class="min-w-0">
            <span class="block truncate font-medium">All ${escapeHtml(activeGroup.label)}</span>
            <span class="block truncate text-xs text-muted-foreground">${selectedInGroup}/${activeGroup.items.length} selected</span>
          </span>
          ${softFilterMark(allInGroupSelected, someInGroupSelected)}
        </button>
        <div class="my-1 border-t border-border"></div>
        ${activeGroup.items
          .map(
            (item) => `
              <button class="orders-cascade-item fabric-select-option ${selectedItems.has(item) ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-orders-cascade-item="${escapeAttr(item)}" type="button">
                <span class="min-w-0 truncate">${escapeHtml(item)}</span>
                ${softFilterMark(selectedItems.has(item))}
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
  positionFloatingSelectMenu(menu, button, 640);
  menu.style.width = `${Math.min(640, window.innerWidth - 32)}px`;
  menu.style.maxHeight = "none";
  menu.style.overflow = "visible";
  translatePage(menu);
}

function persistOrdersFavorites() {
  localStorage.setItem("relocate-orders-favorites-unlocked", String(state.ordersFavoritesUnlocked));
  localStorage.setItem("relocate-orders-favorite-filters", JSON.stringify(state.ordersFavoriteFilters));
}

function renderOrdersFavoriteButtons() {
  document.querySelectorAll("[data-orders-favorite]").forEach((button) => {
    const active = state.ordersFavoriteFilters.includes(button.dataset.ordersFavorite);
    button.classList.toggle("hidden", !state.ordersFavoritesUnlocked);
    button.classList.toggle("active", active);
    button.textContent = active ? "★" : "☆";
    button.title = active ? "Remove from visible filters" : "Save to visible filters";
  });
}

function renderOrdersFavoriteFilters() {
  const container = el("ordersFavoriteFilters");
  if (!container) return;
  if (!state.ordersFavoritesUnlocked) {
    container.innerHTML = "";
    renderOrdersFavoriteButtons();
    return;
  }
  container.innerHTML = state.ordersFavoriteFilters
    .map((key) => {
      const definition = ordersFavoriteDefinitions[key];
      if (!definition) return "";
      if (definition.type === "date") {
        return `
          <label class="fabric-filter-field w-full ${definition.width}">
            <span>${definition.label}</span>
            ${dateFieldMarkup(`data-orders-date-filter="${key}" data-filter-label="${definition.label}"`)}
          </label>
        `;
      }
      return `
        <label class="fabric-filter-field w-full ${definition.width}">
          <span>${definition.label}</span>
          <button class="field fabric-select flex" data-orders-select="${key}" data-filter-label="${definition.label}" data-filter-placeholder="${definition.placeholder}" type="button">
            <span class="fabric-select-label text-muted-foreground">${definition.placeholder}</span>
            <svg class="icon h-4 w-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
          </button>
        </label>
      `;
    })
    .join("");
  syncOrdersExposedFilterFields();
  renderOrdersFavoriteButtons();
  translatePage(container);
}

const ordersPrintOptions = [
  { key: "print", label: "Order" },
  { key: "printPPrice", label: "With P.Price" },
  { key: "printCustomerReceipt", label: "With Customer Receipt" },
  { key: "printReceived", label: "Received order" },
];

function standaloneOrderActionItems(order) {
  const readyMade = orderNavType(order.type) === "ReadyMade";
  const readyMadeDraft = orderNavType(order.type) === "ReadyMade drafts";
  if (readyMadeDraft) {
    return [
      { key: "editDraft", label: "Edit order" },
      { key: "copyDraft", label: "Copy" },
      { key: "downloadSummary", label: "Download Order Summary" },
      { key: "deleteDraft", label: "Delete", destructive: true },
    ];
  }
  if (!readyMade) {
    return [
      { key: "copy", label: "Copy order" },
      { key: "duplicate", label: "Duplicate order" },
      { key: "expressDelivery", label: "Mark as express delivery" },
      { key: "issue", label: "Report order issue" },
      { key: "remark", label: "Add remark" },
      { key: "printMenu", label: "Print", submenu: true, divider: true },
    ];
  }

  return [
    { key: "copy", label: "Copy order" },
    { key: "duplicate", label: "Duplicate order" },
    { key: "expressDelivery", label: "Mark as express delivery" },
    { key: "issue", label: "Report order issue" },
    { key: "remark", label: "Add remark" },
    { key: "printMenu", label: "Print", submenu: true, divider: true },
  ];
}

function orderActionCell(order, side) {
  const readyMadeLike = isReadyMadeLikeOrderType(order.type);
  const menuWidth = readyMadeLike ? "w-[292px]" : "w-[292px]";
  const menuItems = standaloneOrderActionItems(order)
    .map((item) => {
      const destructive = item.destructive ? "text-red-600" : "";
      return `
        ${item.divider ? '<div class="-mx-2 my-2 border-t border-border"></div>' : ""}
        <button class="menu-action popout-item ${destructive}" data-standalone-order-menu="${item.key}" data-order-id="${order.id}" type="button">
          <span class="min-w-0 flex-1">${item.label}</span>
          ${item.submenu ? icon("chevron-right", "h-4 w-4 text-muted-foreground") : ""}
        </button>
      `;
    })
    .join("");
  const printMenuOpen = state.activeStandaloneOrderPrintId === order.id && state.activeStandaloneOrderPrintPosition;
  const printItems = ordersPrintOptions
    .map(
      (item) => `
        <button class="menu-action popout-item" data-standalone-order-print="${item.key}" data-order-id="${order.id}" type="button">
          ${escapeHtml(item.label)}
        </button>
      `,
    )
    .join("");
  return `
    <td class="sticky-action-cell action-${side}-only ${state.activeStandaloneOrderActionId === order.id ? "action-cell-open" : ""} relative px-4 text-center">
      <button class="orders-action-btn row-action-btn customer-action-btn btn btn-soft min-w-[96px] px-3" data-standalone-order-action="${order.id}" type="button">
        Actions
      </button>
      <div class="orders-action-menu dropdown fixed z-[1300] ${menuWidth} rounded-lg border border-border bg-card p-2 text-left text-sm shadow-lg ${state.activeStandaloneOrderActionId === order.id ? "open" : ""}" style="left: ${state.activeStandaloneOrderActionPosition?.left || 0}px; top: ${state.activeStandaloneOrderActionPosition?.top || 0}px;" data-standalone-order-action-menu="${order.id}">
        <div class="popout-section-label">Actions</div>
        ${menuItems}
      </div>
      <div class="orders-action-print-menu dropdown fixed z-[1320] w-[292px] rounded-lg border border-border bg-card p-2 text-left text-sm shadow-lg ${printMenuOpen ? "open" : ""}" style="left: ${state.activeStandaloneOrderPrintPosition?.left || 0}px; top: ${state.activeStandaloneOrderPrintPosition?.top || 0}px;" data-standalone-order-print-menu="${order.id}">
        ${printItems}
      </div>
    </td>
  `;
}

function orderLegendMarkup(legend) {
  if (!legend) return '<span class="text-muted-foreground">-</span>';
  const icons = {
    spark: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"></path>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22V15"></path>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><path d="M12 9v4M12 17h.01"></path>',
    clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"></rect><rect x="2" y="2" width="13" height="13" rx="2"></rect>',
    check: '<path d="M20 6 9 17l-5-5"></path>',
    truck: '<path d="M10 17h4V5H2v12h3"></path><path d="M14 9h4l4 4v4h-3"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle>',
    ban: '<circle cx="12" cy="12" r="9"></circle><path d="m5 5 14 14"></path>',
    zap: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"></path>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path>',
  };
  return `
    <span class="legend-icon ui-tooltip-wrap inline-flex h-8 w-8 items-center justify-center rounded-md ${legend.color}" tabindex="0" aria-label="${legend.label}">
      <svg class="icon h-4 w-4" viewBox="0 0 24 24">${icons[legend.icon] || icons.flag}</svg>
      <span class="ui-tooltip" role="tooltip">${legend.label}</span>
    </span>
  `;
}

function orderNumberMarkup(order) {
  return `
    <button class="pill max-w-full justify-start bg-sky-100 text-sky-700" data-order-number="${order.id}" type="button" title="${escapeAttr(order.order)}">
      <svg class="icon h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
      <span class="min-w-0 whitespace-nowrap">${order.order}</span>
    </button>
  `;
}

function orderCustomerMarkup(order) {
  return `
    <button class="pill max-w-full justify-start bg-sky-100 text-sky-700" data-order-customer-id="${order.customerId}" type="button" title="${escapeAttr(order.customer)}">
      <svg class="icon h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <span class="min-w-0 truncate">${order.customer}</span>
    </button>
  `;
}

function deliveryDateWithTooltip(order) {
  return `
    <span class="date-tooltip-wrap text-muted-foreground">
      <span>${order.expectedDeliveryDate}</span>
      <button class="date-tooltip-trigger fit-help-btn" type="button" aria-label="Delivery date details">
        <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v5h1"></path></svg>
      </button>
      <span class="date-tooltip">
        <span class="mb-1 block font-semibold text-foreground">Delivery dates</span>
        <span class="flex justify-between gap-3"><span class="text-muted-foreground">Expected</span><span class="font-medium">${order.expectedDeliveryDate}</span></span>
        <span class="flex justify-between gap-3"><span class="text-muted-foreground">Updated</span><span class="font-medium">${order.updatedDeliveryDate}</span></span>
        <span class="flex justify-between gap-3"><span class="text-muted-foreground">Latest</span><span class="font-medium">${order.latestDeliveryDate}</span></span>
      </span>
    </span>
  `;
}

function orderDetailDeliveryDateMarkup(order = {}) {
  const expected = order.expectedDeliveryDate || "04-Jun-2026";
  const updated = order.updatedDeliveryDate || "26-Mar-2026";
  const latest = order.latestDeliveryDate || order.expectedDeliveryDate || "11-Jun-2026";
  return `
    <span class="date-tooltip-wrap inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-sm font-light text-foreground">
      <span>${escapeHtml(expected)}</span>
      <button class="date-tooltip-trigger fit-help-btn" type="button" aria-label="Delivery date details">
        <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v5h1"></path></svg>
      </button>
      <span class="date-tooltip text-sm font-normal">
        <span class="mb-1 block font-semibold text-foreground">Delivery dates</span>
        <span class="flex justify-between gap-3"><span class="text-muted-foreground">Expected</span><span class="font-medium">${escapeHtml(expected)}</span></span>
        <span class="flex justify-between gap-3"><span class="text-muted-foreground">Updated</span><span class="font-medium">${escapeHtml(updated)}</span></span>
        <span class="flex justify-between gap-3"><span class="text-muted-foreground">Latest</span><span class="font-medium">${escapeHtml(latest)}</span></span>
      </span>
    </span>
  `;
}

function parseOrderDate(value) {
  const match = String(value || "").match(/^(\d{2})-([A-Za-z]{3})-(\d{4})/);
  if (!match) return null;
  const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
  return new Date(Number(match[3]), months[match[2]], Number(match[1]));
}

function parseInputDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function sortValue(value) {
  if (value === undefined || value === null || value === "" || value === "-") return "";
  if (value instanceof Date) return value.getTime();
  if (typeof value === "boolean") return value ? 1 : 0;
  const stringValue = String(value).trim();
  const parsedDate = parseOrderDate(stringValue);
  if (parsedDate) return parsedDate.getTime();
  const numericValue = Number(stringValue.replace(/[^\d.-]/g, ""));
  if (/^[+-]?\d/.test(stringValue) && !Number.isNaN(numericValue)) return numericValue;
  return stringValue.toLowerCase();
}

function sortRows(rows, sort, accessors) {
  if (!sort?.key || !accessors[sort.key]) return rows;
  const direction = sort.direction === "desc" ? -1 : 1;
  return [...rows].sort((a, b) => {
    const aValue = sortValue(accessors[sort.key](a));
    const bValue = sortValue(accessors[sort.key](b));
    if (aValue === bValue) return 0;
    if (aValue === "") return 1;
    if (bValue === "") return -1;
    return aValue > bValue ? direction : -direction;
  });
}

function nextSortState(current, key) {
  return {
    key,
    direction: current?.key === key && current.direction === "asc" ? "desc" : "asc",
  };
}

function legendHeaderTooltipMarkup() {
  const icons = {
    spark: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"></path>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22V15"></path>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><path d="M12 9v4M12 17h.01"></path>',
    clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"></rect><rect x="2" y="2" width="13" height="13" rx="2"></rect>',
    check: '<path d="M20 6 9 17l-5-5"></path>',
    truck: '<path d="M10 17h4V5H2v12h3"></path><path d="M14 9h4l4 4v4h-3"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle>',
    ban: '<circle cx="12" cy="12" r="9"></circle><path d="m5 5 14 14"></path>',
    zap: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"></path>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path>',
  };
  const rows = orderLegendFilterOptions
    .map((legend) => {
      const description = legend.label.replace(/^([^()]+)\((.+)\)$/, "$2").trim();
      return `
        <span class="legend-header-tooltip-row">
          <span class="legend-icon inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${legend.color}">
            <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24">${icons[legend.icon] || icons.flag}</svg>
          </span>
          <span>${escapeHtml(description)}</span>
        </span>
      `;
    })
    .join("");
  return `
    <span class="ui-tooltip-wrap inline-flex items-center">
      <button class="legend-header-info" type="button" aria-label="Show legend key">${icon("info", "h-3.5 w-3.5")}</button>
      <span class="ui-tooltip legend-header-tooltip" role="tooltip">${rows}</span>
    </span>
  `;
}

function sortButtonMarkup(table, key, label, currentSort, extraClass = "") {
  const active = currentSort?.key === key;
  const direction = active ? currentSort.direction : "";
  const sortIcon = active ? (direction === "asc" ? "arrow-up" : "arrow-down") : "arrow-up-down";
  return `
    <button class="sort-header-btn flex w-full items-start gap-1.5 text-left font-medium leading-snug ${extraClass}" data-sort-table="${table}" data-sort-key="${key}" type="button" aria-sort="${active ? (direction === "asc" ? "ascending" : "descending") : "none"}">
      <span class="flex min-w-0 items-center gap-1.5 whitespace-normal">${label}</span>
      <span class="sort-indicator ${active ? "active" : ""} text-muted-foreground" aria-hidden="true">${icon(sortIcon, "h-3.5 w-3.5")}</span>
    </button>
  `;
}

function ordersHeaderCellMarkup(column) {
  const sortButton = sortButtonMarkup("orders", column.key, column.label, state.ordersSort);
  if (column.key !== "legend") return sortButton;
  return `<div class="legend-header-cell">${legendHeaderTooltipMarkup()}${sortButton}</div>`;
}

const orderDetailSections = {
  materials: [
    ["Item type", "Informal suits & jacket"],
    ["Fabric", "EF055 (LP - JY)"],
    ["Description", "Black stretch brushed wool twill"],
    ["Lining", "Solid 2300 black"],
    ["Price category", "AM PC11"],
  ],
  pricing: [
    ["Retail price", "€1,174.00"],
    ["Discount", "€0.00"],
    ["Service charge", "€0.00"],
    ["Total", "€1,174.00"],
    ["Down payment", "€0.00"],
    ["Outstanding", "€1,174.00"],
  ],
  metadata: [
    ["Sales associate", "Rodney Charles"],
    ["Size label", "No"],
    ["Shop order no.", "-"],
    ["Delivery note", "-"],
  ],
  dates: [
    ["Process date", "10-Mar-2026 13:49"],
    ["Delivery date", "04-Jun-2026"],
    ["Latest delivery", "11-Jun-2026"],
    ["Updated delivery", "26-Mar-2026"],
    ["Wearing date", "-"],
  ],
  fitTools: [
    ["Chest dart", "standard"],
    ["Forward shoulders", "no"],
    ["Neck dart", "no"],
    ["Stooped posture", "+0.50"],
    ["Slope shoulder R", "-1.50"],
    ["Slope shoulder L", "-1.00"],
    ["Take in 1/2 shoulder", "-0.50"],
    ["Let out 1/2 chest front", "+0.50"],
    ["Take in 1/2 waist", "-1.00"],
    ["Take in 1/2 hip", "-2.00"],
    ["Shorten length", "-2.00"],
    ["Lengthen sleeve R", "+2.50"],
    ["Lengthen sleeve L", "+2.50"],
  ],
  measurements: [
    ["Shoulder", "48.80"],
    ["1/2 Back", "23.30"],
    ["1/2 Waist", "62.00"],
    ["Sleeve length R", "44.90"],
    ["Sleeve length L", "44.90"],
    ["Back length", "77.00"],
  ],
  designEssentials: [
    ["Canvassing", "light"],
    ["Closure & lapel", "double-breasted 4 buttons with peak lapel"],
    ["Lower gorge", "regular"],
    ["Lapel width", "wide"],
    ["Lapel buttonhole type", "standard"],
    ["Shoulder type", "soft"],
    ["Chest pocket", "rounded welt"],
    ["Side pockets", "straight flap"],
    ["Double patch", "none"],
    ["Ticket pocket", "none"],
    ["Pocket flap height", "standard (5 cm)"],
    ["Cuff finishing", "4 kissing buttons with open cuff"],
    ["1st sleeve buttonhole type left", "standard"],
    ["Vent(s)", "2 side vents"],
    ["Lining style", "fully-lined"],
    ["Inside facing", "tongue facing"],
    ["Sleeve lining", "same as body lining"],
    ["Pick stitching (AMF)", "standard, 2 mm from edge"],
    ["Tuxedo (lapel & jets)", "none"],
  ],
  designDetails: [
    ["DesignOption", "DesignOption"],
    ["Button", "24. mustard green corozo"],
    ["Under collar", "best match"],
    ["Inside jets", "same as lining"],
    ["Inside pick stitching (Columbia)", "best match with lining"],
    ["Throat tab", "none"],
    ["Elbow patches", "none"],
    ["Hidden lining pocket", "none"],
    ["Contrast pick stitching (AMF)", "best match"],
    ["Contrast lapel buttonhole", "best match (with fabric)"],
    ["Contrast front buttonholes", "best match"],
    ["Contrast sleeve buttonholes", "best match"],
    ["Contrast 1st buttonhole sleeve", "best match"],
  ],
  branding: [
    ["Label position", "5. Inside, bottom left"],
    ["Shop label", "Fabric Supplier Label"],
  ],
  rPrice: [
    ["Make R.Price", "0.00"],
    ["Fabric R.Price", "0.00"],
    ["Lining R.Price", "0.00"],
    ["DesignOption R.Price", "0.00"],
    ["Button R.Price", "25.00"],
    ["Total R.Price", "25.00"],
  ],
  pPrice: [
    ["Make P.Price", "0.00"],
    ["Fabric P.Price", "234.00"],
    ["Lining P.Price", "0.00"],
    ["Button P.Price", "9.00"],
    ["Tariffs surcharge P.Price", "1.05"],
    ["Total P.Price", "244.05"],
  ],
};

const orderDetailParts = [
  { id: "jacket", label: "Jacket" },
  { id: "trouser", label: "Trouser" },
  { id: "waistcoat", label: "Waistcoat", pieceMode: "3-piece" },
];

const orderDetailPartSections = {
  jacket: {
    fitTools: orderDetailSections.fitTools,
    measurements: orderDetailSections.measurements,
    designEssentials: orderDetailSections.designEssentials,
    designDetails: orderDetailSections.designDetails,
    branding: [
      ["Label position", "5. Inside, bottom left"],
      ["Shop label", "Fabric Supplier Label"],
      ["Jacket monogram", "none"],
      ["Jacket branding", "standard"],
    ],
  },
  trouser: {
    fitTools: [
      ["Waist bigger", "+1.00"],
      ["Hip smaller", "-0.50"],
      ["Seat bigger", "standard"],
      ["Thigh bigger", "+0.50"],
      ["Knee smaller", "standard"],
      ["Bottom width smaller", "-0.50"],
      ["Front rise lower", "standard"],
      ["Back rise higher", "+0.50"],
      ["Length longer", "+1.50"],
    ],
    measurements: [
      ["Waist", "84.00"],
      ["Seat", "101.00"],
      ["Thigh", "62.00"],
      ["Knee", "44.00"],
      ["Bottom width", "36.00"],
      ["Inside leg", "82.00"],
      ["Front rise", "26.00"],
      ["Back rise", "40.00"],
    ],
    designEssentials: [
      ["Waistband", "belt loops"],
      ["Tuxedo waistband", "same as fabric"],
      ["Waistband detailing", "standard"],
      ["Front style", "single pleat"],
      ["Closure", "zip fly"],
      ["Side pockets", "slanted"],
      ["Cargo pockets", "none"],
      ["Back pocket(s)", "jet with button"],
      ["Hem finish", "plain"],
      ["Pocket lining", "TPC001 black"],
      ["Pick stitching (AMF)", "none"],
      ["Tuxedo (side stripe)", "none"],
    ],
    designDetails: [
      ["DesignOption", "DesignOption"],
      ["Coin pocket", "standard"],
      ["Button", "24. mustard green corozo"],
      ["Pleat direction", "inwards"],
      ["Pleat depth", "standard"],
      ["Pintuck", "no"],
      ["Suspender buttons", "no"],
      ["Buckle loop", "no"],
      ["Crotch piece", "standard"],
      ["Leg lining", "half-lined front"],
      ["Contrast pick stitching (AMF)", "none"],
      ["Contrast buttonholes", "best match"],
    ],
    branding: [
      ["Label position", "5. Inside, waistband"],
      ["Shop label", "Fabric Supplier Label"],
      ["Trouser monogram", "none"],
      ["Trouser branding", "standard"],
    ],
  },
  waistcoat: {
    fitTools: [
      ["Take in 1/2 chest", "-0.50"],
      ["Let out 1/2 waist", "+0.50"],
      ["Shorten front length", "-1.00"],
      ["Lengthen back length", "standard"],
      ["Neck drop", "+0.50"],
      ["Armhole", "standard"],
    ],
    measurements: [
      ["Chest", "104.00"],
      ["Waist", "94.00"],
      ["Front length", "58.00"],
      ["Back length", "54.00"],
      ["Shoulder", "36.00"],
      ["Armhole", "52.00"],
    ],
    designEssentials: [
      ["Front style", "single-breasted 5 button"],
      ["Lapel", "none"],
      ["Bottom shape", "pointed"],
      ["Pocket", "2 welt pockets"],
      ["Back", "lining back with adjuster"],
      ["Lining style", "fully-lined"],
      ["Edge stitching", "standard"],
    ],
    designDetails: [
      ["Button", "3. dark brown horn with flame"],
      ["Back buckle", "silver"],
      ["Inside label", "standard"],
    ],
    branding: [
      ["Label position", "5. Inside, bottom left"],
      ["Shop label", "Fabric Supplier Label"],
      ["Waistcoat monogram", "none"],
      ["Waistcoat branding", "standard"],
    ],
  },
};

const orderDetailItems = [
  { product: "Jacket", detail: "Utility jacket with buttons", fitProfileId: "FIT-001", fitProfile: "Jacket - 27 May 2026", fit: "Slim 2.0", make: "unconstructed", tryOn: "48" },
  { product: "Trousers", detail: "Drawstring", fitProfileId: "FIT-002", fitProfile: "Trousers - 27 May 2026", fit: "T40", make: "traditional with pleated front", tryOn: "50" },
  { product: "Waistcoat", detail: "5 Button", fitProfileId: "FIT-003", fitProfile: "Waistcoat - 27 May 2026", fit: "Slim 2.0", make: "Traditional", tryOn: "48" },
];

function isReadyMadeOrdersView() {
  return orderNavType(state.ordersType) === "ReadyMade";
}

function isReadyMadeDraftsOrdersView() {
  return orderNavType(state.ordersType) === "ReadyMade drafts";
}

function isReadyMadeLikeOrderType(type) {
  return ["ReadyMade", "ReadyMade drafts"].includes(orderNavType(type));
}

function isFuturePrototypeVersion() {
  return state.fabricFutureFeaturesUnlocked || state.suiteModeUnlocked;
}

const toolFavoriteLabels = {
  delivery: "Delivery Dates",
  downloads: "Downloads",
  alerts: "Alerts",
  inspiration: "Inspiration Site",
  "report-issue": "Report an Issue",
  "help-center": "Help Center",
};

const permanentFutureTools = new Set(["help-center"]);

function persistFavoriteTools() {
  localStorage.setItem("relocate-favorite-tools", JSON.stringify([...state.favoriteTools]));
}

function toolFavoriteLabel(toolId) {
  return toolFavoriteLabels[toolId] || "Tool";
}

function toggleFavoriteTool(toolId) {
  if (!toolId || !isFuturePrototypeVersion() || permanentFutureTools.has(toolId)) return;
  if (state.favoriteTools.has(toolId)) state.favoriteTools.delete(toolId);
  else state.favoriteTools.add(toolId);
  persistFavoriteTools();
  renderToolFavorites();
  showToast(
    state.favoriteTools.has(toolId)
      ? `${toolFavoriteLabel(toolId)} added to Tools.`
      : `${toolFavoriteLabel(toolId)} removed from Tools.`,
  );
}

function renderToolFavorites() {
  const future = isFuturePrototypeVersion();
  document.querySelectorAll("[data-tool-direct]").forEach((item) => {
    const toolId = item.dataset.toolDirect;
    const hidden = future && !permanentFutureTools.has(toolId) && !state.favoriteTools.has(toolId);
    item.classList.toggle("hidden", hidden);
  });
  document.querySelectorAll("[data-tool-favorite]").forEach((button) => {
    const toolId = button.dataset.toolFavorite;
    const permanent = permanentFutureTools.has(toolId);
    const saved = permanent || state.favoriteTools.has(toolId);
    button.classList.toggle("active", saved);
    button.classList.toggle("hidden", !future || permanent);
    button.setAttribute("aria-pressed", String(saved));
    button.title = saved ? `Remove ${toolFavoriteLabel(toolId)} from Tools` : `Save ${toolFavoriteLabel(toolId)} to Tools`;
  });
  requestAnimationFrame(updateSidebarOverflow);
}

function tableEmptyStateMarkup({ colspan, title = "No results found", description = "Try adjusting your search or filters to find what you're looking for.", resetTarget = "" }) {
  return `
    <tr>
      <td colspan="${colspan}" class="p-0">
        <div class="table-empty-state">
          ${tableEmptyStateContent({ title, description, resetTarget })}
        </div>
      </td>
    </tr>
  `;
}

function tableEmptyStateContent({ title = "No results found", description = "Try adjusting your search or filters to find what you're looking for.", resetTarget = "" }) {
  return `
    <div class="table-empty-state-inner">
      <span class="table-empty-icon" aria-hidden="true">
        <svg class="icon h-5 w-5" viewBox="0 0 24 24"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path><path d="M19 14v5"></path><path d="m21 17-2 2-2-2"></path></svg>
      </span>
      <span class="text-sm font-semibold text-foreground">${title}</span>
      <span class="text-sm text-muted-foreground">${description}</span>
      ${resetTarget ? `<button class="table-empty-reset" data-empty-reset="${resetTarget}" type="button"><svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 3v6h6"></path></svg>Reset filters</button>` : ""}
    </div>
  `;
}

function ordersStatusOptionsForCurrentView() {
  return isReadyMadeDraftsOrdersView() ? readyMadeDraftStatusOptions : orderStatusOptions;
}

function ordersSelectOptionsForCurrentView(key) {
  if (isReadyMadeDraftsOrdersView()) {
    return key === "item" ? readyMadeDraftItemOptions : [];
  }
  if (key === "item") return orderFilterItems;
  return ordersSelectOptions[key] || [];
}

function activeOrdersAdvancedSearchKeys() {
  if (isReadyMadeDraftsOrdersView()) return [];
  return isReadyMadeOrdersView() ? ["order", "rmName"] : ["order", "firstName", "lastName", "companyName", "deliveryNumber", "receiptId"];
}

function emptyOrdersAdvancedSearch() {
  return {
    order: "",
    rmName: "",
    firstName: "",
    lastName: "",
    companyName: "",
    deliveryNumber: "",
    receiptId: "",
  };
}

function emptyOrdersStructuredSearch() {
  return {
    order: "",
    firstName: "",
    lastName: "",
  };
}

function ordersStructuredSearchActive() {
  return Object.values(state.ordersStructuredSearch).some((value) => String(value || "").trim());
}

function orderNameParts(order) {
  const customer = customers.find((item) => item.id === order.customerId);
  if (customer) return { firstName: customer.firstName || "", lastName: customer.lastName || "" };
  const raw = String(order.customer || order.readyMadeOrder || "");
  if (raw.includes(",")) {
    const [lastName, firstName] = raw.split(",").map((part) => part.trim());
    return { firstName: firstName || "", lastName: lastName || "" };
  }
  const parts = raw.trim().split(/\s+/).filter(Boolean);
  return { firstName: parts.slice(0, -1).join(" "), lastName: parts.at(-1) || "" };
}

function filteredStandaloneOrders() {
  const query = state.ordersSearchQuery.trim().toLowerCase();
  const structuredSearchEnabled = !isFuturePrototypeVersion();
  return standaloneOrders.filter((order) => {
    const readyMade = isReadyMadeOrdersView();
    const searchable = (readyMade
      ? [order.order]
      : [
          order.order,
          order.salesAssociate,
          order.customer,
          order.companyId,
          order.companyName,
          order.deliveryNumber,
          order.receiptId,
          order.status,
          order.item,
          order.subProductPart,
          order.fabric,
          order.type,
        ])
      .join(" ")
      .toLowerCase();
    const combinedSearchMatch = isFuturePrototypeVersion() ? !query || searchable.includes(query) : true;
    const nameParts = structuredSearchEnabled ? orderNameParts(order) : { firstName: "", lastName: "" };
    const structuredSearchMatch =
      !structuredSearchEnabled ||
      [
        ["order", order.order || order.orderNumber || order.orderName],
        ["firstName", order.firstName || nameParts.firstName],
        ["lastName", order.lastName || nameParts.lastName],
      ].every(([key, value]) => {
        const trimmed = (state.ordersStructuredSearch[key] || "").trim().toLowerCase();
        if (!trimmed) return true;
        return String(value || "").toLowerCase().includes(trimmed);
      });
    const typeMatch = order.type === state.ordersType;
    const statusDropdownMatch = !state.ordersStatusFilter.size || state.ordersStatusFilter.has(order.status);
    const advancedSearchMatch = activeOrdersAdvancedSearchKeys().every((key) => {
      const trimmed = (state.ordersAdvancedSearch[key] || "").trim().toLowerCase();
      if (!trimmed) return true;
      const customer = customers.find((item) => item.id === order.customerId);
      const value = key === "companyName" ? order.companyName || customer?.company || "" : order[key];
      return String(value || "").toLowerCase().includes(trimmed);
    });
    const advancedFilterMatch = Object.entries(state.ordersFilters).every(([key, values]) => {
      if (readyMade && key === "salesAssociate") return true;
      if (!values.size) return true;
      if (key === "legend") return values.has(order.legend?.key || "none");
      return values.has(order[key]);
    });
    const processedDate = parseOrderDate(order.processedDate);
    const processedFrom = parseInputDate(state.ordersDateFilters.processedDateFrom);
    const processedTo = parseInputDate(state.ordersDateFilters.processedDateTo);
    const dateMatch = (!processedFrom || processedDate >= processedFrom) && (!processedTo || processedDate <= processedTo);
    return combinedSearchMatch && structuredSearchMatch && typeMatch && statusDropdownMatch && advancedSearchMatch && advancedFilterMatch && dateMatch;
  });
}

function filteredReadyMadeDraftOrders() {
  const query = state.ordersSearchQuery.trim().toLowerCase();
  const selectedItems = state.ordersFilters.item || new Set();
  return readyMadeDraftOrders.filter((order) => {
    if (state.deletedReadyMadeDraftIds.has(order.id)) return false;
    const searchable = String(order.orderName || "").toLowerCase();
    const searchMatch = !query || searchable.includes(query);
    const statusMatch = !state.ordersStatusFilter.size || state.ordersStatusFilter.has(order.status);
    const itemMatch = !selectedItems.size || selectedItems.has(order.item);
    return searchMatch && statusMatch && itemMatch;
  });
}

function currentOrdersRows() {
  return sortRows(isReadyMadeDraftsOrdersView() ? filteredReadyMadeDraftOrders() : filteredStandaloneOrders(), state.ordersSort, orderSortAccessors);
}

function findStandaloneOrder(orderId) {
  return standaloneOrders.find((item) => item.id === orderId) || readyMadeDraftOrders.find((item) => item.id === orderId);
}

function resetOrdersTransientState() {
  state.selectedOrders.clear();
  state.ordersBulkStatus = "";
  state.activeOrdersStatusPosition = null;
  state.activeOrdersBulkStatusPosition = null;
  state.activeOrdersPrintPosition = null;
  state.activeOrdersSelect = null;
  state.activeOrdersSelectInstance = null;
  state.activeOrdersSelectPosition = null;
  state.ordersPageSizeOpen = false;
  el("ordersStatusMenu")?.classList.remove("open");
  el("ordersBulkStatusMenu")?.classList.remove("open");
  el("ordersSelectMenu")?.classList.remove("open");
  el("ordersPageSizeMenu")?.classList.add("hidden");
}

function openOrdersFromDashboardFilter(button) {
  resetOrdersTransientState();
  resetOrdersFilterState();
  state.ordersSearchQuery = "";
  state.ordersStructuredSearch = emptyOrdersStructuredSearch();
  state.ordersStructuredSearchDraft = emptyOrdersStructuredSearch();
  state.ordersAdvancedSearch = emptyOrdersAdvancedSearch();
  state.ordersType = button.dataset.ordersPage || "CustomMade";
  state.ordersPage = 1;
  const statuses = (button.dataset.dashboardStatuses || "").split("|").filter(Boolean);
  state.ordersStatusFilter = new Set(statuses);
  const legend = button.dataset.dashboardLegend || "";
  if (legend) state.ordersFilters.legend = new Set([legend]);
  if (el("ordersSearch")) el("ordersSearch").value = "";
  syncOrdersStructuredSearchInputs();
  setPage("orders");
}

function renderOrdersFilterChips() {
  const chips = [];
  const draftMode = isReadyMadeDraftsOrdersView();
  state.ordersStatusFilter.forEach((status) => chips.push({ key: "statusDropdown", value: status, label: status }));
  if (state.ordersTypeUnlocked) chips.push({ key: "typeToggle", label: state.ordersType });
  if (!isFuturePrototypeVersion()) {
    const structuredLabels = {
      order: "Order number",
      firstName: "First name",
      lastName: "Last name",
    };
    Object.entries(state.ordersStructuredSearch).forEach(([key, value]) => {
      if (!String(value || "").trim()) return;
      chips.push({ key: "structuredSearch", value: key, label: `${structuredLabels[key]}: ${value.trim()}` });
    });
  }
  const activeSearchKeys = new Set(activeOrdersAdvancedSearchKeys());
  Object.entries(state.ordersAdvancedSearch).forEach(([key, value]) => {
    if (!activeSearchKeys.has(key) || !value.trim()) return;
    const labels = {
      order: "Order",
      rmName: "ReadyMade order",
      firstName: "First name",
      lastName: "Last name",
      companyName: "Company name",
      deliveryNumber: "Delivery note number",
      receiptId: "Receipt ID",
    };
    chips.push({ key: "advancedSearch", value: key, label: `${labels[key]}: ${value.trim()}` });
  });
  Object.entries(state.ordersFilters).forEach(([key, values]) => {
    if ((isReadyMadeOrdersView() || draftMode) && key === "salesAssociate") return;
    if (draftMode && key === "legend") return;
    const labels = {
      salesAssociate: "Sales associate",
      legend: "Legend",
      item: "Item",
    };
    values.forEach((value) => {
      const legend = key === "legend" ? orderLegendFilterOptions.find((item) => item.key === value)?.label || "No legend" : value;
      chips.push({ key, value, label: `${labels[key]}: ${legend}` });
    });
  });
  if (!draftMode) {
    Object.entries(state.ordersDateFilters).forEach(([key, value]) => {
      if (!value) return;
      const label = key === "processedDateFrom" ? "Processed from" : "Processed to";
      chips.push({ key: "dateFilter", value: key, label: `${label}: ${value}` });
    });
  }
  el("ordersFilterChips").innerHTML = chips
    .map(
      (chip) => `
        <button class="filter-chip rounded-md bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700" data-orders-chip-key="${chip.key}" data-orders-chip-value="${chip.value || ""}">
          ${chip.label}
          <svg class="icon ml-1 inline h-3 w-3" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
        </button>
      `,
    )
    .join("");
  return chips;
}

function ordersHasSearchCriteria() {
  const activeSearchKeys = new Set(activeOrdersAdvancedSearchKeys());
  const advancedSearchActive = Object.entries(state.ordersAdvancedSearch).some(([key, value]) => activeSearchKeys.has(key) && value.trim());
  const dropdownFiltersActive = Object.entries(state.ordersFilters).some(([key, values]) => {
    if ((isReadyMadeOrdersView() || isReadyMadeDraftsOrdersView()) && key === "salesAssociate") return false;
    if (isReadyMadeDraftsOrdersView() && key === "legend") return false;
    return values.size > 0;
  });
  const dateFiltersActive = !isReadyMadeDraftsOrdersView() && Object.values(state.ordersDateFilters).some(Boolean);
  return Boolean((isFuturePrototypeVersion() ? state.ordersSearchQuery.trim() : ordersStructuredSearchActive()) || state.ordersStatusFilter.size || advancedSearchActive || dropdownFiltersActive || dateFiltersActive);
}

function paginatedStandaloneOrders(rows) {
  const totalPages = Math.max(1, Math.ceil(rows.length / state.ordersPageSize));
  if (state.ordersPage > totalPages) state.ordersPage = totalPages;
  if (state.ordersPage < 1) state.ordersPage = 1;
  const start = (state.ordersPage - 1) * state.ordersPageSize;
  return { totalPages, visibleRows: rows.slice(start, start + state.ordersPageSize) };
}

function getOrdersColumnOrder() {
  const valid = new Set(defaultOrdersColumnOrder);
  const saved = state.ordersColumnOrder.filter((key) => valid.has(key));
  const missing = defaultOrdersColumnOrder.filter((key) => !saved.includes(key));
  return normalizeOrdersColumnOrder([...saved, ...missing]);
}

function getVisibleOrdersColumns() {
  const readyMade = isReadyMadeOrdersView();
  const readyMadeHiddenColumns = new Set(["salesAssociate", "customer", "price", "serviceCharge", "discount"]);
  return getOrdersColumnOrder()
    .map((key) => ({ key, ...ordersColumnDefinitions[key] }))
    .filter((column) => {
      if (!column.label) return false;
      if (readyMade && (readyMadeHiddenColumns.has(column.key) || column.view === "pricing")) return false;
      if (!readyMade && column.key === "readyMadeOrder") return false;
      return !column.view || state.ordersViews[column.view];
    });
}

function persistOrdersColumnSettings() {
  state.ordersColumnOrder = getOrdersColumnOrder();
  localStorage.setItem("relocate-orders-column-settings-unlocked", String(state.ordersColumnSettingsUnlocked));
  localStorage.setItem("relocate-orders-column-order", JSON.stringify(state.ordersColumnOrder));
}

function renderOrdersTableStructure(columns) {
  const dynamicWidth = columns.reduce((sum, column) => sum + ordersColumnWidth(column), 0);
  const totalWidth = 132 + 56 + dynamicWidth + 320 + 132;
  el("ordersTable").style.minWidth = `${Math.max(860, totalWidth)}px`;
  el("ordersColgroup").innerHTML = `
    <col class="action-left-only" style="width: 132px" />
    <col style="width: 56px" />
    ${columns.map((column) => `<col style="width: ${ordersColumnWidth(column)}px" />`).join("")}
    <col />
    <col class="action-right-only" style="width: 132px" />
  `;
  el("ordersTableHead").innerHTML = `
    <tr class="border-b border-border">
      <th class="sticky-action-cell action-left-only px-4 py-5 text-center font-medium">Actions</th>
      <th class="px-4 py-5"><input id="selectAllOrders" type="checkbox" class="check" /></th>
      ${columns.map((column) => `<th class="px-4 py-5">${ordersHeaderCellMarkup(column)}</th>`).join("")}
      <th class="px-0 py-5"></th>
      <th class="sticky-action-cell action-right-only px-4 py-5 text-center font-medium">Actions</th>
    </tr>
  `;
}

function moveOrdersColumn(key, direction) {
  const order = getOrdersColumnOrder();
  const index = order.indexOf(key);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= order.length) return;
  [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
  state.ordersColumnOrder = order;
  persistOrdersColumnSettings();
  renderOrdersPage();
  renderOrdersColumnSettings();
}

function dropOrdersColumn(draggedKey, targetKey) {
  if (!draggedKey || !targetKey || draggedKey === targetKey) return;
  const order = getOrdersColumnOrder();
  const nextOrder = order.filter((key) => key !== draggedKey);
  const targetIndex = nextOrder.indexOf(targetKey);
  if (targetIndex < 0) return;
  nextOrder.splice(targetIndex, 0, draggedKey);
  state.ordersColumnOrder = nextOrder;
  persistOrdersColumnSettings();
  renderOrdersPage();
  renderOrdersColumnSettings();
}

function renderOrdersColumnSettings() {
  const list = el("ordersColumnSettingsList");
  if (!list) return;
  const order = getOrdersColumnOrder();
  list.innerHTML = order
    .map((key, index) => {
      const column = ordersColumnDefinitions[key];
      return `
        <div class="orders-column-row flex cursor-grab items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 transition active:cursor-grabbing" draggable="true" data-orders-column-key="${key}">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground" title="Drag to rearrange">
            <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01"></path></svg>
          </span>
          <span class="min-w-0 flex-1 truncate font-medium">${column.label}</span>
          <button class="btn btn-soft h-8 px-2" data-orders-column-move="${key}" data-direction="-1" ${index === 0 ? "disabled" : ""} type="button">Up</button>
          <button class="btn btn-soft h-8 px-2" data-orders-column-move="${key}" data-direction="1" ${index === order.length - 1 ? "disabled" : ""} type="button">Down</button>
        </div>
      `;
    })
    .join("");
}

function renderOrdersPagination(totalPages) {
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button class="page-number ${page === state.ordersPage ? "bg-primary text-primary-foreground shadow-sm" : ""}" data-orders-page-number="${page}">${page}</button>`;
  }).join("");
  el("ordersPagination").innerHTML = `
    <button class="page-link" data-orders-page-action="previous" ${state.ordersPage === 1 ? "disabled" : ""}>
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
      Previous
    </button>
    ${pageButtons}
    <button class="page-link" data-orders-page-action="next" ${state.ordersPage === totalPages ? "disabled" : ""}>
      Next
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
    </button>
  `;
}

function renderOrdersBulkStatusMenu() {
  const menu = el("ordersBulkStatusMenu");
  if (!menu) return;
  if (!state.activeOrdersBulkStatusPosition) {
    menu.classList.remove("open");
    return;
  }

  const width = Math.min(Math.max(state.activeOrdersBulkStatusPosition.width, 260), window.innerWidth - 32);
  const left = Math.min(Math.max(state.activeOrdersBulkStatusPosition.left, 16), window.innerWidth - width - 16);
  menu.style.left = `${left}px`;
  menu.style.top = `${state.activeOrdersBulkStatusPosition.top}px`;
  menu.style.width = `${width}px`;
  menu.innerHTML = ordersStatusOptionsForCurrentView()
    .map((status) => {
      const selected = state.ordersBulkStatus === status;
      return `
        <button class="fabric-select-option ${selected ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-orders-bulk-status-option="${escapeAttr(status)}" type="button">
          <span class="min-w-0 truncate">${status}</span>
          ${selected ? '<svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>' : ""}
        </button>
      `;
    })
    .join("");
  menu.classList.add("open");
  translatePage(menu);
}

function renderOrdersBulkActionsMenu() {
  const menu = el("ordersBulkActionsMenu");
  if (!menu) return;
  if (!state.activeOrdersBulkActionsPosition) {
    menu.classList.remove("open");
    return;
  }
  const width = Math.min(Math.max(state.activeOrdersBulkActionsPosition.width, 224), window.innerWidth - 32);
  const left = Math.min(Math.max(state.activeOrdersBulkActionsPosition.left, 16), window.innerWidth - width - 16);
  menu.style.left = `${left}px`;
  menu.style.top = `${state.activeOrdersBulkActionsPosition.top}px`;
  menu.style.width = `${width}px`;
  menu.querySelector("[data-orders-bulk-action='deleteDrafts']")?.classList.toggle("hidden", !isReadyMadeDraftsOrdersView());
  menu.querySelector("[data-orders-bulk-action='deleteDrafts']")?.classList.toggle("flex", isReadyMadeDraftsOrdersView());
  menu.classList.add("open");
}

function orderStatusChipFor(orderId) {
  return Array.from(document.querySelectorAll("[data-order-status-chip]")).find((chip) => chip.dataset.orderStatusChip === orderId) || null;
}

function selectedOrdersStatusLabel() {
  const selectedRows = standaloneOrders.concat(readyMadeDraftOrders).filter((order) => state.selectedOrders.has(order.id));
  const statuses = [...new Set(selectedRows.map((order) => order.status).filter(Boolean))];
  if (!statuses.length) return "Mixed";
  return statuses.length === 1 ? statuses[0] : "Mixed";
}

function openSingleOrderStatusShelf(orderId) {
  const order = findStandaloneOrder(orderId);
  if (!order || isReadyMadeDraftsOrdersView()) return;
  state.inlineStatusOrderId = orderId;
  state.ordersBulkStatus = "";
  state.statusUpdateContext = "orders";
  state.activeStandaloneOrderActionId = null;
  state.activeStandaloneOrderActionPosition = null;
  state.activeStandaloneOrderPrintId = null;
  state.activeStandaloneOrderPrintPosition = null;
  state.activeOrdersStatusPosition = null;
  state.activeOrdersBulkStatusPosition = null;
  state.activeOrdersPrintPosition = null;
  state.activeOrdersSelect = null;
  state.activeOrdersSelectInstance = null;
  state.activeOrdersSelectPosition = null;
  el("ordersStatusMenu")?.classList.remove("open");
  el("ordersBulkStatusMenu")?.classList.remove("open");
  renderOrdersPrintMenu();
  renderOrdersSelectMenu();
  window.requestAnimationFrame(() => {
    const statusChip = orderStatusChipFor(orderId);
    const anchor = statusChip;
    if (!anchor || anchor.classList.contains("hidden")) return;
    const rect = anchor.getBoundingClientRect();
    state.activeOrdersBulkStatusPosition = { left: rect.left, top: rect.bottom + 6, width: Math.max(rect.width, 260) };
    renderOrdersBulkStatusMenu();
    anchor.focus();
  });
}

function renderOrdersBulkActions() {
  const shelf = el("ordersBulkActionShelf");
  const bottomBar = el("ordersBulkBottomBar");
  if (!shelf) return;
  const draftMode = isReadyMadeDraftsOrdersView();
  const selectedCount = state.selectedOrders.size;
  const hasSelection = selectedCount > 0;
  if (!hasSelection) state.activeOrdersBulkActionsPosition = null;
  shelf.classList.add("hidden");
  bottomBar?.classList.toggle("hidden", !hasSelection);
  setText(el("ordersSelectedCount"), `${selectedCount} order${selectedCount === 1 ? "" : "s"}`);
  setText(el("ordersBottomSelectedCount"), `${selectedCount} order${selectedCount === 1 ? "" : "s"}`);
  setText(el("ordersBottomStatusLabel"), state.ordersBulkStatus || selectedOrdersStatusLabel());
  el("ordersBulkStatusBtn")?.classList.add("hidden");
  el("ordersBulkApplyBtn")?.classList.add("hidden");
  el("ordersBulkDeleteBtn")?.classList.add("hidden");

  const label = el("ordersBulkStatusLabel");
  if (label) {
    label.textContent = state.ordersBulkStatus || "Update order status";
    label.classList.toggle("text-muted-foreground", !state.ordersBulkStatus);
    label.classList.toggle("text-foreground", Boolean(state.ordersBulkStatus));
  }

  const applyButton = el("ordersBulkApplyBtn");
  if (applyButton) {
    const disabled = !hasSelection || !state.ordersBulkStatus;
    applyButton.disabled = disabled;
    applyButton.classList.toggle("opacity-60", disabled);
    applyButton.classList.toggle("cursor-not-allowed", disabled);
  }

  renderOrdersBulkStatusMenu();
  renderOrdersBulkActionsMenu();
}

function deleteReadyMadeDraftOrders(orderIds) {
  const ids = orderIds.filter(Boolean);
  if (!ids.length) return;
  ids.forEach((id) => state.deletedReadyMadeDraftIds.add(id));
  state.selectedOrders = new Set([...state.selectedOrders].filter((id) => !state.deletedReadyMadeDraftIds.has(id)));
  state.activeStandaloneOrderActionId = null;
  state.activeStandaloneOrderActionPosition = null;
  renderOrdersPage();
  showToast(`${ids.length} draft order${ids.length === 1 ? "" : "s"} deleted.`);
}

function setOrdersStatusUpdateModal(open) {
  el("ordersStatusUpdateModal").classList.toggle("open", open);
  if (open) {
    const count = state.statusUpdateContext === "detail" ? state.selectedDetailOrders.size : state.selectedOrders.size;
    setText(el("ordersStatusUpdateSummary"), `You are about to update ${count} selected order${count === 1 ? "" : "s"} to "${state.ordersBulkStatus}".`);
  } else if (state.inlineStatusOrderId) {
    state.inlineStatusOrderId = null;
    state.selectedOrders.clear();
    state.ordersBulkStatus = "";
  }
  setOverlay(open || anyModalOpen());
}

function setOrderRemarksModal(open, orderId = state.activeOrderRemarksModalId) {
  const modal = el("orderRemarksModal");
  if (!modal) return;
  const order = orderId ? findStandaloneOrder(orderId) || orders.find((item) => item.id === orderId) || readyMadeDraftOrders.find((item) => item.id === orderId) : null;
  state.activeOrderRemarksModalId = open && order ? order.id : null;
  modal.classList.toggle("open", open && Boolean(order));
  if (open && order) {
    setText(el("orderRemarksModalOrderNumber"), order.order || order.orderNumber || order.orderName || order.id);
    el("orderRemarksModalInput").value = state.orderRemarks[order.id] || "";
    window.setTimeout(() => el("orderRemarksModalInput")?.focus(), 0);
  }
  setOverlay((open && Boolean(order)) || anyModalOverlayOpen());
}

function setOrderDetailStatusModal(open) {
  const modal = el("orderDetailStatusModal");
  if (!modal) return;
  const order = state.selectedOrderId ? findStandaloneOrder(state.selectedOrderId) || orders.find((item) => item.id === state.selectedOrderId) : null;
  modal.classList.toggle("open", open && Boolean(order));
  if (open && order) {
    state.orderDetailStatusDraft = order.status || "";
    setText(el("orderDetailStatusModalOrder"), order.order || order.orderNumber || order.orderName || order.id);
    renderOrderDetailStatusOptions(order);
  } else {
    state.orderDetailStatusDraft = "";
  }
  setOverlay((open && Boolean(order)) || anyModalOpen());
}

function renderOrderDetailStatusOptions(order) {
  const container = el("orderDetailStatusOptions");
  if (!container) return;
  const options = orderNavType(order?.type) === "ReadyMade drafts" ? readyMadeDraftStatusOptions : orderStatusOptions;
  container.innerHTML = options
    .map((status) => {
      const selected = state.orderDetailStatusDraft === status;
      return `
        <button class="menu-action popout-item ${selected ? "bg-secondary" : ""}" data-order-detail-status-option="${escapeAttr(status)}" type="button">
          <span class="min-w-0 flex-1">${orderStatusMarkup(status)}</span>
          ${selected ? icon("check", "h-4 w-4 text-primary") : ""}
        </button>
      `;
    })
    .join("");
}

function applyOrderDetailStatusUpdate() {
  const orderId = state.selectedOrderId;
  const nextStatus = state.orderDetailStatusDraft;
  if (!orderId || !nextStatus) return;
  const sources = [...standaloneOrders, ...orders, ...readyMadeDraftOrders];
  const order = sources.find((item) => item.id === orderId);
  if (!order) return;
  order.status = nextStatus;
  if ("daysInStatus" in order) order.daysInStatus = "0";
  setOrderDetailStatusModal(false);
  renderOrderDetail(orderId);
  renderOrdersPage();
  showToast(`Order status updated to ${nextStatus}.`);
}

function saveOrderRemarksModal() {
  const orderId = state.activeOrderRemarksModalId;
  if (!orderId) return;
  const value = el("orderRemarksModalInput").value.trim();
  if (value) {
    state.orderRemarks[orderId] = value;
  } else {
    delete state.orderRemarks[orderId];
  }
  localStorage.setItem("relocate-order-remarks", JSON.stringify(state.orderRemarks));
  setOrderRemarksModal(false);
  if (state.selectedOrderId === orderId) renderOrderDetail(orderId);
  showToast("Remark saved.");
}

function applySelectedOrdersStatusUpdate() {
  const nextStatus = state.ordersBulkStatus;
  const detailContext = state.statusUpdateContext === "detail";
  const selectedSet = detailContext ? state.selectedDetailOrders : state.selectedOrders;
  if (!selectedSet.size || !nextStatus) return;
  const selectedIds = new Set(selectedSet);
  let updateCount = 0;
  const updateSources = detailContext ? orders : [...standaloneOrders, ...readyMadeDraftOrders];
  updateSources.forEach((order) => {
    if (!selectedIds.has(order.id)) return;
    order.status = nextStatus;
    if ("daysInStatus" in order) order.daysInStatus = "0";
    updateCount += 1;
  });
  selectedSet.clear();
  state.inlineStatusOrderId = null;
  state.ordersBulkStatus = "";
  state.activeOrdersBulkStatusPosition = null;
  state.statusUpdateContext = "orders";
  setOrdersStatusUpdateModal(false);
  detailContext ? renderDetailOrders() : renderOrdersPage();
  renderDashboard();
  showToast(`${updateCount} order${updateCount === 1 ? "" : "s"} updated.`);
}

function renderOrdersPage() {
  if (!el("ordersRows")) return;
  syncOrdersTypeChrome();
  const draftMode = isReadyMadeDraftsOrdersView();
  const columns = draftMode ? readyMadeDraftColumnDefinitions : getVisibleOrdersColumns();
  if (!columns.some((column) => column.key === state.ordersSort.key)) {
    state.ordersSort = { key: columns[0]?.key || "order", direction: "asc" };
  }
  const searchFirstWaiting = state.ordersSearchFirstMode && !ordersHasSearchCriteria();
  const rows = searchFirstWaiting ? [] : currentOrdersRows();
  const { totalPages, visibleRows } = paginatedStandaloneOrders(rows);
  const chips = renderOrdersFilterChips();
  renderOrdersTableStructure(columns);
  const ordersEmptyState = el("ordersEmptyState");
  const ordersTableWrap = el("ordersTableWrap");
  const ordersTableFooter = el("ordersTableFooter");
  const setOrdersTableEmptyChrome = (empty) => {
    ordersTableWrap?.classList.toggle("hidden", empty);
    ordersTableFooter?.classList.toggle("hidden", empty);
    ordersEmptyState?.classList.toggle("min-h-[520px]", empty);
  };
  const setOrdersEmptyState = (visible, options = {}) => {
    if (!ordersEmptyState) return;
    ordersEmptyState.classList.toggle("hidden", !visible);
    setOrdersTableEmptyChrome(visible);
    ordersEmptyState.innerHTML = visible
      ? `<div class="table-empty-state min-h-[520px]">${tableEmptyStateContent(options)}</div>`
      : "";
  };
  if (searchFirstWaiting) {
    el("ordersRows").innerHTML = "";
    setOrdersEmptyState(true, {
      title: "No results loaded yet",
      description: `Search or apply a filter to show matching ${draftMode ? "ReadyMade drafts" : "orders"}.`,
      resetTarget: "orders",
    });
  } else if (!rows.length) {
    el("ordersRows").innerHTML = "";
    setOrdersEmptyState(true, {
      title: "No results found",
      description: "Try adjusting your search or filters to find what you're looking for.",
      resetTarget: "orders",
    });
  } else {
    setOrdersEmptyState(false);
    el("ordersRows").innerHTML = visibleRows
      .map(
        (order) => `
          <tr class="h-12 cursor-pointer hover:bg-surface" data-order-row="${escapeAttr(order.id)}">
            ${orderActionCell(order, "left")}
            <td class="px-4"><input class="orders-row-check check" type="checkbox" data-order-id="${order.id}" ${state.selectedOrders.has(order.id) ? "checked" : ""} /></td>
            ${columns.map((column) => `<td class="min-w-0 ${["legend", "order"].includes(column.key) ? "overflow-visible" : "overflow-hidden"} px-4">${column.render(order)}</td>`).join("")}
            <td class="px-0"></td>
            ${orderActionCell(order, "right")}
          </tr>
        `,
      )
      .join("");
  }
  const combinedSearchActive = isFuturePrototypeVersion() && state.ordersSearchQuery.trim();
  setText(el("ordersResultText"), searchFirstWaiting ? "No results loaded" : chips.length || combinedSearchActive || ordersStructuredSearchActive() ? "Showing results containing" : "Showing all result");
  const filtersOrSearchActive = chips.length > 0 || ordersHasSearchCriteria();
  el("ordersResultToolbar")?.classList.toggle("hidden", !isFuturePrototypeVersion() && !filtersOrSearchActive);
  syncOrdersStatusFields();
  renderOrdersStatusMenu();
  renderOrdersPrintMenu();
  renderOrdersFavoriteFilters();
  syncOrdersExposedFilterFields();
  syncOrdersStructuredSearchInputs();
  renderOrdersSelectMenu();
  setText(el("ordersPageSizeLabel"), String(state.ordersPageSize));
  setText(el("ordersTotalCount"), `of ${rows.length} ${draftMode ? "drafts" : "entries"}`);
  el("ordersTypeToggle").classList.toggle("hidden", !state.ordersTypeUnlocked);
  document.querySelectorAll("[data-orders-type]").forEach((button) => button.classList.toggle("active", button.dataset.ordersType === state.ordersType));
  const visibleIds = visibleRows.map((order) => order.id);
  const selectedCount = visibleIds.filter((id) => state.selectedOrders.has(id)).length;
  const selectAll = el("selectAllOrders");
  selectAll.checked = visibleIds.length > 0 && selectedCount === visibleIds.length;
  selectAll.indeterminate = selectedCount > 0 && selectedCount < visibleIds.length;
  renderOrdersBulkActions();
  renderOrdersPagination(totalPages);
  renderOrdersViews();
  renderOrdersColumnSettings();
  translatePage(el("ordersPage"));
}

function renderOrdersViews() {
  const draftMode = isReadyMadeDraftsOrdersView();
  const futureVersion = isFuturePrototypeVersion();
  el("ordersViewControls")?.classList.toggle("hidden", !futureVersion || draftMode);
  Object.entries(state.ordersViews).forEach(([view, visible]) => {
    const button = el(`orders${view[0].toUpperCase()}${view.slice(1)}ViewBtn`);
    if (button) {
      button.classList.toggle("bg-sky-100", visible);
      button.classList.toggle("text-sky-700", visible);
      button.classList.toggle("bg-secondary", !visible);
      button.classList.toggle("text-foreground", !visible);
    }
  });
  el("ordersColumnSettingsBtn")?.classList.toggle("hidden", draftMode || !state.ordersColumnSettingsUnlocked);
  el("ordersProductViewBtn")?.classList.toggle("hidden", !futureVersion || draftMode);
  el("ordersPricingViewBtn")?.classList.toggle("hidden", !futureVersion || isReadyMadeOrdersView() || draftMode);
  el("ordersDatesViewBtn")?.classList.toggle("hidden", !futureVersion || draftMode);
}

function syncOrdersTypeChrome() {
  const draftMode = isReadyMadeDraftsOrdersView();
  const readyMade = isReadyMadeOrdersView();
  const readyMadeLike = readyMade || draftMode;
  setText(el("ordersPageTitle"), draftMode ? "ReadyMade Draft Orders" : readyMade ? "ReadyMade Orders" : "CustomMade Orders");
  setText(el("ordersCreditUsageText"), "€75,000 of €100,000 store credit used.");
  const futureVersion = isFuturePrototypeVersion();
  const activeSearchKeys = activeOrdersAdvancedSearchKeys();
  const searchPlaceholder = draftMode ? "Search order name" : readyMade ? "Search order" : "Search Order number or customer name...";
  const ordersSearch = el("ordersSearch");
  if (ordersSearch) {
    ordersSearch.dataset.i18nOriginalPlaceholder = searchPlaceholder;
    ordersSearch.placeholder = state.language === "fr" ? translateRaw(searchPlaceholder) : searchPlaceholder;
    const combinedSearchWrap = ordersSearch.closest("label");
    if (combinedSearchWrap) combinedSearchWrap.style.display = futureVersion ? "" : "none";
  }
  const structuredSearchWrap = el("ordersStructuredSearchWrap");
  if (structuredSearchWrap) structuredSearchWrap.style.display = futureVersion ? "none" : "";

  el("ordersAdvancedFiltersBtn")?.classList.toggle("hidden", draftMode);
  el("ordersFavoriteFilters")?.classList.toggle("hidden", draftMode);
  el("ordersFilterChips")?.classList.toggle("hidden", draftMode);
  el("ordersCascadeItemBtn")?.closest("label")?.classList.toggle("hidden", draftMode);
  el("ordersSalesAssociateFilter")?.classList.toggle("hidden", readyMadeLike);
  document.querySelectorAll('[data-orders-select="salesAssociate"]').forEach((button) => {
    button.closest("label")?.classList.toggle("hidden", readyMadeLike);
  });
  document.querySelectorAll('[data-orders-select="legend"]').forEach((button) => {
    button.closest("label")?.classList.toggle("hidden", draftMode);
  });
  document.querySelectorAll("[data-orders-date-filter]").forEach((input) => {
    input.closest("label")?.classList.toggle("hidden", draftMode);
  });
  el("ordersPricingViewBtn")?.classList.toggle("hidden", readyMadeLike);

  const validStatuses = new Set(ordersStatusOptionsForCurrentView());
  state.ordersStatusFilter = new Set([...state.ordersStatusFilter].filter((status) => validStatuses.has(status)));
  const validItems = isReadyMadeDraftsOrdersView() ? new Set(readyMadeDraftItemOptions) : new Set(ordersSelectOptions.item);
  state.ordersFilters.item = new Set([...state.ordersFilters.item].filter((item) => validItems.has(item)));

  if (readyMadeLike) {
    state.ordersFilters.salesAssociate = new Set();
    if (state.activeOrdersSelect === "salesAssociate") {
      state.activeOrdersSelect = null;
      state.activeOrdersSelectInstance = null;
      state.activeOrdersSelectPosition = null;
      el("ordersSelectMenu")?.classList.remove("open");
    }
  }

  if (draftMode) {
    state.ordersAdvancedSearch = emptyOrdersAdvancedSearch();
    state.ordersFilters.legend = new Set();
    state.ordersDateFilters.processedDateFrom = "";
    state.ordersDateFilters.processedDateTo = "";
    if (["legend", "salesAssociate"].includes(state.activeOrdersSelect)) {
      state.activeOrdersSelect = null;
      state.activeOrdersSelectInstance = null;
      state.activeOrdersSelectPosition = null;
      el("ordersSelectMenu")?.classList.remove("open");
    }
    closeOrdersCascadeItemMenu();
  }

  document.querySelectorAll("[data-orders-search-wrapper]").forEach((wrapper) => {
    wrapper.classList.toggle("hidden", !activeSearchKeys.includes(wrapper.dataset.ordersSearchWrapper));
  });

  setText(
    el("ordersAdvancedSearchDescription"),
    readyMade ? "Find a ReadyMade order by order number or ReadyMade order name." : "Find by order number, customer name, company, delivery note, or receipt.",
  );
  setText(
    el("ordersAdvancedFiltersDescription"),
    readyMade ? "Filter ReadyMade orders by order status, item, legend, and processed date." : "Filter orders by order status, sales associate, item, legend, and processed date.",
  );
}

function renderDashboard() {
  if (!el("dashboardMetrics")) return;
  const simpleHome = !isFuturePrototypeVersion();
  document.body.classList.toggle("dashboard-ambient-active", state.currentPage === "home");
  el("homeSimplePage")?.classList.toggle("hidden", !simpleHome);
  el("dashboardFullPage")?.classList.toggle("hidden", simpleHome);
  el("dashboardWipOverlay")?.classList.toggle("hidden", simpleHome || state.dashboardOverlayHidden);
  document.querySelectorAll("[data-home-search-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.homeSearchMode === state.homeSearchMode);
  });
  const homeSearchModeLabel = el("homeSearchModeLabel");
  const homeSearchModeMenu = el("homeSearchModeMenu");
  const homeSearchModeLabels = { order: "Order", customer: "Customer", fabric: "Fabric" };
  if (homeSearchModeLabel) setText(homeSearchModeLabel, homeSearchModeLabels[state.homeSearchMode] || homeSearchModeLabels.order);
  if (homeSearchModeMenu) {
    homeSearchModeMenu.querySelectorAll("[data-home-search-mode]").forEach((button) => {
      button.classList.toggle("bg-secondary", button.dataset.homeSearchMode === state.homeSearchMode);
      button.classList.toggle("font-medium", button.dataset.homeSearchMode === state.homeSearchMode);
    });
  }
  const homeSearchInput = el("homeSearchInput");
  if (homeSearchInput) {
    homeSearchInput.value = state.homeSearchQuery;
    const placeholders = {
      order: "Search by order number",
      customer: "Search by customer name",
      fabric: "Search by fabric code or description",
    };
    homeSearchInput.placeholder = placeholders[state.homeSearchMode] || placeholders.order;
  }
  const waiting = standaloneOrders.filter((order) => order.status === "On hold").length;
  const production = standaloneOrders.filter((order) => order.status === "In workshop").length;
  const delivery = standaloneOrders.filter((order) => order.status === "Out for delivery" || order.status === "Received").length;
  const urgent = standaloneOrders.filter((order) => order.legend === "Urgent").length;
  const metrics = [
    { label: "Waiting to be processed", value: waiting, tone: "bg-orange-50 text-orange-600", caption: "Requires review", statuses: ["On hold"] },
    { label: "In production", value: production, tone: "bg-sky-100 text-sky-700", caption: "Currently in workshop", statuses: ["In workshop"] },
    { label: "Out for delivery", value: delivery, tone: "bg-emerald-50 text-emerald-700", caption: "Ready or delivered", statuses: ["Out for delivery", "Received"] },
    { label: "Urgent delivery", value: urgent, tone: "bg-red-50 text-red-600", caption: "Wedding or rush orders", legend: "Urgent" },
  ];

  el("dashboardMetrics").innerHTML = metrics
    .map(
      (metric) => `
        <button class="rounded-[14px] border border-border bg-card p-5 text-left shadow-panel hover:bg-secondary/50" data-dashboard-orders-filter type="button" data-orders-page="CustomMade" data-dashboard-statuses="${escapeAttr((metric.statuses || []).join("|"))}" data-dashboard-legend="${escapeAttr(metric.legend || "")}">
          <span class="status ${metric.tone}">${metric.label}</span>
          <span class="mt-4 block text-3xl font-semibold">${metric.value}</span>
          <span class="mt-1 block text-sm text-muted-foreground">${metric.caption}</span>
        </button>
      `,
    )
    .join("");

  const recentOrders = standaloneOrders.slice(0, 5);
  el("dashboardAttentionRows").innerHTML = recentOrders
    .map(
      (order) => `
        <article class="rounded-[12px] border border-border bg-card p-4 shadow-sm transition hover:bg-secondary/50">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <button class="pill dashboard-chip max-w-full justify-start bg-sky-100 text-sky-700 hover:bg-sky-200/70" data-order-number="${order.id}" type="button" title="${escapeAttr(order.order)}">
              <svg class="icon shrink-0" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              <span class="min-w-0 truncate">${escapeHtml(order.order)}</span>
            </button>
            <div class="flex shrink-0 items-center gap-2">
              ${order.legend ? orderLegendMarkup(order.legend) : ""}
              ${orderStatusMarkup(order.status)}
            </div>
          </div>
          <div class="mt-4 grid gap-3 border-t border-border pt-4 text-sm sm:grid-cols-2 xl:grid-cols-4">
            <div class="min-w-0">
              <span class="block text-muted-foreground">Customer</span>
              <button class="pill mt-1 max-w-full justify-start bg-sky-100 text-sky-700 hover:bg-sky-200/70" data-order-customer-id="${order.customerId}" type="button" title="${escapeAttr(order.customer)}">
                <svg class="icon h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span class="min-w-0 truncate">${escapeHtml(order.customer)}</span>
              </button>
            </div>
            <div class="min-w-0">
              <span class="block text-muted-foreground">Item type</span>
              <span class="mt-1 block truncate font-medium text-foreground">${escapeHtml(order.item || "-")}</span>
            </div>
            <div class="min-w-0">
              <span class="block text-muted-foreground">Fabric</span>
              <span class="mt-1 block truncate font-medium text-foreground" title="${escapeAttr(order.fabric || "-")}">${escapeHtml(order.fabric || "-")}</span>
            </div>
            <div class="min-w-0">
              <span class="block text-muted-foreground">Sales associate</span>
              <span class="mt-1 block truncate font-medium text-foreground">${escapeHtml(order.salesAssociate || "-")}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  el("dashboardRecentCustomers").innerHTML = customers
    .slice(0, 7)
    .map(
      (customer) => `
        <button class="open-customer rounded-[12px] border border-border bg-card p-4 text-left shadow-sm hover:bg-secondary/60" data-id="${customer.id}">
          <span class="flex min-w-0 items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-sm font-medium text-muted-foreground">${initials(customer)}</span>
            <span class="min-w-0">
              <span class="block truncate font-medium">${fullName(customer)}</span>
              <span class="mt-1 block truncate text-sm text-muted-foreground">${customer.city || "Customer record"}</span>
            </span>
          </span>
          <span class="mt-3 block truncate text-sm text-muted-foreground">${customer.mobile && customer.mobile !== "-" ? customer.mobile : customer.phone || "No phone number"}</span>
        </button>
      `,
    )
    .join("");

  translatePage(el("homeDashboardPage"));
}

function submitHomeSearch() {
  const query = state.homeSearchQuery.trim();
  if (!query) {
    const emptyMessages = {
      order: "Enter an order number to search.",
      customer: "Enter a customer name to search.",
      fabric: "Enter a fabric code or description to search.",
    };
    showToast(emptyMessages[state.homeSearchMode] || emptyMessages.order);
    return;
  }
  if (state.homeSearchMode === "customer") {
    showToast("Customer home search is not linked yet.");
    return;
  }
  if (state.homeSearchMode === "fabric") {
    setPage("fabricInventory");
    const fabricSearch = el("fabricSearch");
    if (fabricSearch) {
      fabricSearch.value = query;
      state.fabricPage = 1;
      renderFabricInventory();
    }
    return;
  }
  state.ordersType = "CustomMade";
  state.ordersSearchQuery = "";
  state.ordersStructuredSearchDraft = { order: query, firstName: "", lastName: "" };
  state.ordersStructuredSearch = { order: query, firstName: "", lastName: "" };
  state.ordersAdvancedSearch = {
    ...state.ordersAdvancedSearch,
    order: "",
    rmName: "",
    firstName: "",
    lastName: "",
    companyName: "",
    deliveryNumber: "",
    receiptId: "",
  };
  state.ordersPage = 1;
  setPage("orders");
}

function syncOrdersAdvancedInputs() {
  syncOrdersTypeChrome();
  syncOrdersStatusFields();
  syncOrdersExposedFilterFields();
}

function syncOrdersAdvancedSearchInputs() {
  syncOrdersTypeChrome();
  document.querySelectorAll(".orders-advanced-search").forEach((input) => {
    input.value = state.ordersAdvancedSearch[input.dataset.ordersSearchField] || "";
  });
}

function syncOrdersStructuredSearchInputs() {
  const fields = {
    order: el("ordersSearchOrderNumber"),
    firstName: el("ordersSearchFirstName"),
    lastName: el("ordersSearchLastName"),
  };
  Object.entries(fields).forEach(([key, input]) => {
    if (input) input.value = state.ordersStructuredSearchDraft[key] || "";
  });
}

function applyOrdersStructuredSearch() {
  state.ordersStructuredSearch = {
    order: state.ordersStructuredSearchDraft.order.trim(),
    firstName: state.ordersStructuredSearchDraft.firstName.trim(),
    lastName: state.ordersStructuredSearchDraft.lastName.trim(),
  };
  state.ordersPage = 1;
  renderOrdersPage();
}

function resetOrdersFilterState() {
  state.ordersStatusFilter = new Set();
  state.ordersStatusQuery = "";
  state.ordersFilters = {
    salesAssociate: new Set(),
    legend: new Set(),
    item: new Set(),
  };
  state.ordersDateFilters = {
    processedDateFrom: "",
    processedDateTo: "",
  };
  if (el("ordersStatusSearch")) el("ordersStatusSearch").value = "";
}

function resetOrdersTableFilters() {
  resetOrdersFilterState();
  state.ordersSearchQuery = "";
  state.ordersStructuredSearch = emptyOrdersStructuredSearch();
  state.ordersStructuredSearchDraft = emptyOrdersStructuredSearch();
  state.ordersAdvancedSearch = emptyOrdersAdvancedSearch();
  state.ordersPage = 1;
  if (el("ordersSearch")) el("ordersSearch").value = "";
  syncOrdersStructuredSearchInputs();
  syncOrdersStatusFields();
  syncOrdersExposedFilterFields();
  syncOrdersAdvancedInputs();
  syncOrdersAdvancedSearchInputs();
  renderOrdersPage();
}

function detailRows(rows) {
  return rows
    .map(
      ([label, value]) => `
        <div class="grid grid-cols-[minmax(120px,220px)_minmax(0,1fr)] gap-4 border-b border-border py-3 last:border-b-0">
          <span class="text-muted-foreground">${label}</span>
          <span class="text-left font-medium text-foreground">${value}</span>
        </div>
      `,
    )
    .join("");
}

function compactDetailRows(rows) {
  return rows
    .map(
      ([label, value]) => `
        <div class="grid grid-cols-[minmax(104px,0.8fr)_minmax(0,1.2fr)] gap-3 border-b border-border py-2 last:border-b-0">
          <span class="text-xs font-medium text-muted-foreground">${label}</span>
          <span class="min-w-0 break-words text-sm font-medium leading-5 text-foreground">${value}</span>
        </div>
      `,
    )
    .join("");
}

function orderDetailRows(rows) {
  return rows
    .map(
      ([label, value]) => `
        <div class="grid grid-cols-[minmax(112px,0.9fr)_minmax(0,1.25fr)] gap-3 border-b border-border py-2 last:border-b-0">
          <span class="text-xs font-light text-muted-foreground">${label}</span>
          <span class="min-w-0 break-words text-sm font-light leading-5 text-foreground">${value}</span>
        </div>
      `,
    )
    .join("");
}

function detailSubsection(title, rows) {
  return `
    <section class="min-w-0 rounded-[10px] border border-border bg-card px-4 py-3">
      <h3 class="mb-2 text-sm font-semibold text-foreground">${title}</h3>
      <div>
        ${orderDetailRows(rows)}
      </div>
    </section>
  `;
}

function swatchForFabric(fabric = "") {
  const source = String(fabric || "fabric");
  const total = Array.from(source).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return generatedFabricSwatches[total % generatedFabricSwatches.length] || "#747560";
}

function formatOrderDetailFabricLabel(fabric = "") {
  const label = String(fabric || "-")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ");
  return label.replace(/^([A-Z]{2}\d+)\s+(.+)$/i, (_, code, name) => {
    const title = name.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
    return `${code.toUpperCase()} ${title}`;
  });
}

function orderDetailMaterialCard(order) {
  const materialRows = orderDetailSections.materials;
  const itemType = order?.item || materialRows[0]?.[1] || "-";
  const fabric = order?.fabric || materialRows[1]?.[1] || "-";
  const fabricTitle = formatOrderDetailFabricLabel(fabric);
  const lining = materialRows.find(([label]) => label === "Lining")?.[1] || "-";
  const priceCategory = materialRows.find(([label]) => label === "Price category")?.[1] || "-";
  const salesAssociate = order?.salesAssociate || orderDetailSections.metadata.find(([label]) => label === "Sales associate")?.[1] || "-";
  const swatch = swatchForFabric(fabric);
  return `
    <section class="min-w-0 rounded-[10px] border border-border bg-card p-5">
      <div class="flex flex-col gap-4 sm:flex-row">
        <span class="fabric-swatch-preview h-24 w-24 shrink-0 rounded-lg" data-fabric-swatch="${escapeAttr(swatch)}" style="--fabric-swatch:${escapeAttr(swatch)};height:96px;width:96px;" tabindex="0" aria-label="Zoom fabric swatch for ${escapeAttr(fabric)}"></span>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-light leading-5 text-muted-foreground">${escapeHtml(itemType)}</p>
          <p class="truncate text-base font-medium text-foreground">${escapeHtml(fabricTitle)}</p>
          <div class="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <div>
              <span class="block text-xs font-light text-muted-foreground">Lining</span>
              <span class="block truncate font-light text-foreground">${escapeHtml(lining)}</span>
            </div>
            <div>
              <span class="block text-xs font-light text-muted-foreground">Sales associate</span>
              <span class="block truncate font-light text-foreground">${escapeHtml(salesAssociate)}</span>
            </div>
            <div>
              <span class="block text-xs font-light text-muted-foreground">Price category</span>
              <span class="block truncate font-light text-foreground">${escapeHtml(priceCategory)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function orderDetailBasicInformationCard(order) {
  const materialRows = orderDetailSections.materials;
  const itemType = order?.item || materialRows[0]?.[1] || "-";
  const fabric = order?.fabric || materialRows[1]?.[1] || "-";
  const fabricTitle = formatOrderDetailFabricLabel(fabric);
  const lining = materialRows.find(([label]) => label === "Lining")?.[1] || "-";
  const priceCategory = materialRows.find(([label]) => label === "Price category")?.[1] || "-";
  const salesAssociate = order?.salesAssociate || orderDetailSections.metadata.find(([label]) => label === "Sales associate")?.[1] || "-";
  const rows = [
    ["item type", escapeHtml(itemType)],
    [
      "Fabric",
      `<button class="pill w-fit max-w-full justify-start bg-sky-100 text-sky-700 hover:bg-sky-200/70" data-order-detail-fabric="${escapeAttr(fabricTitle)}" type="button">
        <svg class="icon h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24"><path d="M4 7.5h16"></path><path d="M4 16.5h16"></path><path d="M7.5 4v16"></path><path d="M16.5 4v16"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>
        <span class="min-w-0 truncate">${escapeHtml(fabricTitle)}</span>
      </button>`,
    ],
    ["Lining", escapeHtml(lining)],
    ["Price category", escapeHtml(priceCategory)],
    ["Sales associate", escapeHtml(salesAssociate)],
  ];
  return `
    <section class="min-w-0 rounded-[10px] border border-border bg-card p-4">
      <h3 class="mb-3 text-sm font-semibold text-foreground">Basic information</h3>
      <div>
        ${orderDetailRows(rows)}
      </div>
    </section>
  `;
}

function orderDetailCustomerCard(order) {
  const customer = customers.find((item) => item.id === order?.customerId);
  const customerName = customer ? fullName(customer) : order?.customer || "-";
  const phone = customer ? customer.mobile || customer.phone || "-" : "-";
  const email = customer ? customerEmailDisplay(customer) : "-";
  return `
    <section class="min-w-0 rounded-[10px] border border-border bg-card p-4">
      <h3 class="mb-3 text-sm font-semibold text-foreground">Customer information</h3>
      <div class="grid gap-2">
        <div class="grid grid-cols-[128px_minmax(0,1fr)] gap-3 border-b border-border py-2">
          <span class="text-xs font-light text-muted-foreground">Customer</span>
          <button class="pill w-fit max-w-full justify-start bg-sky-100 text-sky-700 hover:bg-sky-200/70 disabled:bg-secondary disabled:text-muted-foreground" data-order-detail-customer-id="${escapeAttr(customer?.id || "")}" type="button" ${customer ? "" : "disabled"}>
            <svg class="icon h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span class="min-w-0 truncate">${escapeHtml(customerName)}</span>
          </button>
        </div>
        <div class="grid grid-cols-[128px_minmax(0,1fr)] gap-3 border-b border-border py-2">
          <span class="text-xs font-light text-muted-foreground">Phone</span>
          <span class="min-w-0 truncate text-sm font-light text-foreground">${escapeHtml(phone)}</span>
        </div>
        <div class="grid grid-cols-[128px_minmax(0,1fr)] gap-3 border-b border-border py-2">
          <span class="text-xs font-light text-muted-foreground">Email</span>
          <span class="min-w-0 truncate text-sm font-light text-foreground">${escapeHtml(email)}</span>
        </div>
      </div>
    </section>
  `;
}

function detailCard(title, body, extraClass = "") {
  return `
    <section class="rounded-[14px] border border-border bg-card p-5 shadow-panel ${extraClass}">
      <h2 class="mb-3 text-base font-semibold">${title}</h2>
      ${body}
    </section>
  `;
}

function orderDetailCategoryCard(key, title, body, extraClass = "") {
  const compactMode = !state.orderDetailInfoVisible;
  const collapsed = compactMode && state.orderDetailCollapsedSections.has(key);
  if (!compactMode) return detailCard(title, body, extraClass);
  return `
    <section class="overflow-hidden rounded-[14px] border border-border bg-card shadow-panel ${extraClass}">
      <button class="flex w-full items-center gap-2 ${collapsed ? "rounded-[14px]" : "rounded-t-[14px]"} bg-secondary px-4 py-3 text-left" data-order-detail-category="${escapeAttr(key)}" type="button" aria-expanded="${!collapsed}">
        <span class="flex h-4 w-4 items-center justify-center rounded border border-border bg-card text-[10px] text-muted-foreground">${collapsed ? "+" : "−"}</span>
        <span class="text-base font-semibold">${title}</span>
      </button>
      <div class="${collapsed ? "hidden" : ""} p-4">
        ${body}
      </div>
    </section>
  `;
}

function customerAccountValue(value) {
  if (value === true) return "Yes";
  if (value === false) return "No";
  if (value === undefined || value === null || value === "") return "-";
  return String(value);
}

function accountRows(rows) {
  return detailRows(rows.map(([label, value]) => [label, escapeHtml(customerAccountValue(value))]));
}

function customerAccountRows(rows) {
  return rows
    .map(([label, value]) => {
      const displayValue = escapeHtml(customerAccountValue(value));
      return `
        <div class="grid gap-1 border-b border-border py-3 last:border-b-0 sm:grid-cols-[minmax(130px,0.8fr)_minmax(0,1.2fr)] sm:gap-4">
          <span class="text-sm text-muted-foreground">${label}</span>
          <span class="min-w-0 break-words font-medium text-foreground">${displayValue}</span>
        </div>
      `;
    })
    .join("");
}

function customerAccountSection(title, rows, extraClass = "") {
  return `
    <section class="rounded-[14px] border border-border bg-card p-5 shadow-panel ${extraClass}">
      <h3 class="mb-3 text-base font-semibold">${title}</h3>
      ${customerAccountRows(rows)}
    </section>
  `;
}

function customerAccountProfile(customer) {
  const extra = customerAccountExtras[customer.id] || {};
  const fallbackIndex = customers.findIndex((item) => item.id === customer.id);
  const paLeads = ["Rodney Charles", "Sarah Johnson", "James Porter", "Emma Clarke", "Oliver Grant"];
  const referrals = ["Inspiration site", "Custom link", "Walk in", "Existing customer", "Marketing tools"];
  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    initials: initials(customer),
    suffix: extra.suffix || customer.suffix || "-",
    address: customer.address,
    postcode: customer.postcode,
    city: customer.city,
    country: extra.country || customer.country || "United Kingdom",
    dob: formatDateForDisplay(customer.dob || extra.dob || ""),
    phone: customer.phone,
    mobile: customer.mobile,
    email: customerEmailDisplay(customer),
    referredBy: extra.referredBy || referrals[Math.max(fallbackIndex, 0) % referrals.length],
    keepInformed: extra.keepInformed ?? fallbackIndex % 2 === 0,
    paLead: extra.paLead || paLeads[Math.max(fallbackIndex, 0) % paLeads.length],
    companyName: extra.companyName || customer.company,
    companyAddress: extra.companyAddress || customer.address,
    companyPostcode: extra.companyPostcode || customer.postcode,
    companyCity: extra.companyCity || customer.city,
    customerProject: extra.customerProject || `${customer.lastName} wardrobe review`,
  };
}

function renderCustomerAccount(customer) {
  const panel = el("detailAccountPanel");
  if (!panel) return;
  const profile = customerAccountProfile(customer);
  const contactRows = [
    ["First name", profile.firstName],
    ["Last name", profile.lastName],
    ["Initials", profile.initials],
    ["Suffix", profile.suffix],
    ["Date of birth", profile.dob],
    ["Phone number", profile.phone],
    ["Mobile number", profile.mobile],
    ["E-mail", profile.email],
  ];
  const addressRows = [
    ["Address", profile.address],
    ["Postal code", profile.postcode],
    ["City", profile.city],
    ["Country", profile.country],
  ];
  const preferenceRows = [
    ["Referred by", profile.referredBy],
    ["Keep informed", profile.keepInformed],
    ["PA Lead", profile.paLead],
  ];
  const companyRows = [
    ["Company name", profile.companyName],
    ["Company address", profile.companyAddress],
    ["Company postal code", profile.companyPostcode],
    ["Company city", profile.companyCity],
    ["Customer project", profile.customerProject],
  ];
  panel.innerHTML = `
    <div class="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
      <div class="grid gap-5">
        ${customerAccountSection("Contact details", contactRows)}
        ${customerAccountSection("Account preferences", preferenceRows)}
      </div>
      <div class="grid gap-5 content-start">
        ${customerAccountSection("Address details", addressRows)}
        ${customerAccountSection("Company details", companyRows)}
      </div>
    </div>
  `;
  translatePage(panel);
}

function renderOrderDetailInfo() {
  const order = findStandaloneOrder(state.selectedOrderId) || orders.find((item) => item.id === state.selectedOrderId) || standaloneOrders[0];
  return `
    <section>
      <div class="grid gap-4 lg:grid-cols-2">
        ${orderDetailBasicInformationCard(order)}
        ${detailSubsection("Dates", orderDetailSections.dates)}
        ${orderDetailCustomerCard(order)}
        ${detailSubsection("Pricing", orderDetailSections.pricing)}
        ${detailSubsection("Metadata", orderDetailSections.metadata.filter(([label]) => label !== "Sales associate"))}
      </div>
    </section>
    <section class="mt-5 border-t border-border pt-5">
      <h2 class="mb-3 text-base font-semibold">Item Detail</h2>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[760px] text-left text-xs">
          <thead class="text-muted-foreground">
            <tr class="border-b border-border">
              <th class="px-2 py-2 font-medium">Product</th>
              <th class="px-2 py-2 font-medium">FitProfile</th>
              <th class="px-2 py-2 font-medium">Fit</th>
              <th class="px-2 py-2 font-medium">Make</th>
              <th class="px-2 py-2 font-medium">TryOn</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            ${orderDetailItems
              .map(
                (item) => `
                  <tr>
                    <td class="px-2 py-2">
                      <div class="flex items-center">
                        <span>
                          <span class="block text-sm font-medium">${item.product}</span>
                          <span class="block text-muted-foreground">${item.detail}</span>
                        </span>
                      </div>
                    </td>
                    <td class="px-2 py-2">
                      <button class="pill bg-sky-100 text-sky-700" data-order-fit-profile-id="${item.fitProfileId}" type="button">
                        <svg class="icon h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        ${item.fitProfile}
                      </button>
                    </td>
                    <td class="px-2 py-2 text-muted-foreground">${item.fit}</td>
                    <td class="px-2 py-2 text-muted-foreground">${item.make}</td>
                    <td class="px-2 py-2 text-muted-foreground">${item.tryOn}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderOrderDetailRemarksTab() {
  const order = findStandaloneOrder(state.selectedOrderId) || orders.find((item) => item.id === state.selectedOrderId) || standaloneOrders[0];
  const remark = (state.orderRemarks[order.id] || "").trim();
  return `
    <section class="rounded-[12px] border border-border bg-card p-4">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div class="min-w-0">
          <h2 class="text-sm font-semibold text-foreground">Remarks</h2>
          <p class="mt-1 max-w-3xl text-sm font-light ${remark ? "text-foreground" : "text-muted-foreground"}">${escapeHtml(remark || "No remark added")}</p>
        </div>
        <button class="btn btn-soft h-9 shrink-0" data-order-detail-action="remarks" type="button">${remark ? "Edit remark" : "Add remark"}</button>
      </div>
    </section>
  `;
}

function renderOrderDetailListTab(title, rows, note = "") {
  const columnCount = rows.length > 8 ? 3 : 2;
  const split = Math.ceil(rows.length / columnCount);
  const columns = Array.from({ length: columnCount }, (_, index) => rows.slice(index * split, (index + 1) * split)).filter((column) => column.length);
  return detailCard(
    title,
    `
      <div class="grid gap-x-6 gap-y-1 ${columns.length > 2 ? "xl:grid-cols-3" : "lg:grid-cols-2"}">
        ${columns.map((column) => `<div>${orderDetailRows(column)}</div>`).join("")}
      </div>
      ${note ? `<p class="mt-5 text-sm text-red-500">${note}</p>` : ""}
    `,
  );
}

function orderDetailVisibleParts() {
  return orderDetailParts.filter((part) => !part.pieceMode || part.pieceMode === state.orderDetailPieceMode);
}

function ensureOrderDetailActivePart() {
  const visibleParts = orderDetailVisibleParts();
  if (!visibleParts.some((part) => part.id === state.orderDetailActivePart)) {
    state.orderDetailActivePart = visibleParts[0]?.id || "jacket";
  }
  return state.orderDetailActivePart;
}

function renderOrderDetailPieceControls() {
  const activePart = ensureOrderDetailActivePart();
  const visibleParts = orderDetailVisibleParts();
  return `
    <div id="orderDetailPartNavRail" class="order-detail-part-nav-rail lg:w-[180px] lg:shrink-0">
      <nav id="orderDetailPartNav" class="flex gap-2 overflow-x-auto rounded-lg bg-secondary p-1 lg:w-[180px] lg:shrink-0 lg:flex-col lg:overflow-visible" aria-label="Order parts">
        ${visibleParts
          .map(
            (part) => `
              <button class="customer-tab justify-start ${activePart === part.id ? "active" : ""}" data-order-detail-part="${part.id}" type="button">${part.label}</button>
            `,
          )
          .join("")}
      </nav>
    </div>
  `;
}

function renderOrderDetailPartListTab(titleSuffix, sectionKey, note = "") {
  ensureOrderDetailActivePart();
  const visibleParts = orderDetailVisibleParts();
  return `
    <div class="order-detail-part-layout grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]">
      ${renderOrderDetailPieceControls()}
      <div class="space-y-6">
        ${visibleParts
          .map((part) => {
            const rows = orderDetailPartSections[part.id]?.[sectionKey] || [];
            return `
              <section id="order-detail-part-${part.id}" data-order-detail-part-section="${part.id}">
                ${renderOrderDetailListTab(`${part.label} ${titleSuffix}`, rows, note)}
              </section>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderOrderDetailFitToolsAccordion(part, rows) {
  const open = state.orderDetailOpenFitTools.has(part.id);
  return `
    <section id="order-detail-part-${part.id}" class="overflow-hidden rounded-[12px] border border-border bg-card" data-order-detail-part-section="${part.id}">
      <button class="order-detail-accordion-header flex w-full items-center justify-between gap-4 border-b px-4 py-4 text-left transition" data-order-detail-fit-tool-section="${escapeAttr(part.id)}" type="button" aria-expanded="${open}">
        <h3 class="text-base font-semibold">${escapeHtml(part.label)} FitTools</h3>
        <svg class="icon h-4 w-4 shrink-0 opacity-70 transition ${open ? "rotate-180" : ""}" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
      <div class="${open ? "" : "hidden"} px-4 py-3">
        ${rows
          .map(
            ([label, value]) => `
              <div class="grid grid-cols-[minmax(0,1fr)_minmax(72px,auto)] gap-4 border-b border-border py-2.5 last:border-b-0">
                <span class="min-w-0 text-sm font-light text-muted-foreground">${escapeHtml(label)}</span>
                <span class="text-sm font-light text-foreground">${escapeHtml(value)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderOrderDetailFinishedMeasurementsPanel() {
  const activePart = ensureOrderDetailActivePart();
  const visibleParts = orderDetailVisibleParts();
  const open = state.orderDetailFinishedMeasurementsOpen;
  return `
    <aside id="orderDetailFinishedMeasurements" class="order-detail-finished-measurements overflow-hidden rounded-[12px] border border-border bg-card">
      <button class="order-detail-accordion-header flex w-full items-center justify-between gap-3 border-b px-4 py-4 text-left transition" data-order-detail-finished-measurements-toggle type="button" aria-expanded="${open}">
        <h3 class="text-sm font-semibold">Finished Measurements*</h3>
        <svg class="icon h-4 w-4 opacity-70 transition ${open ? "rotate-180" : ""}" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
      <div class="${open ? "" : "hidden"} space-y-4 p-4">
        ${visibleParts
          .map((part) => {
            const rows = orderDetailPartSections[part.id]?.measurements || [];
            return `
              <section class="${activePart === part.id ? "" : ""}">
                <h4 class="mb-2 border-b border-border pb-2 text-sm font-light text-foreground">${escapeHtml(part.label)}</h4>
                <div>
                  ${rows
                    .map(
                      ([label, value]) => `
                        <div class="grid grid-cols-[minmax(92px,1fr)_auto] gap-3 py-0.5">
                          <span class="min-w-0 text-sm font-light text-muted-foreground">${escapeHtml(label)}</span>
                          <span class="text-sm font-light text-foreground">${escapeHtml(value)}</span>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    </aside>
  `;
}

function renderOrderDetailFitToolsMeasurementsTab() {
  ensureOrderDetailActivePart();
  const visibleParts = orderDetailVisibleParts();
  return `
    <div class="order-detail-part-layout order-detail-fit-measure-layout">
      ${renderOrderDetailPieceControls()}
      <div class="space-y-5">
        ${visibleParts
          .map((part) => {
            const rows = orderDetailPartSections[part.id]?.fitTools || [];
            return renderOrderDetailFitToolsAccordion(part, rows);
          })
          .join("")}
      </div>
      ${renderOrderDetailFinishedMeasurementsPanel()}
    </div>
  `;
}

function orderDetailDesignRows(part, sectionKey) {
  const section = orderDetailPartSections[part.id] || orderDetailPartSections.jacket;
  return section[sectionKey] || [];
}

function renderOrderDetailDesignAccordion(part, sectionKey, title) {
  const sectionSlug =
    sectionKey === "designEssentials"
      ? "essentials"
      : sectionKey === "designDetails"
        ? "details"
        : "branding";
  const key = `${part.id}:${sectionSlug}`;
  const open = state.orderDetailOpenDesignSections.has(key);
  const rows = orderDetailDesignRows(part, sectionKey);
  return `
    <section class="overflow-hidden rounded-[12px] border border-border bg-card">
      <button class="order-detail-accordion-header flex w-full items-center justify-between gap-4 border-b px-4 py-4 text-left transition" data-order-detail-design-section="${escapeAttr(key)}" type="button" aria-expanded="${open}">
        <h3 class="text-base font-semibold">${escapeHtml(title)}</h3>
        <svg class="icon h-4 w-4 shrink-0 opacity-70 transition ${open ? "rotate-180" : ""}" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
      <div class="${open ? "" : "hidden"} px-4 py-3">
        ${rows
          .map(
            ([label, value]) => `
              <div class="grid grid-cols-[minmax(0,1fr)_minmax(130px,0.9fr)] gap-4 border-b border-border py-2.5 last:border-b-0">
                <span class="min-w-0 text-sm font-light text-muted-foreground">${escapeHtml(label)}</span>
                <span class="min-w-0 text-sm font-light text-foreground">${escapeHtml(value)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderOrderDetailDesignTab() {
  ensureOrderDetailActivePart();
  const visibleParts = orderDetailVisibleParts();
  return `
    <div class="order-detail-part-layout grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]">
      ${renderOrderDetailPieceControls()}
      <div class="space-y-5">
        ${visibleParts
          .map((part) => {
            return `
              <section id="order-detail-part-${part.id}" class="space-y-5" data-order-detail-part-section="${part.id}">
                ${renderOrderDetailDesignAccordion(part, "designEssentials", `${part.label} Essentials`)}
                ${renderOrderDetailDesignAccordion(part, "designDetails", `${part.label} Details`)}
                ${renderOrderDetailDesignAccordion(part, "branding", `${part.label} Branding`)}
              </section>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderOrderDetailPriceTab() {
  const pricingRows = [
    ["Make", "€310,00", "€101,00"],
    ["Fabric", "€0,00", "€297,00"],
    ["Lining", "€0,00", "€10,00"],
    ["Design Options", "€0,00", "€10,00"],
    ["Button", "€0,00", "€0,00"],
    ["Total", "€310,00", "€418,00"],
  ];
  const discountRows = [
    ["Price List Discount - Total P.Price Fixed", "- €78,90", "normal"],
    ["Total Discount", "- €78,90", "danger"],
    ["Total Costs", "€0,00", "normal"],
    ["Final Price", "€339,10", "strong"],
  ];
  return `
    <div class="grid gap-5 lg:grid-cols-2">
      <section class="rounded-[12px] border border-border bg-card p-5">
        <h3 class="mb-5 text-base font-semibold text-foreground">Pricing information</h3>
        <div class="grid grid-cols-[minmax(0,1fr)_140px_140px] gap-4 border-b border-border pb-3 text-sm text-muted-foreground">
          <span></span>
          <span class="font-medium">R.Price</span>
          <span class="font-medium">P.Price</span>
        </div>
        <div>
          ${pricingRows
            .map(
              ([label, rPrice, pPrice], index) => `
                <div class="grid grid-cols-[minmax(0,1fr)_140px_140px] gap-4 border-b border-border py-4 text-sm last:border-b-0 ${index === pricingRows.length - 1 ? "bg-secondary px-3 font-medium text-foreground" : ""}">
                  <span class="text-muted-foreground ${index === pricingRows.length - 1 ? "text-foreground" : ""}">${escapeHtml(label)}</span>
                  <span>${escapeHtml(rPrice)}</span>
                  <span>${escapeHtml(pPrice)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="rounded-[12px] border border-border bg-card p-5">
        <h3 class="mb-5 text-base font-semibold text-foreground">Discount/Extra cost</h3>
        <div class="grid grid-cols-[minmax(0,1fr)_150px] gap-4 border-b border-border pb-3 text-sm text-muted-foreground">
          <span class="font-medium">Discount</span>
          <span class="font-medium">Amount</span>
        </div>
        <div>
          ${discountRows
            .map(
              ([label, amount, tone], index) => `
                <div class="grid grid-cols-[minmax(0,1fr)_150px] gap-4 border-b border-border py-4 text-sm last:border-b-0 ${tone === "strong" ? "bg-secondary px-3 font-semibold text-foreground" : ""}">
                  <span class="${tone === "strong" ? "text-foreground" : "text-muted-foreground"}">${escapeHtml(label)}</span>
                  <span class="${tone === "danger" ? "text-red-500" : ""}">${escapeHtml(amount)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderOrderDetailTab() {
  if (!el("orderDetailContent")) return;
  const order = findStandaloneOrder(state.selectedOrderId);
  const readyMade = isReadyMadeLikeOrderType(order?.type || state.ordersType);
  if (state.orderDetailTab === "measurements") state.orderDetailTab = "fitTools";
  if (state.orderDetailTab === "branding") state.orderDetailTab = "design";
  if (readyMade && state.orderDetailTab === "fitTools") state.orderDetailTab = "info";
  const tab = state.orderDetailTab;
  const hasRemark = Boolean((order ? state.orderRemarks[order.id] : "").trim());
  document.querySelectorAll("[data-order-detail-tab]").forEach((button) => {
    const isFitTools = button.dataset.orderDetailTab === "fitTools";
    button.classList.toggle("hidden", readyMade && isFitTools);
    button.classList.toggle("active", button.dataset.orderDetailTab === tab);
  });
  el("orderDetailRemarksTabBadge")?.classList.toggle("hidden", !hasRemark);
  const content = {
    info: renderOrderDetailInfo,
    fitTools: renderOrderDetailFitToolsMeasurementsTab,
    measurements: renderOrderDetailFitToolsMeasurementsTab,
    design: renderOrderDetailDesignTab,
    price: renderOrderDetailPriceTab,
    remarks: renderOrderDetailRemarksTab,
  };
  el("orderDetailContent").innerHTML = (content[tab] || content.info)();
  translatePage(el("orderDetailPage"));
  requestAnimationFrame(() => {
    updateOrderDetailStickyOffsets();
    syncOrderDetailPartNav();
    updateOrderDetailPartNavStickiness();
  });
}

function orderDetailSurfaceActive() {
  return state.currentPage === "orderDetail" || orderDetailSidePanelOpen();
}

function syncOrderDetailPartNav() {
  if (!orderDetailSurfaceActive() || !["fitTools", "design"].includes(state.orderDetailTab)) return;
  const sections = Array.from(document.querySelectorAll("[data-order-detail-part-section]"));
  if (!sections.length) return;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
  const activationLine = viewportHeight - 200;
  const activeSection =
    sections
      .slice()
      .reverse()
      .find((section) => section.getBoundingClientRect().top <= activationLine) || sections[0];
  const activePart = activeSection.dataset.orderDetailPartSection;
  if (activePart) state.orderDetailActivePart = activePart;
  document.querySelectorAll("[data-order-detail-part]").forEach((button) => {
    button.classList.toggle("active", button.dataset.orderDetailPart === activePart);
  });
}

function resetOrderDetailPartNavStickiness(nav) {
  nav.classList.remove("is-fixed", "is-anchored");
  nav.style.removeProperty("top");
  nav.style.removeProperty("left");
  nav.style.removeProperty("width");
}

function updateOrderDetailPartNavStickiness() {
  const layout = document.querySelector(".order-detail-part-layout");
  const rail = el("orderDetailPartNavRail");
  const nav = el("orderDetailPartNav");
  if (!layout || !rail || !nav || !orderDetailSurfaceActive() || !["fitTools", "design"].includes(state.orderDetailTab)) return;

  resetOrderDetailPartNavStickiness(nav);
  if (orderDetailSidePanelOpen()) return;
  if (window.innerWidth < 1024) return;

  const stickyTop = document.documentElement.dataset.nav === "top" ? 72 : 24;
  const layoutRect = layout.getBoundingClientRect();
  const railRect = rail.getBoundingClientRect();
  const navHeight = nav.offsetHeight;
  const stickyBottom = layoutRect.bottom - navHeight;

  if (layoutRect.top >= stickyTop) return;

  if (stickyBottom <= stickyTop) {
    nav.classList.add("is-anchored");
    nav.style.width = `${railRect.width}px`;
    return;
  }

  nav.classList.add("is-fixed");
  nav.style.top = `${stickyTop}px`;
  nav.style.left = `${railRect.left}px`;
  nav.style.width = `${railRect.width}px`;
}

function renderOrderDetail(orderId) {
  cancelDemoDataLoading();
  const order = findStandaloneOrder(orderId) || orders.find((item) => item.id === orderId) || standaloneOrders[0];
  const customer = customers.find((item) => item.id === order.customerId);
  const readyMade = isReadyMadeLikeOrderType(order.type);
  const draftMode = orderNavType(order.type) === "ReadyMade drafts";
  state.selectedOrderId = order.id;
  state.ordersType = orderNavType(order.type);
  state.orderDetailPieceMode = /3-piece/i.test(order.item || "") || order.item === "Jacket" ? "3-piece" : "2-piece";
  ensureOrderDetailActivePart();
  setText("orderDetailNumber", order.order || order.orderNumber || order.orderName || order.id);
  setText(
    "orderDetailSubtitle",
    draftMode ? `${order.item} · ReadyMade draft` : readyMade ? `${order.item} · ReadyMade order` : `${order.item === "Jacket" ? "3-Piece suit" : order.item} · Munro Tailoring - Samples Photography`,
  );
  const headerStatus = el("orderDetailHeaderStatus");
  if (headerStatus) {
    headerStatus.innerHTML = orderStatusMarkup(order.status);
    headerStatus.classList.remove("hidden");
  }
  const headerLegend = el("orderDetailHeaderLegend");
  if (headerLegend) {
    headerLegend.innerHTML = detailLegendMarkup(order);
    headerLegend.classList.toggle("hidden", !order.legend);
  }
  const headerRemark = el("orderDetailHeaderRemark");
  if (headerRemark) {
    headerRemark.classList.add("hidden");
    headerRemark.title = "";
  }
  const metrics = el("orderDetailMetrics");
  metrics.classList.add("hidden");
  metrics.innerHTML = "";
  applyOrderDetailCardLayout();
  renderOrderDetailTab();
  setOrderDetailSidePanel(true);
}

function orderDetailSidePanelOpen() {
  return el("orderDetailSidePanel")?.classList.contains("open");
}

function setOrderDetailSidePanel(open) {
  const panel = el("orderDetailSidePanel");
  const body = el("orderDetailSidePanelBody");
  const page = el("orderDetailPage");
  const backButton = el("backToOrdersBtn");
  if (!panel || !body || !page) return;
  if (!open && !panel.classList.contains("open") && !panel.classList.contains("closing")) return;
  window.clearTimeout(state.orderDetailSidePanelCloseTimer);
  if (open) {
    panel.classList.remove("open");
    panel.classList.add("closing");
    page.classList.remove("hidden");
    body.appendChild(page);
    if (backButton) {
      backButton.title = "Close order detail";
      backButton.setAttribute("aria-label", "Close order detail");
      backButton.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
    }
    requestAnimationFrame(() => {
      panel.classList.remove("closing");
      panel.classList.add("open");
      updateOrderDetailStickyOffsets();
      updateOrderDetailPartNavStickiness();
    });
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("order-detail-side-open");
    requestAnimationFrame(() => el("backToOrdersBtn")?.focus());
    return;
  }
  panel.classList.remove("open");
  panel.classList.add("closing");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("order-detail-side-open");
  el("orderDetailActionsMenu")?.classList.remove("open");
  el("orderDetailPrintMenu")?.classList.remove("open");
  state.orderDetailSidePanelCloseTimer = window.setTimeout(() => {
    panel.classList.remove("closing");
    el("ordersPage")?.after(page);
    if (backButton) {
      backButton.title = "Back to orders";
      backButton.setAttribute("aria-label", "Back to orders");
      backButton.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>';
    }
    if (state.currentPage !== "orderDetail") page.classList.add("hidden");
  }, 220);
}

function onePageOrderSelectButton(selectId, value, disabled = false, disabledTitle = "Complete the previous field first.") {
  const isEmpty = !value;
  const label = isEmpty ? "Select" : value;
  const open = state.activeOnePageOrderSelect === selectId;
  return `
    <button class="field fabric-select flex items-center justify-between gap-3 text-left ${disabled ? "opacity-60" : ""}" data-one-page-order-select="${escapeAttr(selectId)}" type="button" aria-haspopup="listbox" aria-expanded="${open ? "true" : "false"}" ${disabled ? `disabled title="${escapeAttr(disabledTitle)}"` : ""}>
      <span class="min-w-0 truncate ${isEmpty ? "text-muted-foreground" : ""}">${escapeHtml(label)}</span>
      ${icon("chevron-down", "h-4 w-4 shrink-0 text-muted-foreground")}
    </button>
  `;
}

function onePageOrderIsTrouserFlow() {
  return state.onePageOrderItem === "trousers" || state.onePageOrderFields.item === "Trousers";
}

function onePageOrderDisplayItem() {
  if (onePageOrderIsTrouserFlow()) return state.onePageOrderFields.trouserItem || "Trousers";
  if (state.onePageOrderItem === "knitwear") return state.onePageOrderFields.knitwearItem || "Knitwear";
  return state.onePageOrderFields.item || "CustomMade";
}

function onePageOrderTrouserPrimaryReady() {
  const fields = state.onePageOrderFields;
  ensureOnePageOrderLines();
  return Boolean(fields.salesAssociate && fields.item && fields.quantity && fields.trouserItem) && state.onePageOrderLines.every((line) => line.model && line.make && line.fabric);
}

function onePageOrderFitToolValueOptions(direction) {
  return direction === "minus"
    ? ["0.00", "-0.50", "-1.00", "-1.50", "-2.00", "-2.50", "-3.00"]
    : ["0.00", "+0.50", "+1.00", "+1.50", "+2.00", "+2.50", "+3.00"];
}

function onePageOrderOptionsForSelect(selectId) {
  const parts = selectId.split(":");
  if (selectId === "field:salesAssociate") return salesAssociates.map((associate) => associate.name);
  if (selectId === "field:item" && onePageOrderUsesMultiPageFlow()) return createOrderFlowItems.formal.map((item) => item.label);
  if (selectId === "field:trouserItem") return onePageOrderSelectOptions.trouserItem;
  if (selectId === "field:tryOnFit" && onePageOrderIsTrouserFlow()) return onePageOrderSelectOptions.trouserTryOnFit;
  if (selectId === "field:tryOnSize" && onePageOrderIsTrouserFlow()) return onePageOrderSelectOptions.trouserTryOnSize;
  if (parts[0] === "line") {
    const key = parts[2];
    if (key === "liningMode") return onePageOrderSelectOptions.liningMode;
    if (onePageOrderIsTrouserFlow() && key === "model") return onePageOrderSelectOptions.trouserModel;
    if (onePageOrderIsTrouserFlow() && key === "make") return ["", ...onePageOrderSelectOptions.trouserMake];
    return key === "model" ? onePageOrderSelectOptions[key] || [] : ["", ...(onePageOrderSelectOptions[key] || []).filter(Boolean)];
  }
  if (parts[0] === "garmentProfile") return parts[2] === "tryOnFit" ? createFitProfileTryOnFits : createFitProfileTryOnSizes;
  if (parts[0] === "garmentFit") return onePageOrderFitToolValueOptions(parts[2]);
  if (parts[0] === "trouserFit") return onePageOrderFitToolValueOptions(parts[1]);
  if (parts[0] === "design") return onePageOrderSelectOptions[parts[2]] || [];
  if (parts[0] === "payment") return onePageOrderSelectOptions[parts[2]] || [];
  if (parts[0] === "detail") return onePageOrderSelectOptions[parts[2]] || [];
  return onePageOrderSelectOptions[parts[1]] || [];
}

function onePageOrderValueForSelect(selectId) {
  const parts = selectId.split(":");
  if (parts[0] === "line") return onePageOrderLineValue(Number(parts[1]), parts[2]);
  if (parts[0] === "garmentProfile") return onePageOrderGarmentFitProfileValue(parts[1], parts[2]);
  if (parts[0] === "garmentFit") return onePageOrderGarmentFitToolValue(parts[1], parts[2], decodeURIComponent(parts.slice(3).join(":")));
  if (parts[0] === "trouserFit") return state.onePageOrderTrouserFitTools[`${parts[1]}:${parts[2]}`] || "0.00";
  if (parts[0] === "design") return onePageOrderDesignValue(Number(parts[1]), parts[2]);
  if (parts[0] === "payment") return onePageOrderPaymentValue(Number(parts[1]), parts[2]);
  if (parts[0] === "detail") return onePageOrderDetailValue(Number(parts[1]), parts[2]);
  return state.onePageOrderFields[parts[1]] ?? "";
}

function renderOnePageOrderSelectMenu() {
  const menu = el("onePageOrderSelectMenu");
  if (!menu) return;
  document.querySelectorAll("[data-one-page-order-select]").forEach((button) => {
    button.setAttribute("aria-expanded", state.activeOnePageOrderSelect === button.dataset.onePageOrderSelect ? "true" : "false");
  });
  if (!state.activeOnePageOrderSelect) {
    menu.classList.remove("open");
    return;
  }

  const selectId = state.activeOnePageOrderSelect;
  const activeButton = Array.from(document.querySelectorAll("[data-one-page-order-select]")).find((button) => button.dataset.onePageOrderSelect === selectId);
  if (!activeButton) {
    state.activeOnePageOrderSelect = null;
    menu.classList.remove("open");
    return;
  }

  const selectedValue = onePageOrderValueForSelect(selectId);
  const options = onePageOrderOptionsForSelect(selectId);
  menu.innerHTML = options
    .map(
      (option) => `
        <button class="one-page-order-select-option fabric-select-option ${selectedValue === option ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="${escapeAttr(option)}" type="button">
          <span class="min-w-0 truncate">${escapeHtml(option || "Select")}</span>
          ${selectedValue === option ? icon("check", "h-4 w-4 shrink-0 text-primary") : ""}
        </button>
      `,
    )
    .join("");
  positionFloatingSelectMenu(menu, activeButton);
  menu.classList.add("open");
  translatePage(menu);
}

function openOnePageOrderSelect(button) {
  if (button.disabled) return;
  const rect = button.getBoundingClientRect();
  const selectId = button.dataset.onePageOrderSelect;
  const isOpen = state.activeOnePageOrderSelect === selectId;
  state.activeOnePageOrderSelect = isOpen ? null : selectId;
  state.activeOnePageOrderSelectPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
  renderOnePageOrderSelectMenu();
}

function updateOnePageOrderSelectValue(selectId, value) {
  const parts = selectId.split(":");
  if (parts[0] === "line") {
    updateOnePageOrderLine(Number(parts[1]), parts[2], value);
  } else if (parts[0] === "garmentProfile") {
    updateOnePageOrderGarmentFitProfile(parts[1], parts[2], value);
  } else if (parts[0] === "garmentFit") {
    const label = decodeURIComponent(parts.slice(3).join(":"));
    state.onePageOrderTrouserFitTools[onePageOrderFitToolKey(parts[1], parts[2], label)] = value;
  } else if (parts[0] === "trouserFit") {
    state.onePageOrderTrouserFitTools[`${parts[1]}:${parts[2]}`] = value;
  } else if (parts[0] === "design") {
    updateOnePageOrderDesign(Number(parts[1]), parts[2], value);
  } else if (parts[0] === "payment") {
    updateOnePageOrderPayment(Number(parts[1]), parts[2], value);
  } else if (parts[0] === "detail") {
    updateOnePageOrderDetail(Number(parts[1]), parts[2], value);
  } else {
    updateOnePageOrderField(parts[1], value);
  }
}

function onePageOrderField(id, label, type = "select", wide = false) {
  const value = state.onePageOrderFields[id] ?? "";
  const selectDisabled = id === "tryOnSize" && !state.onePageOrderFields.tryOnFit;
  const selectDisabledTitle = id === "tryOnSize" ? "Select a TryOn Fit first." : undefined;
  const control =
    type === "input"
      ? `<input class="field" data-one-page-order-field="${id}" value="${escapeHtml(value)}" />`
      : type === "checkbox"
        ? `<label class="flex items-center gap-2 text-sm"><input class="check" data-one-page-order-field="${id}" type="checkbox" ${value ? "checked" : ""} />${escapeHtml(label)}</label>`
        : onePageOrderSelectButton(`field:${id}`, value, selectDisabled, selectDisabledTitle);
  if (type === "checkbox") return `<div class="${wide ? "md:col-span-2" : ""}">${control}</div>`;
  return `
    <label class="grid gap-1.5 ${wide ? "md:col-span-2" : ""}">
      <span class="text-sm font-medium text-muted-foreground">${escapeHtml(label)}</span>
      ${control}
    </label>
  `;
}

function onePageOrderLineDefaults(index = 0) {
  if (onePageOrderUsesMultiPageFlow()) {
    return {
      jacketModel: state.onePageOrderFields.jacketModel || "Standard",
      suitTrouserModel: state.onePageOrderFields.suitTrouserModel || "Standard",
      jacketStyle: state.onePageOrderFields.jacketStyle || "none",
      trouserStyle: state.onePageOrderFields.trouserStyle || "none",
      jacketMake: state.onePageOrderFields.jacketMake || "traditional",
      canvas: state.onePageOrderFields.canvas || "standard",
      suitTrouserMake: state.onePageOrderFields.suitTrouserMake || "traditional",
      fabric: index === 0 ? state.onePageOrderFields.fabric || "HS172101" : "",
      liningMode: state.onePageOrderFields.liningMode || "manually select",
      lining: state.onePageOrderFields.lining || "",
      button: state.onePageOrderFields.button || "",
      model: state.onePageOrderFields.model || "2-Piece Suit",
      make: state.onePageOrderFields.make || "traditional",
      knitType: "",
    };
  }
  if (onePageOrderIsTrouserFlow()) {
    return {
      model: state.onePageOrderFields.model || "",
      make: state.onePageOrderFields.make || "",
      fabric: index === 0 ? state.onePageOrderFields.fabric || "" : "",
      knitType: "",
    };
  }
  return {
    model: state.onePageOrderFields.model || "V-Neck",
    make: state.onePageOrderFields.make || "Traditional",
    fabric: index === 0 ? state.onePageOrderFields.fabric || "K10139 heathered grey cashmere" : "",
    knitType: state.onePageOrderFields.knitType || "Single Yarn Solid",
  };
}

function onePageOrderDesignDefaults() {
  if (onePageOrderIsTrouserFlow()) {
    return {
      trouserDetailing: state.onePageOrderFields.trouserDetailing || "Dress",
      trouserWaistband: state.onePageOrderFields.trouserWaistband || "Buckle & Strap (Metal)",
      trouserExtendedWaistband: state.onePageOrderFields.trouserExtendedWaistband || "No",
      trouserBuckleLoop: state.onePageOrderFields.trouserBuckleLoop || "No",
      trouserClosure: state.onePageOrderFields.trouserClosure || "Zip Fly",
      trouserClosingButton: state.onePageOrderFields.trouserClosingButton || "",
      trouserPocketLining: state.onePageOrderFields.trouserPocketLining || "POC002 Off-White",
      trouserFrontStyle: state.onePageOrderFields.trouserFrontStyle || "Flat Front",
      trouserPleatDirection: state.onePageOrderFields.trouserPleatDirection || "No Pleats",
      trouserPleatDepth: state.onePageOrderFields.trouserPleatDepth || "No Pleats",
      trouserPressedCrease: state.onePageOrderFields.trouserPressedCrease || "No",
      trouserPintuck: state.onePageOrderFields.trouserPintuck || "No",
      trouserSidePockets: state.onePageOrderFields.trouserSidePockets || "Slanted",
      trouserCargoPockets: state.onePageOrderFields.trouserCargoPockets || "None",
      trouserBackPockets: state.onePageOrderFields.trouserBackPockets || "Welt with Button",
      trouserHemFinish: state.onePageOrderFields.trouserHemFinish || "Standard (1,2 cm)",
      trouserBackPatch: state.onePageOrderFields.trouserBackPatch || "None",
      monogram: false,
      monogramEnabled: false,
      monogramPosition: "",
      monogramColour: "",
      monogramFont: "",
      monogramText: "",
      branding: false,
      brandingEnabled: false,
      brandingHangtag: "",
    };
  }
  return {
    neckline: state.onePageOrderFields.neckline || "V-neck (1.8 cm)",
    armholeStyle: state.onePageOrderFields.armholeStyle || "Classic",
    detailing: state.onePageOrderFields.detailing || "Standard Rib",
    sleeveStyle: state.onePageOrderFields.sleeveStyle || "",
    chestPocket: state.onePageOrderFields.chestPocket || "None",
    sidePockets: state.onePageOrderFields.sidePockets || "None",
    contrastOption: state.onePageOrderFields.contrastOption || "No Contrast",
    contrastColor: state.onePageOrderFields.contrastColor || "No Contrast",
    monogram: false,
    monogramEnabled: false,
    monogramPosition: "",
    monogramColour: "",
    monogramFont: "",
    monogramText: "",
    branding: false,
    brandingEnabled: false,
    brandingHangtag: "",
  };
}

function onePageOrderPaymentDefaults() {
  return {
    discount: "0",
    serviceCharge: "0",
    downPayment: "0.00",
    paymentMethod: "",
  };
}

function onePageOrderDetailDefaults() {
  return {
    shopOrderNumber: state.onePageOrderFields.shopOrderNumber || "",
    occasion: state.onePageOrderFields.occasion || "",
  };
}

function ensureOnePageOrderLines() {
  const quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1);
  while (state.onePageOrderLines.length < quantity) {
    state.onePageOrderLines.push(onePageOrderLineDefaults(state.onePageOrderLines.length));
  }
  if (state.onePageOrderLines.length > quantity) state.onePageOrderLines = state.onePageOrderLines.slice(0, quantity);
  if (!state.onePageOrderLines.length) state.onePageOrderLines.push(onePageOrderLineDefaults(0));
  ensureOnePageOrderDesigns(quantity);
  ensureOnePageOrderPaymentDetails(quantity);
}

function ensureOnePageOrderDesigns(quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1)) {
  while (state.onePageOrderDesigns.length < quantity) {
    state.onePageOrderDesigns.push(onePageOrderDesignDefaults());
  }
  if (state.onePageOrderDesigns.length > quantity) state.onePageOrderDesigns = state.onePageOrderDesigns.slice(0, quantity);
  if (!state.onePageOrderDesigns.length) state.onePageOrderDesigns.push(onePageOrderDesignDefaults());
}

function ensureOnePageOrderPaymentDetails(quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1)) {
  while (state.onePageOrderPayments.length < quantity) {
    state.onePageOrderPayments.push(onePageOrderPaymentDefaults());
  }
  while (state.onePageOrderDetails.length < quantity) {
    state.onePageOrderDetails.push(onePageOrderDetailDefaults());
  }
  if (state.onePageOrderPayments.length > quantity) state.onePageOrderPayments = state.onePageOrderPayments.slice(0, quantity);
  if (state.onePageOrderDetails.length > quantity) state.onePageOrderDetails = state.onePageOrderDetails.slice(0, quantity);
  if (!state.onePageOrderPayments.length) state.onePageOrderPayments.push(onePageOrderPaymentDefaults());
  if (!state.onePageOrderDetails.length) state.onePageOrderDetails.push(onePageOrderDetailDefaults());
}

function onePageOrderLineValue(index, key) {
  ensureOnePageOrderLines();
  return state.onePageOrderLines[index]?.[key] ?? "";
}

function onePageOrderDesignValue(index, key) {
  ensureOnePageOrderDesigns();
  return state.onePageOrderDesigns[index]?.[key] ?? "";
}

function onePageOrderPaymentValue(index, key) {
  ensureOnePageOrderPaymentDetails();
  return state.onePageOrderPayments[index]?.[key] ?? "";
}

function onePageOrderDetailValue(index, key) {
  ensureOnePageOrderPaymentDetails();
  return state.onePageOrderDetails[index]?.[key] ?? "";
}

function updateOnePageOrderDesign(index, key, value) {
  ensureOnePageOrderDesigns();
  state.onePageOrderDesigns[index] = {
    ...(state.onePageOrderDesigns[index] || onePageOrderDesignDefaults()),
    [key]: value,
  };
  if (index === 0) state.onePageOrderFields[key] = value;
}

function updateOnePageOrderPayment(index, key, value) {
  ensureOnePageOrderPaymentDetails();
  state.onePageOrderPayments[index] = {
    ...(state.onePageOrderPayments[index] || onePageOrderPaymentDefaults()),
    [key]: value,
  };
}

function updateOnePageOrderDetail(index, key, value) {
  ensureOnePageOrderPaymentDetails();
  state.onePageOrderDetails[index] = {
    ...(state.onePageOrderDetails[index] || onePageOrderDetailDefaults()),
    [key]: value,
  };
  if (index === 0) state.onePageOrderFields[key] = value;
}

function copyOnePageOrderDesignFieldToAll(key) {
  ensureOnePageOrderDesigns();
  const value = onePageOrderDesignValue(0, key);
  state.onePageOrderDesigns = state.onePageOrderDesigns.map((design) => ({ ...design, [key]: value }));
  state.onePageOrderFields[key] = value;
}

function toggleOnePageOrderDesignCopyRow(key) {
  if (state.onePageOrderDesignCopyRows.has(key)) {
    state.onePageOrderDesignCopyRows.delete(key);
  } else {
    state.onePageOrderDesignCopyRows.add(key);
    copyOnePageOrderDesignFieldToAll(key);
  }
}

function setAllOnePageOrderDesignCopyRows(enabled, keys) {
  state.onePageOrderDesignCopyRows = enabled ? new Set(keys) : new Set();
  if (enabled) keys.forEach((key) => copyOnePageOrderDesignFieldToAll(key));
}

function copyOnePageOrderDesignToAll(index) {
  ensureOnePageOrderDesigns();
  const source = state.onePageOrderDesigns[index] || onePageOrderDesignDefaults();
  state.onePageOrderDesigns = state.onePageOrderDesigns.map(() => ({ ...source }));
  Object.keys(source).forEach((key) => {
    if (key in state.onePageOrderFields) state.onePageOrderFields[key] = source[key];
  });
}

const onePageOrderFakeFabrics = [
  { code: "K10139", description: "heathered grey cashmere", subtitle: "Cashmere", collection: "Knitwear", season: "Core", status: "In stock", color: "#9ca3af" },
  { code: "K10042", description: "midnight merino wool", subtitle: "Merino", collection: "Knitwear", season: "Core", status: "In stock", color: "#1f2937" },
  { code: "K10077", description: "oatmeal cashmere blend", subtitle: "Cashmere blend", collection: "Knitwear", season: "Autumn", status: "Low stock", color: "#d6c7ae" },
  { code: "K10214", description: "forest green fine gauge", subtitle: "Fine gauge", collection: "Knitwear", season: "Winter", status: "In stock", color: "#166534" },
  { code: "K10301", description: "navy cable cotton cashmere", subtitle: "Cable knit", collection: "Knitwear", season: "Core", status: "In stock", color: "#1e3a8a" },
  { code: "K10422", description: "charcoal half English rib", subtitle: "Half English rib", collection: "Knitwear", season: "Winter", status: "Incoming", color: "#374151" },
  { code: "CH-WASH-014", description: "stone cotton twill", subtitle: "Chino wash", collection: "Trousers", season: "Core", status: "In stock", color: "#c2b59b" },
  { code: "CH-WASH-027", description: "navy compact twill", subtitle: "Chino wash", collection: "Trousers", season: "Core", status: "In stock", color: "#1f2937" },
  { code: "CH-WASH-041", description: "olive garment dyed stretch", subtitle: "Chino wash", collection: "Trousers", season: "Summer", status: "Low stock", color: "#69745d" },
  { code: "DN-WASH-005", description: "rinse indigo denim", subtitle: "Denim wash", collection: "Jeans/5 Pockets", season: "Core", status: "In stock", color: "#23395d" },
  { code: "DN-WASH-019", description: "mid blue stone wash", subtitle: "Denim wash", collection: "Jeans/5 Pockets", season: "Core", status: "Incoming", color: "#5d7fa3" },
  { code: "DN-WASH-032", description: "black comfort denim", subtitle: "Denim wash", collection: "Jeans/5 Pockets", season: "Winter", status: "In stock", color: "#111827" },
];

function onePageOrderFabricMatches(query) {
  const normalized = query.trim().toLowerCase();
  const source = [
    ...onePageOrderFakeFabrics,
    ...fabricInventory.filter((fabric) => !onePageOrderFakeFabrics.some((fake) => fake.code === fabric.code)),
  ];
  const preferred = onePageOrderIsTrouserFlow()
    ? source.filter((fabric) => ["Trousers", "Jeans/5 Pockets"].includes(fabric.collection))
    : source.filter((fabric) => fabric.collection === "Knitwear");
  const remaining = source.filter((fabric) => !preferred.includes(fabric));
  const rankedSource = [...preferred, ...remaining];
  if (!normalized) return rankedSource.slice(0, 8);
  return rankedSource
    .filter((fabric) =>
      [fabric.code, fabric.subtitle, fabric.description, fabric.collection, fabric.season, fabric.status]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalized)),
    )
    .slice(0, 8);
}

function onePageOrderFabricSearchMenu(index, value) {
  if (state.activeOnePageFabricSearch !== index) return "";
  const matches = onePageOrderFabricMatches(value);
  const position = state.activeOnePageFabricSearchPosition;
  const positionStyle = position
    ? `position: fixed; left: ${position.left}px; top: ${position.top}px; width: ${position.width}px; max-height: ${position.maxHeight}px;`
    : "";
  const positionClass = position
    ? "fixed z-[8000]"
    : "absolute left-0 right-0 top-[calc(100%+8px)] z-[8000] max-h-80";
  return `
    <div class="${positionClass} overflow-auto rounded-[10px] border border-border bg-card p-1 shadow-xl" style="${positionStyle}" data-one-page-fabric-menu="${index}">
      ${
        matches.length
          ? matches
              .map(
                (fabric) => `
                  <button class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-one-page-fabric-option="${escapeAttr(fabric.code)}" data-one-page-fabric-index="${index}" type="button">
                    <span class="h-9 w-9 shrink-0 rounded-md border border-border" style="background:${escapeAttr(fabric.color)}"></span>
                    <span class="min-w-0 flex-1">
                      <span class="block truncate text-sm font-semibold">${escapeHtml(fabric.code)}</span>
                      <span class="block truncate text-xs text-muted-foreground">${escapeHtml(fabric.description)} · ${escapeHtml(fabric.collection)} · ${escapeHtml(fabric.season)}</span>
                    </span>
                    <span class="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">${escapeHtml(fabric.status || "Available")}</span>
                  </button>
                `,
              )
              .join("")
          : `<div class="px-3 py-4 text-sm text-muted-foreground">No fabrics found.</div>`
      }
    </div>
  `;
}

function onePageOrderFabricInput(index, value, disabled, title) {
  const placeholder = onePageOrderIsTrouserFlow() ? "Search fabric/wash" : "Search fabric";
  return `
    <div class="relative" data-one-page-fabric-picker="${index}">
      <input class="field pr-10" data-one-page-fabric-input="${index}" data-one-page-order-line="${index}" data-one-page-order-line-field="fabric" value="${escapeHtml(value)}" placeholder="${escapeAttr(placeholder)}" autocomplete="off" ${disabled ? "disabled" : ""} title="${escapeAttr(title)}" />
      ${icon("search", "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground")}
      ${onePageOrderFabricSearchMenu(index, value)}
    </div>
  `;
}

function setOnePageFabricSearchPosition(index, input) {
  if (!input) return;
  const rect = input.getBoundingClientRect();
  const viewportPadding = 16;
  const gap = 8;
  const width = Math.min(Math.max(rect.width, 260), window.innerWidth - viewportPadding * 2);
  const left = Math.min(Math.max(rect.left, viewportPadding), window.innerWidth - width - viewportPadding);
  const spaceBelow = window.innerHeight - rect.bottom - viewportPadding - gap;
  const spaceAbove = rect.top - viewportPadding - gap;
  const opensUp = spaceBelow < 220 && spaceAbove > spaceBelow;
  const maxHeight = Math.min(320, Math.max(160, opensUp ? spaceAbove : spaceBelow));
  state.activeOnePageFabricSearch = index;
  state.activeOnePageFabricSearchPosition = {
    left,
    top: opensUp ? Math.max(viewportPadding, rect.top - gap - maxHeight) : rect.bottom + gap,
    width,
    maxHeight,
  };
}

const onePageOrderLiningOptions = [
  { code: "manually select", description: "choose lining later", collection: "Lining", season: "Default", status: "Manual", color: "#f8fafc" },
  { code: "L-2050", description: "mid grey cupro", collection: "Lining", season: "Core", status: "In stock", color: "#8b8f96" },
  { code: "L-3001", description: "navy viscose", collection: "Lining", season: "Core", status: "In stock", color: "#1f3a5f" },
  { code: "L-4107", description: "burgundy paisley", collection: "Lining", season: "Formal", status: "Low stock", color: "#7f1d1d" },
  { code: "L-5122", description: "forest jacquard", collection: "Lining", season: "Winter", status: "In stock", color: "#14532d" },
  { code: "L-7004", description: "ivory satin", collection: "Lining", season: "Wedding", status: "In stock", color: "#f5f1e7" },
];

const onePageOrderButtonOptions = [
  { code: "BTN-HORN-01", description: "dark horn", collection: "Buttons", season: "Core", status: "In stock", color: "#3b2f2f" },
  { code: "BTN-HORN-04", description: "natural horn", collection: "Buttons", season: "Core", status: "In stock", color: "#8a6f4d" },
  { code: "BTN-CORO-12", description: "matte navy corozo", collection: "Buttons", season: "Core", status: "In stock", color: "#172554" },
  { code: "BTN-MOP-20", description: "smoked mother of pearl", collection: "Buttons", season: "Formal", status: "Incoming", color: "#d1d5db" },
  { code: "BTN-METAL-02", description: "antique brass", collection: "Buttons", season: "Blazer", status: "Low stock", color: "#a16207" },
];

function onePageOrderMaterialSearchKey(index, key) {
  return `${index}:${key}`;
}

function onePageOrderMaterialOptions(key, query) {
  const normalized = query.trim().toLowerCase();
  const source = key === "button" ? onePageOrderButtonOptions : key === "lining" ? onePageOrderLiningOptions : onePageOrderFabricMatches(query);
  if (key === "fabric") return source;
  if (!normalized) return source.slice(0, 8);
  return source
    .filter((option) =>
      [option.code, option.description, option.collection, option.season, option.status]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalized)),
    )
    .slice(0, 8);
}

function onePageOrderMaterialSearchMenu(index, key, value) {
  const searchKey = onePageOrderMaterialSearchKey(index, key);
  if (state.activeOnePageMaterialSearch !== searchKey) return "";
  const matches = onePageOrderMaterialOptions(key, value);
  const position = state.activeOnePageMaterialSearchPosition || {};
  const verticalClass = position.opensUp ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]";
  const maxHeight = position.maxHeight ? `max-height:${position.maxHeight}px;` : "";
  return `
    <div class="absolute left-0 right-0 ${verticalClass} z-[8000] max-h-80 overflow-auto rounded-[10px] border border-border bg-card p-1 shadow-xl" style="${escapeAttr(maxHeight)}" data-one-page-material-menu="${escapeAttr(searchKey)}">
      ${
        matches.length
          ? matches
              .map(
                (option) => `
                  <button class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-one-page-material-option="${escapeAttr(option.code)}" data-one-page-material-index="${index}" data-one-page-material-field="${escapeAttr(key)}" type="button">
                    <span class="h-9 w-9 shrink-0 rounded-md border border-border" style="background:${escapeAttr(option.color)}"></span>
                    <span class="min-w-0 flex-1">
                      <span class="block truncate text-sm font-semibold">${escapeHtml(option.code)}</span>
                      <span class="block truncate text-xs text-muted-foreground">${escapeHtml(option.description)} · ${escapeHtml(option.collection)} · ${escapeHtml(option.season)}</span>
                    </span>
                    <span class="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">${escapeHtml(option.status || "Available")}</span>
                  </button>
                `,
              )
              .join("")
          : `<div class="px-3 py-4 text-sm text-muted-foreground">No options found.</div>`
      }
    </div>
  `;
}

function onePageOrderMaterialInput(index, key, value, placeholder = "Search") {
  return `
    <div class="relative" data-one-page-material-picker="${index}:${escapeAttr(key)}">
      <input class="field pr-10" data-one-page-material-input="${index}" data-one-page-material-field="${escapeAttr(key)}" data-one-page-order-line="${index}" data-one-page-order-line-field="${escapeAttr(key)}" value="${escapeHtml(value)}" placeholder="${escapeAttr(placeholder)}" autocomplete="off" />
      ${icon("search", "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground")}
      ${onePageOrderMaterialSearchMenu(index, key, value)}
    </div>
  `;
}

function setOnePageMaterialSearchPosition(index, key, input) {
  if (!input) return;
  const rect = input.getBoundingClientRect();
  const viewportPadding = 16;
  const gap = 8;
  const spaceBelow = window.innerHeight - rect.bottom - viewportPadding - gap;
  const spaceAbove = rect.top - viewportPadding - gap;
  const opensUp = spaceBelow < 220 && spaceAbove > spaceBelow;
  state.activeOnePageMaterialSearch = onePageOrderMaterialSearchKey(index, key);
  state.activeOnePageMaterialSearchPosition = {
    opensUp,
    maxHeight: Math.min(320, Math.max(160, opensUp ? spaceAbove : spaceBelow)),
  };
}

function onePageOrderLineField(index, key, label, type = "select", disabled = false) {
  const value = onePageOrderLineValue(index, key);
  const title = disabled ? "Complete the previous field first." : "";
  const control =
    key === "fabric"
      ? onePageOrderFabricInput(index, value, disabled, title)
      : type === "input"
      ? `<input class="field" data-one-page-order-line="${index}" data-one-page-order-line-field="${key}" value="${escapeHtml(value)}" ${disabled ? "disabled" : ""} title="${escapeAttr(title)}" />`
      : onePageOrderSelectButton(`line:${index}:${key}`, value, disabled);
  return `
    <label class="grid gap-1.5">
      <span class="text-sm font-medium text-muted-foreground">${escapeHtml(label)}</span>
      ${control}
    </label>
  `;
}

function onePageOrderLineControl(index, key, type = "select", disabled = false) {
  const value = onePageOrderLineValue(index, key);
  const title = disabled ? "Complete the previous field first." : "";
  if (key === "fabric") return onePageOrderFabricInput(index, value, disabled, title);
  if (type === "input") {
    return `<input class="field" data-one-page-order-line="${index}" data-one-page-order-line-field="${key}" value="${escapeHtml(value)}" ${disabled ? "disabled" : ""} title="${escapeAttr(title)}" />`;
  }
  return onePageOrderSelectButton(`line:${index}:${key}`, value, disabled);
}

function onePageOrderTable(columns, rows, options = {}) {
  const labelColumn = options.labelColumnWidth || 220;
  const valueColumn = options.valueColumnMaxWidth && columns.length === 1
    ? `minmax(220px, ${options.valueColumnMaxWidth}px)`
    : "minmax(220px, 1fr)";
  const gridColumns = `${labelColumn}px repeat(${columns.length}, ${valueColumn})`;
  const wrapperClass = options.wrapperClass || "";
  const minWidth = options.minWidth || 760;
  const fitContents = Boolean(options.fitContents);
  const gridWidthStyle = fitContents ? "width:max-content;" : `min-width:${minWidth}px;`;
  const fitContentsStyle = fitContents ? 'style="width:max-content;max-width:100%;"' : "";
  return `
    <div class="order-scroll-shell ${wrapperClass}" ${fitContentsStyle}>
    <div class="overflow-x-auto rounded-[10px] border border-border" ${fitContentsStyle}>
      <div class="grid" style="grid-template-columns: ${gridColumns}; ${gridWidthStyle}">
        <div class="sticky left-0 z-30 border-b border-border bg-secondary/35 px-4 py-3">
          <div class="font-semibold">${escapeHtml(options.label || "Options")}</div>
        </div>
        ${columns
          .map(
            (column) => `
              <div class="border-b border-l border-border bg-secondary/35 px-4 py-3">
                <div class="font-semibold">${escapeHtml(column.title)}</div>
                ${column.subtitle ? `<div class="mt-1 text-xs text-muted-foreground">${escapeHtml(column.subtitle)}</div>` : ""}
              </div>
            `,
          )
          .join("")}
        ${rows
          .map(
            (row) => `
              <div class="sticky left-0 z-20 border-b border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">${row.labelHtml || escapeHtml(row.label)}</div>
              ${columns
                .map(
                  (column) => `
                    <div class="border-b border-l border-border p-3">
                      ${row.render(column.index)}
                    </div>
                  `,
                )
                .join("")}
            `,
          )
          .join("")}
      </div>
    </div>
    </div>
  `;
}

function onePageOrderBasicInfoGroup(index = 0, showTitle = false) {
  const model = onePageOrderLineValue(index, "model");
  const make = onePageOrderLineValue(index, "make");
  const fabric = onePageOrderLineValue(index, "fabric");
  return `
    <div class="rounded-[10px] border border-border bg-secondary/20 p-4">
      ${showTitle ? `<h3 class="mb-4 text-sm font-semibold">Order ${index + 1}</h3>` : ""}
      <div class="grid gap-4 md:grid-cols-2">
        ${onePageOrderLineField(index, "model", "Model")}
        ${onePageOrderLineField(index, "make", "Make", "select", !model)}
        ${onePageOrderLineField(index, "fabric", "Fabric", "input", !make)}
        ${onePageOrderLineField(index, "knitType", "Knit type", "select", !fabric)}
      </div>
    </div>
  `;
}

function onePageOrderBasicInfoMode() {
  return "";
}

function syncOnePagePrimaryFieldsFromFirstLine() {
  ensureOnePageOrderLines();
  const first = state.onePageOrderLines[0] || onePageOrderLineDefaults(0);
  const keys = onePageOrderUsesMultiPageFlow()
    ? ["jacketModel", "suitTrouserModel", "jacketStyle", "trouserStyle", "jacketMake", "canvas", "suitTrouserMake", "fabric", "liningMode", "lining", "button", "model", "make"]
    : onePageOrderIsTrouserFlow()
      ? ["model", "make", "fabric"]
      : ["model", "make", "fabric", "knitType"];
  keys.forEach((key) => {
    state.onePageOrderFields[key] = first[key] || "";
  });
}

function resetOnePageOrderCollections() {
  state.onePageOrderLines = [];
  state.onePageOrderDesigns = [];
  state.onePageOrderPayments = [];
  state.onePageOrderDetails = [];
  state.onePageOrderTrouserFitTools = {};
  state.onePageOrderActiveFitGarment = "jacket";
  state.onePageOrderGarmentFitProfiles = {};
  state.onePageOrderDesignCopyRows = new Set();
  state.activeOnePageOrderSelect = null;
  state.activeOnePageFabricSearch = null;
  state.activeOnePageFabricSearchPosition = null;
  state.activeOnePageMaterialSearch = null;
  state.activeOnePageMaterialSearchPosition = null;
}

function resetOnePageOrderForItem(itemId) {
  const selected = onePageOrderItemOptions.find((option) => option.id === itemId) || onePageOrderItemOptions[1];
  state.onePageOrderItem = selected.id;
  state.onePageOrderFields = {
    ...state.onePageOrderFields,
    item: selected.item,
    reviewed: false,
  };
  resetOnePageOrderCollections();
  if (selected.id === "two-piece") {
    state.onePageOrderFields = {
      ...state.onePageOrderFields,
      knitwearItem: "",
      trouserItem: "",
      model: "2-Piece Suit",
      make: "traditional",
      fabric: "HS172101",
      liningMode: "manually select",
      lining: "",
      button: "",
      knitType: "",
      jacketModel: "Standard",
      suitTrouserModel: "Standard",
      jacketStyle: "none",
      trouserStyle: "none",
      jacketMake: "traditional",
      canvas: "standard",
      suitTrouserMake: "traditional",
      fitProfileMode: "create",
      fitProfileName: "",
      fitProfileExisting: "",
      tryOnFit: "",
      tryOnSize: "",
    };
    state.onePageOrderStep = "basic";
    state.onePageOrderCollapsedSections = new Set(["fitTools", "payment", "orderDetails"]);
  } else if (selected.id === "trousers") {
    state.onePageOrderFields = {
      ...state.onePageOrderFields,
      knitwearItem: "",
      trouserItem: "",
      model: "",
      make: "",
      fabric: "",
      knitType: "",
      fitProfileMode: "create",
      fitProfileName: "[Trouser] 03-Jul-2026",
      fitProfileExisting: "",
      tryOnFit: "",
      tryOnSize: "",
    };
    state.onePageOrderCollapsedSections = new Set(["fitTools", "design", "payment", "orderDetails"]);
  } else {
    state.onePageOrderFields = {
      ...state.onePageOrderFields,
      knitwearItem: selected.id === "knitwear" ? "Knit" : "",
      trouserItem: "",
      model: "V-Neck",
      make: "Traditional",
      fabric: "K10139 heathered grey cashmere",
      knitType: "Single Yarn Solid",
      fitProfileMode: "create",
      fitProfileName: "[Knit] 03-Jul-2026",
      fitProfileExisting: "[Knit] 03-Jul-2026",
      tryOnFit: "K40",
      tryOnSize: "52",
    };
    state.onePageOrderCollapsedSections = new Set(["fitTools", "payment", "orderDetails"]);
  }
  ensureOnePageOrderLines();
}

function updateOnePageOrderField(key, value) {
  const previousValue = state.onePageOrderFields[key];
  if (key === "item") {
    const item = onePageOrderItemOptions.find((option) => option.item === value);
    if (item && item.id !== state.onePageOrderItem) {
      resetOnePageOrderForItem(item.id);
      return;
    }
  }
  state.onePageOrderFields[key] = value;
  if (key === "trouserItem" && previousValue !== value) {
    state.onePageOrderFields.model = "";
    state.onePageOrderFields.make = "";
    state.onePageOrderFields.fabric = "";
    state.onePageOrderFields.fitProfileName = value ? `[${value}] 03-Jul-2026` : "[Trouser] 03-Jul-2026";
    resetOnePageOrderCollections();
  }
  if (key === "quantity") ensureOnePageOrderLines();
}

function updateOnePageOrderLine(index, key, value) {
  ensureOnePageOrderLines();
  const line = state.onePageOrderLines[index] || onePageOrderLineDefaults(index);
  line[key] = value;
  if (onePageOrderUsesMultiPageFlow() && key === "liningMode" && value !== "manually select") {
    line.lining = "";
  }
  if (!onePageOrderUsesMultiPageFlow() && key === "model") {
    line.make = "";
    line.fabric = "";
    line.knitType = "";
  }
  if (!onePageOrderUsesMultiPageFlow() && key === "make") {
    line.fabric = "";
    line.knitType = "";
  }
  if (!onePageOrderUsesMultiPageFlow() && key === "fabric") {
    line.knitType = "";
  }
  state.onePageOrderLines[index] = line;
  syncOnePagePrimaryFieldsFromFirstLine();
}

function onePageOrderFitProfileComplete() {
  const fields = state.onePageOrderFields;
  if (onePageOrderUsesMultiPageFlow()) {
    if (!onePageOrderSectionComplete("primary")) return false;
    return onePageOrderFitGarments().every((garment) => onePageOrderGarmentFitProfileComplete(garment.id));
  }
  return fields.fitProfileMode === "search"
    ? Boolean(fields.fitProfileExisting)
    : Boolean(fields.fitProfileName && fields.tryOnFit && fields.tryOnSize);
}

function onePageOrderFitGarments() {
  if (!onePageOrderUsesMultiPageFlow()) return [];
  const itemLabel = `${state.onePageOrderFields.item || onePageOrderDisplayItem() || ""}`.toLowerCase();
  const ids = itemLabel.includes("trousers") && !itemLabel.includes("jacket") && !itemLabel.includes("piece")
    ? ["trousers"]
    : itemLabel.includes("waistcoat") && !itemLabel.includes("piece")
      ? ["waistcoat"]
      : itemLabel.includes("jacket") && !itemLabel.includes("trousers") && !itemLabel.includes("bermuda") && !itemLabel.includes("piece")
        ? ["jacket"]
        : ["jacket", "trousers"];
  if (itemLabel.includes("3-piece")) {
    ["jacket", "trousers", "waistcoat"].forEach((id) => {
      if (!ids.includes(id)) ids.push(id);
    });
  }
  return ids.map((id) => createFitProfileGarments.find((garment) => garment.id === id)).filter(Boolean);
}

function onePageOrderActiveFitGarment() {
  const garments = onePageOrderFitGarments();
  if (!garments.length) return createFitProfileGarments[0];
  const active = garments.find((garment) => garment.id === state.onePageOrderActiveFitGarment) || garments[0];
  state.onePageOrderActiveFitGarment = active.id;
  return active;
}

function onePageOrderGarmentFitProfile(garmentId) {
  if (!state.onePageOrderGarmentFitProfiles) state.onePageOrderGarmentFitProfiles = {};
  if (!state.onePageOrderGarmentFitProfiles[garmentId]) {
    state.onePageOrderGarmentFitProfiles[garmentId] = {
      mode: "create",
      name: "",
      existing: "",
      tryOnFit: "",
      tryOnSize: "",
      searchQuery: "",
    };
  }
  return state.onePageOrderGarmentFitProfiles[garmentId];
}

function onePageOrderGarmentFitProfileValue(garmentId, key) {
  return onePageOrderGarmentFitProfile(garmentId)[key] || "";
}

function updateOnePageOrderGarmentFitProfile(garmentId, key, value) {
  const profile = onePageOrderGarmentFitProfile(garmentId);
  profile[key] = value;
  if (key === "mode") {
    profile.existing = "";
    if (value === "search") {
      profile.name = "";
      profile.tryOnFit = "";
      profile.tryOnSize = "";
    }
  }
  if (key === "existing") {
    profile.name = value;
  }
  state.onePageOrderGarmentFitProfiles[garmentId] = profile;
}

function onePageOrderGarmentFitProfileComplete(garmentId) {
  const profile = onePageOrderGarmentFitProfile(garmentId);
  return profile.mode === "search"
    ? Boolean(profile.existing)
    : Boolean(profile.name && profile.tryOnFit && profile.tryOnSize);
}

function onePageOrderFitToolKey(garmentId, direction, label) {
  return `${garmentId}:${direction}:${label}`;
}

function onePageOrderGarmentFitToolValue(garmentId, direction, label) {
  return state.onePageOrderTrouserFitTools[onePageOrderFitToolKey(garmentId, direction, label)] || "0.00";
}

function onePageOrderFitToolSectionsForLevel() {
  const levelRank = { simple: 1, standard: 2, expert: 3 };
  const currentRank = levelRank[state.onePageOrderFitToolsLevel] || levelRank.standard;
  return createFitProfileSections.filter((section) => levelRank[section.level] <= currentRank);
}

function onePageOrderGarmentFitProfileDisplayRows() {
  if (!onePageOrderUsesMultiPageFlow()) return [];
  return onePageOrderFitGarments().map((garment) => {
    const profile = onePageOrderGarmentFitProfile(garment.id);
    return {
      garment,
      profile,
      label: profile.existing || profile.name || "-",
      tryOnFit: profile.tryOnFit || "-",
      tryOnSize: profile.tryOnSize || "-",
      complete: onePageOrderGarmentFitProfileComplete(garment.id),
    };
  });
}

function onePageOrderGarmentSummaryText(key) {
  const rows = onePageOrderGarmentFitProfileDisplayRows().filter((row) => row[key] && row[key] !== "-");
  if (!rows.length) return "-";
  return rows.map((row) => `${row.garment.label}: ${row[key]}`).join("; ");
}

function onePageOrderFitProfileSummaryText() {
  const fields = state.onePageOrderFields;
  if (!onePageOrderUsesMultiPageFlow()) return fields.fitProfileName || fields.fitProfileExisting || "-";
  return onePageOrderGarmentSummaryText("label");
}

function onePageOrderTryOnFitSummaryText() {
  const fields = state.onePageOrderFields;
  if (!onePageOrderUsesMultiPageFlow()) return fields.tryOnFit || "-";
  return onePageOrderGarmentSummaryText("tryOnFit");
}

function onePageOrderTryOnSizeSummaryText() {
  const fields = state.onePageOrderFields;
  if (!onePageOrderUsesMultiPageFlow()) return fields.tryOnSize || "-";
  return onePageOrderGarmentSummaryText("tryOnSize");
}

function renderOnePageOrderRunningFitProfileContent(fields, isMultiPage) {
  if (!isMultiPage) {
    return `
      <div class="flex flex-wrap gap-2">
        ${onePageOrderFitProfileChip(fields.fitProfileName || fields.fitProfileExisting || "-")}
        ${onePageOrderFitProfileChip(`TryOn Fit ${fields.tryOnFit || "-"}`)}
        ${onePageOrderFitProfileChip(`TryOn Size ${fields.tryOnSize || "-"}`)}
      </div>
    `;
  }
  return `
    <div class="space-y-3">
      ${onePageOrderGarmentFitProfileDisplayRows()
        .map(
          (row) => `
            <div class="space-y-2 rounded-[8px] border border-border bg-secondary/25 p-3">
              <div class="text-sm font-semibold">${escapeHtml(row.garment.label)}</div>
              <div class="flex flex-wrap gap-2">
                ${onePageOrderFitProfileChip(row.garment.label)}
                ${onePageOrderFitProfileChip(row.label)}
                ${onePageOrderFitProfileChip(`TryOn Fit ${row.tryOnFit}`)}
                ${onePageOrderFitProfileChip(`TryOn Size ${row.tryOnSize}`)}
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function onePageOrderSectionComplete(sectionId) {
  const fields = state.onePageOrderFields;
  if (sectionId === "primary") {
    ensureOnePageOrderLines();
    if (onePageOrderUsesMultiPageFlow()) {
      return Boolean(fields.salesAssociate && fields.item && fields.quantity) && state.onePageOrderLines.every((line) =>
        line.jacketModel &&
        line.suitTrouserModel &&
        line.jacketStyle &&
        line.trouserStyle &&
        line.jacketMake &&
        line.canvas &&
        line.suitTrouserMake &&
        line.fabric &&
        line.liningMode &&
        (line.liningMode !== "manually select" || line.lining) &&
        line.button,
      );
    }
    if (onePageOrderIsTrouserFlow()) return onePageOrderTrouserPrimaryReady();
    const itemReady = state.onePageOrderItem === "knitwear" ? Boolean(fields.knitwearItem) : Boolean(fields.item);
    return Boolean(fields.salesAssociate && itemReady && fields.quantity) && state.onePageOrderLines.every((line) => line.model && line.make && line.fabric && line.knitType);
  }
  if (sectionId === "fitProfile") {
    return onePageOrderFitProfileComplete();
  }
  if (sectionId === "fitTools") {
    if (!onePageOrderFitProfileComplete()) return false;
    return true;
  }
  if (sectionId === "design") {
    ensureOnePageOrderDesigns();
    if (onePageOrderIsTrouserFlow()) {
      return state.onePageOrderDesigns.every((design) =>
        Boolean(
          design.trouserDetailing &&
            design.trouserWaistband &&
            design.trouserClosure &&
            design.trouserClosingButton &&
            design.trouserPocketLining &&
            design.trouserFrontStyle &&
            design.trouserSidePockets &&
            design.trouserHemFinish,
        ),
      );
    }
    return state.onePageOrderDesigns.every((design) => design.neckline && design.armholeStyle && design.detailing && design.sleeveStyle && design.contrastOption);
  }
  if (sectionId === "orderDetails") {
    ensureOnePageOrderPaymentDetails();
    const visibleDetails = onePageOrderPerOrderEnabled() ? state.onePageOrderDetails : state.onePageOrderDetails.slice(0, 1);
    return visibleDetails.every((detail) => detail.shopOrderNumber && detail.occasion);
  }
  return true;
}

function onePageOrderSectionNav(section) {
  const sectionIndex = onePageOrderSections.findIndex((item) => item.id === section.id);
  const previous = onePageOrderSections[sectionIndex - 1];
  const next = onePageOrderSections[sectionIndex + 1];
  const complete = onePageOrderSectionComplete(section.id);
  const nextLabel = next ? `Continue to ${next.label}` : "Review order";
  return `
    <div class="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
      <button class="btn btn-soft gap-2" data-one-page-order-step-nav="${section.id}" data-one-page-order-step-target="${previous?.id || "primary"}" type="button">
        ${icon("chevron-left", "h-4 w-4")}
        <span>Back to ${escapeHtml(previous?.label || "Primary info")}</span>
      </button>
      <button class="btn btn-primary gap-2 ${complete ? "" : "opacity-60"}" data-one-page-order-step-nav="${section.id}" data-one-page-order-step-target="${next?.id || "review"}" type="button" ${complete ? "" : 'disabled title="Complete this section first."'}>
        <span>${escapeHtml(nextLabel)}</span>
        ${icon("chevron-right", "h-4 w-4")}
      </button>
    </div>
  `;
}

function navigateOnePageOrderStep(currentSectionId, targetSectionId) {
  if (currentSectionId) state.onePageOrderCollapsedSections.add(currentSectionId);
  if (targetSectionId && !["primary", "review"].includes(targetSectionId)) {
    state.onePageOrderCollapsedSections.delete(targetSectionId);
  }
  renderOnePageOrderPage();
  if (targetSectionId === "review") {
    showToast("Order summary ready to review.");
    return;
  }
  requestAnimationFrame(() => {
    const target = targetSectionId === "primary"
      ? document.querySelector("#onePageOrderWorkspace > section")
      : document.querySelector(`[data-one-page-order-section="${targetSectionId}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function onePageOrderSection(section, body) {
  const collapsed = state.onePageOrderCollapsedSections.has(section.id);
  const complete = onePageOrderSectionComplete(section.id);
  const required = section.required || (onePageOrderIsTrouserFlow() && ["fitProfile", "fitTools", "design", "orderDetails"].includes(section.id));
  const statusLabel = complete ? "Ready" : required ? "Required" : "Optional";
  return `
    <section class="overflow-hidden rounded-[10px] border border-primary/15 bg-card shadow-sm">
      <button class="flex w-full items-center justify-between gap-3 border-b border-primary/10 bg-primary/[0.055] px-4 py-3 text-left transition hover:bg-primary/[0.08]" data-one-page-order-section="${section.id}" type="button">
        <span class="flex items-center gap-3">
          <span class="flex h-6 w-6 items-center justify-center rounded-md border border-primary/20 bg-card text-primary shadow-sm">
            ${icon(collapsed ? "plus" : "minus", "h-3 w-3")}
          </span>
          <span class="font-semibold">${section.label}</span>
        </span>
        <span class="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          ${icon(complete ? "check" : "square", `h-4 w-4 ${complete ? "text-emerald-600" : "text-muted-foreground"}`)}
          <span>${statusLabel}</span>
        </span>
      </button>
      <div class="${collapsed ? "hidden" : ""} bg-card p-4">
        ${body}
        ${onePageOrderSectionNav(section)}
      </div>
    </section>
  `;
}

function onePageOrderPrimarySection() {
  ensureOnePageOrderLines();
  const quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1);
  const singleOrder = quantity === 1;
  const isTrouser = onePageOrderIsTrouserFlow();
  const isKnitwear = state.onePageOrderItem === "knitwear";
  const orderColumns = state.onePageOrderLines.map((line, index) => ({
    index,
    title: `Order ${index + 1}`,
    subtitle: line.fabric || (isTrouser ? "Fabric/wash required" : "Fabric required"),
  }));
  const trouserIntro = isTrouser && !state.onePageOrderFields.trouserItem
    ? `<div class="rounded-[10px] border border-dashed border-primary/20 bg-primary/[0.045] p-4 text-sm text-muted-foreground">Select Chino or Jeans/5 Pockets to load model, make and Fabric/wash.</div>`
    : "";
  const basicInfo = isTrouser
    ? state.onePageOrderFields.trouserItem
      ? onePageOrderTable(
          orderColumns,
          [
            { label: "Model", render: (index) => onePageOrderLineControl(index, "model") },
            { label: "Make", render: (index) => onePageOrderLineControl(index, "make", "select", !onePageOrderLineValue(index, "model")) },
            { label: "Fabric/wash", render: (index) => onePageOrderLineControl(index, "fabric", "input", !onePageOrderLineValue(index, "make")) },
          ],
          { label: state.onePageOrderFields.trouserItem, fitContents: singleOrder, labelColumnWidth: singleOrder ? 180 : 220, valueColumnMaxWidth: singleOrder ? 440 : null },
        )
      : trouserIntro
    : quantity > 1
      ? onePageOrderTable(
          orderColumns,
          [
            { label: "Model", render: (index) => onePageOrderLineControl(index, "model") },
            { label: "Make", render: (index) => onePageOrderLineControl(index, "make", "select", !onePageOrderLineValue(index, "model")) },
            { label: "Fabric", render: (index) => onePageOrderLineControl(index, "fabric", "input", !onePageOrderLineValue(index, "make")) },
            { label: "Knit type", render: (index) => onePageOrderLineControl(index, "knitType", "select", !onePageOrderLineValue(index, "fabric")) },
          ],
          { label: "Basic information" },
        )
      : onePageOrderBasicInfoGroup(0, false);
  return `
    <div class="space-y-5">
      <div class="grid gap-4 md:grid-cols-3">
        ${onePageOrderField("salesAssociate", "Sales associate")}
        ${isTrouser ? onePageOrderField("trouserItem", "Item") : ""}
        ${isKnitwear ? onePageOrderField("knitwearItem", "Item") : ""}
        ${onePageOrderField("quantity", "Quantity")}
      </div>
      ${basicInfo}
    </div>
  `;
}

function twoPieceBasicInfoHelp(label) {
  return `
    <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-70 transition hover:opacity-100" data-one-page-order-design-help="${escapeAttr(label)}" type="button" title="${escapeAttr(label)} help" aria-label="${escapeAttr(label)} help">
      ${icon("info", "h-3.5 w-3.5")}
    </button>
  `;
}

function twoPieceBasicInfoField(index, key, label, options = {}) {
  const value = onePageOrderLineValue(index, key);
  const control = options.material
    ? onePageOrderMaterialInput(index, key, value, options.placeholder || `Search ${label.toLowerCase()}`)
    : onePageOrderSelectButton(`line:${index}:${key}`, value);
  return `
    <div class="grid items-center gap-3 md:grid-cols-[180px_minmax(240px,320px)_28px]">
      <div class="text-sm font-semibold text-muted-foreground">${escapeHtml(label)}</div>
      ${control}
      <div>${options.help ? twoPieceBasicInfoHelp(label) : ""}</div>
    </div>
  `;
}

function twoPieceBasicInfoGroup(index) {
  const showTitle = state.onePageOrderLines.length > 1;
  return `
    <section class="rounded-[12px] border border-border bg-secondary/20 p-5">
      ${showTitle ? `<h3 class="mb-5 text-sm font-semibold">Order ${index + 1}</h3>` : ""}
      <div class="space-y-6">
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Model</h3>
          ${twoPieceBasicInfoField(index, "jacketModel", "Jacket", { help: true })}
          ${twoPieceBasicInfoField(index, "suitTrouserModel", "Trousers", { help: true })}
        </div>
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Style</h3>
          ${twoPieceBasicInfoField(index, "jacketStyle", "Jacket")}
          ${twoPieceBasicInfoField(index, "trouserStyle", "Trousers")}
        </div>
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Make</h3>
          ${twoPieceBasicInfoField(index, "jacketMake", "Jacket", { help: true })}
          ${twoPieceBasicInfoField(index, "canvas", "Canvas")}
          ${twoPieceBasicInfoField(index, "suitTrouserMake", "Trousers")}
        </div>
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Fabric and trims</h3>
          ${twoPieceBasicInfoField(index, "fabric", "Fabric", { material: true, placeholder: "Search fabric" })}
          <div class="grid items-center gap-3 md:grid-cols-[180px_minmax(240px,320px)_28px]">
            <div class="text-sm font-semibold text-muted-foreground">Lining</div>
            <div class="space-y-2">
              ${twoPieceLiningControl(index)}
            </div>
            <div></div>
          </div>
          ${twoPieceBasicInfoField(index, "button", "Button", { material: true, placeholder: "Search buttons" })}
        </div>
      </div>
    </section>
  `;
}

function twoPieceLiningControl(index) {
  const liningMode = onePageOrderLineValue(index, "liningMode") || "manually select";
  return `
    <div class="space-y-2">
      ${onePageOrderSelectButton(`line:${index}:liningMode`, onePageOrderLineValue(index, "liningMode"))}
      ${liningMode === "manually select" ? onePageOrderMaterialInput(index, "lining", onePageOrderLineValue(index, "lining"), "Search lining") : ""}
    </div>
  `;
}

function twoPieceBasicInfoLabel(label, helpLabel = "") {
  return `
    <div class="flex items-center gap-2">
      <span>${escapeHtml(label)}</span>
      ${helpLabel ? twoPieceBasicInfoHelp(helpLabel) : ""}
    </div>
  `;
}

function twoPieceOrderBasicInfoTable() {
  const columns = state.onePageOrderLines.map((line, index) => ({
    index,
    title: `Order ${index + 1}`,
    subtitle: line.fabric || "Fabric required",
  }));
  const singleOrder = columns.length === 1;
  return onePageOrderTable(
    columns,
    [
      { label: "Model - Jacket", labelHtml: twoPieceBasicInfoLabel("Model - Jacket", "Jacket model"), render: (index) => onePageOrderSelectButton(`line:${index}:jacketModel`, onePageOrderLineValue(index, "jacketModel")) },
      { label: "Model - Trousers", labelHtml: twoPieceBasicInfoLabel("Model - Trousers", "Trouser model"), render: (index) => onePageOrderSelectButton(`line:${index}:suitTrouserModel`, onePageOrderLineValue(index, "suitTrouserModel")) },
      { label: "Style - Jacket", render: (index) => onePageOrderSelectButton(`line:${index}:jacketStyle`, onePageOrderLineValue(index, "jacketStyle")) },
      { label: "Style - Trousers", render: (index) => onePageOrderSelectButton(`line:${index}:trouserStyle`, onePageOrderLineValue(index, "trouserStyle")) },
      { label: "Make - Jacket", labelHtml: twoPieceBasicInfoLabel("Make - Jacket", "Jacket make"), render: (index) => onePageOrderSelectButton(`line:${index}:jacketMake`, onePageOrderLineValue(index, "jacketMake")) },
      { label: "Canvas", render: (index) => onePageOrderSelectButton(`line:${index}:canvas`, onePageOrderLineValue(index, "canvas")) },
      { label: "Make - Trousers", render: (index) => onePageOrderSelectButton(`line:${index}:suitTrouserMake`, onePageOrderLineValue(index, "suitTrouserMake")) },
      { label: "Fabric", render: (index) => onePageOrderMaterialInput(index, "fabric", onePageOrderLineValue(index, "fabric"), "Search fabric") },
      { label: "Lining", render: (index) => twoPieceLiningControl(index) },
      { label: "Button", render: (index) => onePageOrderMaterialInput(index, "button", onePageOrderLineValue(index, "button"), "Search buttons") },
    ],
    {
      label: "Basic information",
      fitContents: singleOrder,
      labelColumnWidth: singleOrder ? 180 : 220,
      valueColumnMaxWidth: singleOrder ? 440 : null,
      minWidth: singleOrder ? 620 : Math.max(900, 220 + state.onePageOrderLines.length * 280),
    },
  );
}

function twoPieceOrderBasicInfoSection() {
  ensureOnePageOrderLines();
  return `
    <div class="space-y-6">
      <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_280px]">
        <div class="grid gap-4 md:grid-cols-2">
          ${onePageOrderField("salesAssociate", "Sales associate")}
          ${onePageOrderField("item", "Item")}
        </div>
        ${onePageOrderField("quantity", "Quantity")}
      </div>
      <label class="flex w-fit items-center gap-3 text-sm font-semibold text-muted-foreground">
        <input class="check" type="checkbox" />
        <span>Copy from order number</span>
      </label>
      ${twoPieceOrderBasicInfoTable()}
    </div>
  `;
}

function onePageOrderFitProfileSection() {
  const fields = state.onePageOrderFields;
  if (onePageOrderUsesMultiPageFlow()) return onePageOrderGarmentFitProfileSection();
  const mode = fields.fitProfileMode === "search" ? "search" : "create";
  const existingProfiles = onePageOrderIsTrouserFlow()
    ? ["[Trouser] 03-Jul-2026", "[Trouser] 18-Jun-2026", "[Chino] 12-Jun-2026"]
    : ["[Knit] 03-Jul-2026", "[Knit] 22-Jun-2026", "[Jacket] 22-Jun-2026"];
  const query = (fields.fitProfileSearchQuery || "").trim().toLowerCase();
  const filteredProfiles = existingProfiles.filter((profile) => profile.toLowerCase().includes(query));
  return `
    <div class="space-y-6">
      <div class="inline-flex rounded-lg bg-secondary p-1">
        <button class="customer-tab ${mode === "create" ? "active" : ""}" data-one-page-order-fit-mode="create" type="button">Create new FitProfile</button>
        <button class="customer-tab ${mode === "search" ? "active" : ""}" data-one-page-order-fit-mode="search" type="button">Search existing FitProfile</button>
      </div>
      ${
        mode === "search"
          ? `
            <div class="space-y-4">
              <label class="grid gap-1.5">
                <span class="text-sm font-medium">Search FitProfile</span>
                <input class="field" data-one-page-order-field="fitProfileSearchQuery" value="${escapeAttr(fields.fitProfileSearchQuery || "")}" placeholder="Search by name" />
              </label>
              <div class="grid gap-2">
                ${filteredProfiles.length
                  ? filteredProfiles
                      .map(
                        (profile) => `
                          <button class="flex items-center justify-between rounded-[10px] border border-border px-4 py-3 text-left hover:bg-secondary ${fields.fitProfileExisting === profile ? "border-primary bg-primary/10 ring-1 ring-primary/25" : "bg-card"}" data-one-page-order-fit-profile="${escapeAttr(profile)}" type="button">
                            <span class="font-medium">${escapeHtml(profile)}</span>
                            <span class="text-sm text-muted-foreground">${onePageOrderIsTrouserFlow() ? "T40 · TryOn 32" : profile.includes("Knit") ? "K40 · TryOn 52" : "Slim · TryOn 36"}</span>
                          </button>
                        `,
                      )
                      .join("")
                  : `<div class="rounded-[10px] border border-dashed border-border bg-secondary/30 p-4 text-sm text-muted-foreground">No matching FitProfiles.</div>`}
              </div>
            </div>
          `
          : `
            <div class="grid gap-4 md:grid-cols-3">
              ${onePageOrderField("fitProfileName", "FitProfile name", "input")}
              ${onePageOrderField("tryOnFit", "TryOn Fit")}
              ${onePageOrderField("tryOnSize", "TryOn Size")}
            </div>
          `
      }
    </div>
  `;
}

function onePageOrderGarmentExistingFitProfiles(garment) {
  return [
    `[${garment.label}] 03-Jul-2026`,
    `[${garment.label}] 18-Jun-2026`,
    `[${garment.label}] 12-Jun-2026`,
  ];
}

function onePageOrderGarmentFitProfileSection() {
  const garments = onePageOrderFitGarments();
  return `
    <div class="space-y-4">
      ${garments.map((garment) => onePageOrderGarmentFitProfilePanel(garment)).join("")}
    </div>
  `;
}

function onePageOrderGarmentFitProfilePanel(garment) {
  const profile = onePageOrderGarmentFitProfile(garment.id);
  const mode = profile.mode === "search" ? "search" : "create";
  const complete = onePageOrderGarmentFitProfileComplete(garment.id);
  const query = (profile.searchQuery || "").trim().toLowerCase();
  const existingProfiles = onePageOrderGarmentExistingFitProfiles(garment);
  const filteredProfiles = existingProfiles.filter((item) => item.toLowerCase().includes(query));
  return `
    <section class="rounded-[10px] border border-border bg-card p-4">
      <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 class="font-semibold">${escapeHtml(garment.label)}</h3>
          <p class="mt-1 text-sm text-muted-foreground">${escapeHtml(profile.existing || profile.name || "FitProfile required")}</p>
        </div>
        <span class="pill ${complete ? "bg-emerald-50 text-emerald-700" : "bg-secondary text-muted-foreground"}">${complete ? "Ready" : "Required"}</span>
      </div>
      <div class="mb-4 inline-flex rounded-lg bg-secondary p-1">
        <button class="customer-tab ${mode === "create" ? "active" : ""}" data-one-page-order-fit-mode="create" data-one-page-order-fit-garment="${escapeAttr(garment.id)}" type="button">Create new FitProfile</button>
        <button class="customer-tab ${mode === "search" ? "active" : ""}" data-one-page-order-fit-mode="search" data-one-page-order-fit-garment="${escapeAttr(garment.id)}" type="button">Search existing FitProfile</button>
      </div>
      ${
        mode === "search"
          ? `
            <div class="space-y-4">
              <label class="grid gap-1.5">
                <span class="text-sm font-medium">Search ${escapeHtml(garment.label)} FitProfile</span>
                <input class="field" data-one-page-order-garment-fit-field="searchQuery" data-one-page-order-fit-garment="${escapeAttr(garment.id)}" value="${escapeAttr(profile.searchQuery || "")}" placeholder="Search by name" />
              </label>
              <div class="grid gap-2">
                ${filteredProfiles.length
                  ? filteredProfiles
                      .map(
                        (item) => `
                          <button class="flex items-center justify-between rounded-[10px] border border-border px-4 py-3 text-left hover:bg-secondary ${profile.existing === item ? "border-primary bg-primary/10 ring-1 ring-primary/25" : "bg-card"}" data-one-page-order-fit-profile="${escapeAttr(item)}" data-one-page-order-fit-garment="${escapeAttr(garment.id)}" type="button">
                            <span class="font-medium">${escapeHtml(item)}</span>
                            <span class="text-sm text-muted-foreground">${escapeHtml(garment.fit)} · TryOn ${escapeHtml(garment.size)}</span>
                          </button>
                        `,
                      )
                      .join("")
                  : `<div class="rounded-[10px] border border-dashed border-border bg-secondary/30 p-4 text-sm text-muted-foreground">No matching FitProfiles.</div>`}
              </div>
            </div>
          `
          : `
            <div class="grid gap-4 md:grid-cols-3">
              <label class="grid gap-1.5">
                <span class="text-sm font-medium text-muted-foreground">FitProfile name</span>
                <input class="field" data-one-page-order-garment-fit-field="name" data-one-page-order-fit-garment="${escapeAttr(garment.id)}" value="${escapeAttr(profile.name || "")}" placeholder="[${escapeAttr(garment.label)}] 03-Jul-2026" />
              </label>
              <label class="grid gap-1.5">
                <span class="text-sm font-medium text-muted-foreground">TryOn Fit</span>
                ${onePageOrderSelectButton(`garmentProfile:${garment.id}:tryOnFit`, profile.tryOnFit)}
              </label>
              <label class="grid gap-1.5">
                <span class="text-sm font-medium text-muted-foreground">TryOn Size</span>
                ${onePageOrderSelectButton(`garmentProfile:${garment.id}:tryOnSize`, profile.tryOnSize)}
              </label>
            </div>
          `
      }
    </section>
  `;
}

function onePageOrderFitToolsGarmentTabs(activeGarment) {
  return `
    <div class="overflow-x-auto">
      <div class="flex min-w-max gap-2">
        ${onePageOrderFitGarments()
          .map((garment) => {
            const active = garment.id === activeGarment.id;
            const complete = onePageOrderGarmentFitProfileComplete(garment.id);
            return `
              <button class="flex h-[66px] min-w-[262px] items-center justify-between gap-4 rounded-[10px] border px-3 text-left transition ${active ? "border-primary bg-card shadow-panel" : "border-border bg-card hover:bg-secondary/30"}" data-one-page-order-fit-tools-garment="${escapeAttr(garment.id)}" type="button">
                <span class="flex min-w-0 items-center gap-2">
                  <span class="h-10 w-10 shrink-0 rounded-[8px] bg-secondary"></span>
                  <span class="truncate font-semibold">${escapeHtml(garment.label)}</span>
                </span>
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${active || complete ? "bg-primary text-primary-foreground" : "border border-border bg-card"}">
                  ${active || complete ? `<svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>` : ""}
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function onePageOrderFitToolsField(garment, direction, label) {
  const selectId = `garmentFit:${garment.id}:${direction}:${encodeURIComponent(label)}`;
  return `
    <label class="grid gap-2">
      <span class="flex items-center justify-between gap-2 text-sm font-semibold text-muted-foreground">
        <span class="min-w-0 truncate">${escapeHtml(label)}</span>
        <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-70 transition hover:opacity-100" data-one-page-order-design-help="${escapeAttr(label)}" type="button" title="Measurement help" aria-label="${escapeAttr(label)} help">
          <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
        </button>
      </span>
      ${onePageOrderSelectButton(selectId, onePageOrderGarmentFitToolValue(garment.id, direction, label))}
    </label>
  `;
}

function onePageOrderFitToolsSectionCard(garment, section) {
  return `
    <section class="overflow-hidden rounded-[10px] border border-border bg-card">
      <div class="flex items-center gap-2 border-b border-border bg-secondary/55 px-4 py-3">
        <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-border bg-card text-xs leading-none text-muted-foreground">-</span>
        <h4 class="font-semibold">${escapeHtml(section.label)}</h4>
      </div>
      <div class="grid gap-4 p-4 md:grid-cols-2">
        ${section.pairs
          .map(([plusLabel, minusLabel]) => `
            ${onePageOrderFitToolsField(garment, "plus", plusLabel)}
            ${onePageOrderFitToolsField(garment, "minus", minusLabel)}
          `)
          .join("")}
      </div>
    </section>
  `;
}

function onePageOrderMultiPageFitToolsSection() {
  const activeGarment = onePageOrderActiveFitGarment();
  const profile = onePageOrderGarmentFitProfile(activeGarment.id);
  const profileLabel = profile.existing || profile.name || "FitProfile";
  const tryOnSize = profile.tryOnSize || activeGarment.size || "-";
  return `
    <div class="space-y-5">
      ${onePageOrderFitToolsGarmentTabs(activeGarment)}
      <section class="overflow-hidden rounded-[10px] border border-border bg-card">
        <div class="flex flex-col gap-4 border-b border-border px-5 py-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 class="font-semibold">FitTools loaded</h3>
            <p class="mt-2 text-sm text-muted-foreground">Loaded from ${escapeHtml(activeGarment.label)} · ${escapeHtml(profileLabel)} · TryOn ${escapeHtml(tryOnSize)}.</p>
          </div>
          <div class="shrink-0 lg:text-left">
            <div class="mb-2 text-sm font-semibold text-muted-foreground">FitProfile Level</div>
            <div class="inline-flex rounded-[10px] bg-secondary p-1">
              ${createFitProfileLevels
                .map(
                  (level) => `
                    <button class="customer-tab ${state.onePageOrderFitToolsLevel === level.id ? "active" : ""}" data-one-page-order-fit-tools-level="${level.id}" type="button">
                      ${escapeHtml(level.label)}
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="space-y-5 p-5">
          ${onePageOrderFitToolSectionsForLevel().map((section) => onePageOrderFitToolsSectionCard(activeGarment, section)).join("")}
        </div>
      </section>
    </div>
  `;
}

function onePageOrderFitToolsSection() {
  if (!onePageOrderFitProfileComplete()) {
    return `
      <div class="rounded-[10px] border border-dashed border-border bg-secondary/30 p-4 text-sm text-muted-foreground">
        Add or select a FitProfile before loading FitTools.
      </div>
    `;
  }
  if (onePageOrderUsesMultiPageFlow()) return onePageOrderMultiPageFitToolsSection();
  if (onePageOrderIsTrouserFlow()) {
    const fitToolField = (direction, key, label) => `
      <div class="grid items-center gap-3 md:grid-cols-[minmax(180px,1fr)_minmax(180px,280px)_32px]">
        <span class="text-sm font-semibold text-muted-foreground">${escapeHtml(label)}</span>
        ${onePageOrderSelectButton(`trouserFit:${direction}:${key}`, state.onePageOrderTrouserFitTools[`${direction}:${key}`] || "0.00")}
        <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-60 transition hover:opacity-100" data-one-page-order-design-help="${escapeAttr(label)}" type="button" title="Measurement help" aria-label="${escapeAttr(label)} help">
          <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
        </button>
      </div>
    `;
    return `
      <div class="grid gap-8 xl:grid-cols-2">
        <div class="space-y-4">
          <div class="text-sm font-semibold text-muted-foreground">${escapeHtml(state.onePageOrderFields.trouserItem || "Trousers")} · plus values</div>
          ${onePageOrderTrouserFitToolRows.map(([key, plusLabel]) => fitToolField("plus", key, plusLabel)).join("")}
        </div>
        <div class="space-y-4">
          <div class="text-sm font-semibold text-muted-foreground">${escapeHtml(state.onePageOrderFields.trouserItem || "Trousers")} · minus values</div>
          ${onePageOrderTrouserFitToolRows.map(([key, , minusLabel]) => fitToolField("minus", key, minusLabel)).join("")}
        </div>
      </div>
    `;
  }
  return `
    <div class="grid gap-4 md:grid-cols-2">
      <div class="md:col-span-2 text-sm font-semibold">Knitwear</div>
      ${onePageOrderField("hipWaist", "1/2 hip & waist (50%)")}
      ${onePageOrderField("length", "Length")}
      ${onePageOrderField("sleeveLength", "Sleeve length")}
      ${onePageOrderField("shortSleeveLength", "Short sleeve length")}
    </div>
  `;
}

function onePageOrderDesignSection() {
  ensureOnePageOrderLines();
  ensureOnePageOrderDesigns();
  const designRows = onePageOrderIsTrouserFlow()
    ? [
        ["trouserDetailing", "Detailing {Style}"],
        ["trouserWaistband", "Waistband"],
        ["trouserExtendedWaistband", "Extended waistband"],
        ["trouserBuckleLoop", "Buckle loop"],
        ["trouserClosure", "Closure"],
        ["trouserClosingButton", "Closing button"],
        ["trouserPocketLining", "Pocket lining"],
        ["trouserFrontStyle", "Front style"],
        ["trouserPleatDirection", "Pleat direction"],
        ["trouserPleatDepth", "Pleat depth"],
        ["trouserPressedCrease", "Pressed crease"],
        ["trouserPintuck", "Pintuck"],
        ["trouserSidePockets", "Side pockets"],
        ["trouserCargoPockets", "Cargo pockets"],
        ["trouserBackPockets", "Back pockets"],
        ["trouserHemFinish", "Hem finish"],
        ["trouserBackPatch", "Back patch"],
      ]
    : [
        ["neckline", "Neckline / Closure"],
        ["armholeStyle", "Armhole style"],
        ["detailing", "Detailing collar, hem & cuff"],
        ["sleeveStyle", "Sleeve style"],
        ["chestPocket", "Chest pocket"],
        ["sidePockets", "Side pockets"],
        ["contrastOption", "Contrast option"],
        ["contrastColor", "Contrast color"],
      ];
  const monogramRows = [
    ["monogramPosition", "Monogram position(s)", "select"],
    ["monogramColour", "Monogram colour", "select"],
    ["monogramFont", "Monogram font", "select"],
    ["monogramText", "Monogram text", "input"],
  ];
  const brandingRows = [["brandingHangtag", "Hangtag", "select"]];
  const quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1);
  const showCopyControls = quantity > 1;
  const anyMonogramEnabled = state.onePageOrderDesigns.some((design) => design.monogram || design.monogramEnabled);
  const anyBrandingEnabled = state.onePageOrderDesigns.some((design) => design.branding || design.brandingEnabled);
  const designCopyKeys = [
    ...designRows.map(([key]) => key),
    "monogramEnabled",
    ...(anyMonogramEnabled ? monogramRows.map(([key]) => key) : []),
    "brandingEnabled",
    ...(anyBrandingEnabled ? brandingRows.map(([key]) => key) : []),
  ];
  const allCopyRowsActive = showCopyControls && designCopyKeys.every((key) => state.onePageOrderDesignCopyRows.has(key));
  const someCopyRowsActive = showCopyControls && designCopyKeys.some((key) => state.onePageOrderDesignCopyRows.has(key));
  const gridColumns = `240px repeat(${quantity}, minmax(240px, 1fr))${showCopyControls ? " 112px" : ""}`;
  const orderSubtitle = (index) => {
    const line = state.onePageOrderLines[index] || {};
    const model = line.model || state.onePageOrderFields.model || onePageOrderDisplayItem();
    const fabric = line.fabric || state.onePageOrderFields.fabric || "-";
    return `${model} · ${fabric}`;
  };
  const designLabel = (key, label) => `
    <div class="sticky left-0 z-20 flex items-center gap-2 border-b border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
      <span>${escapeHtml(label)}</span>
      <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-60 transition hover:opacity-100" data-one-page-order-design-help="${escapeAttr(label)}" type="button" title="Measurement help" aria-label="${escapeAttr(label)} help">
        <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
      </button>
    </div>
  `;
  const groupLabel = (label) => `
    <div class="sticky left-0 z-20 border-b border-border bg-secondary/35 px-4 py-4">
      <div class="text-base font-semibold text-foreground">${escapeHtml(label)}</div>
    </div>
  `;
  const copyCell = (key, tinted = false) =>
    showCopyControls
      ? `
        <div class="sticky right-0 z-20 flex items-center justify-center border-b border-l ${tinted ? "border-border bg-secondary/35" : "border-border bg-card"} p-2">
          <input class="check" data-one-page-order-design-copy-row="${escapeAttr(key)}" type="checkbox" ${state.onePageOrderDesignCopyRows.has(key) ? "checked" : ""} title="Copy this row to all orders" aria-label="Copy this row to all orders" />
        </div>
      `
      : "";
  const groupToggleButton = (index, key, enabled, label) => `
    <button class="flex h-10 w-full items-center justify-between gap-3 rounded-[8px] border border-border bg-card px-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-secondary" data-one-page-order-design-extra="${escapeAttr(key)}" data-one-page-order-design-index="${index}" type="button" aria-pressed="${enabled ? "true" : "false"}">
      <span class="flex min-w-0 items-center gap-2">
        ${icon(enabled ? "check-square" : "square", `h-4 w-4 shrink-0 ${enabled ? "text-emerald-600" : "text-muted-foreground"}`)}
        <span class="truncate">${enabled ? `${escapeHtml(label)} enabled` : `Add ${escapeHtml(label.toLowerCase())}`}</span>
      </span>
      <span class="text-xs font-semibold ${enabled ? "text-emerald-600" : "text-muted-foreground"}">${enabled ? "On" : "Off"}</span>
    </button>
  `;
  const monogramControl = (design, index, key, type) => {
    const enabled = design.monogram || design.monogramEnabled;
    if (!enabled) return `<div class="text-sm text-muted-foreground">-</div>`;
    if (type === "input") {
      return `<input class="field" data-one-page-order-design-index="${index}" data-one-page-order-design-input="${escapeAttr(key)}" value="${escapeHtml(onePageOrderDesignValue(index, key))}" />`;
    }
    return onePageOrderSelectButton(`design:${index}:${key}`, onePageOrderDesignValue(index, key));
  };
  const brandingControl = (design, index, key) => {
    const enabled = design.branding || design.brandingEnabled;
    if (!enabled) return `<div class="text-sm text-muted-foreground">-</div>`;
    return onePageOrderSelectButton(`design:${index}:${key}`, onePageOrderDesignValue(index, key));
  };
  return `
    <div class="order-scroll-shell">
    <div class="overflow-x-auto rounded-[10px] border border-border">
      <div class="grid min-w-[900px]" style="grid-template-columns: ${gridColumns};">
        <div class="sticky left-0 z-30 border-b border-border bg-secondary/35 px-4 py-3">
          <div class="font-semibold">Design options</div>
          ${onePageOrderIsTrouserFlow() ? `<div class="mt-1 text-xs text-muted-foreground">${escapeHtml(state.onePageOrderFields.trouserItem || "Trousers")}</div>` : ""}
        </div>
        ${state.onePageOrderDesigns
          .map(
            (_, index) => `
              <div class="border-b border-l border-border bg-secondary/35 px-4 py-3">
                <div class="font-semibold">Order ${index + 1}</div>
                <div class="mt-1 text-xs text-muted-foreground">${escapeHtml(orderSubtitle(index))}</div>
              </div>
            `,
          )
          .join("")}
        ${showCopyControls ? `
          <div class="sticky right-0 z-30 flex flex-col items-center justify-center gap-2 border-b border-l border-border bg-secondary/35 px-2 py-3">
            <div class="text-center text-xs font-semibold leading-tight text-muted-foreground">Copy to all orders</div>
            <button class="flex h-5 w-5 items-center justify-center text-primary" data-one-page-order-design-copy-all="${allCopyRowsActive ? "off" : "on"}" data-copy-partial="${someCopyRowsActive && !allCopyRowsActive ? "true" : "false"}" type="button" title="Toggle copy for all rows" aria-label="Toggle copy for all rows">
              ${icon(allCopyRowsActive ? "check-square" : someCopyRowsActive ? "minus-square" : "square", "h-5 w-5")}
            </button>
          </div>
        ` : ""}

        ${
          showCopyControls
            ? `
              <div class="sticky left-0 z-20 border-b border-primary/10 bg-primary/[0.055] px-4 py-3 text-sm font-semibold text-primary">Copy this design</div>
              ${state.onePageOrderDesigns
                .map(
                  (_, index) => `
                    <div class="border-b border-l border-primary/10 bg-primary/[0.055] p-3">
                      <button class="text-xs font-medium text-primary hover:underline" data-one-page-order-design-copy-order="${index}" type="button">Copy Order ${index + 1} to all</button>
                    </div>
                  `,
                )
                .join("")}
              <div class="sticky right-0 z-20 border-b border-l border-primary/10 bg-primary/[0.055] p-2 text-center text-xs font-medium text-muted-foreground">All</div>
            `
            : ""
        }

        ${designRows
          .map(
            ([key, label]) => `
              ${designLabel(key, label)}
              ${state.onePageOrderDesigns
                .map(
                  (_, index) => `
                    <div class="border-b border-l border-border p-3">
                      ${onePageOrderSelectButton(`design:${index}:${key}`, onePageOrderDesignValue(index, key))}
                    </div>
                  `,
                )
                .join("")}
              ${copyCell(key)}
            `,
          )
          .join("")}

        ${groupLabel("Monogram")}
        ${state.onePageOrderDesigns
          .map(
            (design, index) => `
              <div class="border-b border-l border-border bg-secondary/35 p-3">
                ${groupToggleButton(index, "monogram", design.monogram || design.monogramEnabled, "Monogram")}
              </div>
            `,
          )
          .join("")}
        ${copyCell("monogramEnabled", true)}

        ${
          anyMonogramEnabled
            ? monogramRows
                .map(
                  ([key, label, type]) => `
                    ${designLabel(key, label)}
                    ${state.onePageOrderDesigns
                      .map(
                        (design, index) => `
                          <div class="border-b border-l border-border p-3">
                            ${monogramControl(design, index, key, type)}
                          </div>
                        `,
                      )
                      .join("")}
                    ${copyCell(key)}
                  `,
                )
                .join("")
            : ""
        }

        ${groupLabel("Branding")}
        ${state.onePageOrderDesigns
          .map(
            (design, index) => `
              <div class="border-b border-l border-border bg-secondary/35 p-3">
                ${groupToggleButton(index, "branding", design.branding || design.brandingEnabled, "Branding")}
              </div>
            `,
          )
          .join("")}
        ${copyCell("brandingEnabled", true)}

        ${
          anyBrandingEnabled
            ? brandingRows
                .map(
                  ([key, label]) => `
                    ${designLabel(key, label)}
                    ${state.onePageOrderDesigns
                      .map(
                        (design, index) => `
                          <div class="border-b border-l border-border p-3">
                            ${brandingControl(design, index, key)}
                          </div>
                        `,
                      )
                      .join("")}
                    ${copyCell(key)}
                  `,
                )
                .join("")
            : ""
        }
      </div>
    </div>
    </div>
  `;
}

function onePageOrderPlaceholderSection(label) {
  return `<div class="rounded-[10px] border border-dashed border-border bg-secondary/30 p-4 text-sm text-muted-foreground">${label} can stay collapsed for this first knitwear pass.</div>`;
}

function onePageOrderPerOrderEnabled() {
  const quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1);
  return quantity > 1;
}

function onePageOrderVisibleOrderIndexes() {
  ensureOnePageOrderPaymentDetails();
  if (!onePageOrderPerOrderEnabled()) return [0];
  return state.onePageOrderLines.map((_, index) => index);
}

function onePageOrderPriceFor(index) {
  const line = state.onePageOrderLines[index] || state.onePageOrderLines[0] || {};
  return line.fabric ? 144 : 0;
}

function onePageOrderNumberValue(value) {
  const parsed = Number.parseFloat(String(value || "0").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function onePageOrderPaymentTotal(index) {
  const payment = state.onePageOrderPayments[index] || onePageOrderPaymentDefaults();
  return onePageOrderPriceFor(index) - onePageOrderNumberValue(payment.discount) + onePageOrderNumberValue(payment.serviceCharge);
}

function onePageOrderPaymentField(index, key, label, type = "input", readOnlyValue = null) {
  const value = readOnlyValue ?? onePageOrderPaymentValue(index, key);
  const control =
    type === "select"
      ? onePageOrderSelectButton(`payment:${index}:${key}`, value)
      : `<input class="field ${readOnlyValue !== null ? "bg-secondary/60" : ""}" data-one-page-order-payment-index="${index}" data-one-page-order-payment-field="${escapeAttr(key)}" value="${escapeHtml(value)}" ${readOnlyValue !== null ? "readonly" : ""} />`;
  return `
    <label class="grid gap-1.5">
      <span class="text-sm font-medium text-muted-foreground">${escapeHtml(label)}</span>
      ${control}
    </label>
  `;
}

function onePageOrderPaymentInput(index, key, readOnlyValue = null) {
  const value = readOnlyValue ?? onePageOrderPaymentValue(index, key);
  return `<input class="field ${readOnlyValue !== null ? "bg-secondary/60" : ""}" data-one-page-order-payment-index="${index}" data-one-page-order-payment-field="${escapeAttr(key)}" value="${escapeHtml(value)}" ${readOnlyValue !== null ? "readonly" : ""} />`;
}

function onePageOrderDetailField(index, key, label, type = "input") {
  const value = onePageOrderDetailValue(index, key);
  const control =
    type === "select"
      ? onePageOrderSelectButton(`detail:${index}:${key}`, value)
      : `<input class="field" data-one-page-order-detail-index="${index}" data-one-page-order-detail-field="${escapeAttr(key)}" value="${escapeHtml(value)}" />`;
  return `
    <label class="grid gap-1.5">
      <span class="text-sm font-medium text-muted-foreground">${escapeHtml(label)}</span>
      ${control}
    </label>
  `;
}

function onePageOrderPaymentSection() {
  ensureOnePageOrderLines();
  ensureOnePageOrderPaymentDetails();
  const indexes = onePageOrderVisibleOrderIndexes();
  const columns = indexes.map((index) => ({
    index,
    title: indexes.length === 1 ? "Order 1" : `Order ${index + 1}`,
    subtitle: state.onePageOrderLines[index]?.fabric || "Fabric required",
  }));
  return onePageOrderTable(
    columns,
    [
      { label: "R.Price (€)", render: (index) => onePageOrderPaymentInput(index, "rPrice", String(onePageOrderPriceFor(index))) },
      { label: "Discount (€)", render: (index) => onePageOrderPaymentInput(index, "discount") },
      { label: "Service charge (€)", render: (index) => onePageOrderPaymentInput(index, "serviceCharge") },
      { label: "Total (€)", render: (index) => onePageOrderPaymentInput(index, "total", onePageOrderPaymentTotal(index).toFixed(2)) },
      { label: "Down payment (€)", render: (index) => onePageOrderPaymentInput(index, "downPayment") },
      { label: "Outstanding (€)", render: (index) => onePageOrderPaymentInput(index, "outstanding", (onePageOrderPaymentTotal(index) - onePageOrderNumberValue(onePageOrderPaymentValue(index, "downPayment"))).toFixed(2)) },
      { label: "Payment method", render: (index) => onePageOrderSelectButton(`payment:${index}:paymentMethod`, onePageOrderPaymentValue(index, "paymentMethod")) },
    ],
    { label: "Payment" },
  );
}

function onePageOrderDetailsSection() {
  ensureOnePageOrderPaymentDetails();
  const indexes = onePageOrderVisibleOrderIndexes();
  const columns = indexes.map((index) => ({
    index,
    title: indexes.length === 1 ? "Order 1" : `Order ${index + 1}`,
    subtitle: state.onePageOrderLines[index]?.fabric || "Fabric required",
  }));
  return onePageOrderTable(
    columns,
    [
      { label: "Shop Order Number", render: (index) => `<input class="field" data-one-page-order-detail-index="${index}" data-one-page-order-detail-field="shopOrderNumber" value="${escapeHtml(onePageOrderDetailValue(index, "shopOrderNumber"))}" />` },
      { label: "Occasion", render: (index) => onePageOrderSelectButton(`detail:${index}:occasion`, onePageOrderDetailValue(index, "occasion")) },
    ],
    { label: "Order details" },
  );
}

function renderOnePageOrderActions(extraClass = "") {
  const reviewed = Boolean(state.onePageOrderFields.reviewed);
  const disabled = reviewed ? "" : 'disabled title="Review the summary before using order actions."';
  const disabledClass = reviewed ? "" : "opacity-60";
  return `
    <div class="flex flex-wrap items-center gap-3 ${extraClass}">
      <button class="btn btn-soft ${disabledClass}" data-one-page-order-action="hold" type="button" ${disabled}>Put order on hold</button>
      <button class="btn btn-soft ${disabledClass}" data-one-page-order-action="discount" type="button" ${disabled}>Discount</button>
      <button class="btn btn-primary ${disabledClass}" data-one-page-order-action="process" type="button" ${reviewed ? "" : 'disabled title="Your order is incomplete."'}>Process order</button>
    </div>
  `;
}

function onePageOrderReviewActionsSection() {
  const reviewed = Boolean(state.onePageOrderFields.reviewed);
  return `
    <div class="mt-4 flex flex-col gap-4 border-t border-border px-1 pt-4 lg:flex-row lg:items-center lg:justify-between">
      <label class="flex items-start gap-3 text-sm font-medium">
        <input class="check mt-0.5" data-one-page-order-field="reviewed" type="checkbox" ${reviewed ? "checked" : ""} />
        <span>Yes I have reviewed the summary and confirm the order</span>
      </label>
      ${renderOnePageOrderActions("justify-end")}
    </div>
  `;
}

function onePageOrderSummaryValue(value) {
  const normalized = String(value ?? "").trim();
  return normalized || "-";
}

function onePageOrderSummaryRows(rows) {
  return `
    <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      ${rows
        .map(
          ([label, value]) => `
            <div class="rounded-[8px] border border-border bg-secondary/25 px-3 py-2">
              <div class="text-xs font-semibold text-muted-foreground">${escapeHtml(label)}</div>
              <div class="mt-1 break-words text-sm font-medium">${escapeHtml(onePageOrderSummaryValue(value))}</div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function onePageOrderSummaryCard(title, stepId, body, description = "") {
  return `
    <section class="overflow-hidden rounded-[10px] border border-border bg-card">
      <div class="flex items-start justify-between gap-3 border-b border-border bg-secondary/35 px-4 py-3">
        <div class="min-w-0">
          <h3 class="font-semibold">${escapeHtml(title)}</h3>
          ${description ? `<p class="mt-1 text-sm text-muted-foreground">${escapeHtml(description)}</p>` : ""}
        </div>
        <button class="btn btn-soft h-9 shrink-0 gap-2 px-3" data-one-page-order-summary-edit="${escapeAttr(stepId)}" type="button">
          ${icon("pencil", "h-4 w-4")}
          <span>Edit</span>
        </button>
      </div>
      <div class="p-4">${body}</div>
    </section>
  `;
}

function onePageOrderSummaryBasicCard() {
  ensureOnePageOrderLines();
  const fields = state.onePageOrderFields;
  const orderBlocks = state.onePageOrderLines
    .map((line, index) => {
      const rows = [
        ["Jacket model", line.jacketModel],
        ["Trouser model", line.suitTrouserModel],
        ["Jacket style", line.jacketStyle],
        ["Trouser style", line.trouserStyle],
        ["Jacket make", line.jacketMake],
        ["Canvas", line.canvas],
        ["Trouser make", line.suitTrouserMake],
        ["Fabric", line.fabric],
        ["Lining", line.lining || line.liningMode],
        ["Button", line.button],
      ];
      return `
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            <h4 class="font-semibold">${escapeHtml(onePageOrderDisplayNumber(index))}</h4>
            <span class="pill bg-secondary text-muted-foreground">${escapeHtml(line.fabric || "Fabric required")}</span>
          </div>
          ${onePageOrderSummaryRows(rows)}
        </div>
      `;
    })
    .join("");
  const body = `
    <div class="space-y-5">
      ${onePageOrderSummaryRows([
        ["Sales associate", fields.salesAssociate],
        ["Item", onePageOrderDisplayItem()],
        ["Quantity", fields.quantity],
      ])}
      ${orderBlocks}
    </div>
  `;
  return onePageOrderSummaryCard("Basic info", "basic", body, "Item setup and production choices.");
}

function onePageOrderSummaryFitProfileCard() {
  const rows = onePageOrderGarmentFitProfileDisplayRows();
  const body = rows.length
    ? `
      <div class="grid gap-3 lg:grid-cols-2">
        ${rows
          .map(
            (row) => `
              <div class="rounded-[8px] border border-border bg-secondary/20 p-3">
                <div class="mb-3 flex items-center justify-between gap-3">
                  <h4 class="font-semibold">${escapeHtml(row.garment.label)}</h4>
                  <span class="pill ${row.complete ? "bg-emerald-50 text-emerald-700" : "bg-secondary text-muted-foreground"}">${row.complete ? "Ready" : "Required"}</span>
                </div>
                ${onePageOrderSummaryRows([
                  ["FitProfile", row.label],
                  ["TryOn Fit", row.tryOnFit],
                  ["TryOn Size", row.tryOnSize],
                ])}
              </div>
            `,
          )
          .join("")}
      </div>
    `
    : onePageOrderSummaryRows([
        ["FitProfile", onePageOrderFitProfileSummaryText()],
        ["TryOn Fit", onePageOrderTryOnFitSummaryText()],
        ["TryOn Size", onePageOrderTryOnSizeSummaryText()],
      ]);
  return onePageOrderSummaryCard("Fit & TryOn", "fitProfile", body, "FitProfile selections for each garment.");
}

function onePageOrderSummaryFitToolsCard() {
  const garments = onePageOrderFitGarments();
  const entries = Object.entries(state.onePageOrderTrouserFitTools || {}).filter(([, value]) => value && value !== "0.00");
  const body = entries.length
    ? `
      <div class="space-y-4">
        ${garments
          .map((garment) => {
            const garmentEntries = entries.filter(([key]) => key.startsWith(`${garment.id}:`));
            if (!garmentEntries.length) return "";
            return `
              <div class="rounded-[8px] border border-border bg-secondary/20 p-3">
                <h4 class="mb-3 font-semibold">${escapeHtml(garment.label)}</h4>
                ${onePageOrderSummaryRows(
                  garmentEntries.map(([key, value]) => {
                    const [, direction, label] = key.split(":");
                    const labelPrefix = direction === "plus" ? "Add" : direction === "minus" ? "Reduce" : "Adjust";
                    return [`${labelPrefix} ${label || "FitTool"}`, value];
                  }),
                )}
              </div>
            `;
          })
          .join("")}
      </div>
    `
    : `<div class="rounded-[8px] border border-dashed border-border bg-secondary/25 p-4 text-sm text-muted-foreground">No FitTools changes selected.</div>`;
  return onePageOrderSummaryCard("FitTools", "fitTools", body, "Final measurement adjustments.");
}

function onePageOrderSummaryDesignCard() {
  ensureOnePageOrderDesigns();
  const designRows = [
    ["neckline", "Neckline / Closure"],
    ["armholeStyle", "Armhole style"],
    ["detailing", "Detailing"],
    ["sleeveStyle", "Sleeve style"],
    ["chestPocket", "Chest pocket"],
    ["sidePockets", "Side pockets"],
    ["contrastOption", "Contrast option"],
    ["contrastColor", "Contrast color"],
    ["monogramPosition", "Monogram position"],
    ["monogramColour", "Monogram colour"],
    ["monogramFont", "Monogram font"],
    ["monogramText", "Monogram text"],
  ];
  const body = `
    <div class="space-y-4">
      ${state.onePageOrderDesigns
        .map((design, index) => {
          const rows = designRows
            .filter(([key]) => !key.startsWith("monogram") || design.monogram || design.monogramEnabled)
            .map(([key, label]) => [label, design[key]]);
          return `
            <div class="space-y-3">
              <h4 class="font-semibold">${escapeHtml(onePageOrderDisplayNumber(index))}</h4>
              ${onePageOrderSummaryRows(rows)}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
  return onePageOrderSummaryCard("Design options", "design", body, "Design and monogram choices.");
}

function onePageOrderSummaryBrandingCard() {
  ensureOnePageOrderDesigns();
  const body = `
    <div class="space-y-4">
      ${state.onePageOrderDesigns
        .map((design, index) => {
          const enabled = design.branding || design.brandingEnabled;
          return `
            <div class="space-y-3">
              <h4 class="font-semibold">${escapeHtml(onePageOrderDisplayNumber(index))}</h4>
              ${onePageOrderSummaryRows([
                ["Branding", enabled ? "Enabled" : "None"],
                ["Hangtag", enabled ? design.brandingHangtag : "None"],
              ])}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
  return onePageOrderSummaryCard("Branding options", "branding", body, "Branding choices for this order.");
}

function onePageOrderDeliveryDate(index = 0) {
  const baseDay = 24 + index * 2;
  return `${String(baseDay).padStart(2, "0")}-Jul-2026`;
}

function onePageOrderCardNumber(index = 0) {
  const detailNumber = onePageOrderDetailValue(index, "shopOrderNumber");
  return detailNumber || `CM-${String(index + 1).padStart(3, "0")}`;
}

function onePageOrderDisplayNumber(index = 0) {
  return `Order ${index + 1}`;
}

function onePageOrderFitProfileChip(label) {
  return `<span class="pill max-w-full justify-start bg-sky-100 text-sky-700">${escapeHtml(label || "-")}</span>`;
}

const onePageOrderCardTabs = [
  { id: "general", label: "General" },
  { id: "production", label: "P.Price" },
  { id: "retail", label: "R.Price" },
  { id: "measurements", label: "Measurements" },
  { id: "delivery", label: "Delivery" },
  { id: "remarks", label: "Remarks" },
];

function onePageOrderCardValue(value) {
  return value === "" || value === null || value === undefined ? "-" : String(value);
}

function onePageOrderCardPrice(value) {
  return `€ ${onePageOrderNumberValue(value).toFixed(2)}`;
}

function onePageOrderRetailPriceRows() {
  return [
    { label: "fabric", render: (index) => onePageOrderPriceFor(index) ? `€ ${onePageOrderPriceFor(index).toFixed(2)}` : "€ 0.00" },
    { label: "lining", render: () => "€ 0.00" },
    { label: "make", render: (index) => (state.onePageOrderLines[index]?.make ? "€ 100.00" : "€ 0.00") },
    { label: "design options", render: (index) => {
      const design = state.onePageOrderDesigns[index] || {};
      return design.monogram || design.branding ? "€ 25.00" : "€ 0.00";
    } },
    { label: "discount", render: (index) => onePageOrderCardPrice((state.onePageOrderPayments[index] || {}).discount) },
    { label: "service charge", render: (index) => onePageOrderCardPrice((state.onePageOrderPayments[index] || {}).serviceCharge) },
  ];
}

function onePageOrderProductionPriceRows() {
  return [
    { label: "fabric", render: (index) => (state.onePageOrderLines[index]?.fabric ? "€ 72.00" : "€ 0.00") },
    { label: "lining", render: () => "€ 0.00" },
    { label: "make", render: (index) => (state.onePageOrderLines[index]?.make ? "€ 50.00" : "€ 0.00") },
    { label: "design options", render: (index) => {
      const design = state.onePageOrderDesigns[index] || {};
      return design.monogram || design.branding ? "€ 12.50" : "€ 0.00";
    } },
  ];
}

function onePageOrderProductionTotal(index) {
  const line = state.onePageOrderLines[index] || {};
  const design = state.onePageOrderDesigns[index] || {};
  return (line.fabric ? 72 : 0) + (line.make ? 50 : 0) + (design.monogram || design.branding ? 12.5 : 0);
}

function onePageOrderCardSubtotal(tabId, columns) {
  if (tabId === "production") return columns.reduce((total, column) => total + onePageOrderProductionTotal(column.index), 0);
  if (tabId === "retail") return columns.reduce((total, column) => total + onePageOrderPaymentTotal(column.index), 0);
  return null;
}

function onePageOrderDeliveryRows() {
  return [
    { label: "Expected Delivery Date", render: (index) => onePageOrderDeliveryDate(index) },
    { label: "Latest Delivery Date", render: (index) => onePageOrderDeliveryDate(index + 3) },
    { label: "Total Extra Days", render: (index) => (index === 0 ? "7" : "0") },
    { label: "Make Extra Days", render: (index) => (index === 0 ? "7" : "0") },
    { label: "Fabric & Lining Extra Days", render: () => "0" },
    { label: "Design Options Extra Days", render: () => "0" },
    { label: "Delivery Method", render: () => "atelier delivery" },
    { label: "Delivery Address", render: () => "shop address" },
    { label: "Order Number", render: (index) => onePageOrderCardNumber(index) },
  ];
}

function onePageOrderGeneralRows() {
  const fields = state.onePageOrderFields;
  const isTrouser = onePageOrderIsTrouserFlow();
  return [
    { label: "item", render: () => onePageOrderDisplayItem() },
    { label: "model", render: (index) => onePageOrderCardValue(state.onePageOrderLines[index]?.model) },
    { label: "make", render: (index) => onePageOrderCardValue(state.onePageOrderLines[index]?.make) },
    { label: isTrouser ? "fabric/wash" : "fabric", render: (index) => onePageOrderCardValue(state.onePageOrderLines[index]?.fabric) },
    { label: "lining", render: () => isTrouser ? "-" : "2050 mid grey" },
    { label: "FitProfile", render: () => onePageOrderCardValue(onePageOrderFitProfileSummaryText()) },
    { label: "TryOn Fit", render: () => onePageOrderCardValue(onePageOrderTryOnFitSummaryText()) },
    { label: "TryOn Size", render: () => onePageOrderCardValue(onePageOrderTryOnSizeSummaryText()) },
  ];
}

function onePageOrderCardRowsForTab(tabId) {
  if (tabId === "production") return onePageOrderProductionPriceRows();
  if (tabId === "retail") return onePageOrderRetailPriceRows();
  if (tabId === "delivery") return onePageOrderDeliveryRows();
  return onePageOrderGeneralRows();
}

function renderOnePageOrderSharedMeasurements() {
  const measurements = onePageOrderIsTrouserFlow() ? onePageOrderTrouserMeasurements : onePageOrderMeasurements;
  return `
    <section class="rounded-[10px] border border-border">
      <div class="grid grid-cols-[minmax(160px,1fr)_96px_96px] gap-3 border-b border-border bg-secondary/35 px-4 py-3 text-sm font-semibold text-muted-foreground">
        <span>measurement</span>
        <span class="text-right">TryOn</span>
        <span class="text-right">Final</span>
      </div>
      ${measurements
        .map(
          ([label, tryOn, finished]) => `
            <div class="grid grid-cols-[minmax(160px,1fr)_96px_96px] gap-3 border-b border-border px-4 py-3 text-sm last:border-b-0">
              <span class="font-medium text-muted-foreground">${escapeHtml(label)}</span>
              <span class="text-right text-muted-foreground">${escapeHtml(tryOn)}</span>
              <span class="text-right font-semibold">${escapeHtml(finished)}</span>
            </div>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderOnePageOrderRemarks(activeIndex) {
  const value = state.onePageOrderRemarks[String(activeIndex)] || "";
  return `
    <section class="rounded-[10px] border border-border p-4">
      <div class="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 class="font-semibold">${escapeHtml(onePageOrderDisplayNumber(activeIndex))} remarks</h3>
          <p class="mt-1 text-sm text-muted-foreground">Save notes for later review.</p>
        </div>
      </div>
      <textarea id="onePageOrderRemarksInput" class="min-h-[220px] w-full resize-y rounded-[10px] border border-input bg-card px-4 py-3 text-sm leading-6 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="Add production notes, customer context, or follow-up here.">${escapeHtml(value)}</textarea>
      <div class="mt-4 flex justify-end">
        <button id="saveOnePageOrderRemarksBtn" class="btn btn-primary" type="button">Save remarks</button>
      </div>
    </section>
  `;
}

function renderOnePageOrderCardTable(rows, columns, activeIndex) {
  const gridColumns = `180px repeat(${columns.length}, minmax(190px, 1fr))`;
  return `
    <div class="overflow-x-auto rounded-[10px] border border-border">
      <div class="grid" style="grid-template-columns: ${gridColumns}; min-width: ${180 + columns.length * 190}px;">
        <div class="sticky left-0 z-30 border-b border-border bg-secondary/50 px-4 py-3 text-sm font-semibold text-muted-foreground">information</div>
        ${columns
          .map((column) => {
            const active = column.index === activeIndex;
            return `
              <button class="border-b border-l border-border px-4 py-3 text-left transition ${active ? "bg-primary/10 ring-1 ring-inset ring-primary/25" : "bg-secondary/35 hover:bg-secondary/65"}" data-one-page-order-card-column="${column.index}" type="button">
                <div class="font-semibold">${escapeHtml(column.title)}</div>
                <div class="mt-1 truncate text-xs text-muted-foreground">${escapeHtml(column.subtitle)}</div>
              </button>
            `;
          })
          .join("")}
        ${rows
          .map(
            (row) => `
              <div class="sticky left-0 z-20 border-b border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">${escapeHtml(row.label)}</div>
              ${columns
                .map((column) => {
                  const active = column.index === activeIndex;
                  return `
                    <button class="min-h-[48px] border-b border-l border-border px-4 py-3 text-left text-sm transition ${active ? "bg-primary/[0.055]" : "bg-card hover:bg-secondary/35"} ${row.emphasis ? "font-semibold text-primary" : "text-foreground"}" data-one-page-order-card-column="${column.index}" type="button">
                      ${row.render(column.index)}
                    </button>
                  `;
                })
                .join("")}
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderOnePageOrderCardModal() {
  ensureOnePageOrderLines();
  ensureOnePageOrderPaymentDetails();
  const requestedIndex = Number.isInteger(state.activeOnePageOrderCardIndex) ? state.activeOnePageOrderCardIndex : 0;
  const activeIndex = Math.max(0, Math.min(requestedIndex, state.onePageOrderLines.length - 1));
  state.activeOnePageOrderCardIndex = activeIndex;
  const activeTab = onePageOrderCardTabs.some((tab) => tab.id === state.activeOnePageOrderCardTab) ? state.activeOnePageOrderCardTab : "general";
  const columns = state.onePageOrderLines.map((line, index) => ({
    index,
    title: onePageOrderDisplayNumber(index),
    subtitle: line.fabric || "fabric required",
  }));
  const rows = onePageOrderCardRowsForTab(activeTab);
  const subtotal = onePageOrderCardSubtotal(activeTab, columns);
  return `
    <div class="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
      <div class="min-w-0">
        <h2 class="text-base font-semibold">Order details</h2>
        <p class="mt-1 truncate text-sm text-muted-foreground">${escapeHtml(columns.length)} ${columns.length === 1 ? "order" : "orders"} · ${escapeHtml(onePageOrderDisplayItem())}</p>
      </div>
      <button id="closeOnePageOrderCardModalBtn" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Close" aria-label="Close">
        ${icon("x", "h-4 w-4")}
      </button>
    </div>
    <div class="space-y-4 overflow-y-auto px-5 py-5" style="max-height:min(74vh,760px);">
      <div class="inline-flex max-w-full flex-wrap rounded-lg bg-secondary p-1">
        ${onePageOrderCardTabs
          .map(
            (tab) => `
              <button class="customer-tab ${activeTab === tab.id ? "active" : ""}" data-one-page-order-card-tab="${tab.id}" type="button">${escapeHtml(tab.label)}</button>
            `,
          )
          .join("")}
      </div>
      ${activeTab === "measurements" ? renderOnePageOrderSharedMeasurements() : activeTab === "remarks" ? renderOnePageOrderRemarks(activeIndex) : renderOnePageOrderCardTable(rows, columns, activeIndex)}
      ${subtotal === null ? "" : `
        <div class="flex justify-end border-t border-border pt-4">
          <div class="flex min-w-[260px] items-center justify-between gap-6 rounded-[8px] bg-secondary/45 px-4 py-3">
            <span class="text-sm font-semibold text-muted-foreground">Sub total</span>
            <span class="text-base font-semibold">€ ${subtotal.toFixed(2)}</span>
          </div>
        </div>
      `}
    </div>
  `;
}

function setOnePageOrderCardModal(open, index = null) {
  state.activeOnePageOrderCardIndex = open ? index : null;
  if (open && !onePageOrderCardTabs.some((tab) => tab.id === state.activeOnePageOrderCardTab)) state.activeOnePageOrderCardTab = "general";
  const modal = el("onePageOrderCardModal");
  if (open) modal.innerHTML = renderOnePageOrderCardModal();
  modal?.classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function renderOnePageOrderRunningInfo() {
  ensureOnePageOrderLines();
  syncOnePagePrimaryFieldsFromFirstLine();
  const fields = state.onePageOrderFields;
  const isTrouser = onePageOrderIsTrouserFlow();
  const collapsed = Boolean(state.onePageOrderRunningInfoCollapsed);
  const isMultiPage = onePageOrderUsesMultiPageFlow();
  const activeStepIndex = isMultiPage ? multiPageOrderActiveStepIndex() : 0;
  const fitProfileReadyForRunningInfo = !isMultiPage || activeStepIndex >= 2 || multiPageOrderStepComplete("fitProfile");
  const measurementsReadyForRunningInfo =
    !isMultiPage ||
    activeStepIndex >= 2 ||
    onePageOrderFitProfileComplete();
  const orderCards = state.onePageOrderLines
    .map(
      (line, index) => `
        <button class="group flex w-full items-center gap-3 rounded-[10px] bg-secondary/55 px-3 py-3 text-left transition hover:-translate-y-0.5 hover:bg-secondary hover:shadow-panel" data-one-page-order-card="${index}" type="button">
          <span class="min-w-0 flex-1">
            <span class="block font-semibold">${escapeHtml(onePageOrderDisplayNumber(index))}</span>
            <span class="mt-1 block truncate text-sm text-muted-foreground">${escapeHtml(line.fabric || "Fabric required")}</span>
          </span>
          <span class="pill shrink-0 bg-emerald-50 text-emerald-700">${onePageOrderDeliveryDate(index)}</span>
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition group-hover:bg-card group-hover:text-foreground">
            ${icon("chevron-right", "h-4 w-4")}
          </span>
        </button>
      `,
    )
    .join("");
  const measurements = (isTrouser ? onePageOrderTrouserMeasurements : onePageOrderMeasurements)
    .map(
      ([label, tryOn, finished]) => `
        <div class="grid grid-cols-[1fr_56px_56px] gap-2 text-sm">
          <span>${escapeHtml(label)}</span>
          <span class="text-right text-muted-foreground">${escapeHtml(tryOn)}</span>
          <span class="text-right font-medium">${escapeHtml(finished)}</span>
        </div>
      `,
    )
    .join("");
  if (collapsed) {
    return `
      <aside class="sticky top-6 flex w-14 self-start rounded-[10px] border border-border bg-card shadow-panel">
        <button class="group relative flex h-14 w-14 items-center justify-center rounded-[10px] hover:bg-secondary" data-one-page-running-info-toggle type="button" title="Running info" aria-label="Running info">
          ${icon("chevrons-left", "h-4 w-4 text-muted-foreground")}
          <span class="pointer-events-none absolute right-[calc(100%+8px)] top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-foreground shadow-panel group-hover:block">Running info</span>
        </button>
      </aside>
    `;
  }
  return `
    <aside class="sticky top-6 self-start rounded-[10px] border border-border bg-card shadow-panel">
      <div class="flex items-center justify-between border-b border-border bg-secondary/55 px-4 py-3">
        <h2 class="font-semibold">Running info</h2>
        <button class="flex h-8 w-8 items-center justify-center rounded-md hover:bg-card" data-one-page-running-info-toggle type="button" title="Collapse running info" aria-label="Collapse running info">
          ${icon("chevrons-right", "h-4 w-4 text-muted-foreground")}
        </button>
      </div>
      <div class="space-y-5 p-4">
        ${
          fitProfileReadyForRunningInfo
            ? `
          <div>
            <h3 class="mb-3 text-sm font-semibold">FitProfile</h3>
            ${renderOnePageOrderRunningFitProfileContent(fields, isMultiPage)}
          </div>
        `
            : ""
        }
        ${
          measurementsReadyForRunningInfo
            ? `
          <div class="${fitProfileReadyForRunningInfo ? "border-t border-border pt-4" : ""}">
            <div class="mb-3 grid grid-cols-[1fr_56px_56px] gap-2 text-xs font-semibold text-muted-foreground">
              <span class="text-sm text-foreground">Final measurements</span>
              <span class="text-right">TryOn</span>
              <span class="text-right">Final</span>
            </div>
            <div class="space-y-1">${measurements}</div>
          </div>
        `
            : ""
        }
        <div class="${fitProfileReadyForRunningInfo || measurementsReadyForRunningInfo ? "border-t border-border pt-4" : ""}">
          <h3 class="mb-3 text-sm font-semibold">Orders</h3>
          <div class="space-y-2">${orderCards}</div>
        </div>
      </div>
    </aside>
  `;
}

function onePageOrderQuantityDecisionModal() {
  return "";
}

function multiPageOrderActiveStepIndex() {
  const index = multiPageOrderSteps.findIndex((step) => step.id === state.onePageOrderStep);
  return index >= 0 ? index : 0;
}

function multiPageOrderStepComplete(stepId) {
  if (stepId === "basic") return onePageOrderSectionComplete("primary");
  if (stepId === "fitProfile") return onePageOrderSectionComplete("fitProfile");
  if (stepId === "fitTools") return onePageOrderSectionComplete("fitTools");
  if (stepId === "design") return onePageOrderSectionComplete("design");
  if (stepId === "branding") {
    ensureOnePageOrderDesigns();
    return state.onePageOrderDesigns.every((design) => {
      const brandingOn = design.branding || design.brandingEnabled;
      const brandingReady = !brandingOn || Boolean(design.brandingHangtag);
      return brandingReady;
    });
  }
  if (stepId === "summary") return Boolean(state.onePageOrderFields.reviewed);
  if (stepId === "checkout") return onePageOrderSectionComplete("orderDetails");
  return true;
}

function multiPageOrderCanEnterStep(stepId) {
  if (state.onePageOrderStepJumpUnlocked) return true;
  const targetIndex = multiPageOrderSteps.findIndex((step) => step.id === stepId);
  if (targetIndex <= 0) return true;
  return multiPageOrderSteps.slice(0, targetIndex).every((step) => multiPageOrderStepComplete(step.id));
}

function renderMultiPageOrderRail() {
  const activeIndex = multiPageOrderActiveStepIndex();
  return `
    <nav class="overflow-x-auto border-b border-border bg-secondary/35 px-6 py-3" aria-label="Order steps">
      <div class="flex min-w-max gap-2">
        ${multiPageOrderSteps
          .map((step, index) => {
            const active = index === activeIndex;
            const complete = multiPageOrderStepComplete(step.id);
            const available = multiPageOrderCanEnterStep(step.id);
            return `
              <button class="flex h-[54px] min-w-[178px] items-center justify-between gap-3 rounded-[10px] border px-3 text-left transition ${
                active
                  ? "border-primary bg-card shadow-panel"
                  : complete
                    ? "border-emerald-200 bg-emerald-50/70 text-emerald-800"
                    : available
                      ? "border-border bg-card hover:bg-secondary"
                      : "cursor-not-allowed border-border bg-card opacity-55"
              }" data-one-page-order-flow-step="${step.id}" type="button" ${available ? "" : "disabled"}>
                <span class="min-w-0">
                  <span class="block text-xs font-medium text-muted-foreground">Step ${index + 1}</span>
                  <span class="block truncate text-sm font-semibold">${escapeHtml(step.label)}</span>
                </span>
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${complete ? "bg-emerald-600 text-white" : active ? "border border-primary text-primary" : "border border-border text-muted-foreground"}">
                  ${complete ? icon("check", "h-3.5 w-3.5") : `<span class="text-xs font-semibold">${index + 1}</span>`}
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </nav>
  `;
}

function navigateMultiPageOrderStep(targetStepId) {
  if (!multiPageOrderSteps.some((step) => step.id === targetStepId)) return;
  if (!multiPageOrderCanEnterStep(targetStepId)) {
    showToast("Complete the current step first.");
    return;
  }
  state.onePageOrderStep = targetStepId;
  renderOnePageOrderPage();
  requestAnimationFrame(() => el("onePageOrderWorkspace")?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function renderMultiPageOrderFooter() {
  const activeIndex = multiPageOrderActiveStepIndex();
  const activeStep = multiPageOrderSteps[activeIndex];
  const previousStep = multiPageOrderSteps[activeIndex - 1];
  const nextStep = multiPageOrderSteps[activeIndex + 1];
  const complete = multiPageOrderStepComplete(activeStep.id);
  const canJumpSteps = state.onePageOrderStepJumpUnlocked;
  return `
    <div class="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
      <button class="btn btn-soft gap-2 ${previousStep ? "" : "opacity-60"}" data-one-page-order-flow-nav="${previousStep?.id || ""}" type="button" ${previousStep ? "" : "disabled"}>
        ${icon("chevron-left", "h-4 w-4")}
        <span>Back</span>
      </button>
      ${
        nextStep
          ? `<button class="btn btn-primary gap-2 ${complete || canJumpSteps ? "" : "opacity-60"}" data-one-page-order-flow-nav="${nextStep.id}" type="button" ${complete || canJumpSteps ? "" : 'disabled title="Complete this step first."'}>
              <span>Next</span>
              ${icon("chevron-right", "h-4 w-4")}
            </button>`
          : `<button class="btn btn-primary gap-2 ${complete ? "" : "opacity-60"}" data-one-page-order-action="process" type="button" ${complete ? "" : 'disabled title="Complete checkout first."'}>
              <span>Process order</span>
              ${icon("check", "h-4 w-4")}
            </button>`
      }
    </div>
  `;
}

function renderMultiPageOrderStepShell(title, description, body) {
  const activeIndex = multiPageOrderActiveStepIndex();
  const activeStep = multiPageOrderSteps[activeIndex];
  return `
    <section class="overflow-visible rounded-[14px] border border-border bg-card shadow-panel">
      <div class="border-b border-border p-6">
        <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <div class="text-sm font-medium text-muted-foreground">Step ${activeIndex + 1} of ${multiPageOrderSteps.length}</div>
            <h2 class="mt-1 text-xl font-semibold">${escapeHtml(title || activeStep.label)}</h2>
            ${description ? `<p class="mt-1 text-sm text-muted-foreground">${escapeHtml(description)}</p>` : ""}
          </div>
          <span class="pill ${multiPageOrderStepComplete(activeStep.id) ? "bg-emerald-50 text-emerald-700" : "bg-secondary text-muted-foreground"}">
            ${multiPageOrderStepComplete(activeStep.id) ? "Ready" : "Required"}
          </span>
        </div>
      </div>
      <div class="p-6">
        ${body}
        ${renderMultiPageOrderFooter()}
      </div>
    </section>
  `;
}

function onePageOrderDesignOnlySection() {
  ensureOnePageOrderLines();
  ensureOnePageOrderDesigns();
  const designRows = onePageOrderIsTrouserFlow()
    ? [
        ["trouserDetailing", "Detailing {Style}"],
        ["trouserWaistband", "Waistband"],
        ["trouserExtendedWaistband", "Extended waistband"],
        ["trouserBuckleLoop", "Buckle loop"],
        ["trouserClosure", "Closure"],
        ["trouserClosingButton", "Closing button"],
        ["trouserPocketLining", "Pocket lining"],
        ["trouserFrontStyle", "Front style"],
        ["trouserPleatDirection", "Pleat direction"],
        ["trouserPleatDepth", "Pleat depth"],
        ["trouserPressedCrease", "Pressed crease"],
        ["trouserPintuck", "Pintuck"],
        ["trouserSidePockets", "Side pockets"],
        ["trouserCargoPockets", "Cargo pockets"],
        ["trouserBackPockets", "Back pockets"],
        ["trouserHemFinish", "Hem finish"],
        ["trouserBackPatch", "Back patch"],
      ]
    : [
        ["neckline", "Neckline / Closure"],
        ["armholeStyle", "Armhole style"],
        ["detailing", "Detailing collar, hem & cuff"],
        ["sleeveStyle", "Sleeve style"],
        ["chestPocket", "Chest pocket"],
        ["sidePockets", "Side pockets"],
        ["contrastOption", "Contrast option"],
        ["contrastColor", "Contrast color"],
      ];
  const monogramRows = [
    ["monogramPosition", "Monogram position(s)", "select"],
    ["monogramColour", "Monogram colour", "select"],
    ["monogramFont", "Monogram font", "select"],
    ["monogramText", "Monogram text", "input"],
  ];
  const quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1);
  const showCopyControls = quantity > 1;
  const anyMonogramEnabled = state.onePageOrderDesigns.some((design) => design.monogram || design.monogramEnabled);
  const designCopyKeys = [
    ...designRows.map(([key]) => key),
    "monogramEnabled",
    ...(anyMonogramEnabled ? monogramRows.map(([key]) => key) : []),
  ];
  const allCopyRowsActive = showCopyControls && designCopyKeys.every((key) => state.onePageOrderDesignCopyRows.has(key));
  const someCopyRowsActive = showCopyControls && designCopyKeys.some((key) => state.onePageOrderDesignCopyRows.has(key));
  const gridColumns = `240px repeat(${quantity}, minmax(240px, 1fr))${showCopyControls ? " 112px" : ""}`;
  const orderSubtitle = (index) => {
    const line = state.onePageOrderLines[index] || {};
    return `${line.model || state.onePageOrderFields.model || onePageOrderDisplayItem()} · ${line.fabric || state.onePageOrderFields.fabric || "-"}`;
  };
  const copyCell = (key) =>
    showCopyControls
      ? `<div class="sticky right-0 z-20 flex items-center justify-center border-b border-l border-border bg-card p-2">
          <input class="check" data-one-page-order-design-copy-row="${escapeAttr(key)}" type="checkbox" ${state.onePageOrderDesignCopyRows.has(key) ? "checked" : ""} title="Copy this row to all orders" aria-label="Copy this row to all orders" />
        </div>`
      : "";
  const groupLabel = (label) => `
    <div class="sticky left-0 z-20 border-b border-border bg-secondary/35 px-4 py-4">
      <div class="text-base font-semibold text-foreground">${escapeHtml(label)}</div>
    </div>
  `;
  const groupToggleButton = (index, key, enabled, label) => `
    <button class="flex h-10 w-full items-center justify-between gap-3 rounded-[8px] border border-border bg-card px-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-secondary" data-one-page-order-design-extra="${escapeAttr(key)}" data-one-page-order-design-index="${index}" type="button" aria-pressed="${enabled ? "true" : "false"}">
      <span class="flex min-w-0 items-center gap-2">
        ${icon(enabled ? "check-square" : "square", `h-4 w-4 shrink-0 ${enabled ? "text-emerald-600" : "text-muted-foreground"}`)}
        <span class="truncate">${enabled ? `${escapeHtml(label)} enabled` : `Add ${escapeHtml(label.toLowerCase())}`}</span>
      </span>
      <span class="text-xs font-semibold ${enabled ? "text-emerald-600" : "text-muted-foreground"}">${enabled ? "On" : "Off"}</span>
    </button>
  `;
  const monogramControl = (design, index, key, type) => {
    const enabled = design.monogram || design.monogramEnabled;
    if (!enabled) return `<div class="text-sm text-muted-foreground">-</div>`;
    if (type === "input") {
      return `<input class="field" data-one-page-order-design-index="${index}" data-one-page-order-design-input="${escapeAttr(key)}" value="${escapeHtml(onePageOrderDesignValue(index, key))}" />`;
    }
    return onePageOrderSelectButton(`design:${index}:${key}`, onePageOrderDesignValue(index, key));
  };
  return `
    <div class="order-scroll-shell">
      <div class="overflow-x-auto rounded-[10px] border border-border">
        <div class="grid min-w-[900px]" style="grid-template-columns: ${gridColumns};">
          <div class="sticky left-0 z-30 border-b border-border bg-secondary/35 px-4 py-3">
            <div class="font-semibold">Design options</div>
          </div>
          ${state.onePageOrderDesigns
            .map(
              (_, index) => `
                <div class="border-b border-l border-border bg-secondary/35 px-4 py-3">
                  <div class="font-semibold">Order ${index + 1}</div>
                  <div class="mt-1 text-xs text-muted-foreground">${escapeHtml(orderSubtitle(index))}</div>
                </div>
              `,
            )
            .join("")}
          ${showCopyControls ? `
            <div class="sticky right-0 z-30 flex flex-col items-center justify-center gap-2 border-b border-l border-border bg-secondary/35 px-2 py-3">
              <div class="text-center text-xs font-semibold leading-tight text-muted-foreground">Copy to all orders</div>
              <button class="flex h-5 w-5 items-center justify-center text-primary" data-one-page-order-design-copy-all="${allCopyRowsActive ? "off" : "on"}" data-copy-partial="${someCopyRowsActive && !allCopyRowsActive ? "true" : "false"}" type="button" title="Toggle copy for all rows" aria-label="Toggle copy for all rows">
                ${icon(allCopyRowsActive ? "check-square" : someCopyRowsActive ? "minus-square" : "square", "h-5 w-5")}
              </button>
            </div>
          ` : ""}
          ${designRows
            .map(
              ([key, label]) => `
                <div class="sticky left-0 z-20 flex items-center gap-2 border-b border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
                  <span>${escapeHtml(label)}</span>
                  <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-60 transition hover:opacity-100" data-one-page-order-design-help="${escapeAttr(label)}" type="button" title="Measurement help" aria-label="${escapeAttr(label)} help">
                    ${icon("info", "h-3.5 w-3.5")}
                  </button>
                </div>
                ${state.onePageOrderDesigns
                  .map(
                    (_, index) => `
                      <div class="border-b border-l border-border p-3">
                        ${onePageOrderSelectButton(`design:${index}:${key}`, onePageOrderDesignValue(index, key))}
                      </div>
                    `,
                  )
                  .join("")}
                ${copyCell(key)}
              `,
            )
            .join("")}
          ${groupLabel("Monogram")}
          ${state.onePageOrderDesigns
            .map(
              (design, index) => `
                <div class="border-b border-l border-border bg-secondary/35 p-3">
                  ${groupToggleButton(index, "monogram", design.monogram || design.monogramEnabled, "Monogram")}
                </div>
              `,
            )
            .join("")}
          ${copyCell("monogramEnabled")}
          ${
            anyMonogramEnabled
              ? monogramRows
                  .map(
                    ([key, label, type]) => `
                      <div class="sticky left-0 z-20 flex items-center gap-2 border-b border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
                        <span>${escapeHtml(label)}</span>
                        <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-60 transition hover:opacity-100" data-one-page-order-design-help="${escapeAttr(label)}" type="button" title="Measurement help" aria-label="${escapeAttr(label)} help">
                          ${icon("info", "h-3.5 w-3.5")}
                        </button>
                      </div>
                      ${state.onePageOrderDesigns
                        .map(
                          (design, index) => `
                            <div class="border-b border-l border-border p-3">
                              ${monogramControl(design, index, key, type)}
                            </div>
                          `,
                        )
                        .join("")}
                      ${copyCell(key)}
                    `,
                  )
                  .join("")
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

function onePageOrderBrandingSection() {
  ensureOnePageOrderDesigns();
  const quantity = Math.max(1, Number(state.onePageOrderFields.quantity) || 1);
  const columns = state.onePageOrderDesigns.map((_, index) => ({
    index,
    title: `Order ${index + 1}`,
    subtitle: state.onePageOrderLines[index]?.fabric || "Fabric required",
  }));
  const rows = [
    {
      label: "Branding",
      render: (index) => {
        const design = state.onePageOrderDesigns[index] || onePageOrderDesignDefaults();
        const enabled = design.branding || design.brandingEnabled;
        return `
          <button class="flex h-10 w-full items-center justify-between gap-3 rounded-[8px] border border-border bg-card px-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-secondary" data-one-page-order-design-extra="branding" data-one-page-order-design-index="${index}" type="button" aria-pressed="${enabled ? "true" : "false"}">
            <span class="flex min-w-0 items-center gap-2">
              ${icon(enabled ? "check-square" : "square", `h-4 w-4 shrink-0 ${enabled ? "text-emerald-600" : "text-muted-foreground"}`)}
              <span class="truncate">${enabled ? "Branding enabled" : "Add branding"}</span>
            </span>
            <span class="text-xs font-semibold ${enabled ? "text-emerald-600" : "text-muted-foreground"}">${enabled ? "On" : "Off"}</span>
          </button>
        `;
      },
    },
    {
      label: "Hangtag",
      render: (index) => {
        const design = state.onePageOrderDesigns[index] || onePageOrderDesignDefaults();
        const enabled = design.branding || design.brandingEnabled;
        if (!enabled) return `<div class="text-sm text-muted-foreground">-</div>`;
        return onePageOrderSelectButton(`design:${index}:brandingHangtag`, onePageOrderDesignValue(index, "brandingHangtag"));
      },
    },
  ];
  return `
    <div class="space-y-4">
      ${onePageOrderTable(columns, rows, { label: "Branding options", minWidth: Math.max(760, 240 + quantity * 260) })}
    </div>
  `;
}

function renderMultiPageOrderSummary() {
  ensureOnePageOrderLines();
  ensureOnePageOrderDesigns();
  ensureOnePageOrderPaymentDetails();
  return `
    <div class="space-y-4">
      ${onePageOrderSummaryBasicCard()}
      ${onePageOrderSummaryFitProfileCard()}
      ${onePageOrderSummaryFitToolsCard()}
      ${onePageOrderSummaryDesignCard()}
      ${onePageOrderSummaryBrandingCard()}
      ${onePageOrderReviewActionsSection()}
    </div>
  `;
}

function renderMultiPageOrderCheckout() {
  return `
    <div class="space-y-6">
      <section>
        <div class="mb-3">
          <h3 class="font-semibold">Payment information</h3>
        </div>
        ${onePageOrderPaymentSection()}
      </section>
      <section>
        <div class="mb-3">
          <h3 class="font-semibold">Order details</h3>
          <p class="mt-1 text-sm text-muted-foreground">Add the shop ordering number and select the occasion before processing.</p>
        </div>
        ${onePageOrderDetailsSection()}
      </section>
    </div>
  `;
}

function renderMultiPageOrderStepBody() {
  const step = multiPageOrderSteps[multiPageOrderActiveStepIndex()];
  if (step.id === "basic") {
    return renderMultiPageOrderStepShell("Basic info", "Set up the item and core production details.", twoPieceOrderBasicInfoSection());
  }
  if (step.id === "fitProfile") {
    return renderMultiPageOrderStepShell("FitProfile", "Create a new FitProfile or select an existing one for this order.", onePageOrderFitProfileSection());
  }
  if (step.id === "fitTools") {
    return renderMultiPageOrderStepShell("FitTools", "Update FitTools to create the final measurements for this order.", onePageOrderFitToolsSection());
  }
  if (step.id === "design") {
    return renderMultiPageOrderStepShell("Design options", "Choose the product design options for this order.", onePageOrderDesignOnlySection());
  }
  if (step.id === "branding") {
    return renderMultiPageOrderStepShell("Branding options", "Choose the branding details for this order.", onePageOrderBrandingSection());
  }
  if (step.id === "summary") {
    return renderMultiPageOrderStepShell("Summary", "Review the order setup before checkout.", renderMultiPageOrderSummary());
  }
  return renderMultiPageOrderStepShell("Checkout", "Confirm payment information, shop ordering number and occasion.", renderMultiPageOrderCheckout());
}

function renderMultiPageOrderPage() {
  ensureOnePageOrderLines();
  syncOnePagePrimaryFieldsFromFirstLine();
  const item = onePageOrderItemOptions.find((option) => option.id === state.onePageOrderItem) || onePageOrderItemOptions[1];
  const customer = currentCustomer();
  const runningInfoColumns = state.onePageOrderRunningInfoCollapsed
    ? "minmax(0,1fr) 56px"
    : "minmax(0,1fr) 400px";
  if (!multiPageOrderSteps.some((step) => step.id === state.onePageOrderStep)) state.onePageOrderStep = "basic";
  if (!multiPageOrderCanEnterStep(state.onePageOrderStep)) {
    const firstIncomplete = multiPageOrderSteps.find((step) => !multiPageOrderStepComplete(step.id));
    state.onePageOrderStep = firstIncomplete?.id || "basic";
  }
  const header = `
    <section class="overflow-visible rounded-[14px] border border-border bg-card shadow-panel">
      <div class="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
        <div class="flex min-w-0 items-start gap-3">
          <button id="backToOrdersFromOnePageOrderBtn" class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Back" aria-label="Back">
            ${icon("arrow-left", "h-4 w-4")}
          </button>
          <div class="min-w-0">
            <h1 class="text-xl font-semibold">CustomMade order - ${escapeHtml(fullName(customer))}</h1>
            <p class="mt-1 text-sm text-muted-foreground">${escapeHtml(item.label)} · ${escapeHtml(onePageOrderDisplayItem())}</p>
          </div>
        </div>
        ${renderOnePageOrderActions()}
      </div>
      ${renderMultiPageOrderRail()}
    </section>
  `;
  el("onePageOrderWorkspace").innerHTML = `
    <div class="space-y-6">
      ${header}
      <div class="grid gap-6" style="grid-template-columns:${runningInfoColumns}; align-items:start;">
        ${renderMultiPageOrderStepBody()}
        ${renderOnePageOrderRunningInfo()}
      </div>
    </div>
  `;
  el("onePageOrderWorkspace").insertAdjacentHTML("beforeend", `
    ${onePageOrderQuantityDecisionModal()}
  `);
  translatePage(el("onePageOrderPage"));
  renderOnePageOrderSelectMenu();
  document.querySelectorAll("[data-copy-partial]").forEach((checkbox) => {
    checkbox.indeterminate = checkbox.dataset.copyPartial === "true";
  });
}

function onePageOrderUsesMultiPageFlow() {
  return state.onePageOrderItem === "two-piece";
}

function renderOnePageOrderPage() {
  if (onePageOrderUsesMultiPageFlow()) {
    renderMultiPageOrderPage();
    return;
  }
  ensureOnePageOrderLines();
  syncOnePagePrimaryFieldsFromFirstLine();
  const item = onePageOrderItemOptions.find((option) => option.id === state.onePageOrderItem) || onePageOrderItemOptions[1];
  const customer = currentCustomer();
  const isTrouser = onePageOrderIsTrouserFlow();
  const showOrderWorkspace = !isTrouser || onePageOrderSectionComplete("primary");
  const runningInfoColumns = state.onePageOrderRunningInfoCollapsed
    ? "minmax(0,1fr) 56px"
    : "minmax(0,1fr) 400px";
  const sections = onePageOrderSections
    .filter((section) => section.id !== "primary")
    .map((section) => {
      const body =
        section.id === "fitProfile"
          ? onePageOrderFitProfileSection()
          : section.id === "fitTools"
            ? onePageOrderFitToolsSection()
            : section.id === "design"
              ? onePageOrderDesignSection()
              : section.id === "payment"
                ? onePageOrderPaymentSection()
                : section.id === "orderDetails"
                  ? onePageOrderDetailsSection()
                  : onePageOrderPlaceholderSection(section.label);
      return onePageOrderSection(section, body);
    })
    .join("");
  const lockedWorkspace = `
    <section class="rounded-[14px] border border-dashed border-primary/20 bg-card p-6 shadow-panel">
      <h2 class="text-base font-semibold">Complete primary information</h2>
      <p class="mt-1 text-sm text-muted-foreground">Choose the item, then complete model, make and Fabric/wash to load FitProfile, FitTools and DesignOptions.</p>
    </section>
  `;
  const primarySection = `
    <section class="overflow-visible rounded-[14px] border border-border bg-card shadow-panel">
      <div class="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
        <div class="flex min-w-0 items-start gap-3">
          <button id="backToOrdersFromOnePageOrderBtn" class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Back" aria-label="Back">
            ${icon("arrow-left", "h-4 w-4")}
          </button>
          <div class="min-w-0">
            <h1 class="text-xl font-semibold">CustomMade order - ${escapeHtml(fullName(customer))}</h1>
            <p class="mt-1 text-sm text-muted-foreground">${escapeHtml(item.label)}</p>
          </div>
        </div>
        ${renderOnePageOrderActions()}
      </div>
      <div class="border-t border-border p-6">
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 class="text-base font-semibold">Primary information</h2>
            <p class="mt-1 text-sm text-muted-foreground">Complete the basic order setup before moving into FitProfile and design details.</p>
          </div>
          <span class="text-xs font-medium text-muted-foreground">${onePageOrderSectionComplete("primary") ? "Ready" : "Required"}</span>
        </div>
        ${onePageOrderPrimarySection()}
      </div>
    </section>
  `;
  const orderDetailsSection = `
    <section class="rounded-[14px] border border-border bg-card p-4 shadow-panel">
      <div class="mb-4 flex items-center justify-between gap-3 px-1">
        <div>
          <h2 class="text-base font-semibold">Order details</h2>
          <p class="mt-1 text-sm text-muted-foreground">FitProfile, FitTools, DesignOptions, and payment details.</p>
        </div>
        <span class="text-xs font-medium text-muted-foreground">After primary information</span>
      </div>
      <div class="space-y-3">${sections}</div>
      ${onePageOrderReviewActionsSection()}
    </section>
  `;

  el("onePageOrderWorkspace").innerHTML = showOrderWorkspace
    ? `
      <div class="space-y-6">
        ${primarySection}
        <div class="grid gap-6" style="grid-template-columns:${runningInfoColumns}; align-items:start;">
          ${orderDetailsSection}
          ${renderOnePageOrderRunningInfo()}
        </div>
      </div>
    `
    : `
      <div class="space-y-6">
        ${primarySection}
        ${lockedWorkspace}
      </div>
    `;
  el("onePageOrderWorkspace").insertAdjacentHTML("beforeend", `
    ${onePageOrderQuantityDecisionModal()}
  `);
  translatePage(el("onePageOrderPage"));
  renderOnePageOrderSelectMenu();
  document.querySelectorAll("[data-copy-partial]").forEach((checkbox) => {
    checkbox.indeterminate = checkbox.dataset.copyPartial === "true";
  });
}

function setCreateOrderFlowItem(itemId) {
  const item = createOrderFlowAllItems().find((option) => option.id === itemId && !option.disabled);
  if (!item) return;
  state.createOrderFlowSelectedItemId = item.id;
  if (item.legacyReadyMade) {
    state.createOrderFlowCategory = item.categoryId || "informal";
    renderCreateOrderFlowModal();
    return;
  }
  resetOnePageOrderForItem(item.flowItem || item.id);
  if (item.fieldKey) updateOnePageOrderField(item.fieldKey, item.fieldValue || "");
  state.createOrderFlowCategory = item.categoryId || item.flowItem || item.id;
  renderCreateOrderFlowModal();
}

function createOrderFlowItemsForCategory(categoryId) {
  const items = createOrderFlowItems[categoryId] || [];
  if (items.length) return items;
  const category = createOrderFlowCategories.find((item) => item.id === categoryId);
  return [{ id: `${categoryId}-soon`, label: category?.label || "Coming soon", disabled: true }];
}

function createOrderFlowItemsForActiveCategory() {
  return createOrderFlowItemsForCategory(state.createOrderFlowCategory);
}

function createOrderFlowAllItems() {
  return createOrderFlowCategories.flatMap((category) =>
    createOrderFlowItemsForCategory(category.id).map((item) => ({
      ...item,
      categoryId: category.id,
      categoryLabel: category.label,
    })),
  );
}

function createOrderFlowItemSelected(item) {
  if (item.disabled) return false;
  if (item.legacyReadyMade) return state.createOrderFlowSelectedItemId === item.id;
  const flowItem = item.flowItem || item.id;
  if (state.onePageOrderItem !== flowItem) return false;
  if (!item.fieldKey) return true;
  return state.onePageOrderFields[item.fieldKey] === item.fieldValue;
}

function selectedCreateOrderFlowItem() {
  const explicitSelected = createOrderFlowAllItems().find((item) => item.id === state.createOrderFlowSelectedItemId && !item.disabled);
  return explicitSelected || createOrderFlowAllItems().find((item) => createOrderFlowItemSelected(item)) || null;
}

function createOrderFlowVisibleItems() {
  const query = state.createOrderFlowSearch.trim().toLowerCase();
  const items = query ? createOrderFlowAllItems() : createOrderFlowItemsForActiveCategory().map((item) => ({
    ...item,
    categoryId: state.createOrderFlowCategory,
    categoryLabel: createOrderFlowCategories.find((category) => category.id === state.createOrderFlowCategory)?.label || "",
  }));
  if (!query) return items;
  return items.filter((item) => `${item.label} ${item.note || ""} ${item.categoryLabel || ""}`.toLowerCase().includes(query));
}

function renderCreateOrderFlowModal() {
  const categoriesWrap = el("createOrderFlowCategories");
  const itemsWrap = el("createOrderFlowItems");
  if (!categoriesWrap || !itemsWrap) return;
  categoriesWrap.innerHTML = createOrderFlowCategories
    .map(
      (category) => `
        <button class="shop-settings-section ${category.id === state.createOrderFlowCategory ? "active" : ""}" data-create-order-flow-category="${category.id}" type="button">
          <span>${escapeHtml(category.label)}</span>
          ${icon("chevron-right", "h-4 w-4 text-muted-foreground")}
        </button>
      `,
    )
    .join("");

  const visibleItems = createOrderFlowVisibleItems();
  const selectedItem = selectedCreateOrderFlowItem();
  itemsWrap.innerHTML = visibleItems.length
    ? `
      <div class="grid gap-3">
        ${visibleItems
          .map((item) => {
            const selected = createOrderFlowItemSelected(item);
            return `
              <button class="flex min-h-[72px] w-full items-center justify-between gap-4 rounded-[10px] border p-4 text-left transition ${
                selected
                  ? "border-primary bg-primary/10 ring-1 ring-primary/25"
                  : item.disabled
                    ? "cursor-not-allowed border-border bg-secondary/35 opacity-60"
                    : "border-border bg-card hover:bg-secondary"
              }" data-create-order-flow-item="${escapeAttr(item.id)}" type="button" ${item.disabled ? "disabled" : ""}>
                <span class="min-w-0">
                  <span class="block font-medium">${escapeHtml(item.label)}</span>
                  ${item.note ? `<span class="mt-1 block text-sm text-muted-foreground">${escapeHtml(item.note)}</span>` : ""}
                </span>
                <span class="shrink-0">
                  ${item.disabled ? `<span class="pill bg-secondary text-muted-foreground">Coming soon</span>` : item.tag ? `<span class="pill bg-amber-50 text-amber-700">${escapeHtml(item.tag)}</span>` : icon(selected ? "check" : "chevron-right", `h-4 w-4 ${selected ? "text-primary" : "text-muted-foreground"}`)}
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    `
    : `<div class="rounded-[10px] border border-dashed border-border bg-secondary/30 p-5 text-sm text-muted-foreground">No items match this search.</div>`;

  if (el("createOrderFlowSearchInput")) el("createOrderFlowSearchInput").value = state.createOrderFlowSearch;
  const continueButton = el("beginCreateOrderFlowBtn");
  if (continueButton) {
    continueButton.disabled = !selectedItem;
    continueButton.classList.toggle("opacity-60", !selectedItem);
    continueButton.title = selectedItem ? "" : "Select an available item first.";
  }
}

function startOnePageOrderFlow() {
  const selectedItem = selectedCreateOrderFlowItem();
  if (selectedItem?.legacyReadyMade) {
    setCreateOrderFlowModal(false);
    closeModals();
    setPage("legacyReadyMadeOrder");
    return;
  }
  setCreateOrderFlowModal(false);
  state.onePageOrderStep = "basic";
  renderOnePageOrderPage();
  setPage("onePageOrder");
}

function openOnePageOrderCheatPage() {
  closeModals();
  setCreateOrderFlowItem("knitwear");
  state.onePageOrderStep = "basic";
  renderOnePageOrderPage();
  setPage("onePageOrder");
  showToast("One-page order opened.");
}

const demoSlowBaseDelays = {
  1: 6200,
  2: 4600,
  3: 3200,
  4: 2200,
  5: 1450,
  6: 900,
  7: 420,
  8: 0,
};

const demoSlowFocusPages = new Set(["overview", "orders", "fabricInventory", "labelInventory"]);

function demoSlowDelayForPage(page) {
  const speed = Math.min(8, Math.max(1, Number(state.demoSlowSpeed) || 3));
  if (speed >= 8) return 0;
  const baseDelay = demoSlowBaseDelays[speed] || demoSlowBaseDelays[3];
  if (demoSlowFocusPages.has(page)) return baseDelay + 260;
  if (page === "detail" || page === "orderDetail") return baseDelay + 120;
  return Math.max(220, baseDelay - 220);
}

function demoDataDelay(page = state.currentPage, kind = "navigation") {
  const delay = demoSlowDelayForPage(page);
  if (!delay) return 0;
  return kind === "filter" ? Math.max(180, Math.round(delay * 0.34)) : delay;
}

const demoUiLagDelays = {
  1: 520,
  2: 420,
  3: 300,
  4: 240,
  5: 180,
  6: 120,
  7: 70,
  8: 0,
};

function demoUiLagDelay(kind = "page") {
  if (!state.demoSlowMode || !state.demoSlowBooted) return 0;
  const speed = Math.min(8, Math.max(1, Number(state.demoSlowSpeed) || 3));
  const baseDelay = demoUiLagDelays[speed] || demoUiLagDelays[3];
  if (!baseDelay) return 0;
  return kind === "modal" ? Math.max(40, Math.round(baseDelay * 0.72)) : baseDelay;
}

function syncDemoUiLagTokens() {
  const modalDelay = demoUiLagDelay("modal");
  document.documentElement.style.setProperty("--demo-ui-modal-delay", `${modalDelay}ms`);
}

function cancelDemoUiLag() {
  if (state.demoUiLagTimer) window.clearTimeout(state.demoUiLagTimer);
  state.demoUiLagTimer = null;
  state.demoUiLagTarget = null;
  document.body.classList.remove("demo-ui-pending");
}

function demoTableSkeletonRows(rowCount, columnCount) {
  const widths = [42, 68, 82, 58, 74, 46, 88, 62, 54, 78, 36, 64, 52];
  return Array.from({ length: rowCount }, (_, rowIndex) => `
    <tr class="h-12">
      ${Array.from({ length: columnCount }, (_, columnIndex) => `
        <td class="demo-table-skeleton-cell">
          <span class="demo-table-skeleton-bar" style="--skeleton-width:${widths[(rowIndex + columnIndex) % widths.length]}%"></span>
        </td>
      `).join("")}
    </tr>
  `).join("");
}

function isDemoDataLoading(page) {
  return state.demoDataLoading?.page === page;
}

function demoDataLoadingColumnCount(page) {
  if (page === "orders") {
    const draftMode = isReadyMadeDraftsOrdersView();
    const columns = draftMode ? readyMadeDraftColumnDefinitions : getVisibleOrdersColumns();
    return columns.length + 4;
  }
  if (page === "overview") return state.companyInfoVisible ? 7 : 5;
  if (page === "fabricInventory") return state.fabricFutureFeaturesUnlocked ? 13 : 11;
  if (page === "labelInventory") return 4;
  if (page === "invoices") return 8;
  return 6;
}

function renderDemoDataSkeleton(page) {
  const rowsByPage = {
    overview: 6,
    orders: 10,
    fabricInventory: 9,
    labelInventory: 8,
    invoices: 10,
  };
  const targetByPage = {
    overview: "customerRows",
    orders: "ordersRows",
    fabricInventory: "fabricRows",
    labelInventory: "labelRows",
    invoices: "invoiceRows",
  };
  const target = el(targetByPage[page]);
  if (!target) return;
  target.innerHTML = demoTableSkeletonRows(rowsByPage[page] || 5, demoDataLoadingColumnCount(page));
  if (page === "orders") el("ordersEmptyState")?.classList.add("hidden");
}

function cancelDemoDataLoading() {
  if (state.demoDataLoadingTimer) window.clearTimeout(state.demoDataLoadingTimer);
  state.demoDataLoadingTimer = null;
  state.demoDataLoading = null;
}

function triggerDemoDataLoading(page = state.currentPage, kind = "navigation") {
  if (!state.demoSlowMode || !state.demoSlowBooted) return false;
  const delay = demoDataDelay(page, kind);
  if (!delay) return false;
  if (!["overview", "orders", "fabricInventory", "labelInventory", "invoices"].includes(page)) return false;
  cancelDemoDataLoading();
  state.demoDataLoading = { page };
  renderDemoDataSkeleton(page);
  state.demoDataLoadingTimer = window.setTimeout(() => {
    state.demoDataLoading = null;
    state.demoDataLoadingTimer = null;
    if (page === "overview") renderRows();
    if (page === "orders") renderOrdersPage();
    if (page === "fabricInventory") renderFabricInventory();
    if (page === "labelInventory") renderLabelInventory();
    if (page === "invoices") renderInvoicesPage();
  }, delay);
  return true;
}

function scheduleDemoFilterLoading(page) {
  window.setTimeout(() => triggerDemoDataLoading(page, "filter"), 0);
}

function demoFilterPageForTarget(target) {
  if (!target) return "";
  if (target.closest("#applyOrdersFiltersBtn, #clearOrdersFiltersBtn, #resetOrdersFiltersBtn, #ordersFilterChips, #ordersStatusMenu, #ordersSelectMenu, #ordersCascadeItemMenu, #ordersStructuredSearchBtn")) return "orders";
  if (target.closest("#ordersSearch, #ordersSearchOrderNumber, #ordersSearchFirstName, #ordersSearchLastName")) return "orders";
  if (target.closest("#customerSearch, #resetCustomerFiltersBtn, #filterChips, #applyAdvancedSearchBtn, #clearAdvancedSearchBtn")) return "overview";
  if (target.closest("#fabricSearch, #clearFabricSearchBtn, #fabricFilterChips, #resetFabricTableFiltersBtn, #applyFabricFiltersBtn, #resetFabricFiltersBtn, #fabricSelectMenu")) return "fabricInventory";
  if (target.closest("#labelSearch, #clearLabelSearchBtn")) return "labelInventory";
  if (target.closest("#resetInvoiceFiltersBtn, #invoiceStatusMenu, #invoiceDateFrom, #invoiceDateTo, input[data-date-display-for='invoiceDateFrom'], input[data-date-display-for='invoiceDateTo']")) return "invoices";
  return "";
}

function handleDemoFilterInteraction(event) {
  if (event.type === "click" && event.target.closest("#ordersSearch, #ordersSearchOrderNumber, #ordersSearchFirstName, #ordersSearchLastName, #customerSearch, #fabricSearch, #labelSearch, #invoiceNumberSearch")) return;
  const page = demoFilterPageForTarget(event.target);
  if (!page || state.currentPage !== page) return;
  scheduleDemoFilterLoading(page);
}

function demoSkeletonMarkup(page) {
  const tableRows = Array.from({ length: demoSlowFocusPages.has(page) ? 7 : 4 }, (_, index) => `
    <div class="demo-skeleton-row">
      <span class="demo-skeleton h-5 w-14"></span>
      <span class="demo-skeleton h-5 w-full"></span>
      <span class="demo-skeleton h-5 w-[82%]"></span>
      <span class="demo-skeleton h-5 w-[64%]"></span>
    </div>
  `).join("");
  const titleWidth = page === "fabricInventory" || page === "labelInventory" ? "w-56" : page === "orders" ? "w-36" : "w-44";
  const showTable = demoSlowFocusPages.has(page);
  return `
    <div class="demo-loader-shell" aria-hidden="true">
      <div class="demo-loader-card">
        <div class="demo-loader-inner">
          <div class="flex items-center justify-between gap-4">
            <div class="space-y-3">
              <div class="demo-skeleton h-7 ${titleWidth}"></div>
              <div class="demo-skeleton h-4 w-64 max-w-full"></div>
            </div>
            <div class="demo-skeleton h-10 w-32 rounded-[10px]"></div>
          </div>
          <div class="mt-7 grid gap-3 sm:grid-cols-3">
            <div class="demo-skeleton h-11 rounded-[10px]"></div>
            <div class="demo-skeleton h-11 rounded-[10px]"></div>
            <div class="demo-skeleton h-11 rounded-[10px]"></div>
          </div>
          ${showTable ? `<div class="demo-skeleton-table">${tableRows}</div>` : `
            <div class="demo-skeleton-grid mt-7">
              <div class="demo-skeleton-panel space-y-4">
                <div class="demo-skeleton h-5 w-40"></div>
                <div class="demo-skeleton h-4 w-full"></div>
                <div class="demo-skeleton h-4 w-4/5"></div>
                <div class="demo-skeleton h-4 w-2/3"></div>
              </div>
              <div class="demo-skeleton-panel space-y-4">
                <div class="demo-skeleton h-5 w-36"></div>
                <div class="demo-skeleton h-4 w-11/12"></div>
                <div class="demo-skeleton h-4 w-3/4"></div>
                <div class="demo-skeleton h-4 w-1/2"></div>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

function ensureDemoPageLoader() {
  let loader = el("demoPageLoader");
  if (loader) return loader;
  loader = document.createElement("div");
  loader.id = "demoPageLoader";
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");
  document.body.appendChild(loader);
  return loader;
}

function positionDemoPageLoader(loader) {
  const main = document.querySelector("#appShell > main") || el("appShell");
  const rect = main?.getBoundingClientRect();
  loader.style.setProperty("--demo-loader-top", `${Math.max(0, rect?.top || 0)}px`);
  loader.style.setProperty("--demo-loader-left", `${Math.max(0, rect?.left || 0)}px`);
  loader.style.setProperty("--demo-loader-right", `${Math.max(0, window.innerWidth - (rect?.right || window.innerWidth))}px`);
  loader.style.setProperty("--demo-loader-bottom", `${Math.max(0, window.innerHeight - (rect?.bottom || window.innerHeight))}px`);
}

function setDemoPageLoader(open, page = state.currentPage) {
  const loader = ensureDemoPageLoader();
  if (open) {
    positionDemoPageLoader(loader);
    loader.innerHTML = demoSkeletonMarkup(page);
    loader.classList.add("open");
    return;
  }
  loader.classList.remove("open");
  loader.innerHTML = "";
}

function applyDemoSlowMode() {
  document.documentElement.dataset.demoSlow = "true";
  localStorage.setItem("relocate-demo-slow-speed", String(state.demoSlowSpeed));
  const speedSlider = el("demoSlowSpeedSlider");
  const speedValue = el("demoSlowSpeedValue");
  if (speedSlider) speedSlider.value = String(state.demoSlowSpeed);
  if (speedValue) setText(speedValue, `${state.demoSlowSpeed} / 8`);
  syncDemoUiLagTokens();
}

function maybeDelayPageChange(page, options = {}) {
  if (options.force || state.demoSlowBypass || !state.demoSlowMode || !state.demoSlowBooted || state.currentPage === page) return false;
  if (demoSlowFocusPages.has(page) && demoDataDelay(page, "navigation")) {
    cancelDemoUiLag();
    state.demoSlowBypass = true;
    setPage(page, { ...options, force: true });
    state.demoSlowBypass = false;
    triggerDemoDataLoading(page, "navigation");
    return true;
  }
  const delay = demoUiLagDelay("page");
  if (!delay) return false;
  cancelDemoUiLag();
  state.demoUiLagTarget = page;
  document.body.classList.add("demo-ui-pending");
  state.demoUiLagTimer = window.setTimeout(() => {
    state.demoUiLagTimer = null;
    state.demoUiLagTarget = null;
    document.body.classList.remove("demo-ui-pending");
    state.demoSlowBypass = true;
    setPage(page, { ...options, force: true });
    state.demoSlowBypass = false;
  }, delay);
  return true;
}

function setPage(page, options = {}) {
  if (!options.force && state.currentPage === "shopSettings" && page !== "shopSettings" && state.shopSettingsDirty) {
    state.pendingShopSettingsNavigation = () => setPage(page, { force: true });
    setShopSettingsUnsavedModal(true);
    return;
  }
  if (maybeDelayPageChange(page, options)) return;
  const previousPage = state.currentPage;
  if (page !== "orderDetail" && orderDetailSidePanelOpen()) setOrderDetailSidePanel(false);
  if (page !== "detail" && customerDetailSidePanelOpen()) setCustomerDetailSidePanel(false);
  if (page !== "suitePlaceholder" && state.suiteModeUnlocked && state.activeSuiteApp === "gocreate") {
    state.lastGoCreatePage = page;
    localStorage.setItem("relocate-last-gocreate-page", page);
  }
  state.currentPage = page;
  document.body.classList.toggle("legacy-system-active", ["legacyReadyMadeOrder", "legacyRPrice"].includes(page));
  document.body.classList.toggle("dashboard-ambient-active", page === "home");
  if (page === "home" && previousPage !== "home") state.dashboardOverlayHidden = false;
  el("suitePlaceholderPage")?.classList.toggle("hidden", page !== "suitePlaceholder");
  el("homeDashboardPage").classList.toggle("hidden", page !== "home");
  el("overviewPage").classList.toggle("hidden", page !== "overview");
  el("customerDetailPage").classList.toggle("hidden", page !== "detail");
  el("createFitProfilePage").classList.toggle("hidden", page !== "createFitProfile");
  el("onePageOrderPage")?.classList.toggle("hidden", page !== "onePageOrder");
  el("ordersPage").classList.toggle("hidden", page !== "orders");
  el("orderDetailPage").classList.toggle("hidden", page !== "orderDetail");
  el("legacyReadyMadeOrderPage")?.classList.toggle("hidden", page !== "legacyReadyMadeOrder");
  el("legacyRPricePage")?.classList.toggle("hidden", page !== "legacyRPrice");
  el("fabricInventoryPage").classList.toggle("hidden", page !== "fabricInventory");
  el("labelInventoryPage")?.classList.toggle("hidden", page !== "labelInventory");
  el("shopSettingsPage").classList.toggle("hidden", page !== "shopSettings");
  el("deliveryCalendarPage").classList.toggle("hidden", page !== "deliveryCalendar");
  el("invoicesPage").classList.toggle("hidden", page !== "invoices");
  el("downloadsPage").classList.toggle("hidden", page !== "downloads");
  renderPrimaryNavigation();
  if (page === "home") renderDashboard();
  if (page === "createFitProfile") renderCreateFitProfileWorkspace();
  if (page === "onePageOrder") renderOnePageOrderPage();
  if (page === "orders") renderOrdersPage();
  if (page === "orderDetail") renderOrderDetailTab();
  if (page === "fabricInventory") renderFabricInventory();
  if (page === "labelInventory") renderLabelInventory();
  if (page === "shopSettings") renderShopSettingsPage();
  if (page === "deliveryCalendar") renderDeliveryCalendar();
  if (page === "invoices") renderInvoicesPage();
  if (page === "downloads") renderDownloadsPage();
  if (page === "suitePlaceholder") renderSuitePlaceholder();
  applySuiteMode();
  state.demoSlowBooted = true;
}

function orderNavType(type) {
  if (!type) return "CustomMade";
  if (type === "Draft" || type === "ReadyMade Drafts") return "ReadyMade drafts";
  return type;
}

function activeSidebarOrder() {
  if (state.currentPage !== "orderDetail") return null;
  return findStandaloneOrder(state.selectedOrderId) || null;
}

function renderPrimaryNavigation() {
  const activeNav = ["fabricInventory", "labelInventory"].includes(state.currentPage) ? "stock" : ["orders", "orderDetail", "onePageOrder", "legacyReadyMadeOrder"].includes(state.currentPage) ? "orders" : state.currentPage === "home" ? "home" : state.currentPage === "shopSettings" ? "shopSettings" : state.currentPage === "deliveryCalendar" ? "delivery" : state.currentPage === "invoices" ? "invoices" : state.currentPage === "legacyRPrice" ? "other" : state.currentPage === "downloads" ? "downloads" : "customers";
  const nestedBreadcrumbMode = state.sidebarNestMode === "nested";
  const showCustomerContext = ["detail", "createFitProfile"].includes(state.currentPage);
  const showFitProfileContext = showCustomerContext && (state.currentPage === "createFitProfile" || state.detailTab === "fitprofiles");
  const showFitProfileTask = state.currentPage === "createFitProfile";
  const showOrdersContext = ["orderDetail", "onePageOrder", "legacyReadyMadeOrder"].includes(state.currentPage);
  const showDeliveryContext = nestedBreadcrumbMode ? false : state.currentPage === "deliveryCalendar";
  const showDownloadsContext = nestedBreadcrumbMode ? false : state.currentPage === "downloads";
  const showSavedToolContext = (toolId) => !isFuturePrototypeVersion() || state.favoriteTools.has(toolId);
  const activeCustomer = customers.find((customer) => customer.id === (state.createFitProfileCustomerId || state.selectedCustomerId)) || customers[0];
  const fitProfileTaskLabel = state.copyingFitProfileId ? "Copying FitProfile" : state.editingFitProfileId ? "Editing FitProfile" : "Creating FitProfile";
  const sidebarOrder = activeSidebarOrder();
  const sidebarOrderType = orderNavType(sidebarOrder?.type || state.ordersType);
  document.querySelectorAll("[data-primary-nav]").forEach((item) => {
    item.classList.toggle("active", item.dataset.primaryNav === activeNav);
  });
  document.querySelectorAll("[data-popout='downloads']").forEach((item) => {
    item.classList.toggle("active", activeNav === "downloads");
  });
  document.querySelectorAll("[data-ready-made-drafts-count]").forEach((badge) => {
    const count = readyMadeDraftOrders.length;
    setText(badge, String(count));
    badge.setAttribute("aria-label", `${count} ReadyMade draft orders`);
  });
  el("customersNavChildren")?.classList.toggle("hidden", !showCustomerContext);
  el("customerOverviewNavChild")?.classList.toggle("active", state.currentPage === "overview");
  if (showCustomerContext && el("activeCustomerNavChild")) {
    setText("activeCustomerNavChild", fullName(activeCustomer));
    el("activeCustomerNavChild").dataset.customerId = activeCustomer.id;
    el("activeCustomerNavChild").classList.toggle("active", state.currentPage === "detail" && state.detailTab !== "fitprofiles");
  }
  if (el("customerFitProfilesNavChild")) {
    el("customerFitProfilesNavChild").classList.toggle("hidden", !showFitProfileContext);
    el("customerFitProfilesNavChild").classList.toggle("active", state.currentPage === "detail" && state.detailTab === "fitprofiles");
    el("customerFitProfilesNavChild").dataset.customerId = activeCustomer.id;
  }
  if (el("activeFitProfileTaskNavChild")) {
    el("activeFitProfileTaskNavChild").classList.toggle("hidden", !showFitProfileTask);
    el("activeFitProfileTaskNavChild").classList.toggle("active", showFitProfileTask);
    el("activeFitProfileTaskNavChild").dataset.customerId = activeCustomer.id;
    setText("activeFitProfileTaskNavChild", fitProfileTaskLabel);
  }
  el("ordersNavChildren")?.classList.toggle("hidden", !showOrdersContext);
  document.querySelectorAll("#ordersNavChildren [data-orders-page]").forEach((button) => {
    button.classList.toggle("active", state.currentPage === "orders" && orderNavType(button.dataset.ordersPage) === orderNavType(state.ordersType));
    button.classList.toggle("font-medium", state.currentPage === "orderDetail" && orderNavType(button.dataset.ordersPage) === sidebarOrderType);
  });
  document.querySelectorAll("[data-order-nav-detail]").forEach((button) => {
    const matchesOrder = Boolean(sidebarOrder && orderNavType(button.dataset.orderType) === sidebarOrderType);
    button.classList.toggle("hidden", !matchesOrder);
    button.classList.toggle("active", matchesOrder);
    if (matchesOrder) {
      setText(button.id, sidebarOrder.order || sidebarOrder.orderNumber || sidebarOrder.orderName);
      button.dataset.orderId = sidebarOrder.id;
      button.title = `${sidebarOrder.customer || sidebarOrder.orderName} · ${sidebarOrder.order || sidebarOrder.orderNumber || ""}`;
    } else {
      button.removeAttribute("data-order-id");
      button.removeAttribute("title");
    }
  });
  el("deliveryNavChildren")?.classList.toggle("hidden", !showDeliveryContext || !showSavedToolContext("delivery"));
  document.querySelectorAll("#deliveryNavChildren [data-delivery-page]").forEach((button) => {
    button.classList.toggle("active", state.currentPage === "deliveryCalendar" && button.dataset.deliveryPage === "calendar");
  });
  el("downloadsNavChildren")?.classList.toggle("hidden", !showDownloadsContext || !showSavedToolContext("downloads"));
  document.querySelectorAll("#downloadsNavChildren [data-downloads-page]").forEach((button) => {
    button.classList.toggle("active", state.currentPage === "downloads" && button.dataset.downloadsPage === "order-form");
  });
  renderMobilePageContext();
  renderToolFavorites();
  requestAnimationFrame(updateSidebarOverflow);
}

function mobilePageContext() {
  if (state.currentPage === "suitePlaceholder") {
    const app = suiteApps[state.activeSuiteApp] || suiteApps.goschedule;
    return { title: app.label, subtitle: app.eyebrow };
  }
  if (state.currentPage === "fabricInventory") return { title: "Suit Fabric Inventory", subtitle: "Stock Inventory" };
  if (state.currentPage === "labelInventory") return { title: "Label inventory", subtitle: "Stock Inventory" };
  if (state.currentPage === "deliveryCalendar") return { title: "Delivery Calendar", subtitle: "Delivery Dates" };
  if (state.currentPage === "invoices") return { title: "Invoices", subtitle: "Admin" };
  if (state.currentPage === "downloads") return { title: state.orderFormView === "builder" ? "Order Form" : "Downloads", subtitle: "Tools" };
  if (state.currentPage === "shopSettings") return { title: "Shop Settings", subtitle: "Other" };
  if (state.currentPage === "legacyRPrice") return { title: "Fabric R.Price", subtitle: "Other" };
  if (state.currentPage === "orders") return { title: state.ordersType || "Orders", subtitle: "Orders" };
  if (state.currentPage === "orderDetail") return { title: activeSidebarOrder()?.order || "Order Detail", subtitle: "Orders" };
  if (state.currentPage === "onePageOrder") return { title: "Create Order", subtitle: "Orders" };
  if (state.currentPage === "legacyReadyMadeOrder") return { title: "ReadyMade Order", subtitle: "Orders" };
  if (state.currentPage === "detail") {
    const customer = customers.find((item) => item.id === state.selectedCustomerId) || customers[0];
    const tabLabels = { info: "Customer Detail", fitprofiles: "FitProfiles", orders: "Orders", account: "Account Information" };
    return { title: tabLabels[state.detailTab] || "Customer Detail", subtitle: fullName(customer) };
  }
  if (state.currentPage === "createFitProfile") return { title: "Create FitProfile", subtitle: "Customers" };
  if (state.currentPage === "overview") return { title: "Customers", subtitle: "Admin" };
  return { title: "Dashboard", subtitle: "Admin" };
}

function renderMobilePageContext() {
  const context = mobilePageContext();
  setText("mobilePageTitle", context.title);
  setText("mobilePageSubtitle", context.subtitle);
}

function updateSidebarOverflow() {
  const sidebar = document.querySelector(".sidebar");
  const nav = document.querySelector(".sidebar-main-nav");
  const overflowBox = el("sidebarOverflowItems");
  if (!sidebar || !nav || !overflowBox || document.documentElement.dataset.nav === "top") return;

  const overflowOrder = ["report-issue", "inspiration", "help-center", "alerts", "downloads", "delivery", "invoices", "stock"];
  const hiddenItems = new Set();
  const setOverflowState = () => {
    document.querySelectorAll("[data-sidebar-overflow-item]").forEach((item) => {
      item.classList.toggle("sidebar-overflow-hidden", hiddenItems.has(item.dataset.sidebarOverflowItem));
    });
    overflowBox.querySelectorAll("[data-sidebar-overflow-link]").forEach((item) => {
      item.classList.toggle("hidden", !hiddenItems.has(item.dataset.sidebarOverflowLink));
    });
    el("deliveryNavChildren")?.classList.toggle("sidebar-overflow-hidden", hiddenItems.has("delivery"));
    el("downloadsNavChildren")?.classList.toggle("sidebar-overflow-hidden", hiddenItems.has("downloads"));
    overflowBox.classList.toggle("hidden", hiddenItems.size === 0);
    overflowBox.querySelector("[data-sidebar-overflow-divider]")?.classList.toggle("hidden", hiddenItems.size === 0);
  };

  setOverflowState();
  const hasOverflow = () => nav.scrollHeight > nav.clientHeight + 1;
  for (const id of overflowOrder) {
    if (!hasOverflow()) break;
    hiddenItems.add(id);
    setOverflowState();
  }
  if (hiddenItems.has(state.activeNavPopout)) closeNavPopouts();
}

function detailOrders() {
  const query = el("detailOrderSearch").value.trim().toLowerCase();
  const customer = customers.find((item) => item.id === state.selectedCustomerId);
  return orders.map((order) => ({
    ...order,
    customerId: state.selectedCustomerId || order.customerId,
    customer: customer ? fullName(customer) : order.customer,
  })).filter((order) => {
    const customerMatch = !state.selectedCustomerId || order.customerId === state.selectedCustomerId;
    const queryMatch = !query || [order.id, order.customer, order.status, order.item, order.fabric, order.type].join(" ").toLowerCase().includes(query);
    const filterMatch = ["item", "status", "type"].every((key) => {
      const values = state.detailFilters[key];
      return !values.size || values.has(order[key]);
    });
    return customerMatch && queryMatch && filterMatch;
  });
}

function paginateDetailRows(rows, pageKey, pageSizeKey) {
  const totalPages = Math.max(1, Math.ceil(rows.length / state[pageSizeKey]));
  if (state[pageKey] > totalPages) state[pageKey] = totalPages;
  if (state[pageKey] < 1) state[pageKey] = 1;
  const start = (state[pageKey] - 1) * state[pageSizeKey];
  return {
    totalPages,
    start,
    visibleRows: rows.slice(start, start + state[pageSizeKey]),
  };
}

function detailPagerPageSizeOpenKey(prefix) {
  return prefix === "detail-orders" ? "detailOrdersPageSizeOpen" : "fitProfilesPageSizeOpen";
}

function renderDetailPager(summaryId, paginationId, pageKey, pageSizeKey, totalRows, totalPages, label, prefix) {
  const openKey = detailPagerPageSizeOpenKey(prefix);
  el(summaryId).innerHTML = `
    <div class="flex items-center gap-2">
      <span>Viewing</span>
      <div class="relative">
        <button class="btn h-9 rounded-lg border border-border bg-card px-3 text-foreground" data-detail-page-size-trigger="${prefix}" type="button">
          <span>${state[pageSizeKey]}</span>
          <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
        <div class="${state[openKey] ? "" : "hidden"} absolute bottom-full left-0 z-50 mb-2 min-w-[84px] rounded-lg border border-border bg-card p-1 text-sm text-foreground shadow-lg" data-detail-page-size-menu="${prefix}">
          ${[5, 10, 25].map((size) => `<button class="w-full rounded-md px-3 py-2 text-left hover:bg-secondary ${state[pageSizeKey] === size ? "bg-secondary font-medium" : ""}" type="button" data-detail-page-size="${size}" data-detail-page-size-prefix="${prefix}">${size}</button>`).join("")}
        </div>
      </div>
      <span>out of ${totalRows} ${label}</span>
    </div>
  `;
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const active = state[pageKey] === page;
    return `<button class="page-number ${active ? "bg-primary text-primary-foreground shadow-sm" : ""}" data-${prefix}-page="${page}">${page}</button>`;
  }).join("");
  el(paginationId).innerHTML = `
    <button class="page-link" data-${prefix}-page-action="previous" ${state[pageKey] === 1 ? "disabled" : ""}>
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
      Previous
    </button>
    ${pageButtons}
    <button class="page-link" data-${prefix}-page-action="next" ${state[pageKey] === totalPages ? "disabled" : ""}>
      Next
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
    </button>
  `;
}

function handleDetailPageSizeMenu(event, pageKey, pageSizeKey, openKey, renderFn) {
  const trigger = event.target.closest("[data-detail-page-size-trigger]");
  if (trigger) {
    event.stopPropagation();
    state[openKey] = !state[openKey];
    renderFn();
    return;
  }
  const option = event.target.closest("[data-detail-page-size]");
  if (!option) return;
  event.stopPropagation();
  state[pageSizeKey] = Number(option.dataset.detailPageSize);
  state[pageKey] = 1;
  state[openKey] = false;
  renderFn();
}

function detailLegendMarkup(order) {
  if (!order.legend) return `<span class="text-muted-foreground">-</span>`;
  const legend =
    typeof order.legend === "string"
      ? {
          key: order.legend.toLowerCase(),
          label: order.legend === "DU" ? "Duplicate" : order.legend,
          color: "bg-sky-100 text-sky-700",
          icon: "copy",
        }
      : order.legend;
  return orderLegendMarkup(legend);
}

function detailFitProfileMarkup(order) {
  const profile = fitProfiles.find((item) => item.id === order.fitProfileId) || fitProfiles[0];
  if (!profile) return `<span class="text-muted-foreground">-</span>`;
  return `
    <button class="fit-profile-open pill max-w-full justify-start bg-sky-100 text-sky-700" data-fit-profile-id="${profile.id}" type="button">
      <span class="min-w-0 truncate">${escapeHtml(profile.label)}</span>
    </button>
  `;
}

function renderDetailOrdersBulkActions() {
  const shelf = el("detailOrdersBulkActionShelf");
  if (!shelf) return;
  const selectedCount = state.selectedDetailOrders.size;
  const hasSelection = selectedCount > 0;
  shelf.classList.toggle("hidden", !hasSelection);
  setText(el("detailOrdersSelectedCount"), `${selectedCount} order${selectedCount === 1 ? "" : "s"}`);

  const label = el("detailOrdersBulkStatusLabel");
  if (label) {
    label.textContent = state.ordersBulkStatus || "Update order status";
    label.classList.toggle("text-muted-foreground", !state.ordersBulkStatus);
    label.classList.toggle("text-foreground", Boolean(state.ordersBulkStatus));
  }

  const applyButton = el("detailOrdersBulkApplyBtn");
  if (applyButton) {
    const disabled = !hasSelection || !state.ordersBulkStatus;
    applyButton.disabled = disabled;
    applyButton.classList.toggle("opacity-60", disabled);
    applyButton.classList.toggle("cursor-not-allowed", disabled);
  }

  renderOrdersBulkStatusMenu();
}

function renderDetailChips() {
  const chips = [];
  Object.entries(state.detailFilters).forEach(([key, values]) => {
    values.forEach((value) => chips.push({ key, value }));
  });
  setText("detailResultText", chips.length || el("detailOrderSearch").value.trim() ? "Showing results containing" : "Showing all result");
  el("detailFilterChips").innerHTML = chips
    .map((chip) => `<button class="filter-chip pill bg-sky-100 text-sky-700" data-detail-filter="${chip.key}" data-value="${chip.value}">${chip.value}<span class="ml-1 text-base leading-none">x</span></button>`)
    .join("");
  translatePage(el("detailFilterChips"));
}

function detailFilterCount() {
  return Object.values(state.detailFilters).reduce((sum, values) => sum + values.size, 0);
}

function renderDetailFilterMenu() {
  const count = detailFilterCount();
  el("detailFilterCount").classList.toggle("hidden", count === 0);
  setText("detailFilterCount", String(count));

  const categoryQuery = state.detailFilterCategoryQuery.toLowerCase();
  const categories = detailFilterConfig.filter((filter) => filter.label.toLowerCase().includes(categoryQuery));
  const activeFilter = detailFilterConfig.find((filter) => filter.key === state.activeDetailFilterCategory) || detailFilterConfig[0];
  const optionQuery = state.detailFilterOptionQuery.toLowerCase();
  const options = activeFilter.options.filter((option) => option.label.toLowerCase().includes(optionQuery));

  el("detailFilterCategorySearch").value = state.detailFilterCategoryQuery;
  el("detailFilterOptionSearch").value = state.detailFilterOptionQuery;
  setText("detailFilterSubmenuTitle", activeFilter.label);

  el("detailFilterCategories").innerHTML = categories
    .map((filter) => {
      const selectedCount = state.detailFilters[filter.key].size;
      return `
        <button class="filter-category-row ${filter.key === activeFilter.key ? "active" : ""}" data-detail-filter-category="${filter.key}">
          <span>${filter.label}</span>
          <span class="flex items-center gap-2">
            ${selectedCount ? `<span class="rounded-full bg-primary px-1.5 py-0.5 text-[11px] leading-none text-primary-foreground">${selectedCount}</span>` : ""}
            <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
          </span>
        </button>
      `;
    })
    .join("");

  el("detailFilterOptions").innerHTML = options.length
    ? options
        .map((option) => {
          const checked = state.detailFilters[activeFilter.key].has(option.value);
          return `
            <button class="filter-option-row" data-detail-filter-option="${option.value}">
              <span class="flex min-w-0 items-center gap-2">
                ${option.tone ? `<span class="h-2 w-2 shrink-0 rounded-full ${option.tone}"></span>` : ""}
                <span class="truncate">${option.label}</span>
              </span>
              <span class="filter-check ${checked ? "checked" : ""}">✓</span>
            </button>
          `;
        })
        .join("")
    : `<div class="px-3 py-8 text-center text-sm text-muted-foreground">No filter options found.</div>`;

  translatePage(el("detailOrdersPanel"));
}

function applyDetailInfoVisibility() {
  ["customerDetailMetrics"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) section.classList.toggle("hidden", !state.orderDetailInfoVisible);
  });
  el("orderDetailMetrics")?.classList.add("hidden");
  if (state.orderDetailInfoVisible) state.orderDetailCollapsedSections.clear();
  const orderHeaderStatus = el("orderDetailHeaderStatus");
  if (orderHeaderStatus) orderHeaderStatus.classList.toggle("hidden", !state.selectedOrderId);
  applyOrderDetailCardLayout();
}

function applyOrderDetailCardLayout() {
  const page = el("orderDetailPage");
  if (!page) return;
  page.classList.add("order-detail-connected");
}

function updateOrderDetailStickyOffsets() {
  const page = el("orderDetailPage");
  const summary = el("orderDetailSummaryCard");
  const tabs = el("orderDetailTabsWrap");
  if (!page || !summary || !tabs || !orderDetailSidePanelOpen()) return;
  page.style.setProperty("--order-detail-summary-sticky-height", `${Math.ceil(summary.getBoundingClientRect().height)}px`);
  page.style.setProperty("--order-detail-tabs-sticky-height", `${Math.ceil(tabs.getBoundingClientRect().height)}px`);
}

function renderCustomerDetail(customerId) {
  const customer = customers.find((item) => item.id === customerId) || customers[0];
  state.selectedCustomerId = customer.id;
  state.createFitProfileCustomerId = customer.id;
  setText("detailInitials", initials(customer));
  setText("detailName", fullName(customer));
  setText("detailStatus", customer.status);
  el("detailStatus").className = `status ${customer.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`;
  setText("detailEmail", `${customer.mobile || "-"} · ${customerEmailDisplay(customer)}`);
  setText("detailAddress", [customer.city, customer.postcode ? customer.postcode : "Netherlands"].filter(Boolean).join(", "));
  state.detailTab = "orders";
  state.detailOrdersPage = 1;
  state.fitProfilesPage = 1;
  state.selectedDetailOrders.clear();
  state.ordersBulkStatus = "";
  state.activeOrdersBulkStatusPosition = null;
  state.statusUpdateContext = "orders";
  applyDetailInfoVisibility();
  renderDetailOrders();
  renderFitProfiles();
  renderCustomerAccount(customer);
  renderDetailTabs();
  setCustomerDetailSidePanel(true);
}

function customerDetailSidePanelOpen() {
  return el("customerDetailSidePanel")?.classList.contains("open");
}

function setCustomerDetailSidePanel(open) {
  const panel = el("customerDetailSidePanel");
  const body = el("customerDetailSidePanelBody");
  const page = el("customerDetailPage");
  const backButton = el("backToCustomersBtn");
  if (!panel || !body || !page) return;
  if (!open && !panel.classList.contains("open") && !panel.classList.contains("closing")) return;
  window.clearTimeout(state.customerDetailSidePanelCloseTimer);
  if (open) {
    panel.classList.remove("open");
    panel.classList.add("closing");
    page.classList.remove("hidden");
    body.appendChild(page);
    if (backButton) {
      backButton.title = "Close customer detail";
      backButton.setAttribute("aria-label", "Close customer detail");
      backButton.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
    }
    requestAnimationFrame(() => {
      panel.classList.remove("closing");
      panel.classList.add("open");
    });
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("customer-detail-side-open");
    requestAnimationFrame(() => el("backToCustomersBtn")?.focus());
    return;
  }
  panel.classList.remove("open");
  panel.classList.add("closing");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("customer-detail-side-open");
  state.customerDetailSidePanelCloseTimer = window.setTimeout(() => {
    panel.classList.remove("closing");
    el("overviewPage")?.after(page);
    if (backButton) {
      backButton.title = "Back";
      backButton.setAttribute("aria-label", "Back to customers");
      backButton.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>';
    }
    if (state.currentPage !== "detail") page.classList.add("hidden");
  }, 220);
}

function orderActionButton(order) {
  return `
    <button class="order-action-btn customer-action-btn btn btn-soft" data-order-action-id="${order.id}">
      ${icon("dots", "h-4 w-4")}
      Actions
    </button>
    <div class="dropdown order-action-menu fixed z-[1000] w-44 rounded-lg border border-border bg-card p-1 text-sm shadow-lg ${state.activeOrderActionId === order.id ? "open" : ""}" style="left: ${state.activeOrderActionPosition?.left || 0}px; top: ${state.activeOrderActionPosition?.top || 0}px;" data-order-action-menu="${order.id}">
      <button class="order-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-order-action="view" data-order-id="${order.id}">View order</button>
      <button class="order-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-order-action="print" data-order-id="${order.id}">Print order</button>
      <button class="order-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-order-action="edit" data-order-id="${order.id}">Edit order</button>
    </div>
  `;
}

function renderDetailOrders() {
  const rows = detailOrders();
  const { totalPages, visibleRows } = paginateDetailRows(rows, "detailOrdersPage", "detailOrdersPageSize");
  renderDetailChips();
  renderDetailFilterMenu();
  const workshop = rows.filter((order) => order.status === "In workshop").length;
  const hold = rows.filter((order) => order.status === "On hold" || order.status === "On Hold").length;
  const delivered = rows.filter((order) => order.status === "Out for delivery" || order.status === "Delivered").length;
  setText("metricWorkshop", `${workshop} items`);
  setText("metricHold", `${hold} items`);
  setText("metricDelivery", `${delivered} items`);
  setText("metricUrgent", rows.some((order) => order.flagged) ? "Yes" : "No");

  const filteredIds = rows.map((order) => order.id);
  const visibleIds = visibleRows.map((order) => order.id);
  state.selectedDetailOrders = new Set([...state.selectedDetailOrders].filter((id) => filteredIds.includes(id)));

  el("detailOrderRows").innerHTML = visibleRows
    .map(
      (order) => `
        <tr class="h-[54px] cursor-pointer hover:bg-surface" data-detail-order-row="${escapeAttr(order.id)}">
          <td class="px-4"><input type="checkbox" class="detail-orders-row-check check" data-detail-order-id="${escapeAttr(order.id)}" ${state.selectedDetailOrders.has(order.id) ? "checked" : ""} /></td>
          <td class="px-4">${detailLegendMarkup(order)}</td>
          <td class="px-4">${orderNumberMarkup({ ...order, order: order.id })}</td>
          <td class="px-4">${orderStatusMarkup(order.status)}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.item || "-")}</td>
          <td class="px-4"><span class="block truncate text-muted-foreground">${escapeHtml(order.fabric || "-")}</span></td>
          <td class="px-4">${detailFitProfileMarkup(order)}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.processedDate || "-")}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.expectedDeliveryDate || "-")}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.updatedDeliveryDate || "-")}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.price || "0.00")}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.downPayment || "0.00")}</td>
          <td class="px-4 text-muted-foreground">${escapeHtml(order.outstanding || "0.00")}</td>
        </tr>
      `,
    )
    .join("");

  if (!rows.length) {
    el("detailOrderRows").innerHTML = `<tr><td colspan="13" class="px-4 py-14 text-center text-sm text-muted-foreground">No orders match these filters.</td></tr>`;
  }
  renderDetailPager("detailOrdersPaginationSummary", "detailOrdersPagination", "detailOrdersPage", "detailOrdersPageSize", rows.length, totalPages, "orders", "detail-orders");
  const selectAll = el("detailSelectAllOrders");
  if (selectAll) {
    const selectedCount = visibleIds.filter((id) => state.selectedDetailOrders.has(id)).length;
    selectAll.checked = visibleIds.length > 0 && selectedCount === visibleIds.length;
    selectAll.indeterminate = selectedCount > 0 && selectedCount < visibleIds.length;
  }
  renderDetailOrdersBulkActions();
  translatePage(el("detailOrdersPanel"));
}

function renderDetailTabs() {
  document.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.detailTab === state.detailTab);
  });
  el("detailOrdersPanel").classList.toggle("hidden", state.detailTab !== "orders");
  el("detailFitProfilesPanel").classList.toggle("hidden", state.detailTab !== "fitprofiles");
  el("detailAccountPanel")?.classList.toggle("hidden", state.detailTab !== "account");
}

function createFitProfileVisibleGarments() {
  const activePackage = createFitProfilePackages.find((item) => item.id === state.createFitProfilePackage) || createFitProfilePackages[0];
  return activePackage.itemIds.map((id) => createFitProfileGarments.find((garment) => garment.id === id)).filter(Boolean);
}

function createFitProfileSectionsForLevel() {
  const levelRank = { simple: 1, standard: 2, expert: 3 };
  const currentRank = levelRank[state.createFitProfileLevel] || 2;
  return createFitProfileSections.filter((section) => levelRank[section.level] <= currentRank);
}

const fitToolValueSteps = [0, 0.5, 1, 1.5, 2, 2.5, 3];

function fitToolValueOptions(direction) {
  return fitToolValueSteps.map((value) => {
    const formatted = value.toFixed(2);
    if (value === 0) return formatted;
    return `${direction === "minus" ? "-" : "+"}${formatted}`;
  });
}

function fitToolValueKey(label, direction) {
  return `${state.createFitProfileGarment}:${direction}:${label}`;
}

function fitToolValue(label, direction) {
  const savedValue = state.createFitProfileToolValues[fitToolValueKey(label, direction)];
  if (!savedValue || savedValue === "0") return "0.00";
  return savedValue;
}

function createFitProfileField(label, direction = "plus", disabled = false) {
  const valueKey = fitToolValueKey(label, direction);
  const displayValue = disabled ? "NA" : fitToolValue(label, direction);
  return `
    <div class="create-fit-tool-field">
      <div class="flex min-w-0 items-start justify-between gap-2">
        <span class="min-w-0 text-sm font-medium text-muted-foreground">${label}</span>
        <button class="fit-help-btn inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50/70 text-sky-600 opacity-60 transition hover:opacity-100" data-fit-help="${escapeAttr(label)}" type="button" title="Measurement help">
          <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
        </button>
      </div>
      <button class="field fabric-select mt-2 flex h-10 justify-between ${disabled ? "opacity-70" : ""}" type="button" ${disabled ? "disabled" : `data-fit-tool-select data-fit-tool-key="${escapeAttr(valueKey)}" data-fit-tool-label="${escapeAttr(label)}" data-fit-tool-direction="${direction}"`}>
        <span class="fabric-select-label text-foreground">${displayValue}</span>
        ${disabled ? "" : '<svg class="icon h-4 w-4 text-muted-foreground" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>'}
      </button>
    </div>
  `;
}

function createFitProfileToolPairMarkup(left, right, index, section) {
  return `
    <div class="create-fit-tool-pair grid grid-cols-2 gap-3">
      ${createFitProfileField(left, "plus", section.id === "circumference" && index === 0)}
      ${createFitProfileField(right, "minus")}
    </div>
  `;
}

function createFitProfileSectionMarkup(section) {
  const isCollapsed = state.createFitProfileCollapsedSections.has(section.id);
  return `
    <section class="rounded-[12px] border border-border bg-card">
      <button class="flex w-full items-center gap-2 bg-secondary px-4 py-3 text-left ${isCollapsed ? "rounded-[12px]" : "rounded-t-[12px] border-b border-border"}" data-create-fit-section="${section.id}" type="button" aria-expanded="${!isCollapsed}">
        <span class="flex h-4 w-4 items-center justify-center rounded border border-border bg-card text-[10px] text-muted-foreground">${isCollapsed ? "+" : "−"}</span>
        <h4 class="text-sm font-semibold">${section.label}</h4>
      </button>
      ${
        isCollapsed
          ? ""
          : `<div class="p-4">
              <div class="space-y-3">
                ${section.pairs.map(([left, right], index) => createFitProfileToolPairMarkup(left, right, index, section)).join("")}
              </div>
            </div>`
      }
    </section>
  `;
}

function createFitProfileOtherSectionMarkup(activeGarment) {
  const sectionId = `others-${activeGarment.id}`;
  const isCollapsed = state.createFitProfileCollapsedSections.has(sectionId);
  return `
    <section class="rounded-[12px] border border-border bg-card">
      <button class="flex w-full items-center gap-2 bg-secondary px-4 py-3 text-left ${isCollapsed ? "rounded-[12px]" : "rounded-t-[12px] border-b border-border"}" data-create-fit-section="${sectionId}" type="button" aria-expanded="${!isCollapsed}">
        <span class="flex h-4 w-4 items-center justify-center rounded border border-border bg-card text-[10px] text-muted-foreground">${isCollapsed ? "+" : "−"}</span>
        <h4 class="text-sm font-semibold">Others ${activeGarment.label.toLowerCase()}</h4>
      </button>
      ${
        isCollapsed
          ? ""
          : `<div class="p-4">
              <div class="space-y-3">
                ${createFitProfileField("Chest dart", "plus")}
                ${createFitProfileField("Forward shoulders", "plus")}
                ${createFitProfileField("Neck dart", "plus")}
              </div>
            </div>`
      }
    </section>
  `;
}

function createFitProfileSetupComplete(garment) {
  const garmentSelections = state.createFitProfileSelections[garment?.id] || {};
  return Boolean(garmentSelections.fit && garmentSelections.size);
}

function createFitProfileSetupValue(garment, key) {
  const garmentSelections = state.createFitProfileSelections[garment?.id] || {};
  if (garmentSelections[key]) return garmentSelections[key];
  return key === "fit" ? "Select TryOn Fit" : "Select TryOn Size";
}

function createFitProfileOrderResults() {
  const query = state.createFitProfileOrderQuery.trim().toLowerCase();
  const scopedOrders = standaloneOrders.filter((order) => !state.createFitProfileCustomerId || order.customerId === state.createFitProfileCustomerId);
  const source = scopedOrders.length ? scopedOrders : standaloneOrders;
  return source
    .filter((order) => {
      if (!query) return true;
      return [order.order, order.customer, order.status, order.item, order.type].join(" ").toLowerCase().includes(query);
    })
    .slice(0, 5);
}

function normaliseTryOnFit(value = "") {
  const compactValue = String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
  return (
    createFitProfileTryOnFits.find((fit) => compactValue.includes(fit.toLowerCase().replace(/[^a-z0-9]/g, ""))) ||
    "Regular"
  );
}

function nearestTryOnSize(value = "") {
  const sizeMatch = String(value).match(/(\d{2})(?!.*\d)/);
  const numericSize = sizeMatch ? Number(sizeMatch[1]) : 42;
  return createFitProfileTryOnSizes.reduce((closest, option) => {
    const currentDistance = Math.abs(Number(option) - numericSize);
    const closestDistance = Math.abs(Number(closest) - numericSize);
    return currentDistance < closestDistance ? option : closest;
  }, createFitProfileTryOnSizes[0]);
}

function createFitToolKeyForGarment(garmentId, label, direction) {
  return `${garmentId}:${direction}:${label}`;
}

function setCreateFitToolValueForGarment(garmentId, label, direction, value) {
  state.createFitProfileToolValues[createFitToolKeyForGarment(garmentId, label, direction)] = value;
}

function loadCreateFitProfileToolsFromOrder(order, garment) {
  if (!order || !garment) return;
  const garmentPrefix = `${garment.id}:`;
  Object.keys(state.createFitProfileToolValues)
    .filter((key) => key.startsWith(garmentPrefix))
    .forEach((key) => delete state.createFitProfileToolValues[key]);

  const seed = Array.from(order.id || order.order || "").reduce((total, character) => total + character.charCodeAt(0), 0);
  const smallPlus = seed % 2 === 0 ? "+0.50" : "+1.00";
  const smallMinus = seed % 3 === 0 ? "-0.50" : "-1.00";
  const secondaryPlus = seed % 5 === 0 ? "+1.50" : "+0.50";
  const secondaryMinus = seed % 7 === 0 ? "-1.50" : "-0.50";

  setCreateFitToolValueForGarment(garment.id, "Stooped posture", "plus", smallPlus);
  setCreateFitToolValueForGarment(garment.id, "Square shoulder R", "plus", "+0.50");
  setCreateFitToolValueForGarment(garment.id, "Raise armhole", "plus", secondaryPlus);
  setCreateFitToolValueForGarment(garment.id, "Erect posture", "minus", "0.00");
  setCreateFitToolValueForGarment(garment.id, "Slope shoulder R", "minus", smallMinus);
  setCreateFitToolValueForGarment(garment.id, "Lower closing button", "minus", secondaryMinus);
  setCreateFitToolValueForGarment(garment.id, "Let out 1/2 chest front", "plus", "+0.50");
  setCreateFitToolValueForGarment(garment.id, "Take in 1/2 waist", "minus", "-0.50");
  setCreateFitToolValueForGarment(garment.id, "Shorten length", "plus", "+0.50");
  setCreateFitToolValueForGarment(garment.id, "Lengthen sleeve R", "minus", "-0.50");
  setCreateFitToolValueForGarment(garment.id, "Chest dart", "plus", "0.00");
}

function garmentIdFromFitProfile(profile) {
  const profileGarment = String(profile?.garment || profile?.part || "").toLowerCase();
  return createFitProfileGarments.find((garment) => profileGarment.includes(garment.label.toLowerCase()))?.id || "jacket";
}

function loadCreateFitProfileToolsFromProfile(profile, garment) {
  if (!profile || !garment) return;
  loadCreateFitProfileToolsFromOrder(
    {
      id: profile.id,
      order: profile.label,
    },
    garment,
  );
}

function applyCreateFitProfileOrder(order) {
  const activeGarment = createFitProfileVisibleGarments().find((garment) => garment.id === state.createFitProfileGarment);
  if (!order || !activeGarment) return;

  state.createFitProfileSelections[activeGarment.id] = {
    ...(state.createFitProfileSelections[activeGarment.id] || {}),
    fit: normaliseTryOnFit(order.tryOn),
    size: nearestTryOnSize(order.tryOn),
  };
  state.createFitProfileMode = "create";
  state.createFitProfileOrderQuery = order.order;
  loadCreateFitProfileToolsFromOrder(order, activeGarment);
  showToast(`Loaded FitProfile information from ${order.order}.`);
}

function startEditFitProfile(profileId) {
  const profile = fitProfiles.find((item) => item.id === profileId);
  if (!profile) return;
  const garmentId = garmentIdFromFitProfile(profile);
  const garment = createFitProfileGarments.find((item) => item.id === garmentId) || createFitProfileGarments[0];
  state.editingFitProfileId = profile.id;
  state.copyingFitProfileId = null;
  state.renamingFitProfileId = null;
  state.creatingFitProfile = false;
  state.createFitProfileLevel = "standard";
  state.createFitProfilePackage = garment.id;
  state.createFitProfileCustomerId = state.selectedCustomerId || state.createFitProfileCustomerId || customers[0].id;
  state.createFitProfileGarment = garment.id;
  state.createFitProfileSavedItems = new Set([garment.id]);
  state.createFitProfileMode = "create";
  state.createFitProfileOrderQuery = "";
  state.createFitProfileSelections = {
    [garment.id]: {
      name: profile.label,
      fit: profile.fit || "Regular",
      size: profile.detailTryOn || profile.tryOn || "42",
    },
  };
  state.createFitProfileToolValues = {};
  loadCreateFitProfileToolsFromProfile(profile, garment);
  setFitProfileModal(false);
  setPage("createFitProfile");
}

function startCopyFitProfile(profileId) {
  const profile = fitProfiles.find((item) => item.id === profileId);
  if (!profile) return;
  const garmentId = garmentIdFromFitProfile(profile);
  const garment = createFitProfileGarments.find((item) => item.id === garmentId) || createFitProfileGarments[0];
  state.editingFitProfileId = null;
  state.copyingFitProfileId = profile.id;
  state.renamingFitProfileId = null;
  state.creatingFitProfile = false;
  state.createFitProfileLevel = "standard";
  state.createFitProfilePackage = garment.id;
  state.createFitProfileCustomerId = state.selectedCustomerId || state.createFitProfileCustomerId || customers[0].id;
  state.createFitProfileGarment = garment.id;
  state.createFitProfileSavedItems = new Set([garment.id]);
  state.createFitProfileMode = "create";
  state.createFitProfileOrderQuery = "";
  state.createFitProfileSelections = {
    [garment.id]: {
      name: `Copy of ${profile.label}`,
      fit: profile.fit || "Regular",
      size: profile.detailTryOn || profile.tryOn || "42",
    },
  };
  state.createFitProfileToolValues = {};
  loadCreateFitProfileToolsFromProfile(profile, garment);
  setFitProfileModal(false);
  setPage("createFitProfile");
}

function startCreateFitProfile(packageId = "three-piece") {
  state.creatingFitProfile = true;
  state.editingFitProfileId = null;
  state.copyingFitProfileId = null;
  state.renamingFitProfileId = null;
  state.createFitProfileLevel = "standard";
  state.createFitProfilePackage = packageId;
  state.createFitProfileCustomerId = state.selectedCustomerId || state.createFitProfileCustomerId || customers[0].id;
  const visibleGarments = createFitProfileVisibleGarments();
  state.createFitProfileGarment = visibleGarments[0]?.id || "jacket";
  state.createFitProfileSavedItems = new Set();
  state.createFitProfileSelections = {};
  state.createFitProfileMode = "create";
  state.createFitProfileOrderQuery = "";
  setCreateFitProfileStartModal(false);
  setPage("createFitProfile");
}

function saveCreateFitProfilePackage() {
  const visibleGarments = createFitProfileVisibleGarments();
  const packageReady = visibleGarments.every((garment) => createFitProfileSetupComplete(garment));
  if (!packageReady) {
    showToast("Complete every garment before creating the FitProfiles.");
    return false;
  }

  visibleGarments.forEach((garment) => {
    const id = `FIT-${String(fitProfiles.length + 1).padStart(3, "0")}`;
    fitProfiles.unshift({
      id,
      label: `${garment.label} — 22 June 2026`,
      garment: garment.label,
      part: garment.label,
      range: state.createFitProfileLevel === "expert" ? "Expert worksheet" : state.createFitProfileLevel === "simple" ? "Core fit" : "Standard fit",
      status: "Active",
      tryOn: createFitProfileSetupValue(garment, "size"),
      detailTryOn: createFitProfileSetupValue(garment, "size"),
      fit: createFitProfileSetupValue(garment, "fit"),
      creator: "George Cauter",
      productLine: "MTM",
      lastEdited: "22-Jun-2026",
      created: "22-Jun-2026",
    });
  });

  state.creatingFitProfile = false;
  state.detailTab = "fitprofiles";
  state.selectedCustomerId = state.createFitProfileCustomerId || state.selectedCustomerId;
  renderDetailTabs();
  renderFitProfiles();
  setPage("detail");
  showAlert("FitProfiles created", `${visibleGarments.length} FitProfile${visibleGarments.length === 1 ? "" : "s"} added to the customer.`);
  return true;
}

function overrideEditedFitProfile() {
  const profile = fitProfiles.find((item) => item.id === state.editingFitProfileId);
  const garment = createFitProfileVisibleGarments()[0];
  if (!profile || !garment) return;
  profile.lastEdited = "30-Jun-2026";
  profile.status = "Active";
  setEditFitProfileSaveModal(false);
  showToast(`${profile.label} updated.`);
}

function createNewFromEditedFitProfile() {
  const sourceProfile = fitProfiles.find((item) => item.id === state.editingFitProfileId);
  const garment = createFitProfileVisibleGarments()[0];
  const newName = el("editFitProfileNewNameInput").value.trim();
  if (!sourceProfile || !garment) return;
  if (!newName) {
    showToast("Add a new FitProfile name first.");
    el("editFitProfileNewNameInput").focus();
    return;
  }

  const id = `FIT-${String(fitProfiles.length + 1).padStart(3, "0")}`;
  fitProfiles.unshift({
    ...sourceProfile,
    id,
    label: newName,
    status: "Active",
    lastEdited: "30-Jun-2026",
    created: "30-Jun-2026",
    tryOn: createFitProfileSetupValue(garment, "size"),
    detailTryOn: createFitProfileSetupValue(garment, "size"),
    fit: createFitProfileSetupValue(garment, "fit"),
  });
  state.editingFitProfileId = id;
  setEditFitProfileSaveModal(false);
  renderCreateFitProfileWorkspace();
  showAlert("FitProfile created", `${newName} has been added.`);
}

function saveCopiedFitProfile() {
  const sourceProfile = fitProfiles.find((item) => item.id === state.copyingFitProfileId);
  const garment = createFitProfileVisibleGarments()[0];
  const selections = state.createFitProfileSelections[garment?.id] || {};
  const newName = String(selections.name || "").trim();
  if (!sourceProfile || !garment) return false;
  if (!newName) {
    showToast("Add a FitProfile name first.");
    requestAnimationFrame(() => el("createFitProfileNameInput")?.focus());
    return false;
  }
  if (!createFitProfileSetupComplete(garment)) {
    showToast("Choose a TryOn Fit and TryOn Size first.");
    return false;
  }

  const id = `FIT-${String(fitProfiles.length + 1).padStart(3, "0")}`;
  fitProfiles.unshift({
    ...sourceProfile,
    id,
    label: newName,
    garment: garment.label,
    part: garment.label,
    status: "Active",
    lastEdited: "30-Jun-2026",
    created: "30-Jun-2026",
    tryOn: createFitProfileSetupValue(garment, "size"),
    detailTryOn: createFitProfileSetupValue(garment, "size"),
    fit: createFitProfileSetupValue(garment, "fit"),
  });
  state.activeFitProfileId = id;
  state.copyingFitProfileId = null;
  state.editingFitProfileId = null;
  state.detailTab = "fitprofiles";
  state.selectedCustomerId = state.createFitProfileCustomerId || state.selectedCustomerId;
  renderDetailTabs();
  renderFitProfiles();
  setPage("detail");
  showAlert("FitProfile created", `${newName} has been added.`);
  return true;
}

function createFitProfileSelectOptions(key) {
  if (key === "size") {
    const activeGarment = createFitProfileVisibleGarments().find((garment) => garment.id === state.createFitProfileGarment);
    const garmentSelections = state.createFitProfileSelections[activeGarment?.id] || {};
    if (!garmentSelections.fit) return [];
  }
  return key === "fit" ? createFitProfileTryOnFits : createFitProfileTryOnSizes;
}

function positionFloatingSelectMenu(menu, button, minWidth = 220) {
  const rect = button.getBoundingClientRect();
  const viewportPadding = 16;
  const gap = 6;
  const width = Math.min(Math.max(rect.width, minWidth), window.innerWidth - viewportPadding * 2);
  const left = Math.min(Math.max(rect.left, viewportPadding), window.innerWidth - width - viewportPadding);
  const spaceBelow = window.innerHeight - rect.bottom - viewportPadding - gap;
  const spaceAbove = rect.top - viewportPadding - gap;
  const preferredMaxHeight = 360;
  const availableHeight = Math.max(120, Math.min(preferredMaxHeight, Math.max(spaceBelow, spaceAbove)));

  menu.style.left = `${left}px`;
  menu.style.right = "auto";
  menu.style.width = `${width}px`;
  menu.style.maxHeight = `${availableHeight}px`;
  menu.style.overflowY = "auto";
  menu.style.visibility = "hidden";
  menu.classList.add("open");

  const naturalHeight = Math.min(menu.scrollHeight || menu.offsetHeight || 180, preferredMaxHeight);
  const opensUp = spaceBelow < naturalHeight && spaceAbove > spaceBelow;
  const menuHeight = Math.min(naturalHeight, Math.max(120, opensUp ? spaceAbove : spaceBelow));
  const top = opensUp ? Math.max(viewportPadding, rect.top - gap - menuHeight) : rect.bottom + gap;

  menu.style.maxHeight = `${menuHeight}px`;
  menu.style.top = `${top}px`;
  menu.style.bottom = "auto";
  menu.style.visibility = "visible";
  menu.dataset.opens = opensUp ? "up" : "down";
}

function renderCreateFitProfileSelectMenu() {
  const menu = el("createFitProfileSelectMenu");
  if (!menu) return;
  document.querySelectorAll("[data-create-fit-select]").forEach((button) => {
    button.setAttribute("aria-expanded", state.activeCreateFitProfileSelect === button.dataset.createFitSelect ? "true" : "false");
  });
  if (!state.activeCreateFitProfileSelect) {
    menu.classList.remove("open");
    return;
  }

  const key = state.activeCreateFitProfileSelect;
  const activeButton = document.querySelector(`[data-create-fit-select="${key}"]`);
  const selectedValue = createFitProfileSetupValue(
    createFitProfileVisibleGarments().find((garment) => garment.id === state.createFitProfileGarment),
    key,
  );
  const options = createFitProfileSelectOptions(key);
  menu.innerHTML = options
    .map(
      (option) => `
        <button class="create-fit-select-option fabric-select-option ${selectedValue === option ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="${option}">
          <span class="min-w-0 truncate">${option}</span>
          ${selectedValue === option ? '<svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>' : ""}
        </button>
      `,
    )
    .join("");
  if (activeButton) positionFloatingSelectMenu(menu, activeButton);
  menu.classList.add("open");
  translatePage(menu);
}

function openCreateFitProfileSelect(button) {
  if (button.disabled) return;
  const rect = button.getBoundingClientRect();
  const isOpen = state.activeCreateFitProfileSelect === button.dataset.createFitSelect;
  state.activeCreateFitProfileSelect = isOpen ? null : button.dataset.createFitSelect;
  state.activeCreateFitProfileSelectPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
  renderCreateFitProfileSelectMenu();
}

function renderFitToolValueMenu() {
  const menu = el("fitToolValueMenu");
  if (!menu) return;
  document.querySelectorAll("[data-fit-tool-select]").forEach((button) => {
    button.setAttribute("aria-expanded", state.activeFitToolSelect === button.dataset.fitToolKey ? "true" : "false");
  });
  if (!state.activeFitToolSelect) {
    menu.classList.remove("open");
    return;
  }

  const activeButton = Array.from(document.querySelectorAll("[data-fit-tool-select]")).find(
    (button) => button.dataset.fitToolKey === state.activeFitToolSelect,
  );
  if (activeButton) {
    const rect = activeButton.getBoundingClientRect();
    state.activeFitToolSelectPosition = { left: rect.left, top: rect.bottom + 6, width: rect.width };
  }

  const direction = activeButton?.dataset.fitToolDirection || state.activeFitToolDirection || "plus";
  const selectedValue = !state.createFitProfileToolValues[state.activeFitToolSelect] || state.createFitProfileToolValues[state.activeFitToolSelect] === "0"
    ? "0.00"
    : state.createFitProfileToolValues[state.activeFitToolSelect];
  menu.innerHTML = fitToolValueOptions(direction)
    .map(
      (option) => `
        <button class="fit-tool-value-option fabric-select-option ${selectedValue === option ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="${option}">
          <span class="min-w-0 truncate">${option}</span>
          ${selectedValue === option ? '<svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>' : ""}
        </button>
      `,
    )
    .join("");
  if (activeButton) positionFloatingSelectMenu(menu, activeButton, 180);
  translatePage(menu);
}

function openFitToolValueMenu(button) {
  const rect = button.getBoundingClientRect();
  const isOpen = state.activeFitToolSelect === button.dataset.fitToolKey;
  state.activeFitToolSelect = isOpen ? null : button.dataset.fitToolKey;
  state.activeFitToolDirection = isOpen ? null : button.dataset.fitToolDirection;
  state.activeFitToolSelectPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
  renderFitToolValueMenu();
}

function resetCreateFitMeasurementsStickiness(panel) {
  panel.classList.remove("is-fixed", "is-anchored");
  panel.style.removeProperty("top");
  panel.style.removeProperty("left");
  panel.style.removeProperty("width");
}

function updateCreateFitMeasurementsStickiness() {
  const layout = document.querySelector(".create-fit-tools-layout");
  const rail = document.querySelector(".create-fit-measurements-rail");
  const panel = document.querySelector(".create-fit-measurements-panel");
  if (!layout || !rail || !panel || el("createFitProfilePage")?.classList.contains("hidden")) return;

  resetCreateFitMeasurementsStickiness(panel);
  if (window.innerWidth < 1024) return;

  const stickyTop = 80;
  const layoutRect = layout.getBoundingClientRect();
  const railRect = rail.getBoundingClientRect();
  const panelHeight = panel.offsetHeight;
  const stickyBottom = layoutRect.bottom - panelHeight;

  if (layoutRect.top >= stickyTop) return;

  if (stickyBottom <= stickyTop) {
    panel.classList.add("is-anchored");
    panel.style.width = `${railRect.width}px`;
    return;
  }

  panel.classList.add("is-fixed");
  panel.style.top = `${stickyTop}px`;
  panel.style.left = `${railRect.left}px`;
  panel.style.width = `${railRect.width}px`;
}

function renderCreateFitProfileWorkspace() {
  const workspace = el("createFitProfileWorkspace");
  if (!workspace) return;
  state.activeCreateFitProfileSelect = null;
  state.activeCreateFitProfileSelectPosition = null;
  renderCreateFitProfileSelectMenu();
  state.activeFitToolSelect = null;
  state.activeFitToolSelectPosition = null;
  state.activeFitToolDirection = null;
  renderFitToolValueMenu();
  const visibleGarments = createFitProfileVisibleGarments();
  if (!visibleGarments.some((garment) => garment.id === state.createFitProfileGarment)) {
    state.createFitProfileGarment = visibleGarments[0].id;
  }
  const activeGarment = visibleGarments.find((garment) => garment.id === state.createFitProfileGarment) || visibleGarments[0];
  const activePackage = createFitProfilePackages.find((item) => item.id === state.createFitProfilePackage) || createFitProfilePackages[0];
  const editingProfile = fitProfiles.find((profile) => profile.id === state.editingFitProfileId);
  const copyingProfile = fitProfiles.find((profile) => profile.id === state.copyingFitProfileId);
  const isEditingFitProfile = Boolean(editingProfile);
  const isCopyingFitProfile = Boolean(copyingProfile);
  const isSingleProfileFlow = isEditingFitProfile || isCopyingFitProfile;
  const activeGarmentIndex = Math.max(0, visibleGarments.findIndex((garment) => garment.id === activeGarment.id));
  const previousGarment = visibleGarments[activeGarmentIndex - 1];
  const nextGarment = visibleGarments[activeGarmentIndex + 1];
  const completedGarmentCount = visibleGarments.filter((garment) => createFitProfileSetupComplete(garment)).length;
  const packageReady = completedGarmentCount === visibleGarments.length;
  const setupComplete = createFitProfileSetupComplete(activeGarment);
  const activeGarmentFitSelected = Boolean(state.createFitProfileSelections[activeGarment.id]?.fit);
  const sections = createFitProfileSectionsForLevel();
  const measurements = createFitProfileFinishedMeasurements[activeGarment.id] || createFitProfileFinishedMeasurements.jacket;
  const finishedMeasurementsCollapsed = state.createFitProfileCollapsedSections.has("finished-measurements");
  const activePackageTitle = activePackage.id === "three-piece" ? "3-Piece" : activePackage.id === "two-piece" ? "2-Piece" : activePackage.label;
  const activeCustomer = customers.find((customer) => customer.id === state.createFitProfileCustomerId) || currentCustomer() || customers[0];
  const createMode = state.createFitProfileMode || "create";
  const orderSearchResults = createFitProfileOrderResults();
  const setupName = state.createFitProfileSelections[activeGarment.id]?.name || editingProfile?.label || copyingProfile?.label || `[${activeGarment.label}] 22-Jun-2026`;
  const saveButtonDisabled = isSingleProfileFlow ? false : !packageReady;
  const packageCompletionCopy =
    !isSingleProfileFlow && visibleGarments.length > 1
      ? `<p class="mt-2 text-sm text-muted-foreground">All ${visibleGarments.length} must be completed before the ${activePackage.label} FitProfiles can be created.</p>`
      : "";
  const saveButtonTitle = isEditingFitProfile
    ? "Save FitProfile changes"
    : isCopyingFitProfile
      ? "Save copied FitProfile"
    : packageReady
      ? "Save FitProfiles"
      : `Complete all ${visibleGarments.length} garment FitProfiles before saving.`;

  workspace.innerHTML = `
    <div>
      <div class="space-y-5 p-6">
        ${
          isSingleProfileFlow
            ? ""
            : `<section class="overflow-hidden rounded-[12px] border border-border bg-card">
                <div class="flex items-center gap-3 border-b border-border p-6">
                  <button id="backToFitProfilesTableBtn" class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Back to FitProfiles" aria-label="Back to FitProfiles">
                    <svg class="icon h-5 w-5" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
                  </button>
                  <h3 class="text-xl font-semibold">Creating FitProfile for ${fullName(activeCustomer)}</h3>
                </div>
                <div class="p-6">
                  <span class="mb-2 block text-sm font-medium">Creating FitProfile for</span>
                  <div class="flex max-w-2xl gap-2">
                    <div class="field flex min-w-0 flex-1 items-center justify-between">
                      <span class="truncate">${activePackage.label}</span>
                    </div>
                    <button id="redoCreateFitProfileStartBtn" class="btn btn-soft shrink-0" type="button">
                      <svg class="icon" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"></path><path d="M3 21v-5h5"></path></svg>
                      Redo
                    </button>
                  </div>
                </div>
              </section>`
        }

        <section class="overflow-hidden rounded-[12px] border border-border bg-card">
          ${
            isSingleProfileFlow
              ? `<div class="flex items-center gap-3 border-b border-border p-6">
                  <button id="backToFitProfilesTableBtn" class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Back to FitProfiles" aria-label="Back to FitProfiles">
                    <svg class="icon h-5 w-5" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
                  </button>
                  <h3 class="text-xl font-semibold">${isCopyingFitProfile ? "Copying" : "Editing"} FitProfile for ${fullName(activeCustomer)}</h3>
                </div>`
              : ""
          }
          <div class="flex flex-col gap-4 p-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h4 class="text-lg font-semibold">${
                isEditingFitProfile
                  ? `Editing ${activeGarment.label} FitProfile`
                  : isCopyingFitProfile
                    ? `Copying ${activeGarment.label} FitProfile`
                    : `Creating ${activePackageTitle} FitProfile`
              }</h4>
              ${
                isEditingFitProfile
                  ? `<p class="mt-2 text-sm text-muted-foreground">FitTools can be adjusted, but the TryOn Fit and TryOn Size stay fixed.</p>`
                  : isCopyingFitProfile
                    ? `<p class="mt-2 text-sm text-muted-foreground">Adjust the TryOn Size, Fit, or any FitTools used before saving.</p>`
                  : packageCompletionCopy
              }
            </div>
            <div class="flex shrink-0 flex-col items-start gap-2 sm:items-end">
              <div class="flex flex-wrap gap-2">
                <button id="resetCreateFitProfileBtn" class="btn btn-soft" type="button">Reset</button>
                <button id="saveCreateFitProfileBtn" class="btn btn-primary ${saveButtonDisabled ? "opacity-60" : ""}" type="button" aria-disabled="${saveButtonDisabled ? "true" : "false"}" title="${escapeAttr(saveButtonTitle)}">
                  <svg class="icon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path></svg>
                  Save
                </button>
              </div>
            </div>
          </div>

          <div class="p-5">
            ${
              isSingleProfileFlow
                ? ""
                : `<div class="mb-5 overflow-x-auto">
                    <div class="flex min-w-max gap-2">
                      ${visibleGarments
                        .map((garment) => {
                          const isActive = garment.id === activeGarment.id;
                          const isDone = createFitProfileSetupComplete(garment);
                          const tabStateClass = isActive
                            ? "border-primary bg-card shadow-panel"
                            : isDone
                              ? "fitprofile-tab-complete"
                              : "border-border bg-card hover:bg-secondary/30";
                          return `
                            <button class="flex h-[66px] min-w-[262px] items-center justify-between gap-4 rounded-[10px] border px-3 text-left transition ${tabStateClass}" data-create-fit-garment="${garment.id}" type="button">
                              <span class="flex min-w-0 items-center gap-2">
                                <span class="h-10 w-10 shrink-0 rounded-[8px] bg-secondary"></span>
                                <span class="truncate font-semibold">${garment.label}</span>
                              </span>
                              ${
                                isDone
                                  ? `<span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                      <svg class="icon h-3.5 w-3.5" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>
                                    </span>`
                                  : `<span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${isActive ? "border-primary" : "border-border"}">
                                      <span class="h-2 w-2 rounded-full ${isActive ? "bg-primary" : "bg-transparent"}"></span>
                                    </span>`
                              }
                            </button>
                          `;
                        })
                        .join("")}
                    </div>
                  </div>`
            }

            <div class="${isEditingFitProfile ? "" : "border-t border-border pt-5"}">
              ${
                isEditingFitProfile
                  ? `
                    <div class="grid gap-4 lg:grid-cols-3">
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">FitProfile Name</span>
                        <div class="field flex items-center bg-secondary/30 text-muted-foreground">${escapeHtml(setupName)}</div>
                      </label>
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">TryOn Fit</span>
                        <div class="field flex items-center bg-secondary/30 text-muted-foreground">${createFitProfileSetupValue(activeGarment, "fit")}</div>
                      </label>
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">TryOn Size</span>
                        <div class="field flex items-center bg-secondary/30 text-muted-foreground">${createFitProfileSetupValue(activeGarment, "size")}</div>
                      </label>
                    </div>
                  `
                  : `
                    ${
                      isCopyingFitProfile
                        ? ""
                        : `<div class="mb-5">
                            <div class="inline-flex rounded-[10px] bg-secondary p-1">
                              <button class="customer-tab ${createMode === "create" ? "active" : ""}" data-create-fit-mode="create" type="button">Create new FitProfile</button>
                              <button class="customer-tab ${createMode === "search" ? "active" : ""}" data-create-fit-mode="search" type="button">Create from Previous order</button>
                            </div>
                          </div>`
                    }
                    ${
                      !isCopyingFitProfile && createMode === "search"
                  ? `
                    <div class="relative max-w-2xl">
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">Order number</span>
                        <div class="field flex items-center gap-2">
                          <svg class="icon h-4 w-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                          <input id="createFitProfileOrderSearchInput" class="min-w-0 flex-1 bg-transparent text-sm outline-none" value="${escapeAttr(state.createFitProfileOrderQuery)}" placeholder="Search order number" autocomplete="off" />
                        </div>
                      </label>
                      <div class="mt-2 rounded-[12px] border border-border bg-popover p-1 shadow-panel">
                        <div class="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Orders and numbers</div>
                        ${
                          orderSearchResults.length
                            ? orderSearchResults
                                .map(
                                  (order, index) => `
                                    <button class="flex w-full items-center justify-between gap-3 rounded-[8px] px-3 py-2 text-left hover:bg-secondary ${index === 0 ? "bg-secondary" : ""}" data-create-fit-order-result="${escapeAttr(order.id)}" type="button">
                                      <span class="min-w-0">
                                        <span class="block truncate text-sm font-semibold">${escapeHtml(order.order)}</span>
                                        <span class="mt-0.5 block truncate text-xs text-muted-foreground">${escapeHtml(order.customer)} · ${escapeHtml(order.status)} · ${escapeHtml(order.item)}</span>
                                      </span>
                                      <span class="pill bg-orange-50 text-orange-600">Order</span>
                                    </button>
                                  `,
                                )
                                .join("")
                            : `<div class="px-3 py-6 text-center text-sm text-muted-foreground">No matching orders yet.</div>`
                        }
                      </div>
                    </div>
                  `
                  : `
                    <div class="grid gap-4 lg:grid-cols-3">
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">FitProfile Name</span>
                        <input id="createFitProfileNameInput" class="field" value="${escapeAttr(setupName)}" />
                      </label>
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">TryOn Fit</span>
                        <button class="field fabric-select flex" data-create-fit-select="fit" type="button">
                          <span class="fabric-select-label text-foreground">${createFitProfileSetupValue(activeGarment, "fit")}</span>
                          <svg class="icon h-4 w-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
                        </button>
                      </label>
                      <label>
                        <span class="mb-1.5 block text-sm font-medium">TryOn Size</span>
                        <button class="field fabric-select flex ${activeGarmentFitSelected ? "" : "opacity-60"}" data-create-fit-select="size" type="button" ${activeGarmentFitSelected ? "" : "disabled"}>
                          <span class="fabric-select-label text-foreground">${activeGarmentFitSelected ? createFitProfileSetupValue(activeGarment, "size") : "Select TryOn Fit first"}</span>
                          <svg class="icon h-4 w-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
                        </button>
                      </label>
                    </div>
                  `
                    }
                  `
              }
            </div>
            ${
              setupComplete
                ? `
              <div class="mt-6 overflow-hidden rounded-[12px] border border-border bg-card">
                <div class="border-b border-border p-5">
                  <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h4 class="font-semibold">FitTools loaded</h4>
                      <p class="mt-1 text-sm text-muted-foreground">Loaded from ${activeGarment.label} · ${createFitProfileSetupValue(activeGarment, "fit")} · TryOn ${createFitProfileSetupValue(activeGarment, "size")}.</p>
                    </div>
                    <div>
                      <span class="mb-1.5 block text-sm font-medium text-muted-foreground">FitProfile Level</span>
                      <div class="inline-flex flex-wrap rounded-[10px] bg-secondary p-1">
                        ${createFitProfileLevels
                          .map(
                            (level) => `
                              <button class="customer-tab ${state.createFitProfileLevel === level.id ? "active" : ""}" data-create-fit-level="${level.id}" type="button">
                                ${level.label}
                              </button>
                            `,
                          )
                          .join("")}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="create-fit-tools-layout grid items-start gap-12 p-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                  <div class="create-fit-tools-main space-y-5">
                    ${sections.map(createFitProfileSectionMarkup).join("")}
                    ${createFitProfileOtherSectionMarkup(activeGarment)}
                  </div>

                  <div class="create-fit-measurements-rail relative self-stretch">
                    <aside class="create-fit-measurements-panel h-fit rounded-[12px] border border-border bg-card p-5 shadow-panel">
                      <button class="flex w-full items-center gap-2 text-left ${finishedMeasurementsCollapsed ? "" : "border-b border-border pb-3"}" data-create-fit-section="finished-measurements" type="button" aria-expanded="${!finishedMeasurementsCollapsed}">
                        <span class="flex h-4 w-4 items-center justify-center rounded border border-border bg-secondary text-[10px] text-muted-foreground">${finishedMeasurementsCollapsed ? "+" : "−"}</span>
                        <h4 class="font-semibold">Finished Measurements</h4>
                      </button>
                      ${
                        finishedMeasurementsCollapsed
                          ? ""
                          : `<div class="mt-4 space-y-3">
                              ${measurements
                                .map(
                                  ([label, value]) => `
                                    <div class="flex items-center justify-between gap-4 text-sm">
                                      <span class="text-muted-foreground">${label}</span>
                                      <span class="font-medium">${value}</span>
                                    </div>
                                  `,
                                )
                                .join("")}
                            </div>`
                      }
                    </aside>
                  </div>
                </div>
              </div>
              ${
                isSingleProfileFlow
                  ? `<div class="flex justify-end border-t border-border p-5">
                      <button class="btn btn-primary" data-fit-profile-save-bottom type="button">
                        <svg class="icon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path></svg>
                        Save
                      </button>
                    </div>`
                  : ""
              }
            `
                : `
              <div class="mt-6 rounded-[12px] border border-dashed border-border bg-secondary/25 p-8 text-center">
                <h4 class="font-semibold">Select your TryOn Fit and Size to load FitTools.</h4>
              </div>
            `
            }
            ${
              isSingleProfileFlow
                ? ""
                : `<div class="mt-6 flex flex-wrap items-center justify-between gap-3">
                    ${
                      previousGarment
                        ? `<button class="btn btn-soft" data-create-fit-jump="${previousGarment.id}" type="button">
                            <svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
                            Back to ${previousGarment.label}
                          </button>`
                        : `<button class="btn btn-soft" type="button" disabled>
                            <svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
                            Back
                          </button>`
                    }
                    <div class="flex flex-wrap gap-2">
                      ${
                        nextGarment
                          ? `<button class="btn ${setupComplete ? "btn-primary" : "btn-soft"}" data-create-fit-continue="${nextGarment.id}" type="button" ${setupComplete ? "" : "disabled"}>
                              Continue to ${nextGarment.label}
                              <svg class="icon" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
                            </button>`
                          : `<button class="btn ${setupComplete ? "btn-primary" : "btn-soft"}" data-create-fit-save-final="${activeGarment.id}" type="button" ${setupComplete ? "" : "disabled"}>
                              <svg class="icon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path></svg>
                              Save
                            </button>`
                      }
                    </div>
                  </div>`
            }
          </div>
        </section>

      </div>
    </div>
  `;
  requestAnimationFrame(updateCreateFitMeasurementsStickiness);
}

function renderFitProfileCreateMode() {
  el("fitProfileToolbar").classList.remove("hidden");
  el("fitProfileTableView").classList.remove("hidden");
}

function fitProfileFilterValue(profile, key) {
  if (key === "status") return profile.status;
  if (key === "item") return profile.garment;
  if (key === "productLine") return profile.productLine;
  return "";
}

function filteredFitProfiles() {
  const query = state.fitProfileNameQuery.trim().toLowerCase();
  return fitProfiles.filter((profile) => {
    const searchable = [profile.label, profile.garment, profile.part, profile.range, profile.fit, profile.creator, profile.productLine, profile.status]
      .join(" ")
      .toLowerCase();
    const queryMatch = !query || searchable.includes(query);
    const filterMatch = fitProfileFilterConfig.every((filter) => {
      const selected = state.fitProfileFilters[filter.key];
      return !selected.size || selected.has(fitProfileFilterValue(profile, filter.key));
    });
    return queryMatch && filterMatch;
  });
}

function fitProfileFilterCount() {
  return Object.values(state.fitProfileFilters).reduce((sum, values) => sum + values.size, 0);
}

function renderFitProfileFilterMenu() {
  const categoryQuery = state.fitProfileFilterCategoryQuery.toLowerCase();
  const categories = fitProfileFilterConfig.filter((filter) => filter.label.toLowerCase().includes(categoryQuery));
  const activeFilter = fitProfileFilterConfig.find((filter) => filter.key === state.activeFitProfileFilterCategory) || fitProfileFilterConfig[0];
  const optionQuery = state.fitProfileFilterOptionQuery.toLowerCase();
  const options = activeFilter.options.filter((option) => option.label.toLowerCase().includes(optionQuery));
  const count = fitProfileFilterCount();

  el("fitProfileFilterCount").classList.toggle("hidden", count === 0);
  setText("fitProfileFilterCount", String(count));
  el("fitProfileNameSearch").value = state.fitProfileNameQuery;
  el("fitProfileFilterCategorySearch").value = state.fitProfileFilterCategoryQuery;
  el("fitProfileFilterOptionSearch").value = state.fitProfileFilterOptionQuery;
  setText("fitProfileFilterSubmenuTitle", activeFilter.label);

  el("fitProfileFilterCategories").innerHTML = categories
    .map((filter) => {
      const selectedCount = state.fitProfileFilters[filter.key].size;
      return `
        <button class="filter-category-row ${filter.key === activeFilter.key ? "active" : ""}" data-fit-filter-category="${filter.key}">
          <span>${filter.label}</span>
          <span class="flex items-center gap-2">
            ${selectedCount ? `<span class="rounded-full bg-primary px-1.5 py-0.5 text-[11px] leading-none text-primary-foreground">${selectedCount}</span>` : ""}
            <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
          </span>
        </button>
      `;
    })
    .join("");

  el("fitProfileFilterOptions").innerHTML = options
    .map((option) => {
      const checked = state.fitProfileFilters[activeFilter.key].has(option.value);
      return `
        <button class="filter-option-row" data-fit-filter-option="${option.value}">
          <span class="flex min-w-0 items-center gap-2">
            ${option.tone ? `<span class="h-2 w-2 shrink-0 rounded-full ${option.tone}"></span>` : ""}
            <span class="truncate">${option.label}</span>
          </span>
          <span class="filter-check ${checked ? "checked" : ""}">✓</span>
        </button>
      `;
    })
    .join("");

  if (!options.length) {
    el("fitProfileFilterOptions").innerHTML = `<div class="px-3 py-8 text-center text-sm text-muted-foreground">No filter options found.</div>`;
  }

  translatePage(el("detailFitProfilesPanel"));
}

function renderFitProfiles() {
  renderFitProfileCreateMode();
  const rows = filteredFitProfiles();
  const { totalPages, visibleRows } = paginateDetailRows(rows, "fitProfilesPage", "fitProfilesPageSize");
  el("fitProfileRows").innerHTML = visibleRows
    .map(
      (profile) => `
        <tr class="fit-profile-row h-14" data-fit-profile-id="${profile.id}">
          <td class="sticky-action-cell action-left-only ${state.activeFitProfileActionId === profile.id ? "action-cell-open" : ""} relative px-4">
            <button class="fit-profile-action-btn row-action-btn btn btn-soft h-8 px-3 text-sm" data-fit-action-id="${profile.id}">
              ${icon("dots", "h-5 w-5")}
              Actions
            </button>
            <div class="dropdown fit-profile-action-menu fixed z-[60] w-52 rounded-lg border border-border bg-card p-1 text-sm shadow-lg ${state.activeFitProfileActionId === profile.id ? "open" : ""}" style="left: ${state.activeFitProfileActionPosition?.left || 0}px; top: ${state.activeFitProfileActionPosition?.top || 0}px;" data-fit-action-menu="${profile.id}">
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="view" data-fit-profile-id="${profile.id}">View FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="edit" data-fit-profile-id="${profile.id}">Edit FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="copy" data-fit-profile-id="${profile.id}">Copy FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="rename" data-fit-profile-id="${profile.id}">Edit FitProfile name</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="print" data-fit-profile-id="${profile.id}">Print FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="toggle" data-fit-profile-id="${profile.id}">${profile.status === "Active" ? "Pause FitProfile" : "Reactivate FitProfile"}</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-secondary" data-fit-action="delete" data-fit-profile-id="${profile.id}">Delete FitProfile</button>
            </div>
          </td>
          <td class="px-4">
            <button class="fit-profile-open block max-w-[300px] truncate whitespace-nowrap rounded-md bg-sky-100 px-2 py-1 text-left text-sm font-medium text-sky-700" data-fit-profile-id="${profile.id}">
              ${profile.label}
            </button>
          </td>
          <td class="px-4">
            <span class="block font-medium">${profile.part}</span>
            <span class="block text-muted-foreground">${profile.range}</span>
          </td>
          <td class="px-4">${statusMarkup(profile.status)}</td>
          <td class="px-4 text-muted-foreground">${profile.tryOn}</td>
          <td class="px-4 text-muted-foreground">${profile.fit}</td>
          <td class="px-4 text-muted-foreground">${profile.lastEdited}</td>
          <td class="px-4 text-muted-foreground">${profile.created}</td>
          <td class="px-0"></td>
          <td class="sticky-action-cell action-right-only ${state.activeFitProfileActionId === profile.id ? "action-cell-open" : ""} relative px-4">
            <button class="fit-profile-action-btn row-action-btn btn btn-soft h-8 px-3 text-sm" data-fit-action-id="${profile.id}">
              ${icon("dots", "h-5 w-5")}
              Actions
            </button>
            <div class="dropdown fit-profile-action-menu fixed z-[60] w-52 rounded-lg border border-border bg-card p-1 text-sm shadow-lg ${state.activeFitProfileActionId === profile.id ? "open" : ""}" style="left: ${state.activeFitProfileActionPosition?.left || 0}px; top: ${state.activeFitProfileActionPosition?.top || 0}px;" data-fit-action-menu="${profile.id}">
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="view" data-fit-profile-id="${profile.id}">View FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="edit" data-fit-profile-id="${profile.id}">Edit FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="copy" data-fit-profile-id="${profile.id}">Copy FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="rename" data-fit-profile-id="${profile.id}">Edit FitProfile name</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="print" data-fit-profile-id="${profile.id}">Print FitProfile</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-fit-action="toggle" data-fit-profile-id="${profile.id}">${profile.status === "Active" ? "Pause FitProfile" : "Reactivate FitProfile"}</button>
              <button class="fit-profile-menu-action flex w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-secondary" data-fit-action="delete" data-fit-profile-id="${profile.id}">Delete FitProfile</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");

  if (!rows.length) {
    el("fitProfileRows").innerHTML = `<tr><td colspan="9" class="px-4 py-14 text-center text-sm text-muted-foreground">No FitProfiles match these filters.</td></tr>`;
  }
  renderDetailPager("fitProfilePaginationSummary", "fitProfilePagination", "fitProfilesPage", "fitProfilesPageSize", rows.length, totalPages, "FitProfiles", "fit-profile");
  renderFitProfileFilterMenu();
  translatePage(el("detailFitProfilesPanel"));
}

function resultSection(title, results) {
  if (!results.length) return "";
  return `
    <section>
      <div class="px-2 pb-2 text-xs font-medium uppercase tracking-normal text-muted-foreground">${title}</div>
      <div class="space-y-1">
        ${results
          .map(
            (result) => `
              <button class="search-result" data-result-type="${result.type}" data-result-id="${result.id}">
                <span class="min-w-0">
                  <span class="block truncate font-medium">${result.title}</span>
                  <span class="mt-1 block truncate text-sm text-muted-foreground">${result.description}</span>
                </span>
                <span class="pill ${result.tone || "bg-secondary text-foreground"}">${result.badge}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function globalSearchResults(query) {
  const cleanQuery = query.trim().toLowerCase();
  const digits = cleanQuery.replace(/\D/g, "");
  const customerResults = customers
    .filter((customer) => {
      const searchable = [fullName(customer), customer.email, customer.mobile, customer.phone, fullAddress(customer), customer.company].join(" ").toLowerCase();
      return !cleanQuery || searchable.includes(cleanQuery);
    })
    .slice(0, 5)
    .map((customer) => ({
      type: "customer",
      id: customer.id,
      title: fullName(customer),
      description: `${customer.email} · ${fullAddress(customer)}`,
      badge: "Customer",
      tone: "bg-emerald-50 text-emerald-700",
    }));

  const fitProfileResults = fitProfiles
    .filter((profile) => {
      const searchable = [profile.label, profile.garment, profile.part, profile.range, profile.fit, profile.tryOn, profile.detailTryOn, profile.creator].join(" ").toLowerCase();
      const numberMatch = digits && [profile.tryOn, profile.detailTryOn, profile.created, profile.lastEdited].join(" ").replace(/\D/g, "").includes(digits);
      return !cleanQuery || searchable.includes(cleanQuery) || numberMatch;
    })
    .map((profile) => ({
      type: "fitprofile",
      id: profile.id,
      title: profile.label,
      description: `${profile.part} · ${profile.fit} · TryOn ${profile.detailTryOn || profile.tryOn}`,
      badge: "FitProfile",
      tone: "bg-sky-100 text-sky-700",
    }));

  const orderResults = orders
    .filter((order) => {
      const searchable = [order.id, order.customer, order.owner, order.status, order.item, order.type].join(" ").toLowerCase();
      const numberMatch = digits && order.id.replace(/\D/g, "").includes(digits);
      return !cleanQuery || searchable.includes(cleanQuery) || numberMatch;
    })
    .slice(0, 5)
    .map((order) => ({
      type: "order",
      id: order.id,
      title: order.id,
      description: `${order.customer} · ${order.status} · ${order.item}`,
      badge: "Order",
      tone: "bg-orange-50 text-orange-600",
    }));

  const pageResults = searchablePages
    .filter((page) => !cleanQuery || [page.label, page.group, page.description].join(" ").toLowerCase().includes(cleanQuery))
    .slice(0, 6)
    .map((page) => ({
      type: "page",
      id: page.id,
      title: page.label,
      description: page.description,
      badge: page.group,
      tone: "bg-secondary text-foreground",
    }));

  return { customerResults, fitProfileResults, orderResults, pageResults };
}

function renderGlobalSearch() {
  const { customerResults, fitProfileResults, orderResults, pageResults } = globalSearchResults(state.globalSearchQuery);
  const html = [
    resultSection("Customers", customerResults),
    resultSection("FitProfiles", fitProfileResults),
    resultSection("Orders and numbers", orderResults),
    resultSection("Pages", pageResults),
  ].join("");
  el("globalSearchResults").innerHTML =
    html ||
    `<div class="px-3 py-12 text-center text-sm text-muted-foreground">No matches yet. Try a customer name, an order number, a TryOn number, or a page name.</div>`;
  translatePage(el("globalSearchResults"));
}

function setGlobalSearchModal(open, query = "") {
  el("globalSearchModal").classList.toggle("open", open);
  if (open) {
    state.globalSearchQuery = query;
    el("globalSearchModalInput").value = query;
    renderGlobalSearch();
    window.setTimeout(() => el("globalSearchModalInput").focus(), 0);
  }
  setOverlay(open || anyModalOpen());
}

function activateSearchResult(type, id) {
  closeModals();
  if (type === "customer") {
    renderCustomerDetail(id);
    return;
  }
  if (type === "fitprofile") {
    const fallbackCustomer = state.selectedCustomerId || customers[0].id;
    renderCustomerDetail(fallbackCustomer);
    state.detailTab = "fitprofiles";
    renderDetailTabs();
    renderFitProfileModal(id);
    return;
  }
  if (type === "order") {
    const order = orders.find((item) => item.id === id);
    const customer = customers.find((item) => fullName(item).toLowerCase() === (order?.customer || "").toLowerCase()) || customers[0];
    renderCustomerDetail(customer.id);
    showToast(`Opened order ${id}.`);
    return;
  }
  if (type === "page") {
    if (id === "home") setPage("home");
    if (id === "customers") setPage("overview");
    if (id === "orders") setPage("orders");
    if (id === "shop-settings") setPage("shopSettings");
    if (id === "delivery") setPage("deliveryCalendar");
    if (id === "invoices") setPage("invoices");
    if (id === "downloads") setPage("downloads");
    if (id === "stock" || id === "suit-fabrics") {
      closeNavPopouts();
      setPage("fabricInventory");
    }
    if (id === "label-stock") {
      closeNavPopouts();
      setPage("labelInventory");
    }
    if (id === "fitprofiles") {
      renderCustomerDetail(state.selectedCustomerId || customers[0].id);
      state.detailTab = "fitprofiles";
      renderDetailTabs();
    }
    showToast(`${searchablePages.find((page) => page.id === id)?.label || "Page"} selected.`);
  }
}

function renderFitProfileModal(profileId) {
  const profile = fitProfiles.find((item) => item.id === profileId) || fitProfiles[0];
  state.activeFitProfileId = profile.id;
  const modalTryOn = profile.detailTryOn || profile.tryOn;
  setText("fitProfileModalTitle", `FitProfile - ${profile.garment},${profile.fit},${modalTryOn}`);
  setText("fitProfileFitPill", `Fit - ${profile.fit}`);
  setText("fitProfileTryOnPill", `TryOn - ${modalTryOn}`);
  setText("fitProfileCreatorPill", `Created by ${profile.creator}`);
  setText("fitProfileAdvisorMeta", `Last updated 08-Feb-14 04:26 · ${profile.garment}, ${profile.fit}, ${modalTryOn}`);
  setText("toggleFitProfileHistoryBtn", state.fitProfileHistoryVisible ? "Hide history" : "Show history");

  const rows = (items) =>
    items
      .map(([label, current]) => {
        return `
          <div class="fit-panel-row">
            <div class="min-w-0">
              <span class="block truncate text-muted-foreground">${label}</span>
            </div>
            <span class="text-right font-medium">${current}</span>
          </div>
        `;
      })
      .join("");

  const header = `
    <div class="fit-panel-row bg-secondary text-xs font-medium uppercase tracking-normal text-muted-foreground">
      <span>Measurement</span>
      <span class="text-right">Current</span>
    </div>
  `;
  const historyVersions = fitProfileHistoryVersions(profile);

  el("fitToolsPanelRows").innerHTML = header + rows(fitToolAdjustments);
  el("desiredMeasurementsPanelRows").innerHTML = header + rows(desiredMeasurements);
  el("fitProfileHistorySection").classList.toggle("hidden", !state.fitProfileHistoryVisible);
  el("fitProfileCurrentToolsPanel")?.classList.toggle("hidden", state.fitProfileHistoryVisible);
  el("fitProfileCurrentPanels")?.classList.toggle("lg:grid-cols-2", !state.fitProfileHistoryVisible);
  el("fitProfileCurrentPanels")?.classList.toggle("lg:grid-cols-1", state.fitProfileHistoryVisible);
  setText("fitProfileHistoryCount", `${fitToolAdjustments.length} FitTools`);
  el("fitProfileHistoryRows").innerHTML = fitProfileHistoryMatrix(
    [
      { label: "FitTools", items: fitToolAdjustments },
    ],
    historyVersions,
  );
  translatePage(el("fitProfileModal"));
  setFitProfileModal(true);
}

function navigateFitProfile(direction) {
  const currentIndex = Math.max(0, fitProfiles.findIndex((profile) => profile.id === state.activeFitProfileId));
  const nextIndex = (currentIndex + direction + fitProfiles.length) % fitProfiles.length;
  renderFitProfileModal(fitProfiles[nextIndex].id);
}

function positionSidebarPopout(panel, trigger, sidebar) {
  const viewportGap = 8;
  const sidebarRect = sidebar.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const panelHeight = panel.offsetHeight || panel.getBoundingClientRect().height || 0;
  const panelWidth = panel.offsetWidth || panel.getBoundingClientRect().width || 232;
  const minTop = viewportGap - sidebarRect.top;
  const maxTop = Math.max(minTop, window.innerHeight - panelHeight - viewportGap - sidebarRect.top);
  const preferredTop = triggerRect.top - sidebarRect.top;
  const top = Math.min(Math.max(preferredTop, minTop), maxTop);
  const preferredLeft = triggerRect.right - sidebarRect.left + 6;
  const maxLeft = Math.max(viewportGap - sidebarRect.left, window.innerWidth - panelWidth - viewportGap - sidebarRect.left);
  const left = Math.min(preferredLeft, maxLeft);
  panel.style.top = `${top}px`;
  panel.style.left = `${left}px`;
}

function positionSidebarSubpopout(panel, trigger) {
  const viewportGap = 8;
  const triggerRect = trigger.getBoundingClientRect();
  const panelHeight = panel.offsetHeight || panel.getBoundingClientRect().height || 0;
  const panelWidth = panel.offsetWidth || panel.getBoundingClientRect().width || 232;
  const top = Math.min(Math.max(triggerRect.top - 2, viewportGap), Math.max(viewportGap, window.innerHeight - panelHeight - viewportGap));
  const preferredLeft = triggerRect.right + 6;
  const left = Math.min(preferredLeft, Math.max(viewportGap, window.innerWidth - panelWidth - viewportGap));
  panel.style.top = `${top}px`;
  panel.style.left = `${left}px`;
}

function renderNavPopouts() {
  document.querySelectorAll("[data-popout-panel]").forEach((panel) => {
    const open = panel.dataset.popoutPanel === state.activeNavPopout;
    panel.classList.toggle("open", open);
    if (open && panel.closest(".sidebar")) {
      const sidebar = panel.closest(".sidebar");
      const trigger = [...sidebar.querySelectorAll(`.nav-popout-trigger[data-popout="${panel.dataset.popoutPanel}"]`)].find((item) => item.offsetParent !== null) || sidebar.querySelector(`.nav-popout-trigger[data-popout="${panel.dataset.popoutPanel}"]`);
      if (trigger) {
        positionSidebarPopout(panel, trigger, sidebar);
      }
    }
  });
  document.querySelectorAll("[data-subpopout-panel]").forEach((panel) => {
    const open = panel.dataset.subpopoutPanel === state.activeNavSubpopout && Boolean(state.activeNavPopout);
    panel.classList.toggle("open", open);
    if (open && panel.closest(".sidebar")) {
      const sidebar = panel.closest(".sidebar");
      const trigger = sidebar.querySelector(`.nav-subpopout-trigger[data-subpopout="${panel.dataset.subpopoutPanel}"]`);
      if (trigger) positionSidebarSubpopout(panel, trigger);
    }
  });
  const activeNav = ["fabricInventory", "labelInventory"].includes(state.currentPage) ? "stock" : ["orders", "orderDetail", "onePageOrder", "legacyReadyMadeOrder"].includes(state.currentPage) ? "orders" : state.currentPage === "home" ? "home" : state.currentPage === "shopSettings" ? "shopSettings" : state.currentPage === "deliveryCalendar" ? "delivery" : state.currentPage === "invoices" ? "invoices" : state.currentPage === "legacyRPrice" ? "other" : state.currentPage === "downloads" ? "downloads" : "customers";
  document.querySelectorAll(".nav-popout-trigger").forEach((trigger) => {
    const isCurrentPrimary = trigger.dataset.primaryNav === activeNav;
    trigger.classList.toggle("active", isCurrentPrimary);
  });
}

function renderCompanyView() {
  document.querySelectorAll(".company-info-col").forEach((node) => {
    node.classList.toggle("hidden", !state.companyInfoVisible);
  });
  el("customerTable").style.minWidth = state.companyInfoVisible ? "1340px" : "860px";
  el("customerTable").classList.toggle("company-visible", state.companyInfoVisible);
  el("companyInfoViewBtn").classList.toggle("bg-sky-100", state.companyInfoVisible);
  el("companyInfoViewBtn").classList.toggle("text-sky-700", state.companyInfoVisible);
  el("companyInfoViewBtn").classList.toggle("bg-secondary", !state.companyInfoVisible);
  el("companyInfoViewBtn").classList.toggle("text-foreground", !state.companyInfoVisible);
}

function applyActionColumnMode() {
  document.body.classList.toggle("action-right-mode", state.actionColumnSide === "right");
  document.body.classList.toggle("action-left-mode", state.actionColumnSide === "left");
  localStorage.setItem("relocate-action-column-side", state.actionColumnSide);
}

function renderChips() {
  const chips = [];
  const quickQuery = getQuickQuery();
  if (quickQuery) chips.push({ key: "quick", label: quickQuery });
  advancedFields.forEach(([key, label]) => {
    if (state.advancedFilters[key]) chips.push({ key, label: `${label}: ${state.advancedFilters[key]}` });
  });

  el("filterChips").innerHTML = chips
    .map(
      (chip) => `
        <button class="filter-chip pill bg-sky-100 text-sky-700" data-key="${chip.key}">
          ${chip.label}
          <span class="ml-1 text-base leading-none">x</span>
        </button>
      `,
    )
    .join("");
  translatePage(el("filterChips"));
  return chips;
}

function renderCustomerHeader() {
  const actionCol = `<col class="customer-action-col" style="width: 120px" />`;
  const fillerCol = `<col />`;
  const dataCols = `
    <col style="width: 360px" />
    <col style="width: 120px" />
    <col style="width: 180px" />
    <col class="company-info-col hidden" style="width: 220px" />
    <col class="company-info-col hidden" style="width: 260px" />
  `;
  el("customerTableCols").innerHTML = `
    ${state.actionColumnSide === "left" ? actionCol : ""}
    ${dataCols}
    ${state.actionColumnSide === "left" ? fillerCol : ""}
    ${state.actionColumnSide === "right" ? actionCol : ""}
  `;

  const actionHeader = `<th class="sticky-action-cell px-2 py-5 text-left font-medium">Actions</th>`;
  const fillerHeader = `<th class="px-0 py-5"></th>`;
  const dataHeaders = `
    <th class="customer-user-cell px-2 py-5">${sortButtonMarkup("customers", "fullName", "User", state.customerSort)}</th>
    <th class="customer-status-cell px-4 py-5">${sortButtonMarkup("customers", "status", "Status", state.customerSort)}</th>
    <th class="customer-mobile-cell px-4 py-5">${sortButtonMarkup("customers", "mobile", "Mobile number", state.customerSort)}</th>
    <th class="company-info-col hidden px-4 py-5">${sortButtonMarkup("customers", "company", "Company name", state.customerSort)}</th>
    <th class="company-info-col hidden px-4 py-5">${sortButtonMarkup("customers", "companyAddress", "Company address", state.customerSort)}</th>
  `;
  el("customerTableHead").innerHTML = `
    <tr class="border-b border-border">
      ${state.actionColumnSide === "left" ? actionHeader : ""}
      ${dataHeaders}
      ${state.actionColumnSide === "left" ? fillerHeader : ""}
      ${state.actionColumnSide === "right" ? actionHeader : ""}
    </tr>
  `;
}

function customerActionCell(customer) {
  return `
    <td class="sticky-action-cell ${state.activeMenuId === customer.id ? "action-cell-open" : ""} relative px-2">
      <button class="actions-btn row-action-btn customer-action-btn btn btn-soft" data-id="${customer.id}">
        ${icon("dots", "h-4 w-4")}
        Actions
      </button>
      <div class="dropdown action-menu fixed z-[60] w-48 rounded-lg border border-border bg-card p-1 text-sm shadow-lg ${state.activeMenuId === customer.id ? "open" : ""}" style="left: ${state.activeMenuPosition?.left || 0}px; top: ${state.activeMenuPosition?.top || 0}px;" data-menu-id="${customer.id}">
        <button class="menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-action="view" data-id="${customer.id}">View customer</button>
        <button class="menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-action="fit" data-id="${customer.id}">Create FitProfile</button>
        <button class="menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-action="order" data-id="${customer.id}">Create order</button>
        <button class="menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-action="edit" data-id="${customer.id}">Edit information</button>
        <button class="menu-action flex w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-red-50" data-action="delete" data-id="${customer.id}">Delete customer</button>
      </div>
    </td>
  `;
}

function fabricStatusMarkup(status) {
  const cls = status === "Available" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600";
  return `<span class="status ${cls}">${status}</span>`;
}

function fabricCutLengthMarkup(active) {
  return active ? '<span class="status bg-sky-100 text-sky-700">Cut Length</span>' : '<span class="text-muted-foreground">-</span>';
}

function collectFabricFilters() {
  const filters = {};
  document.querySelectorAll("[data-fabric-select], input[data-fabric-filter]").forEach((field) => {
    const key = field.dataset.fabricSelect || field.dataset.fabricFilter;
    const value = (field.dataset.value || field.value || "").trim();
    if (value) {
      filters[key] = {
        label: field.dataset.filterLabel,
        value,
      };
    }
  });
  Object.entries(fabricCoreFilterDefaults).forEach(([key, filter]) => {
    if (!filters[key]?.value) filters[key] = { ...filter };
  });
  return filters;
}

function syncFabricFilterField(key, value) {
  document.querySelectorAll(`[data-fabric-select="${key}"]`).forEach((field) => {
    field.dataset.value = value;
    const label = field.querySelector(".fabric-select-label");
    if (label) {
      label.textContent = key === "make" && value ? value.charAt(0).toUpperCase() + value.slice(1) : value || field.dataset.filterPlaceholder || "Any";
      label.classList.toggle("text-muted-foreground", !value);
      label.classList.toggle("text-foreground", Boolean(value));
    }
  });
  document.querySelectorAll(`input[data-fabric-filter="${key}"]`).forEach((field) => {
    field.value = value;
    syncDateDisplayFor(field);
  });
}

function fabricFilterDisplayValue(key, value) {
  if (key === "make" && value) return value.charAt(0).toUpperCase() + value.slice(1);
  return value;
}

function openFabricSelect(field) {
  if (!field.dataset.selectInstance) {
    field.dataset.selectInstance = `fabric-select-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
  const rect = field.getBoundingClientRect();
  const isOpen = state.activeFabricSelect === field.dataset.fabricSelect && state.activeFabricSelectInstance === field.dataset.selectInstance;
  state.activeFabricSelect = isOpen ? null : field.dataset.fabricSelect;
  state.activeFabricSelectInstance = isOpen ? null : field.dataset.selectInstance;
  state.activeFabricSelectPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
  renderFabricSelectMenu();
}

function renderFabricSelectMenu() {
  const menu = el("fabricSelectMenu");
  document.querySelectorAll("[data-fabric-select]").forEach((button) => {
    button.setAttribute(
      "aria-expanded",
      state.activeFabricSelect === button.dataset.fabricSelect && state.activeFabricSelectInstance === button.dataset.selectInstance ? "true" : "false",
    );
  });
  if (!state.activeFabricSelect) {
    menu.classList.remove("open");
    return;
  }

  const activeButton = document.querySelector(`[data-fabric-select="${state.activeFabricSelect}"][data-select-instance="${state.activeFabricSelectInstance}"]`);
  const selectedValue = activeButton?.dataset.value || "";
  const options = fabricSelectOptions[state.activeFabricSelect] || [];
  const isCoreFilter = fabricCoreFilterKeys.has(state.activeFabricSelect);
  menu.innerHTML = `
    ${
      isCoreFilter
        ? ""
        : `
          <button class="fabric-select-option ${!selectedValue ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="">
            <span>${activeButton?.dataset.filterPlaceholder || "Any"}</span>
            ${!selectedValue ? '<svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>' : ""}
          </button>
        `
    }
    ${options
      .map(
        (option) => `
          <button class="fabric-select-option ${selectedValue === option ? "selected" : ""} flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary" data-value="${option}">
            <span class="min-w-0 truncate">${fabricFilterDisplayValue(state.activeFabricSelect, option)}</span>
            ${selectedValue === option ? '<svg class="icon h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>' : ""}
          </button>
        `,
      )
      .join("")}
  `;
  if (activeButton) positionFloatingSelectMenu(menu, activeButton);
  translatePage(menu);
}

function repositionFabricFloatingControls() {
  if (state.activeFabricSelect) renderFabricSelectMenu();
  if (state.activeDatePickerInput) renderDatePickerMenu();
}

function persistFabricFavorites() {
  localStorage.setItem("relocate-fabric-favorites-unlocked", String(state.fabricFavoritesUnlocked));
  localStorage.setItem("relocate-fabric-favorite-filters", JSON.stringify(state.fabricFavoriteFilters));
}

function renderFabricFavoriteButtons() {
  document.querySelectorAll("[data-fabric-favorite]").forEach((button) => {
    const active = state.fabricFavoriteFilters.includes(button.dataset.fabricFavorite);
    button.classList.toggle("hidden", !state.fabricFutureFeaturesUnlocked);
    button.classList.toggle("active", active);
    button.textContent = active ? "★" : "☆";
    button.title = active ? "Remove from visible filters" : "Save to visible filters";
  });
}

function renderFabricFavoriteFilters() {
  const container = el("fabricFavoriteFilters");
  if (!container) return;
  if (!state.fabricFutureFeaturesUnlocked) {
    container.innerHTML = "";
    renderFabricFavoriteButtons();
    return;
  }
  container.innerHTML = state.fabricFavoriteFilters
    .map((key) => {
      const definition = fabricFilterDefinitions[key];
      if (!definition) return "";
      if (definition.type === "date") {
        return `
          <label class="fabric-filter-field w-full ${definition.width}">
            <span>${definition.label}</span>
            ${dateFieldMarkup(`data-fabric-filter="${key}" data-filter-label="${definition.label}"`)}
          </label>
        `;
      }
      return `
        <label class="fabric-filter-field w-full ${definition.width}">
          <span>${definition.label}</span>
          <button class="field fabric-select flex" data-fabric-select="${key}" data-filter-label="${definition.label}" data-filter-placeholder="${definition.placeholder}" type="button">
            <span class="fabric-select-label text-muted-foreground">${definition.placeholder}</span>
            <svg class="icon h-4 w-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
          </button>
        </label>
      `;
    })
    .join("");
  Object.entries(state.fabricFilters).forEach(([key, filter]) => syncFabricFilterField(key, filter.value));
  renderFabricFavoriteButtons();
  translatePage(container);
}

function activeFabricAdvancedFilterEntries() {
  return Object.entries(state.fabricFilters).filter(([key]) => !fabricCoreFilterKeys.has(key));
}

function activeFabricAdvancedFilterCountEntries() {
  const exposedKeys = new Set(["item"]);
  if (window.matchMedia("(min-width: 768px)").matches) exposedKeys.add("make");
  if (window.matchMedia("(min-width: 1160px)").matches) exposedKeys.add("cl");
  return Object.entries(state.fabricFilters).filter(([key]) => !exposedKeys.has(key));
}

function renderFabricFilterChips() {
  const chips = activeFabricAdvancedFilterEntries();
  const chipContainer = el("fabricFilterChips");
  const countBadge = el("fabricAdvancedFilterCount");
  const count = activeFabricAdvancedFilterCountEntries().length;
  const hasSearch = Boolean(el("fabricSearch")?.value.trim());
  const showToolbar = state.fabricFutureFeaturesUnlocked || hasSearch || chips.length > 0;
  if (countBadge) {
    countBadge.textContent = String(count);
    countBadge.classList.toggle("hidden", count === 0);
  }
  el("fabricResultToolbar")?.classList.toggle("hidden", !showToolbar);
  el("fabricResultToolbar")?.classList.toggle("flex", showToolbar);
  el("fabricViewOptions")?.classList.toggle("hidden", !state.fabricFutureFeaturesUnlocked);
  el("fabricViewOptions")?.classList.toggle("flex", state.fabricFutureFeaturesUnlocked);
  if (!chipContainer) return chips;
  const showChips = chips.length > 0;
  chipContainer.classList.toggle("hidden", !showChips);
  chipContainer.innerHTML = showChips
    ? chips
    .map(
      ([key, filter]) => `
        <button class="fabric-filter-chip pill bg-sky-100 text-sky-700" data-fabric-filter-key="${key}">
          ${filter.label}: ${filter.value}
          <span class="ml-1 text-base leading-none">x</span>
        </button>
      `,
    )
    .join("")
    : "";
  translatePage(chipContainer);
  return chips;
}

function fabricMatchesFilters(fabric) {
  return Object.entries(state.fabricFilters).every(([key, filter]) => {
    const value = filter.value;
    if (key === "cl" && value === "Any") return true;
    if (key === "extraDays") {
      return value === "Yes" ? fabric.extraDays !== "-" : fabric.extraDays === "-";
    }
    if (key === "soldOutSince") return fabric.soldOutSince !== "-" && fabric.soldOutSince === formatDateForDisplay(value);
    return String(fabric[key] || "").toLowerCase() === value.toLowerCase();
  });
}

function formatDateForDisplay(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day}-${months[Number(month) - 1] || month}-${year}`;
}

function filteredFabricInventory() {
  const query = el("fabricSearch")?.value.trim().toLowerCase() || "";
  return fabricInventory.filter((fabric) =>
    fabricMatchesFilters(fabric) &&
    (!query ||
      [
        fabric.id,
        fabric.note,
        fabric.availability,
        fabric.soldOutSince,
        fabric.extraDays,
        fabric.priceCat,
        fabric.onOrder,
        fabric.atelier,
        fabric.description,
        fabric.collection,
        fabric.season,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)),
  );
}

function renderFabricHeader() {
  const tableHead = document.querySelector("#fabricTable thead");
  if (!tableHead) return;
  const actionHeader = state.fabricFutureFeaturesUnlocked ? '<th class="fabric-future-action-cell sticky-action-cell action-left-only px-4 py-5 text-center font-medium">Actions</th>' : "";
  const actionHeaderRight = state.fabricFutureFeaturesUnlocked ? '<th class="fabric-future-action-cell sticky-action-cell action-right-only px-4 py-5 text-center font-medium">Actions</th>' : "";
  tableHead.innerHTML = `
    <tr class="border-b border-border">
      ${actionHeader}
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "id", "Fabric", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "availability", "Availability", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "soldOutSince", "Sold out since", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "cutLength", "Cut Length", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "extraDays", "Extra days", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "priceCat", "Price cat", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "onOrder", "Fabric on order", state.fabricSort)}</th>
      <th class="px-4 py-5">${sortButtonMarkup("fabric", "atelier", "Atelier", state.fabricSort)}</th>
      <th class="fabric-description-col px-4 py-5">${sortButtonMarkup("fabric", "description", "Description", state.fabricSort)}</th>
      <th class="fabric-description-col px-4 py-5">${sortButtonMarkup("fabric", "collection", "Collection", state.fabricSort)}</th>
      <th class="fabric-description-col px-4 py-5">${sortButtonMarkup("fabric", "season", "Season", state.fabricSort)}</th>
      ${actionHeaderRight}
    </tr>
  `;
}

function paginatedFabricInventory(rows) {
  const totalPages = Math.max(1, Math.ceil(rows.length / state.fabricPageSize));
  if (state.fabricPage > totalPages) state.fabricPage = totalPages;
  if (state.fabricPage < 1) state.fabricPage = 1;
  const start = (state.fabricPage - 1) * state.fabricPageSize;
  return {
    totalPages,
    visibleRows: rows.slice(start, start + state.fabricPageSize),
  };
}

function renderFabricPagination(totalPages) {
  const container = el("fabricPagination");
  if (!container) return;
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const active = page === state.fabricPage;
    return `<button class="page-number ${active ? "bg-primary text-primary-foreground shadow-sm" : ""}" data-fabric-page="${page}">${page}</button>`;
  }).join("");

  container.innerHTML = `
    <button class="page-link" data-fabric-page-action="previous" ${state.fabricPage === 1 ? "disabled" : ""}>
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
      Previous
    </button>
    ${pageButtons}
    <button class="page-link" data-fabric-page-action="next" ${state.fabricPage === totalPages ? "disabled" : ""}>
      Next
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
    </button>
  `;
}

function labelStatusMarkup(status) {
  const cls =
    status === "Available"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Low Stock"
        ? "bg-amber-50 text-amber-700"
        : "bg-red-50 text-red-600";
  return `<span class="status ${cls}">${status}</span>`;
}

function filteredLabelInventory() {
  const query = state.labelSearchQuery.trim().toLowerCase();
  if (!query) return labelInventory;
  return labelInventory.filter((label) =>
    [label.id, label.code, label.availability, label.productionCode, label.atelier].join(" ").toLowerCase().includes(query),
  );
}

function paginatedLabelInventory(rows) {
  const totalPages = Math.max(1, Math.ceil(rows.length / state.labelPageSize));
  if (state.labelPage > totalPages) state.labelPage = totalPages;
  if (state.labelPage < 1) state.labelPage = 1;
  const start = (state.labelPage - 1) * state.labelPageSize;
  return {
    totalPages,
    visibleRows: rows.slice(start, start + state.labelPageSize),
  };
}

function renderLabelPagination(totalPages) {
  const container = el("labelPagination");
  if (!container) return;
  const visiblePages = Array.from({ length: Math.min(totalPages, 4) }, (_, index) => index + 1);
  container.innerHTML = `
    <button class="page-link" data-label-page-action="previous" ${state.labelPage === 1 ? "disabled" : ""}>
      ${icon("chevron-left", "h-4 w-4")}
      Previous
    </button>
    ${visiblePages
      .map((page) => `<button class="page-number ${page === state.labelPage ? "bg-primary text-primary-foreground shadow-sm" : ""}" data-label-page="${page}">${page}</button>`)
      .join("")}
    <button class="page-link" data-label-page-action="next" ${state.labelPage === totalPages ? "disabled" : ""}>
      Next
      ${icon("chevron-right", "h-4 w-4")}
    </button>
  `;
}

function renderLabelPageSizeMenu() {
  const menu = el("labelPageSizeMenu");
  if (!menu) return;
  menu.classList.toggle("hidden", !state.labelPageSizeOpen);
  menu.querySelectorAll("[data-label-page-size]").forEach((button) => {
    const active = Number(button.dataset.labelPageSize) === state.labelPageSize;
    button.classList.toggle("bg-secondary", active);
    button.classList.toggle("font-medium", active);
  });
}

function renderLabelInventory() {
  if (!el("labelRows")) return;
  const search = el("labelSearch");
  if (search && search.value !== state.labelSearchQuery) search.value = state.labelSearchQuery;
  el("clearLabelSearchBtn")?.classList.toggle("hidden", !state.labelSearchQuery.trim());
  const rows = filteredLabelInventory();
  const { totalPages, visibleRows } = paginatedLabelInventory(rows);
  el("labelRows").innerHTML = visibleRows.length
    ? visibleRows
        .map((label) => {
          const labelValue = label.code || "-";
          const availability = label.code ? label.availability : "Unavailable";
          return `
            <tr class="h-[48px] hover:bg-surface">
              <td class="px-4">
                <div class="flex min-w-0 items-center gap-3">
                  <span class="fabric-swatch-preview" data-fabric-swatch="${escapeAttr(label.swatch)}" style="--fabric-swatch:${escapeAttr(label.swatch)};height:32px;width:32px;" tabindex="0" aria-label="Zoom label swatch for ${escapeAttr(label.id)}"></span>
                  <span class="min-w-0">
                    <span class="block truncate font-medium text-foreground">${escapeHtml(label.id)}</span>
                    <span class="block truncate text-xs text-muted-foreground">${escapeHtml(labelValue)}</span>
                  </span>
                </div>
              </td>
              <td class="px-4">${labelStatusMarkup(availability)}</td>
              <td class="px-4"><span class="text-muted-foreground underline">${escapeHtml(label.productionCode)}</span></td>
              <td class="px-4 text-muted-foreground">${escapeHtml(label.atelier)}</td>
            </tr>
          `;
        })
        .join("")
    : tableEmptyStateMarkup({
        colspan: 4,
        title: "No results found",
        description: "Try adjusting your search to find what you're looking for.",
        resetTarget: "labels",
      });
  setText("labelPageSizeLabel", String(state.labelPageSize));
  setText("labelTotalCount", String(rows.length));
  renderLabelPagination(totalPages);
  renderLabelPageSizeMenu();
  translatePage(el("labelInventoryPage"));
}

function fabricPriceCell(fabric, side) {
  if (!state.fabricFutureFeaturesUnlocked) return "";
  return `
    <td class="fabric-future-action-cell sticky-action-cell action-${side}-only px-4 text-center">
      <button class="fabric-price-btn row-action-btn btn btn-soft h-9 px-3" data-fabric-action-id="${fabric.id}" type="button" title="Actions" aria-haspopup="menu">
        ${icon("dots", "h-4 w-4")}
        Actions
      </button>
    </td>
  `;
}

function renderFabricPageSizeMenu() {
  const menu = el("fabricPageSizeMenu");
  if (!menu) return;
  menu.classList.toggle("hidden", !state.fabricPageSizeOpen);
  menu.querySelectorAll("[data-fabric-page-size]").forEach((button) => {
    const active = Number(button.dataset.fabricPageSize) === state.fabricPageSize;
    button.classList.toggle("bg-secondary", active);
    button.classList.toggle("font-medium", active);
  });
}

function renderFabricExportMenu() {
  const menu = el("fabricExportMenu");
  const trigger = el("fabricExportBtn");
  if (!menu) return;
  if (!state.activeFabricExportPosition) {
    menu.classList.remove("open");
    trigger?.setAttribute("aria-expanded", "false");
    return;
  }
  const width = Math.min(Math.max(state.activeFabricExportPosition.width, 260), window.innerWidth - 32);
  const left = Math.min(Math.max(state.activeFabricExportPosition.left, 16), window.innerWidth - width - 16);
  menu.style.left = `${left}px`;
  menu.style.top = `${state.activeFabricExportPosition.top}px`;
  menu.style.width = `${width}px`;
  menu.classList.add("open");
  trigger?.setAttribute("aria-expanded", "true");
}

function renderFabricActionMenu() {
  const menu = el("fabricActionMenu");
  if (!menu) return;
  if (!state.activeFabricActionId || !state.activeFabricActionPosition) {
    menu.classList.remove("open");
    return;
  }
  const width = Math.min(Math.max(state.activeFabricActionPosition.width, 240), window.innerWidth - 32);
  const left = Math.min(Math.max(state.activeFabricActionPosition.left, 16), window.innerWidth - width - 16);
  menu.style.left = `${left}px`;
  menu.style.top = `${state.activeFabricActionPosition.top}px`;
  menu.style.width = `${width}px`;
  menu.classList.add("open");
}

function renderCustomerPagination(totalPages) {
  const container = el("customerPagination");
  if (!container) return;
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const active = page === state.customerPage;
    return `<button class="page-number ${active ? "bg-primary text-primary-foreground shadow-sm" : ""}" data-customer-page="${page}">${page}</button>`;
  }).join("");

  container.innerHTML = `
    <button class="page-link" data-customer-page-action="previous" ${state.customerPage === 1 ? "disabled" : ""}>
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
      Previous
    </button>
    ${pageButtons}
    <button class="page-link" data-customer-page-action="next" ${state.customerPage === totalPages ? "disabled" : ""}>
      Next
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
    </button>
  `;
}

function renderCustomerPageSizeMenu() {
  const menu = el("pageSizeMenu");
  if (!menu) return;
  menu.classList.toggle("hidden", !state.customerPageSizeOpen);
  menu.querySelectorAll("[data-customer-page-size]").forEach((button) => {
    const active = Number(button.dataset.customerPageSize) === state.customerPageSize;
    button.classList.toggle("bg-secondary", active);
    button.classList.toggle("font-medium", active);
  });
}

function renderCustomerMobileCards(visibleRows, totalRows) {
  const container = el("customerMobileCards");
  if (!container) return;
  if (!totalRows.length) {
    container.innerHTML = `<div class="px-4 py-14 text-center text-sm text-muted-foreground">No customer results match these filters.</div>`;
    return;
  }

  container.innerHTML = visibleRows
    .map(
      (customer) => `
        <article class="customer-mobile-card" data-id="${customer.id}">
          <div class="flex items-start justify-between gap-3">
            <button class="open-customer flex min-w-0 items-center gap-3 text-left" data-id="${customer.id}" type="button">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-sm text-muted-foreground">${initials(customer)}</span>
              <span class="min-w-0">
                <span class="block truncate font-medium text-foreground">${fullName(customer)}</span>
                <span class="block truncate text-sm text-muted-foreground">${customerEmailDisplay(customer)}</span>
              </span>
            </button>
            ${statusMarkup(customer.status)}
          </div>
          <div class="mt-4 grid gap-2 text-sm text-muted-foreground">
            <div class="flex items-center justify-between gap-4">
              <span>Mobile number</span>
              <span class="truncate text-right text-foreground">${customer.mobile || "-"}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span>Address</span>
              <span class="truncate text-right text-foreground">${fullAddress(customer) || "-"}</span>
            </div>
            ${
              state.companyInfoVisible
                ? `
                  <div class="flex items-center justify-between gap-4">
                    <span>Company name</span>
                    <span class="truncate text-right text-foreground">${customer.company || "-"}</span>
                  </div>
                `
                : ""
            }
          </div>
          <div class="customer-mobile-card-actions mt-4">
            <button class="btn btn-soft menu-action" data-action="view" data-id="${customer.id}" type="button">View customer</button>
            <button class="btn btn-soft menu-action" data-action="fit" data-id="${customer.id}" type="button">Create FitProfile</button>
            <button class="btn btn-soft menu-action" data-action="order" data-id="${customer.id}" type="button">Create order</button>
            <button class="btn btn-soft menu-action" data-action="edit" data-id="${customer.id}" type="button">Edit information</button>
            <button class="btn btn-soft menu-action text-red-600 hover:bg-red-50" data-action="delete" data-id="${customer.id}" type="button">Delete customer</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFabricInventory() {
  if (!el("fabricRows")) return;
  hideFabricSwatchZoom();
  ensureFabricCoreFilters();
  Object.entries(state.fabricFilters).forEach(([key, filter]) => syncFabricFilterField(key, filter.value));
  const rows = sortRows(filteredFabricInventory(), state.fabricSort, fabricSortAccessors);
  const { totalPages, visibleRows } = paginatedFabricInventory(rows);
  el("clearFabricSearchBtn")?.classList.toggle("hidden", !(el("fabricSearch")?.value.trim()));
  el("fabricTable").style.minWidth = state.fabricFutureFeaturesUnlocked ? "1660px" : "1440px";
  document.querySelectorAll(".fabric-future-action-col").forEach((node) => {
    node.classList.toggle("hidden", !state.fabricFutureFeaturesUnlocked);
  });
  renderFabricFilterChips();
  renderFabricHeader();
  el("fabricRows").innerHTML = visibleRows
    .map(
      (fabric) => `
        <tr class="h-[70px] hover:bg-surface" data-fabric-id="${fabric.id}">
          ${fabricPriceCell(fabric, "left")}
          <td class="px-4">
            <div class="flex min-w-0 items-center gap-3">
              <span class="fabric-swatch-preview" data-fabric-swatch="${escapeAttr(fabric.swatch)}" style="--fabric-swatch:${escapeAttr(fabric.swatch)}" tabindex="0" aria-label="Zoom fabric swatch for ${escapeAttr(fabric.id)}"></span>
              <span class="min-w-0">
                <span class="block truncate font-medium text-foreground">${fabric.id}</span>
                ${fabric.note ? `<span class="block truncate text-muted-foreground">${fabric.note}</span>` : ""}
              </span>
            </div>
          </td>
          <td class="px-4">${fabricStatusMarkup(fabric.availability)}</td>
          <td class="px-4">${fabric.soldOutSince === "-" ? '<span class="text-muted-foreground">-</span>' : `<span class="status bg-red-50 text-red-600">${fabric.soldOutSince}</span>`}</td>
          <td class="px-4">${fabricCutLengthMarkup(fabric.cutLength)}</td>
          <td class="px-4 text-muted-foreground">${fabric.extraDays}</td>
          <td class="truncate px-4 text-muted-foreground">${fabric.priceCat}</td>
          <td class="px-4 text-muted-foreground">${fabric.onOrder}</td>
          <td class="px-4 text-muted-foreground">${fabric.atelier}</td>
          <td class="fabric-description-col px-4 text-muted-foreground">${fabric.description}</td>
          <td class="fabric-description-col px-4 text-muted-foreground">${fabric.collection}</td>
          <td class="fabric-description-col px-4 text-muted-foreground">${fabric.season}</td>
          ${fabricPriceCell(fabric, "right")}
        </tr>
      `,
    )
    .join("");

  if (!rows.length) {
    el("fabricRows").innerHTML = tableEmptyStateMarkup({
      colspan: state.fabricFutureFeaturesUnlocked ? 13 : 11,
      title: "No results found",
      description: "Try adjusting your search or filters to find what you're looking for.",
      resetTarget: "fabric",
    });
  }
  document.querySelectorAll(".fabric-description-col").forEach((node) => {
    node.classList.toggle("hidden", !state.fabricDescriptionVisible);
  });

  el("fabricDescriptionToggle").classList.toggle("bg-sky-100", state.fabricDescriptionVisible);
  el("fabricDescriptionToggle").classList.toggle("text-sky-700", state.fabricDescriptionVisible);
  el("fabricDescriptionToggle").classList.toggle("bg-secondary", !state.fabricDescriptionVisible);
  el("fabricDescriptionToggle").classList.toggle("text-foreground", !state.fabricDescriptionVisible);
  setText("fabricResultText", activeFabricAdvancedFilterEntries().length || el("fabricSearch").value.trim() ? "Showing results containing" : "Showing all result");
  setText("fabricPageSizeLabel", String(state.fabricPageSize));
  setText("fabricTotalCount", String(rows.length));
  renderFabricPagination(totalPages);
  renderFabricPageSizeMenu();
  renderFabricExportMenu();
  renderFabricActionMenu();

  translatePage(el("fabricInventoryPage"));
}

function positionFabricSwatchZoom(trigger) {
  const zoom = el("fabricSwatchZoom");
  if (!zoom || !trigger) return;
  const rect = trigger.getBoundingClientRect();
  const gap = 12;
  const size = 160;
  const swatch = trigger.dataset.fabricSwatch || trigger.style.getPropertyValue("--fabric-swatch") || "#747560";
  const preferredLeft = rect.right + gap;
  const left = preferredLeft + size + gap > window.innerWidth ? Math.max(gap, rect.left - size - gap) : preferredLeft;
  const top = Math.min(Math.max(gap, rect.top + rect.height / 2 - size / 2), Math.max(gap, window.innerHeight - size - gap));
  zoom.style.setProperty("--fabric-swatch", swatch);
  zoom.style.left = `${left}px`;
  zoom.style.top = `${top}px`;
  zoom.classList.add("open");
}

function hideFabricSwatchZoom() {
  el("fabricSwatchZoom")?.classList.remove("open");
}

function renderRows() {
  const rows = sortRows(filteredCustomers(), state.customerSort, customerSortAccessors);
  const totalPages = Math.max(1, Math.ceil(rows.length / state.customerPageSize));
  state.customerPage = Math.min(state.customerPage, totalPages);
  const start = (state.customerPage - 1) * state.customerPageSize;
  const visibleRows = rows.slice(start, start + state.customerPageSize);
  const chips = renderChips();
  setText("resultText", chips.length || getQuickQuery() ? "Showing results containing" : "Showing all result");
  renderCustomerHeader();

  el("customerRows").innerHTML = visibleRows
    .map(
      (customer) => `
        <tr class="h-14 hover:bg-surface" data-id="${customer.id}">
          ${state.actionColumnSide === "left" ? customerActionCell(customer) : ""}
          <td class="customer-user-cell px-2">
            <button class="open-customer flex min-w-0 items-center gap-3 text-left" data-id="${customer.id}">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-sm text-muted-foreground">${initials(customer)}</span>
              <span class="min-w-0">
                <span class="block truncate font-medium text-foreground">${fullName(customer)}</span>
                <span class="block truncate text-muted-foreground">${customerEmailDisplay(customer)}</span>
              </span>
            </button>
          </td>
          <td class="customer-status-cell px-4">${statusMarkup(customer.status)}</td>
          <td class="customer-mobile-cell truncate px-4 text-muted-foreground">${customer.mobile}</td>
          <td class="company-info-col hidden truncate px-4 text-muted-foreground">${customer.company || "-"}</td>
          <td class="company-info-col hidden truncate px-4 text-muted-foreground">${customer.company ? fullAddress(customer) : "-"}</td>
          ${state.actionColumnSide === "left" ? '<td class="px-0"></td>' : ""}
          ${state.actionColumnSide === "right" ? customerActionCell(customer) : ""}
        </tr>
      `,
    )
    .join("");

  if (!rows.length) {
    el("customerRows").innerHTML = `
      <tr>
        <td colspan="${state.companyInfoVisible ? 7 : 5}" class="px-4 py-14 text-center text-sm text-muted-foreground">No customer results match these filters.</td>
      </tr>
    `;
  }
  renderCustomerMobileCards(visibleRows, rows);
  renderCompanyView();
  setText("pageSizeLabel", String(state.customerPageSize));
  setText("customerTotalCount", `of ${rows.length} customers`);
  renderCustomerPagination(totalPages);
  renderCustomerPageSizeMenu();
  translatePage(el("overviewPage"));
}

function showToast(message) {
  const toast = el("toast");
  setText(toast, message);
  toast.classList.remove("hidden");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.add("hidden"), 2200);
}

const tokenInspectorVars = [
  "--dashboard-background",
  "--dashboard-background-dark",
  "--table-row-hover",
  "--app-shell",
  "--surface",
  "--sidebar",
  "--sidebar-foreground",
  "--sidebar-primary",
  "--sidebar-primary-foreground",
  "--sidebar-accent",
  "--sidebar-accent-foreground",
  "--sidebar-border",
  "--sidebar-ring",
  "--background",
  "--foreground",
  "--card",
  "--card-foreground",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--muted",
  "--muted-foreground",
  "--success",
  "--success-foreground",
  "--success-soft",
  "--success-soft-foreground",
  "--success-border",
  "--info",
  "--info-foreground",
  "--info-soft",
  "--info-soft-foreground",
  "--info-border",
  "--warning",
  "--warning-foreground",
  "--warning-soft",
  "--warning-soft-foreground",
  "--warning-border",
  "--destructive",
  "--destructive-foreground",
  "--destructive-soft",
  "--destructive-soft-foreground",
  "--destructive-border",
  "--border",
  "--input",
  "--ring",
];

const tokenInspectorTailwindColors = {
  "#ffffff": ["tailwind: white"],
  "#000000": ["tailwind: black"],
  "#f8fafc": ["tailwind: slate-50"],
  "#f1f5f9": ["tailwind: slate-100"],
  "#e2e8f0": ["tailwind: slate-200"],
  "#94a3b8": ["tailwind: slate-400"],
  "#64748b": ["tailwind: slate-500"],
  "#1e293b": ["tailwind: slate-800"],
  "#cbd5e1": ["tailwind: slate-300"],
  "#0f172a": ["tailwind: slate-900"],
  "#020617": ["tailwind: slate-950"],
  "#f9fafb": ["tailwind: gray-50"],
  "#f3f4f6": ["tailwind: gray-100"],
  "#e5e7eb": ["tailwind: gray-200"],
  "#d1d5db": ["tailwind: gray-300"],
  "#9ca3af": ["tailwind: gray-400"],
  "#6b7280": ["tailwind: gray-500"],
  "#4b5563": ["tailwind: gray-600"],
  "#374151": ["tailwind: gray-700"],
  "#1f2937": ["tailwind: gray-800"],
  "#111827": ["tailwind: gray-900"],
  "#030712": ["tailwind: gray-950"],
  "#fafafa": ["tailwind: neutral-50"],
  "#f5f5f5": ["tailwind: neutral-100"],
  "#e5e5e5": ["tailwind: neutral-200"],
  "#d4d4d4": ["tailwind: neutral-300"],
  "#a3a3a3": ["tailwind: neutral-400"],
  "#737373": ["tailwind: neutral-500"],
  "#525252": ["tailwind: neutral-600"],
  "#262626": ["tailwind: neutral-800"],
  "#171717": ["tailwind: neutral-900"],
  "#f4f4f5": ["tailwind: zinc-100"],
  "#27272a": ["tailwind: zinc-800"],
  "#18181b": ["tailwind: zinc-900"],
  "#fafaf9": ["tailwind: stone-50"],
  "#f5f5f4": ["tailwind: stone-100"],
  "#e7e5e4": ["tailwind: stone-200"],
  "#d6d3d1": ["tailwind: stone-300"],
  "#a8a29e": ["tailwind: stone-400"],
  "#78716c": ["tailwind: stone-500"],
  "#57534e": ["tailwind: stone-600"],
  "#44403c": ["tailwind: stone-700"],
  "#292524": ["tailwind: stone-800"],
  "#0c0a09": ["tailwind: stone-950"],
  "#fbfbf9": ["tailwind: olive-50"],
  "#f4f4f0": ["tailwind: olive-100"],
  "#e8e8e3": ["tailwind: olive-200"],
  "#abab9c": ["tailwind: olive-400"],
  "#7c7c67": ["tailwind: olive-500"],
  "#474739": ["tailwind: olive-700"],
  "#2b2b22": ["tailwind: olive-800"],
  "#1d1d16": ["tailwind: olive-900"],
  "#0c0c09": ["tailwind: olive-950"],
  "#fef2f2": ["tailwind: red-50"],
  "#fee2e2": ["tailwind: red-100"],
  "#fecaca": ["tailwind: red-200"],
  "#fca5a5": ["tailwind: red-300"],
  "#f87171": ["tailwind: red-400"],
  "#ef4444": ["tailwind: red-500"],
  "#dc2626": ["tailwind: red-600"],
  "#b91c1c": ["tailwind: red-700"],
  "#991b1b": ["tailwind: red-800"],
  "#450a0a": ["tailwind: red-950"],
  "#fff7ed": ["tailwind: orange-50"],
  "#ffedd5": ["tailwind: orange-100"],
  "#fed7aa": ["tailwind: orange-200"],
  "#fdba74": ["tailwind: orange-300"],
  "#f97316": ["tailwind: orange-500"],
  "#ea580c": ["tailwind: orange-600"],
  "#c2410c": ["tailwind: orange-700"],
  "#9a3412": ["tailwind: orange-800"],
  "#431407": ["tailwind: orange-950"],
  "#fffbeb": ["tailwind: amber-50"],
  "#fef3c7": ["tailwind: amber-100"],
  "#fde68a": ["tailwind: amber-200"],
  "#fbbf24": ["tailwind: amber-400"],
  "#f59e0b": ["tailwind: amber-500"],
  "#d97706": ["tailwind: amber-600"],
  "#b45309": ["tailwind: amber-700"],
  "#92400e": ["tailwind: amber-800"],
  "#fefce8": ["tailwind: yellow-50"],
  "#fef9c3": ["tailwind: yellow-100"],
  "#fef08a": ["tailwind: yellow-200"],
  "#fde047": ["tailwind: yellow-300"],
  "#facc15": ["tailwind: yellow-400"],
  "#eab308": ["tailwind: yellow-500"],
  "#a16207": ["tailwind: yellow-700"],
  "#422006": ["tailwind: yellow-950"],
  "#f7fee7": ["tailwind: lime-50"],
  "#ecfccb": ["tailwind: lime-100"],
  "#bef264": ["tailwind: lime-300"],
  "#84cc16": ["tailwind: lime-500"],
  "#65a30d": ["tailwind: lime-600"],
  "#4d7c0f": ["tailwind: lime-700"],
  "#3f6212": ["tailwind: lime-800"],
  "#ecfdf5": ["tailwind: emerald-50"],
  "#d1fae5": ["tailwind: emerald-100"],
  "#6ee7b7": ["tailwind: emerald-300"],
  "#10b981": ["tailwind: emerald-500"],
  "#059669": ["tailwind: emerald-600"],
  "#047857": ["tailwind: emerald-700"],
  "#065f46": ["tailwind: emerald-800"],
  "#022c22": ["tailwind: emerald-950"],
  "#f0fdf4": ["tailwind: green-50"],
  "#dcfce7": ["tailwind: green-100"],
  "#bbf7d0": ["tailwind: green-200"],
  "#22c55e": ["tailwind: green-500"],
  "#16a34a": ["tailwind: green-600"],
  "#15803d": ["tailwind: green-700"],
  "#166534": ["tailwind: green-800"],
  "#f0fdfa": ["tailwind: teal-50"],
  "#ccfbf1": ["tailwind: teal-100"],
  "#14b8a6": ["tailwind: teal-500"],
  "#0d9488": ["tailwind: teal-600"],
  "#ecfeff": ["tailwind: cyan-50"],
  "#cffafe": ["tailwind: cyan-100"],
  "#06b6d4": ["tailwind: cyan-500"],
  "#0891b2": ["tailwind: cyan-600"],
  "#f0f9ff": ["tailwind: sky-50"],
  "#e0f2fe": ["tailwind: sky-100"],
  "#bae6fd": ["tailwind: sky-200"],
  "#7dd3fc": ["tailwind: sky-300"],
  "#0ea5e9": ["tailwind: sky-500"],
  "#0284c7": ["tailwind: sky-600"],
  "#0369a1": ["tailwind: sky-700"],
  "#075985": ["tailwind: sky-800"],
  "#082f49": ["tailwind: sky-950"],
  "#eff6ff": ["tailwind: blue-50"],
  "#dbeafe": ["tailwind: blue-100"],
  "#3b82f6": ["tailwind: blue-500"],
  "#93c5fd": ["tailwind: blue-300"],
  "#2563eb": ["tailwind: blue-600"],
  "#1d4ed8": ["tailwind: blue-700"],
  "#1e40af": ["tailwind: blue-800"],
  "#1e3a8a": ["tailwind: blue-900"],
  "#eef2ff": ["tailwind: indigo-50"],
  "#e0e7ff": ["tailwind: indigo-100"],
  "#6366f1": ["tailwind: indigo-500"],
  "#4f46e5": ["tailwind: indigo-600"],
  "#f5f3ff": ["tailwind: violet-50"],
  "#ede9fe": ["tailwind: violet-100"],
  "#8b5cf6": ["tailwind: violet-500"],
  "#7c3aed": ["tailwind: violet-600"],
  "#faf5ff": ["tailwind: purple-50"],
  "#f3e8ff": ["tailwind: purple-100"],
  "#a855f7": ["tailwind: purple-500"],
  "#9333ea": ["tailwind: purple-600"],
  "#7e22ce": ["tailwind: purple-700"],
  "#fdf4ff": ["tailwind: fuchsia-50"],
  "#fae8ff": ["tailwind: fuchsia-100"],
  "#d946ef": ["tailwind: fuchsia-500"],
  "#c026d3": ["tailwind: fuchsia-600"],
  "#fdf2f8": ["tailwind: pink-50"],
  "#fce7f3": ["tailwind: pink-100"],
  "#ec4899": ["tailwind: pink-500"],
  "#db2777": ["tailwind: pink-600"],
  "#fff1f2": ["tailwind: rose-50"],
  "#ffe4e6": ["tailwind: rose-100"],
  "#f43f5e": ["tailwind: rose-500"],
  "#e11d48": ["tailwind: rose-600"],
  "#be123c": ["tailwind: rose-700"],
};

const tokenInspectorSyncedThemeSources = {
  canvas: {
    light: {
      "--dashboard-background": ["theme.dashboard-background", "tailwind: olive-100"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: olive-950"],
      "--table-row-hover": ["theme.table-row-hover", "tailwind: olive-100"],
      "--app-shell": ["theme.dashboard-background", "tailwind: olive-100"],
      "--surface": ["theme.background", "tailwind: white"],
      "--sidebar": ["theme.sidebar", "tailwind: olive-50"],
      "--background": ["theme.background", "tailwind: white"],
      "--foreground": ["theme.foreground"],
      "--card": ["theme.card", "tailwind: white"],
      "--card-foreground": ["theme.card-foreground"],
      "--primary": ["theme.primary", "tailwind: green-700"],
      "--primary-foreground": ["theme.primary-foreground"],
      "--secondary": ["theme.secondary", "tailwind: zinc-100"],
      "--secondary-foreground": ["theme.secondary-foreground", "tailwind: zinc-900"],
      "--muted": ["theme.muted"],
      "--muted-foreground": ["theme.muted-foreground"],
      "--border": ["theme.border"],
      "--input": ["theme.input"],
      "--ring": ["theme.ring"],
    },
    dark: {
      "--dashboard-background": ["theme.dashboard-background-dark", "tailwind: olive-950"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: olive-950"],
      "--table-row-hover": ["theme.table-row-hover-dark", "tailwind: olive-800"],
      "--app-shell": ["theme.dashboard-background-dark", "tailwind: olive-950"],
      "--surface": ["theme.background-dark"],
      "--sidebar": ["theme.sidebar-dark", "tailwind: olive-900"],
      "--background": ["theme.background-dark", "tailwind: olive-950"],
      "--foreground": ["theme.foreground-dark"],
      "--card": ["theme.card-dark"],
      "--card-foreground": ["theme.card-foreground-dark"],
      "--primary": ["theme.primary-dark", "tailwind: green-800"],
      "--primary-foreground": ["theme.primary-foreground-dark", "tailwind: green-50"],
      "--secondary": ["theme.secondary-dark", "tailwind: zinc-800"],
      "--secondary-foreground": ["theme.secondary-foreground-dark", "tailwind: neutral-50"],
      "--muted": ["theme.muted-dark"],
      "--muted-foreground": ["theme.muted-foreground-dark"],
      "--border": ["theme.border-dark"],
      "--input": ["theme.input-dark"],
      "--ring": ["theme.ring-dark"],
    },
  },
  blue: {
    light: {
      "--dashboard-background": ["theme.dashboard-background", "tailwind: slate-100"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: gray-950"],
      "--table-row-hover": ["theme.table-row-hover", "tailwind: slate-100"],
      "--app-shell": ["theme.dashboard-background", "tailwind: slate-100"],
      "--surface": ["theme.background", "tailwind: white"],
      "--sidebar": ["theme.sidebar", "tailwind: blue-50"],
      "--background": ["theme.background", "tailwind: white"],
      "--foreground": ["theme.foreground", "tailwind: slate-950"],
      "--card": ["theme.card", "tailwind: white"],
      "--card-foreground": ["theme.card-foreground", "tailwind: slate-950"],
      "--primary": ["theme.primary", "tailwind: blue-700"],
      "--primary-foreground": ["theme.primary-foreground", "tailwind: blue-50"],
      "--secondary": ["theme.secondary", "tailwind: zinc-100"],
      "--secondary-foreground": ["theme.secondary-foreground", "tailwind: zinc-900"],
      "--muted": ["theme.muted", "tailwind: slate-50"],
      "--muted-foreground": ["theme.muted-foreground", "tailwind: slate-500"],
      "--border": ["theme.border", "tailwind: slate-200"],
      "--input": ["theme.input", "tailwind: slate-200"],
      "--ring": ["theme.ring", "tailwind: slate-400"],
    },
    dark: {
      "--dashboard-background": ["theme.dashboard-background-dark", "tailwind: gray-950"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: gray-950"],
      "--table-row-hover": ["theme.table-row-hover-dark", "tailwind: slate-800"],
      "--app-shell": ["theme.dashboard-background-dark", "tailwind: gray-950"],
      "--surface": ["theme.background-dark", "tailwind: slate-950"],
      "--sidebar": ["theme.sidebar-dark", "tailwind: slate-800"],
      "--background": ["theme.background-dark", "tailwind: slate-950"],
      "--foreground": ["theme.foreground-dark", "tailwind: slate-50"],
      "--card": ["theme.card-dark", "tailwind: slate-800"],
      "--card-foreground": ["theme.card-foreground-dark", "tailwind: slate-50"],
      "--primary": ["theme.primary-dark", "tailwind: blue-800"],
      "--primary-foreground": ["theme.primary-foreground-dark", "tailwind: blue-50"],
      "--secondary": ["theme.secondary-dark", "tailwind: zinc-800"],
      "--secondary-foreground": ["theme.secondary-foreground-dark", "tailwind: white"],
      "--muted": ["theme.muted-dark", "tailwind: slate-800"],
      "--muted-foreground": ["theme.muted-foreground-dark", "tailwind: slate-400"],
      "--border": ["theme.border-dark"],
      "--input": ["theme.input-dark"],
      "--ring": ["theme.ring-dark", "tailwind: slate-500"],
    },
  },
  stone: {
    light: {
      "--dashboard-background": ["theme.dashboard-background", "tailwind: stone-100"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--table-row-hover": ["theme.table-row-hover", "tailwind: stone-100"],
      "--app-shell": ["theme.dashboard-background", "tailwind: stone-100"],
      "--surface": ["theme.background", "tailwind: white"],
      "--sidebar": ["theme.sidebar", "tailwind: stone-50"],
      "--background": ["theme.background", "tailwind: white"],
      "--foreground": ["theme.foreground", "tailwind: stone-950"],
      "--card": ["theme.card", "tailwind: white"],
      "--card-foreground": ["theme.card-foreground", "tailwind: stone-950"],
      "--primary": ["theme.primary", "tailwind: stone-800"],
      "--primary-foreground": ["theme.primary-foreground", "tailwind: stone-50"],
      "--secondary": ["theme.secondary", "tailwind: stone-50"],
      "--secondary-foreground": ["theme.secondary-foreground", "tailwind: stone-800"],
      "--muted": ["theme.muted", "tailwind: stone-50"],
      "--muted-foreground": ["theme.muted-foreground", "tailwind: stone-500"],
      "--border": ["theme.border", "tailwind: stone-200"],
      "--input": ["theme.input", "tailwind: stone-200"],
      "--ring": ["theme.ring", "tailwind: stone-400"],
    },
    dark: {
      "--dashboard-background": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--table-row-hover": ["theme.table-row-hover-dark", "tailwind: stone-800"],
      "--app-shell": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--surface": ["theme.background-dark", "tailwind: stone-950"],
      "--sidebar": ["theme.sidebar-dark", "tailwind: stone-800"],
      "--background": ["theme.background-dark", "tailwind: stone-950"],
      "--foreground": ["theme.foreground-dark", "tailwind: stone-50"],
      "--card": ["theme.card-dark", "tailwind: stone-800"],
      "--card-foreground": ["theme.card-foreground-dark", "tailwind: stone-50"],
      "--primary": ["theme.primary-dark", "tailwind: stone-200"],
      "--primary-foreground": ["theme.primary-foreground-dark", "tailwind: stone-800"],
      "--secondary": ["theme.secondary-dark", "tailwind: stone-800"],
      "--secondary-foreground": ["theme.secondary-foreground-dark", "tailwind: stone-50"],
      "--muted": ["theme.muted-dark", "tailwind: stone-800"],
      "--muted-foreground": ["theme.muted-foreground-dark", "tailwind: stone-400"],
      "--border": ["theme.border-dark"],
      "--input": ["theme.input-dark"],
      "--ring": ["theme.ring-dark", "tailwind: stone-500"],
    },
  },
  yellow: {
    light: {
      "--dashboard-background": ["theme.dashboard-background", "tailwind: stone-100"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--table-row-hover": ["theme.table-row-hover", "tailwind: stone-100"],
      "--app-shell": ["theme.dashboard-background", "tailwind: stone-100"],
      "--surface": ["theme.background", "tailwind: white"],
      "--sidebar": ["theme.sidebar", "tailwind: yellow-50"],
      "--background": ["theme.background", "tailwind: white"],
      "--foreground": ["theme.foreground", "tailwind: stone-950"],
      "--card": ["theme.card", "tailwind: white"],
      "--card-foreground": ["theme.card-foreground", "tailwind: stone-950"],
      "--primary": ["theme.primary", "tailwind: yellow-300"],
      "--primary-foreground": ["theme.primary-foreground", "tailwind: amber-800"],
      "--secondary": ["theme.secondary", "tailwind: zinc-100"],
      "--secondary-foreground": ["theme.secondary-foreground", "tailwind: zinc-900"],
      "--muted": ["theme.muted", "tailwind: stone-50"],
      "--muted-foreground": ["theme.muted-foreground", "tailwind: stone-500"],
      "--border": ["theme.border", "tailwind: stone-200"],
      "--input": ["theme.input", "tailwind: stone-200"],
      "--ring": ["theme.ring", "tailwind: stone-400"],
    },
    dark: {
      "--dashboard-background": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--dashboard-background-dark": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--table-row-hover": ["theme.table-row-hover-dark", "tailwind: stone-800"],
      "--app-shell": ["theme.dashboard-background-dark", "tailwind: stone-950"],
      "--surface": ["theme.background-dark", "tailwind: stone-950"],
      "--sidebar": ["theme.sidebar-dark", "tailwind: stone-800"],
      "--background": ["theme.background-dark", "tailwind: stone-950"],
      "--foreground": ["theme.foreground-dark", "tailwind: stone-50"],
      "--card": ["theme.card-dark", "tailwind: stone-800"],
      "--card-foreground": ["theme.card-foreground-dark", "tailwind: stone-50"],
      "--primary": ["theme.primary-dark", "tailwind: yellow-400"],
      "--primary-foreground": ["theme.primary-foreground-dark", "tailwind: amber-800"],
      "--secondary": ["theme.secondary-dark", "tailwind: zinc-800"],
      "--secondary-foreground": ["theme.secondary-foreground-dark", "tailwind: white"],
      "--muted": ["theme.muted-dark", "tailwind: stone-800"],
      "--muted-foreground": ["theme.muted-foreground-dark", "tailwind: stone-400"],
      "--border": ["theme.border-dark"],
      "--input": ["theme.input-dark"],
      "--ring": ["theme.ring-dark", "tailwind: stone-500"],
    },
  },
};

const tokenInspectorModeSources = {
  light: {
    "--success": ["mode.light.theme.success", "tailwind: green-600"],
    "--success-foreground": ["mode.light.theme.primary-foreground", "tailwind: stone-50"],
    "--success-soft": ["mode.light.opacity.success.10", "tailwind: green-50"],
    "--success-soft-foreground": ["tailwind: emerald-800"],
    "--success-border": ["mode.light.opacity.success.20", "tailwind: green-100"],
    "--info": ["mode.light.theme.info", "tailwind: sky-600"],
    "--info-foreground": ["tailwind: sky-50"],
    "--info-soft": ["mode.light.opacity.info.10", "tailwind: sky-50"],
    "--info-soft-foreground": ["tailwind: sky-700"],
    "--info-border": ["mode.light.opacity.info.20", "tailwind: sky-200"],
    "--warning": ["mode.light.theme.warning", "tailwind: amber-600"],
    "--warning-foreground": ["tailwind: amber-50"],
    "--warning-soft": ["mode.light.opacity.warning.10", "tailwind: amber-50"],
    "--warning-soft-foreground": ["tailwind: amber-800"],
    "--warning-border": ["mode.light.opacity.warning.20", "tailwind: amber-100"],
    "--destructive": ["mode.light.theme.destructive", "tailwind: red-600"],
    "--destructive-foreground": ["tailwind: red-50"],
    "--destructive-soft": ["mode.light.opacity.destructive.10", "tailwind: red-50"],
    "--destructive-soft-foreground": ["tailwind: red-700"],
    "--destructive-border": ["mode.light.opacity.destructive.20", "tailwind: red-100"],
  },
  dark: {
    "--success": ["mode.dark.theme.success", "tailwind: green-600"],
    "--success-foreground": ["mode.dark.theme.primary-foreground", "tailwind: green-50"],
    "--success-soft": ["mode.dark.opacity.success.10", "tailwind: emerald-950"],
    "--success-soft-foreground": ["tailwind: emerald-300"],
    "--success-border": ["mode.dark.opacity.success.20", "tailwind: emerald-800"],
    "--info": ["mode.dark.theme.info", "tailwind: sky-600"],
    "--info-foreground": ["tailwind: sky-50"],
    "--info-soft": ["mode.dark.opacity.info.10", "tailwind: sky-950"],
    "--info-soft-foreground": ["tailwind: sky-300"],
    "--info-border": ["mode.dark.opacity.info.20", "tailwind: sky-800"],
    "--warning": ["mode.dark.theme.warning", "tailwind: amber-600"],
    "--warning-foreground": ["tailwind: amber-50"],
    "--warning-soft": ["mode.dark.opacity.warning.10", "tailwind: orange-950"],
    "--warning-soft-foreground": ["tailwind: orange-300"],
    "--warning-border": ["mode.dark.opacity.warning.20", "tailwind: orange-800"],
    "--destructive": ["mode.dark.theme.destructive", "tailwind: red-400"],
    "--destructive-foreground": ["tailwind: red-50"],
    "--destructive-soft": ["mode.dark.opacity.destructive.10", "tailwind: red-950"],
    "--destructive-soft-foreground": ["tailwind: red-300"],
    "--destructive-border": ["mode.dark.opacity.destructive.20", "tailwind: red-800"],
  },
};

const tokenInspectorTransparent = "rgba(0, 0, 0, 0)";
let tokenInspectorCachedColorMap = null;

function colorToHex(color) {
  if (!color || color === "transparent" || color === tokenInspectorTransparent) return "transparent";
  const match = color.match(/rgba?\(([^)]+)\)/i);
  if (!match) return color;
  const parts = match[1].split(",").map((part) => part.trim());
  const [r, g, b] = parts.slice(0, 3).map((value) => Math.max(0, Math.min(255, Number.parseFloat(value))));
  const alpha = parts[3] === undefined ? 1 : Number.parseFloat(parts[3]);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || alpha <= 0) return "transparent";
  const hex = [r, g, b].map((value) => Math.round(value).toString(16).padStart(2, "0")).join("");
  if (alpha < 1) return `#${hex}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
  return `#${hex}`;
}

function tokenInspectorSidebarSources(token, modeKey) {
  if (!token.startsWith("--sidebar")) return [];
  const suffix = token.replace("--sidebar", "").replace(/^-/, "");
  const baseName = suffix ? `theme.sidebar-${suffix}` : "theme.sidebar";
  return [`${baseName}${modeKey === "dark" ? "-dark" : ""}`];
}

function tokenColorMap() {
  if (tokenInspectorCachedColorMap) return tokenInspectorCachedColorMap;
  const probe = document.createElement("span");
  probe.style.position = "fixed";
  probe.style.left = "-9999px";
  probe.style.top = "-9999px";
  document.body.appendChild(probe);
  const map = new Map();
  const modeKey = state.mode === "dark" ? "dark" : "light";
  const syncedSources = tokenInspectorSyncedThemeSources[state.theme]?.[modeKey] || {};
  const modeSources = tokenInspectorModeSources[modeKey] || {};
  const addColorLabels = (hex, labels) => {
    if (!map.has(hex)) map.set(hex, []);
    const bucket = map.get(hex);
    labels.forEach((label) => {
      if (label && !bucket.includes(label)) bucket.push(label);
    });
  };
  tokenInspectorVars.forEach((token) => {
    probe.style.color = `hsl(var(${token}))`;
    const hex = colorToHex(getComputedStyle(probe).color);
    addColorLabels(hex, [token, ...(syncedSources[token] || tokenInspectorSidebarSources(token, modeKey)), ...(modeSources[token] || [])]);
  });
  Object.entries(tokenInspectorTailwindColors).forEach(([hex, labels]) => {
    addColorLabels(hex, labels);
  });
  probe.remove();
  tokenInspectorCachedColorMap = map;
  return map;
}

const tokenInspectorSemanticTailwind = {
  "--dashboard-background": ["bg-dashboard-background"],
  "--dashboard-background-dark": ["bg-dashboard-background-dark"],
  "--table-row-hover": ["bg-table-row-hover"],
  "--app-shell": ["bg-app-shell"],
  "--surface": ["bg-surface"],
  "--sidebar": ["bg-sidebar"],
  "--sidebar-foreground": ["text-sidebar-foreground"],
  "--sidebar-primary": ["bg-sidebar-primary"],
  "--sidebar-primary-foreground": ["text-sidebar-primary-foreground"],
  "--sidebar-accent": ["bg-sidebar-accent"],
  "--sidebar-accent-foreground": ["text-sidebar-accent-foreground"],
  "--sidebar-border": ["border-sidebar-border"],
  "--sidebar-ring": ["ring-sidebar-ring", "focus-visible:outline-sidebar-ring"],
  "--background": ["bg-background"],
  "--foreground": ["text-foreground"],
  "--card": ["bg-card"],
  "--card-foreground": ["text-card-foreground"],
  "--primary": ["bg-primary"],
  "--primary-foreground": ["text-primary-foreground"],
  "--secondary": ["bg-secondary"],
  "--secondary-foreground": ["text-secondary-foreground"],
  "--muted": ["bg-muted"],
  "--muted-foreground": ["text-muted-foreground"],
  "--border": ["border-border"],
  "--input": ["border-input"],
  "--ring": ["ring-ring", "focus-visible:outline-ring"],
};

function uniqueOrdered(items) {
  return items.filter((item, index) => item && items.indexOf(item) === index);
}

function tokenForColor(color, map = tokenColorMap(), preferredTokens = []) {
  const hex = colorToHex(color);
  if (hex === "transparent") return { hex, token: "transparent", tailwind: "transparent" };
  const tokens = map.get(hex);
  const designTokens = uniqueOrdered([
    ...preferredTokens.filter((token) => tokens?.includes(token)),
    ...(tokens?.filter((item) => !item.startsWith("tailwind:")) || []),
  ]);
  const tailwindTokens = uniqueOrdered([
    ...(tokens?.filter((item) => item.startsWith("tailwind:")).map((item) => item.replace("tailwind: ", "")) || []),
    ...designTokens.flatMap((token) => tokenInspectorSemanticTailwind[token] || []),
  ]);
  return {
    hex,
    token: designTokens.slice(0, 3).join(", ") || "hardcoded / inherited",
    tailwind: tailwindTokens.slice(0, 3).join(", ") || "no Tailwind match",
  };
}

function elementLabel(node) {
  if (!node || node === document.documentElement) return "html";
  const tag = node.tagName.toLowerCase();
  const idPart = node.id ? `#${node.id}` : "";
  const classPart = [...node.classList].slice(0, 3).map((item) => `.${item}`).join("");
  return `${tag}${idPart}${classPart}`;
}

function componentInfo(node) {
  const patterns = [
    [".btn-primary", "Button / Primary"],
    [".btn-soft", "Button / Soft"],
    [".btn", "Button"],
    [".field", "Field / Input"],
    [".date-field", "Date picker field"],
    [".fabric-select", "Select / Custom dropdown"],
    [".settings-select", "Settings select"],
    [".settings-select-trigger", "Settings select trigger"],
    [".settings-field-row", "Settings row"],
    [".settings-layout-card", "Layout option card"],
    [".theme-card", "Theme card"],
    [".modal", "Modal"],
    [".account-settings-shell", "Account settings modal"],
    [".account-settings-tab", "Account settings tab"],
    [".shop-settings-section", "Shop settings nav item"],
    [".nav-item", "Sidebar nav item"],
    [".top-nav-item", "Top nav item"],
    [".mobile-navigation", "Mobile navigation"],
    [".mobile-nav-drawer", "Mobile nav drawer"],
    [".table-wrap", "Table wrapper"],
    ["table", "Table"],
    ["thead", "Table header"],
    ["tbody", "Table body"],
    ["tr", "Table row"],
    ["th", "Table header cell"],
    ["td", "Table cell"],
    [".pill", "Badge / Pill"],
    [".metric-cell", "Metric cell"],
    [".card", "Card"],
  ];
  const match = patterns.find(([selector]) => node.closest(selector));
  const componentNode = match ? node.closest(match[0]) : node;
  return {
    name: match ? match[1] : `${node.tagName.toLowerCase()} element`,
    selector: elementLabel(componentNode),
  };
}

function effectiveBackgroundColor(node) {
  let current = node;
  while (current && current !== document.documentElement) {
    const color = getComputedStyle(current).backgroundColor;
    if (color && color !== tokenInspectorTransparent && color !== "transparent") return color;
    current = current.parentElement;
  }
  return getComputedStyle(document.body).backgroundColor;
}

function tokenInspectorRows(node) {
  const style = getComputedStyle(node);
  const tokenMap = tokenColorMap();
  const isSidebarNavItem = Boolean(node.closest(".sidebar .nav-item, .sidebar .nav-child, .mobile-nav-drawer .mobile-nav-link, .nav-popout .popout-item"));
  const sidebarActive = isSidebarNavItem && (node.matches(".active") || Boolean(node.closest(".active")));
  const preferred = {
    Background: isSidebarNavItem && sidebarActive ? ["--sidebar-accent"] : isSidebarNavItem ? ["--sidebar"] : [],
    Text: isSidebarNavItem && sidebarActive ? ["--sidebar-accent-foreground"] : isSidebarNavItem ? ["--sidebar-foreground"] : [],
    Border: isSidebarNavItem ? ["--sidebar-border"] : [],
    Ring: isSidebarNavItem ? ["--sidebar-ring"] : [],
  };
  const borderColor = style.borderTopStyle === "none" || Number.parseFloat(style.borderTopWidth) === 0 ? "transparent" : style.borderTopColor;
  const ringColor = style.outlineStyle === "none" || Number.parseFloat(style.outlineWidth) === 0 ? "transparent" : style.outlineColor;
  return [
    ["Background", effectiveBackgroundColor(node)],
    ["Text", style.color],
    ["Border", borderColor],
    ["Ring", ringColor],
  ].map(([label, color]) => ({ label, ...tokenForColor(color, tokenMap, preferred[label]) }));
}

function paddingInfo(node) {
  const style = getComputedStyle(node);
  return {
    short: `${style.paddingTop} ${style.paddingRight} ${style.paddingBottom} ${style.paddingLeft}`,
    detail: `T ${style.paddingTop} / R ${style.paddingRight} / B ${style.paddingBottom} / L ${style.paddingLeft}`,
  };
}

function tokenInspectorTarget(node) {
  if (!node || !(node instanceof Element)) return node;
  return node.closest("button, a, [role='button'], .nav-item, .top-nav-item, .btn, .account-settings-tab, .settings-choice-button, .theme-card, .field, .card, td, th") || node;
}

function visibleElementChildren(parent) {
  return [...(parent?.children || [])].filter((child) => {
    if (!(child instanceof Element)) return false;
    const rect = child.getBoundingClientRect();
    const style = getComputedStyle(child);
    return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
  });
}

function gapBetweenRects(first, second) {
  const horizontalOverlap = first.bottom > second.top && second.bottom > first.top;
  const verticalOverlap = first.right > second.left && second.right > first.left;
  if (horizontalOverlap) {
    if (second.left >= first.right) return { axis: "horizontal", value: second.left - first.right, start: first.right, end: second.left, lineTop: first.top + first.height / 2 };
    if (first.left >= second.right) return { axis: "horizontal", value: first.left - second.right, start: second.right, end: first.left, lineTop: first.top + first.height / 2 };
  }
  if (verticalOverlap) {
    if (second.top >= first.bottom) return { axis: "vertical", value: second.top - first.bottom, start: first.bottom, end: second.top, lineLeft: first.left + first.width / 2 };
    if (first.top >= second.bottom) return { axis: "vertical", value: first.top - second.bottom, start: second.bottom, end: first.top, lineLeft: first.left + first.width / 2 };
  }
  return null;
}

function spacingInfo(node) {
  const target = tokenInspectorTarget(node);
  const parent = target?.parentElement;
  const siblings = visibleElementChildren(parent);
  const index = siblings.indexOf(target);
  const targetRect = target.getBoundingClientRect();
  const parentStyle = parent ? getComputedStyle(parent) : null;
  const parentPadding = parent ? paddingInfo(parent) : null;
  const previous = index > 0 ? siblings[index - 1] : null;
  const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;
  const allGaps = siblings.slice(0, -1).map((sibling, siblingIndex) => {
    const gap = gapBetweenRects(sibling.getBoundingClientRect(), siblings[siblingIndex + 1].getBoundingClientRect());
    return gap ? `${Math.round(gap.value)}px` : "overlap";
  });
  return {
    target,
    parent,
    parentLabel: parent ? elementLabel(parent) : "none",
    parentGap: parentStyle ? `column ${parentStyle.columnGap} / row ${parentStyle.rowGap}` : "none",
    parentPadding: parentPadding?.detail || "none",
    allGaps: allGaps.length ? allGaps.join(" / ") : "none",
    previous: previous ? { label: elementLabel(previous), gap: gapBetweenRects(previous.getBoundingClientRect(), targetRect) } : null,
    next: next ? { label: elementLabel(next), gap: gapBetweenRects(targetRect, next.getBoundingClientRect()) } : null,
  };
}

function spacingLineMarkup(item, kind) {
  if (!item?.gap) return "";
  const gap = item.gap;
  const label = `${Math.round(gap.value)}px`;
  if (gap.axis === "horizontal") {
    const left = Math.min(gap.start, gap.end);
    const width = Math.abs(gap.end - gap.start);
    return `
      <div class="token-inspector-measure-line horizontal ${kind}" style="left:${left}px; top:${gap.lineTop}px; width:${width}px;">
        <span>${label}</span>
      </div>
    `;
  }
  const top = Math.min(gap.start, gap.end);
  const height = Math.abs(gap.end - gap.start);
  return `
    <div class="token-inspector-measure-line vertical ${kind}" style="left:${gap.lineLeft}px; top:${top}px; height:${height}px;">
      <span>${label}</span>
    </div>
  `;
}

function renderTokenSpacingOverlay(info) {
  const layer = el("tokenInspectorMeasurements");
  if (!layer || !info) return;
  layer.innerHTML = `${spacingLineMarkup(info.previous, "previous")}${spacingLineMarkup(info.next, "next")}`;
  layer.classList.toggle("open", Boolean(layer.innerHTML.trim()));
  layer.setAttribute("aria-hidden", String(!layer.innerHTML.trim()));
}

function clearTokenSpacingOverlay() {
  const layer = el("tokenInspectorMeasurements");
  if (!layer) return;
  layer.innerHTML = "";
  layer.classList.remove("open");
  layer.setAttribute("aria-hidden", "true");
}

function spacingReadoutMarkup(info) {
  if (!info) return "";
  const siblingLine = (label, item) => {
    const value = item?.gap ? `${Math.round(item.gap.value)}px ${item.gap.axis}` : "none";
    const detail = item?.label || "No visible sibling";
    return `
      <div class="token-inspector-row wide">
        <span class="token-inspector-label">${label}</span>
        <span class="token-inspector-meta">${escapeHtml(value)}</span>
        <span class="token-inspector-token">${escapeHtml(detail)}</span>
      </div>
    `;
  };
  return `
    <div class="token-inspector-section-title">Clicked Spacing</div>
    ${siblingLine("Previous gap", info.previous)}
    ${siblingLine("Next gap", info.next)}
    <div class="token-inspector-row wide">
      <span class="token-inspector-label">Parent gap</span>
      <span class="token-inspector-meta">${escapeHtml(info.parentGap)}</span>
      <span class="token-inspector-token">${escapeHtml(info.parentLabel)}</span>
    </div>
    <div class="token-inspector-row wide">
      <span class="token-inspector-label">All sibling gaps</span>
      <span class="token-inspector-meta">${escapeHtml(info.allGaps)}</span>
    </div>
    <div class="token-inspector-row wide">
      <span class="token-inspector-label">Parent padding</span>
      <span class="token-inspector-meta">${escapeHtml(info.parentPadding)}</span>
    </div>
  `;
}

function renderTokenInspector(node, event, options = {}) {
  const readout = el("tokenInspectorReadout");
  const outline = el("tokenInspectorOutline");
  if (!readout || !outline || !state.tokenInspectorEnabled || !node || !(node instanceof Element)) return;
  if (node.closest("#tokenInspectorReadout") || node.closest("#tokenInspectorOutline")) return;
  const inspectNode = options.measureSpacing ? tokenInspectorTarget(node) : node;

  const rect = inspectNode.getBoundingClientRect();
  outline.classList.add("open");
  outline.style.left = `${Math.max(0, rect.left - 2)}px`;
  outline.style.top = `${Math.max(0, rect.top - 2)}px`;
  outline.style.width = `${Math.max(0, rect.width + 4)}px`;
  outline.style.height = `${Math.max(0, rect.height + 4)}px`;

  const spacing = options.measureSpacing ? spacingInfo(inspectNode) : null;
  if (spacing) renderTokenSpacingOverlay(spacing);

  const component = componentInfo(inspectNode);
  const padding = paddingInfo(inspectNode);
  const rows = tokenInspectorRows(inspectNode)
    .map(
      (row) => `
        <div class="token-inspector-row">
          <span class="token-inspector-label">${escapeHtml(row.label)}</span>
          <span class="token-inspector-value">
            <span class="token-inspector-swatch"><span style="background:${escapeAttr(row.hex)}"></span></span>
            <span class="min-w-0">
              <span class="token-inspector-hex block">${escapeHtml(row.hex)}</span>
              <span class="token-inspector-token block">Variable: ${escapeHtml(row.token)}</span>
              <span class="token-inspector-tailwind block">Tailwind: ${escapeHtml(row.tailwind)}</span>
            </span>
          </span>
        </div>
      `,
    )
    .join("");

  readout.innerHTML = `
    <div class="token-inspector-readout-header">
      <span class="token-inspector-readout-title">${escapeHtml(elementLabel(inspectNode))}</span>
      <span class="rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground">${options.measureSpacing ? "Pinned" : "Inspector"}</span>
    </div>
    <div class="token-inspector-readout-body">
      <div class="token-inspector-row wide">
        <span class="token-inspector-label">Component</span>
        <span class="token-inspector-meta">${escapeHtml(component.name)}</span>
        <span class="token-inspector-token">${escapeHtml(component.selector)}</span>
      </div>
      <div class="token-inspector-row wide">
        <span class="token-inspector-label">Padding</span>
        <span class="token-inspector-meta">${escapeHtml(padding.short)}</span>
        <span class="token-inspector-token">${escapeHtml(padding.detail)}</span>
      </div>
      ${spacingReadoutMarkup(spacing)}
      ${rows}
    </div>
  `;
  readout.classList.add("open");
  readout.setAttribute("aria-hidden", "false");

  const margin = 12;
  const readoutWidth = Math.min(380, window.innerWidth - 24);
  const readoutHeight = readout.offsetHeight || 260;
  const left = Math.min(window.innerWidth - readoutWidth - margin, event.clientX + 18);
  const top = Math.min(window.innerHeight - readoutHeight - margin, event.clientY + 18);
  readout.style.left = `${Math.max(margin, left)}px`;
  readout.style.top = `${Math.max(margin, top)}px`;
}

function setTokenInspectorEnabled(enabled) {
  state.tokenInspectorEnabled = enabled;
  if (enabled) tokenInspectorCachedColorMap = null;
  localStorage.setItem("relocate-token-inspector", String(enabled));
  document.body.classList.toggle("token-inspector-enabled", enabled);
  const button = el("tokenInspectorToggleBtn");
  if (button) {
    button.classList.toggle("active", enabled);
    button.setAttribute("aria-pressed", String(enabled));
    setText(button, enabled ? "On" : "Off");
  }
  if (!enabled) {
    state.tokenInspectorPinnedNode = null;
    el("tokenInspectorReadout")?.classList.remove("open");
    el("tokenInspectorReadout")?.setAttribute("aria-hidden", "true");
    el("tokenInspectorOutline")?.classList.remove("open");
    clearTokenSpacingOverlay();
  }
}

function removeAlert(alert) {
  if (!alert) return;
  alert.style.opacity = "0";
  alert.style.transform = "translateX(12px)";
  window.setTimeout(() => alert.remove(), 180);
}

function showAlert(title, message = "", variant = "success") {
  const stack = el("alertStack");
  if (!stack) return showToast(title);
  const alert = document.createElement("div");
  alert.className = `app-alert ${variant}`;
  alert.style.opacity = "0";
  alert.style.transform = "translateX(12px)";
  alert.style.transition = "opacity 180ms ease, transform 180ms ease";
  alert.innerHTML = `
    ${icon(variant === "success" ? "check" : "info", "shrink-0")}
    <div class="min-w-0">
      <div class="app-alert-title">${escapeHtml(translateRaw(title))}</div>
      ${message ? `<div class="app-alert-message">${escapeHtml(translateRaw(message))}</div>` : ""}
    </div>
    <button class="app-alert-close" data-alert-close type="button" aria-label="Dismiss alert">${icon("x", "h-4 w-4")}</button>
  `;
  stack.prepend(alert);
  requestAnimationFrame(() => {
    alert.style.opacity = "1";
    alert.style.transform = "translateX(0)";
  });
  const timeout = window.setTimeout(() => removeAlert(alert), 4200);
  alert.querySelector("[data-alert-close]")?.addEventListener("click", () => {
    window.clearTimeout(timeout);
    removeAlert(alert);
  });
  return alert;
}

function anyModalOpen() {
  return (
    el("advancedModal").classList.contains("open") ||
    el("customerModal").classList.contains("open") ||
    el("deleteCustomerConfirmModal")?.classList.contains("open") ||
    el("salesAssociateModal").classList.contains("open") ||
    el("accountSettingsModal").classList.contains("open") ||
    el("storeSwitchModal")?.classList.contains("open") ||
    el("themeModal").classList.contains("open") ||
    el("cheatCodesModal").classList.contains("open") ||
    el("createOrderStopModal").classList.contains("open") ||
    el("createOrderFlowModal")?.classList.contains("open") ||
    el("invoiceViewModal")?.classList.contains("open") ||
    el("fabricScannerModal").classList.contains("open") ||
    el("fabricPriceModal").classList.contains("open") ||
    el("fabricCustomerSelectionModal")?.classList.contains("open") ||
    el("orderDetailSidePanel")?.classList.contains("open") ||
    el("customerDetailSidePanel")?.classList.contains("open") ||
    el("ordersAdvancedSearchModal").classList.contains("open") ||
    el("ordersAdvancedModal").classList.contains("open") ||
    el("ordersStatusUpdateModal").classList.contains("open") ||
    el("orderRemarksModal")?.classList.contains("open") ||
    el("orderDetailStatusModal")?.classList.contains("open") ||
    el("helpCenterModal")?.classList.contains("open") ||
    el("ordersColumnSettingsModal").classList.contains("open") ||
    el("fitProfileModal").classList.contains("open") ||
    el("fitProfileHelpModal").classList.contains("open") ||
    el("onePageOrderCardModal")?.classList.contains("open") ||
    el("editFitProfileSaveModal").classList.contains("open") ||
    el("fitProfileNameModal")?.classList.contains("open") ||
    el("createFitProfileStartModal").classList.contains("open") ||
    el("orderFormStartModal")?.classList.contains("open") ||
    el("orderFormDesignOptionsModal")?.classList.contains("open") ||
    el("fabricAdvancedFiltersPanel").classList.contains("open") ||
    el("globalSearchModal").classList.contains("open") ||
    el("reportIssueModal").classList.contains("open") ||
    el("logoutConfirmModal").classList.contains("open") ||
    el("shopSettingsUnsavedModal").classList.contains("open")
  );
}

function anyModalOverlayOpen() {
  return (
    el("advancedModal").classList.contains("open") ||
    el("customerModal").classList.contains("open") ||
    el("deleteCustomerConfirmModal")?.classList.contains("open") ||
    el("salesAssociateModal").classList.contains("open") ||
    el("accountSettingsModal").classList.contains("open") ||
    el("storeSwitchModal")?.classList.contains("open") ||
    el("themeModal").classList.contains("open") ||
    el("cheatCodesModal").classList.contains("open") ||
    el("createOrderStopModal").classList.contains("open") ||
    el("createOrderFlowModal")?.classList.contains("open") ||
    el("fabricScannerModal").classList.contains("open") ||
    el("fabricPriceModal").classList.contains("open") ||
    el("fabricCustomerSelectionModal")?.classList.contains("open") ||
    el("ordersAdvancedSearchModal").classList.contains("open") ||
    el("ordersAdvancedModal").classList.contains("open") ||
    el("ordersStatusUpdateModal").classList.contains("open") ||
    el("orderRemarksModal")?.classList.contains("open") ||
    el("orderDetailStatusModal")?.classList.contains("open") ||
    el("helpCenterModal")?.classList.contains("open") ||
    el("ordersColumnSettingsModal").classList.contains("open") ||
    el("fitProfileModal").classList.contains("open") ||
    el("fitProfileHelpModal").classList.contains("open") ||
    el("onePageOrderCardModal")?.classList.contains("open") ||
    el("editFitProfileSaveModal").classList.contains("open") ||
    el("fitProfileNameModal")?.classList.contains("open") ||
    el("createFitProfileStartModal").classList.contains("open") ||
    el("orderFormStartModal")?.classList.contains("open") ||
    el("orderFormDesignOptionsModal")?.classList.contains("open") ||
    el("fabricAdvancedFiltersPanel").classList.contains("open") ||
    el("globalSearchModal").classList.contains("open") ||
    el("reportIssueModal").classList.contains("open") ||
    el("logoutConfirmModal").classList.contains("open") ||
    el("shopSettingsUnsavedModal").classList.contains("open")
  );
}

function setOverlay(open) {
  el("overlay").classList.toggle("open", open);
}

function setAdvanced(open) {
  el("advancedModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function setCustomerModal(open) {
  el("customerModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function setSalesAssociateModal(open, associateId = null) {
  state.editingSalesAssociateId = open ? associateId : null;
  const associate = salesAssociates.find((item) => item.id === associateId);
  if (open) {
    setText("salesAssociateModalTitle", associate ? "Edit sales associate" : "Add sales associate");
    setText("salesAssociateSubmitBtn", associate ? "Save changes" : "Add sales associate");
    el("salesAssociateNameInput").value = associate?.name || "";
    requestAnimationFrame(() => el("salesAssociateNameInput")?.focus());
  } else {
    el("salesAssociateForm")?.reset();
  }
  el("salesAssociateModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function reportIssueCurrentPageLabel() {
  if (state.currentPage === "deliveryCalendar") return "Delivery Calendar";
  if (state.currentPage === "invoices") return "Invoices";
  if (state.currentPage === "downloads") return "Downloads";
  if (state.currentPage === "shopSettings") return "Shop Settings";
  if (state.currentPage === "orders") return "Orders";
  if (state.currentPage === "detail") return "Customer detail";
  if (state.currentPage === "fabric") return "Fabric";
  return "Home dashboard";
}

function renderReportIssueModal() {
  const areaLabel = state.reportIssueArea || "Choose an area";
  setText("reportIssueAreaLabel", areaLabel);
  el("reportIssueAreaLabel")?.classList.toggle("text-muted-foreground", !state.reportIssueArea);
  document.querySelectorAll("[data-report-area]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.reportArea === state.reportIssueArea);
  });
  document.querySelectorAll("[data-report-priority]").forEach((button) => {
    const selected = button.dataset.reportPriority === state.reportIssuePriority;
    button.classList.toggle("selected", selected);
  });
  const description = el("reportIssueDescriptionInput")?.value.trim() || "";
  el("submitReportIssueBtn")?.toggleAttribute("disabled", !state.reportIssueArea || !description);
  const userAgent = navigator.userAgent.split(") ").pop() || navigator.userAgent;
  setText("reportIssueDeviceInfo", `${navigator.platform || "Device"} · ${userAgent} · ${window.innerWidth} x ${window.innerHeight}`);
  setText("reportIssuePageInfo", `${reportIssueCurrentPageLabel()} · ${window.location.pathname.split("/").pop() || "index.html"}`);
}

function setReportIssueModal(open) {
  el("reportIssueModal").classList.toggle("open", open);
  if (open) {
    const currentArea = reportIssueCurrentPageLabel();
    state.reportIssueArea = ["Orders", "Delivery Calendar", "Invoices", "Shop Settings"].includes(currentArea) ? currentArea : "";
    state.reportIssuePriority = "Low";
    el("reportIssueForm")?.reset();
    setText("reportIssueFileLabel", "Optional - JPG, PNG or MP4");
    renderReportIssueModal();
    requestAnimationFrame(() => el("reportIssueDescriptionInput")?.focus());
  } else {
    el("reportIssueAreaMenu")?.classList.remove("open");
    el("reportIssueAreaBtn")?.setAttribute("aria-expanded", "false");
  }
  setOverlay(open || anyModalOpen());
}

function helpCenterCategoryLabel(categoryId) {
  return helpCenterCategories.find((category) => category.id === categoryId)?.label || "Help Center";
}

function helpCenterChapterForArticle(articleId, article = helpCenterArticles[articleId]) {
  if (!article) return helpCenterChapters[0];
  if (helpCenterSupportArticles.has(articleId) && state.activeHelpChapterId === "support") return helpCenterChapters.find((chapter) => chapter.id === "support") || helpCenterChapters[0];
  return helpCenterChapters.find((chapter) => chapter.categories.includes(article.category)) || helpCenterChapters[0];
}

function helpCenterChapterArticles(chapterId) {
  const chapter = helpCenterChapters.find((item) => item.id === chapterId) || helpCenterChapters[0];
  return helpCenterArticlesList().filter((article) => {
    if (chapter.id === "support") return helpCenterSupportArticles.has(article.id);
    if (helpCenterSupportArticles.has(article.id) && chapter.id === "using-gocreate") return false;
    return chapter.categories.includes(article.category);
  });
}

function helpCenterArticlesList() {
  return Object.entries(helpCenterArticles).map(([id, article]) => ({ id, ...article }));
}

function helpCenterArticleForTerm(term) {
  const normalised = String(term || "").toLowerCase();
  const direct = {
    "raise collar": "fittools-posture-raise-collar",
    "collar pleat": "fittools-posture-collar-pleat",
    "raise closing button": "fittools-posture-raise-closing-button",
    "lower closing button": "fittools-posture-lower-closing-button",
    "arms backwards": "fittools-posture-arms-backwards",
    "raise total rise": "fittools-posture-rise",
    "lower total rise": "fittools-posture-rise",
    neckline: "design-knitwear-necklines",
    "knitwear item": "design-knitwear-necklines",
    "jacket design options": "design-jacket-essentials",
  };
  if (direct[normalised]) return direct[normalised];
  if (normalised.includes("sleeve") || normalised.includes("length")) return "fittools-length-body";
  if (normalised.includes("waist") || normalised.includes("seat") || normalised.includes("thigh") || normalised.includes("knee") || normalised.includes("hem")) return "fittools-circumference-trouser";
  if (normalised.includes("shoulder") || normalised.includes("back") || normalised.includes("upper arm") || normalised.includes("cuff")) return "fittools-circumference-jacket";
  return "using-gocreate-place-custommade-order";
}

function activeHelpArticle() {
  const id = helpCenterArticles[state.activeHelpArticleId] ? state.activeHelpArticleId : "using-gocreate-place-custommade-order";
  return { id, ...helpCenterArticles[id] };
}

function helpCenterFilteredArticles() {
  const query = state.helpCenterSearch.trim().toLowerCase();
  const articles = query ? helpCenterArticlesList() : state.activeHelpChapterId ? helpCenterChapterArticles(state.activeHelpChapterId) : [];
  if (!query) return articles;
  return articles.filter((article) => {
    const searchable = [
      article.title,
      article.summary,
      helpCenterCategoryLabel(article.category),
      ...(article.body || []),
      ...(article.list || []),
      ...(article.designOptions || []).flatMap((option) => [option.title, option.text]),
    ].join(" ").toLowerCase();
    return searchable.includes(query);
  });
}

function helpMediaMarkup(media) {
  if (!media) return "";
  const isVideo = media.kind === "video";
  return `
    <div class="help-media ${isVideo ? "help-media-video" : "help-media-image"}">
      <div class="help-media-art" aria-hidden="true">
        ${isVideo ? `<span class="help-play-button">${icon("play", "h-7 w-7")}</span>` : icon("image", "h-10 w-10")}
      </div>
      <div class="help-media-caption">
        <span class="text-xs font-medium uppercase tracking-wide text-muted-foreground">${isVideo ? "Video" : "Image"}</span>
        <span class="text-sm font-medium text-foreground">${escapeHtml(media.label || "Training media")}</span>
      </div>
    </div>
  `;
}

function helpDesignIllustration(title) {
  const neck = title.toLowerCase();
  const vPath = neck.includes("v-neck") ? '<path d="M73 39 90 74l17-35" />' : "";
  const turtle = neck.includes("turtle") ? '<rect x="70" y="25" width="40" height="26" rx="8" />' : "";
  const polo = neck.includes("polo") ? '<path d="M68 40h44l-12 20H80Z" /><path d="M90 60v28" />' : "";
  const zip = neck.includes("zip") ? '<path d="M90 38v62" /><path d="M84 50h12" />' : "";
  const crew = !vPath && !turtle && !polo && !zip ? '<ellipse cx="90" cy="43" rx="22" ry="10" />' : "";
  return `
    <svg class="help-design-svg" viewBox="0 0 180 180" role="img" aria-label="${escapeAttr(title)} illustration">
      <path d="M58 46 34 66l15 26 13-10v64h56V82l13 10 15-26-24-20-18-10H76Z" />
      ${crew}${vPath}${turtle}${polo}${zip}
      <path d="M62 146h56M51 87l11 59M129 87l-11 59" />
    </svg>
  `;
}

function helpDesignOptionsMarkup(article) {
  if (!article.designOptions?.length) return "";
  return `
    <div class="help-design-grid">
      ${article.designOptions
        .map(
          (option) => `
            <article class="help-design-card">
              ${helpDesignIllustration(option.title)}
              <div class="border-t border-border pt-3">
                <h4 class="text-sm font-medium text-foreground">${escapeHtml(option.title)}</h4>
                <p class="mt-1 text-sm leading-6 text-muted-foreground">${escapeHtml(option.text)}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderHelpCenterHome() {
  return `
    <article class="help-article">
      ${renderHelpBrowseSearch()}
      <div class="help-home-grid">
        ${helpCenterChapters
          .map((chapter) => {
            const count = helpCenterChapterArticles(chapter.id).length;
            return `
              <button class="help-home-card" data-help-chapter="${escapeAttr(chapter.id)}" type="button">
                <span class="block text-base font-medium text-foreground">${escapeHtml(chapter.label)}</span>
                <span class="mt-1 block text-sm leading-6 text-muted-foreground">${escapeHtml(chapter.description)}</span>
                <span class="mt-4 inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">${count} articles</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderHelpBrowseSearch() {
  return `
    <label class="help-browse-search">
      ${icon("search", "h-4 w-4 text-muted-foreground")}
      <input class="help-browse-search-input" data-help-browse-search placeholder="Search help" value="${escapeAttr(state.helpCenterSearch)}" />
    </label>
  `;
}

function renderHelpCenterChapterOverview(chapter, articles) {
  const visibleCategories = helpCenterCategories
    .filter((category) => chapter.categories.includes(category.id))
    .map((category) => ({
      ...category,
      articles: articles.filter((article) => article.category === category.id),
    }))
    .filter((category) => category.articles.length);
  return `
    <div class="help-breadcrumbs">
      <button data-help-home type="button">Help Center</button>
      <span>/</span>
      <span>${escapeHtml(chapter.label)}</span>
    </div>
    <article class="help-article">
      ${renderHelpBrowseSearch()}
      <header class="mb-6">
        <h2 class="text-2xl font-semibold tracking-normal text-foreground">${escapeHtml(chapter.label)}</h2>
        <p class="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">${escapeHtml(chapter.description)}</p>
      </header>
      <div class="grid gap-5">
        ${visibleCategories
          .map(
            (category) => `
              <section class="help-topic-section">
                ${category.label === chapter.label ? "" : `<h3 class="mb-3 text-sm font-medium text-muted-foreground">${escapeHtml(category.label)}</h3>`}
                <div class="grid gap-2 sm:grid-cols-2">
                  ${category.articles
                    .map(
                      (article) => `
                        <button class="help-article-card" data-help-article="${escapeAttr(article.id)}" type="button">
                          <span class="block text-sm font-medium text-foreground">${escapeHtml(article.title)}</span>
                          <span class="mt-1 block text-xs leading-5 text-muted-foreground">${escapeHtml(article.summary || "")}</span>
                        </button>
                      `,
                    )
                    .join("")}
                </div>
              </section>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderHelpCenterArticle(article) {
  const chapter = helpCenterChapterForArticle(article.id, article);
  return `
    <div class="help-breadcrumbs">
      <button data-help-home type="button">Help Center</button>
      <span>/</span>
      <button data-help-chapter="${escapeAttr(chapter.id)}" type="button">${escapeHtml(chapter.label)}</button>
      <span>/</span>
      <button data-help-category="${escapeAttr(article.category)}" type="button">${escapeHtml(helpCenterCategoryLabel(article.category))}</button>
      <span>/</span>
      <span>${escapeHtml(article.title)}</span>
    </div>
    <article class="help-article">
      <header class="mb-5">
        <div class="mb-2 inline-flex rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">${escapeHtml(helpCenterCategoryLabel(article.category))}</div>
        <h2 class="text-2xl font-semibold tracking-normal text-foreground">${escapeHtml(article.title)}</h2>
        <p class="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">${escapeHtml(article.summary || "")}</p>
      </header>
      ${helpMediaMarkup(article.media)}
      ${helpDesignOptionsMarkup(article)}
      <div class="help-copy">
        ${(article.body || []).map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
        ${
          article.list?.length
            ? `<ul>${article.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
            : ""
        }
      </div>
      ${
        article.related?.length
          ? `
            <section class="mt-8 border-t border-border pt-5">
              <h3 class="text-sm font-medium text-muted-foreground">Related information</h3>
              <div class="mt-3 flex flex-wrap gap-2">
                ${article.related
                  .filter((id) => helpCenterArticles[id])
                  .map((id) => `<button class="help-related-link" data-help-article="${escapeAttr(id)}" type="button">${escapeHtml(helpCenterArticles[id].title)}</button>`)
                  .join("")}
              </div>
            </section>
          `
          : ""
      }
    </article>
  `;
}

function renderHelpCenter() {
  const modal = el("helpCenterModal");
  if (!modal) return;
  const articles = helpCenterFilteredArticles();
  const queryActive = Boolean(state.helpCenterSearch.trim());
  const selectedArticle = state.activeHelpArticleId && helpCenterArticles[state.activeHelpArticleId] ? activeHelpArticle() : null;
  const activeArticleId = selectedArticle?.id || "";
  const homeView = !queryActive && !state.activeHelpChapterId;
  const activeChapter = state.activeHelpChapterId ? helpCenterChapters.find((chapter) => chapter.id === state.activeHelpChapterId) || helpCenterChapters[0] : null;
  const chapterOverview = !queryActive && activeChapter && !selectedArticle;
  modal.classList.toggle("help-center-browse-mode", homeView || chapterOverview);
  const visibleCategories = queryActive
    ? helpCenterCategories
    : activeChapter
      ? helpCenterCategories.filter((category) => activeChapter.categories.includes(category.id))
      : [];
  const visibleByCategory = visibleCategories.map((category) => ({
    ...category,
    articles: articles.filter((article) => article.category === category.id),
  }));

  if (el("helpCenterSearchInput")) el("helpCenterSearchInput").value = state.helpCenterSearch;
  el("helpCenterChapters").innerHTML = homeView || queryActive
    ? helpCenterChapters
        .map((chapter) => {
          const count = helpCenterChapterArticles(chapter.id).length;
          return `
            <button class="help-chapter-button" data-help-chapter="${escapeAttr(chapter.id)}" type="button">
              <span>
                <span class="block text-sm font-medium">${escapeHtml(chapter.label)}</span>
                <span class="block text-xs text-muted-foreground">${escapeHtml(chapter.description)}</span>
              </span>
              <span class="help-chapter-count">${count}</span>
            </button>
          `;
        })
        .join("")
    : `
      <button class="help-back-button" data-help-home type="button">
        ${icon("arrow-left", "h-4 w-4")}
        <span>Back to Help Center</span>
      </button>
      <div class="help-current-chapter">
        <span class="mt-1 block text-base font-medium text-foreground">${escapeHtml(activeChapter.label)}</span>
        <span class="mt-1 block text-xs leading-5 text-muted-foreground">${escapeHtml(activeChapter.description)}</span>
      </div>
    `;
  setText("helpCenterListLabel", queryActive ? "Search results" : homeView ? "Chapters" : "Topics");
  el("helpCenterNav").innerHTML = visibleByCategory
    .map(
      (category) => `
        <section class="help-nav-section ${category.articles.length ? "" : "hidden"}">
          <button class="help-nav-category" data-help-category="${escapeAttr(category.id)}" type="button">
            <span>
              ${category.label === activeChapter?.label ? "" : `<span class="block text-sm font-medium">${escapeHtml(category.label)}</span>`}
              <span class="block text-xs text-muted-foreground">${escapeHtml(category.description)}</span>
            </span>
            <span class="text-xs text-muted-foreground">${category.articles.length}</span>
          </button>
          <div class="mt-1 space-y-1">
            ${category.articles
              .map(
                (article) => `
                  <button class="help-nav-article ${article.id === activeArticleId ? "active" : ""}" data-help-article="${escapeAttr(article.id)}" type="button">
                    ${escapeHtml(article.title)}
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
  el("helpCenterEmptyState")?.classList.toggle("hidden", homeView || chapterOverview || articles.length > 0);
  el("helpCenterListLabel")?.classList.toggle("hidden", homeView || chapterOverview);
  if (homeView) {
    el("helpCenterNav")?.classList.add("hidden");
    el("helpCenterArticle").innerHTML = renderHelpCenterHome();
  } else if (queryActive) {
    el("helpCenterNav")?.classList.remove("hidden");
    el("helpCenterListLabel")?.classList.remove("hidden");
    const firstResult = selectedArticle || articles[0];
    el("helpCenterArticle").innerHTML = firstResult ? renderHelpCenterArticle(firstResult) : renderHelpCenterHome();
  } else if (selectedArticle) {
    el("helpCenterNav")?.classList.remove("hidden");
    el("helpCenterListLabel")?.classList.remove("hidden");
    el("helpCenterArticle").innerHTML = renderHelpCenterArticle(selectedArticle);
  } else {
    el("helpCenterNav")?.classList.add("hidden");
    el("helpCenterArticle").innerHTML = renderHelpCenterChapterOverview(activeChapter, articles);
  }
}

function setHelpCenterModal(open, articleId = null) {
  const modal = el("helpCenterModal");
  if (!modal) return;
  if (open && !isFuturePrototypeVersion()) {
    showToast("Help Center is available in 2027 and 2028.");
    return;
  }
  if (articleId && helpCenterArticles[articleId]) {
    state.activeHelpArticleId = articleId;
    state.activeHelpChapterId = helpCenterChapterForArticle(articleId).id;
  } else if (open && !articleId) {
    state.activeHelpArticleId = "";
    state.activeHelpChapterId = "";
  }
  modal.classList.toggle("open", open);
  if (open) {
    renderHelpCenter();
    requestAnimationFrame(() => {
      const visibleSearch = document.querySelector(".help-center-modal.open .help-browse-search-input") || el("helpCenterSearchInput");
      visibleSearch?.focus({ preventScroll: true });
    });
  }
  setOverlay(open || anyModalOpen());
}

function setLogoutConfirmModal(open) {
  if (open) closeModals();
  el("logoutConfirmModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function applyPrototypeGate() {
  document.body.classList.toggle("gate-locked", !state.prototypeGateUnlocked);
  el("prototypeGateError")?.classList.add("hidden");
  if (!state.prototypeGateUnlocked) requestAnimationFrame(() => el("prototypeGatePassword")?.focus());
}

function activePrototypeVersion() {
  if (state.suiteModeUnlocked) return "2028";
  if (state.fabricFutureFeaturesUnlocked) return "2027";
  return "2026";
}

function applyPrototypeVersionChrome() {
  document.documentElement.dataset.prototypeVersion = activePrototypeVersion();
}

function renderSuiteRail() {
  document.querySelectorAll("[data-suite-app]").forEach((button) => {
    button.classList.toggle("active", button.dataset.suiteApp === state.activeSuiteApp);
    button.setAttribute("aria-pressed", String(button.dataset.suiteApp === state.activeSuiteApp));
  });
}

function renderSuitePlaceholder() {
  const app = suiteApps[state.activeSuiteApp] || suiteApps.goschedule;
  setText("suitePlaceholderEyebrow", app.eyebrow);
  setText("suitePlaceholderTitle", app.label);
  setText("suitePlaceholderDescription", app.description);
}

function applySuiteMode() {
  if (!suiteApps[state.activeSuiteApp]) state.activeSuiteApp = "gocreate";
  if (!state.suiteModeUnlocked) state.activeSuiteApp = "gocreate";
  const externalAppActive = state.suiteModeUnlocked && state.activeSuiteApp !== "gocreate";
  document.body.classList.toggle("suite-mode", state.suiteModeUnlocked);
  document.body.classList.toggle("suite-external-app", externalAppActive);
  applyPrototypeVersionChrome();
  renderSuiteRail();
  renderSuitePlaceholder();
}

function setSuiteApp(appId) {
  if (!state.suiteModeUnlocked || !suiteApps[appId]) return;
  if (state.currentPage !== "suitePlaceholder") {
    state.lastGoCreatePage = state.currentPage;
    localStorage.setItem("relocate-last-gocreate-page", state.lastGoCreatePage);
  }
  state.activeSuiteApp = appId;
  localStorage.setItem("relocate-active-suite-app", appId);
  if (appId === "gocreate") {
    const restorePage = state.lastGoCreatePage && state.lastGoCreatePage !== "suitePlaceholder" ? state.lastGoCreatePage : "home";
    setPage(restorePage, { force: true });
  } else {
    setPage("suitePlaceholder", { force: true });
  }
  applySuiteMode();
  closeNavPopouts();
}

function setPrototypeVersion(version) {
  const key = String(version);
  const futureFeatures = key === "2027" || key === "2028";
  const suiteMode = key === "2028";
  state.fabricFutureFeaturesUnlocked = futureFeatures;
  state.suiteModeUnlocked = suiteMode;
  localStorage.setItem("relocate-fabric-future-features-unlocked", String(futureFeatures));
  localStorage.setItem("relocate-suite-mode-2028", String(suiteMode));

  if (!suiteMode) {
    state.activeSuiteApp = "gocreate";
    localStorage.setItem("relocate-active-suite-app", "gocreate");
    if (orderDetailSidePanelOpen()) setOrderDetailSidePanel(false);
    if (customerDetailSidePanelOpen()) setCustomerDetailSidePanel(false);
    if (state.currentPage === "suitePlaceholder") setPage(state.lastGoCreatePage || "home", { force: true });
  }
  if (!futureFeatures && el("helpCenterModal")?.classList.contains("open")) setHelpCenterModal(false);

  closeNavPopouts();
  applyPrototypeVersionChrome();
  applySuiteMode();
  renderPrimaryNavigation();
  renderDashboard();
  renderFabricFavoriteFilters();
  renderFabricFavoriteButtons();
  renderToolFavorites();
  renderFabricInventory();
  renderOrdersPage();
  requestAnimationFrame(updateSidebarOverflow);
  showToast(`${key} prototype version enabled.`);
}

function unlockPrototypeGate() {
  state.prototypeGateUnlocked = true;
  sessionStorage.setItem("relocate-prototype-gate-unlocked", "true");
  applyPrototypeGate();
}

function setLoggedIn(loggedIn) {
  state.loggedIn = loggedIn;
  document.body.classList.toggle("logged-out", !loggedIn);
  if (loggedIn) {
    closeModals();
    setPage("home", { force: true });
    return;
  }
  closeModals();
  state.activeNavPopout = null;
  state.activeNavSubpopout = null;
  document.querySelectorAll(".nav-popout, .top-nav-menu").forEach((menu) => menu.classList.remove("open"));
  setOverlay(false);
  state.loginFlow = "login";
  renderLoginCard();
  requestAnimationFrame(() => el("loginUserInput")?.focus());
}

function resetCooldownRemainingSeconds() {
  return Math.max(0, Math.ceil((state.resetCooldownUntil - Date.now()) / 1000));
}

function startResetCooldown() {
  state.resetCooldownUntil = Date.now() + 30000;
  if (state.resetCooldownTimer) window.clearInterval(state.resetCooldownTimer);
  state.resetCooldownTimer = window.setInterval(() => {
    if (!["forgot", "inbox"].includes(state.loginFlow) || resetCooldownRemainingSeconds() <= 0) {
      window.clearInterval(state.resetCooldownTimer);
      state.resetCooldownTimer = null;
    }
    if (["forgot", "inbox"].includes(state.loginFlow)) renderLoginCard();
  }, 1000);
}

function setLoginFlow(flow) {
  state.loginFlow = flow;
  renderLoginCard();
  const focusTarget =
    flow === "login"
      ? "loginUserInput"
      : flow === "forgot"
        ? "resetUserInput"
        : flow === "newPassword"
          ? "newPasswordInput"
          : null;
  if (focusTarget) requestAnimationFrame(() => el(focusTarget)?.focus());
}

function passwordStrength(password) {
  if (!password) return { score: 0, label: "", rules: { length: false, upper: false, lower: false, number: false, special: false } };
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
  const score = Object.values(rules).filter(Boolean).length;
  const label = score <= 1 ? "Weak" : score <= 3 ? "Medium" : score === 4 ? "Strong" : "Excellent";
  return { score, label, rules };
}

function renderPasswordRule(label, met) {
  return `
    <div class="password-rule ${met ? "met" : ""}">
      <svg class="icon h-4 w-4 shrink-0" viewBox="0 0 24 24">
        ${met ? '<path d="m5 12 4 4L19 6"></path>' : '<path d="M18 6 6 18M6 6l12 12"></path>'}
      </svg>
      <span>${label}</span>
    </div>
  `;
}

function renderLoginCard() {
  const card = el("loginCard");
  if (!card) return;
  if (state.loginFlow === "forgot") {
    const remaining = resetCooldownRemainingSeconds();
    card.innerHTML = `
      <form id="resetRequestForm" class="space-y-5">
        <div class="space-y-2">
          <h1 class="text-xl font-semibold tracking-normal">Forgot password?</h1>
          <p class="text-sm leading-5 text-muted-foreground">Enter your username and we will send a link to reset your password.</p>
        </div>
        <label class="grid gap-2 text-sm">
          <span class="text-xs font-medium">Username</span>
          <input id="resetUserInput" class="field h-11" autocomplete="username" placeholder="Enter your username" value="${escapeAttr(el("loginUserInput")?.value || "george.cauter@taylormade.example")}" />
        </label>
        <div class="login-card-divider"></div>
        <button class="btn btn-primary h-11 w-full ${remaining ? "opacity-60" : ""}" type="submit" ${remaining ? "disabled" : ""}>${remaining ? `Send reset link (${remaining}s)` : "Send reset link"}</button>
        <button class="w-full text-center text-sm font-medium text-primary hover:underline" data-login-flow="login" type="button">Back to login</button>
      </form>
    `;
    return;
  }

  if (state.loginFlow === "inbox") {
    const remaining = resetCooldownRemainingSeconds();
    card.innerHTML = `
      <div class="space-y-5">
        <div class="login-icon-tile">
          <svg class="icon h-6 w-6" viewBox="0 0 24 24"><path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><circle cx="18" cy="18" r="3"></circle><path d="m20.2 20.2 1.3 1.3"></path></svg>
        </div>
        <div class="space-y-2">
          <h1 class="text-xl font-semibold tracking-normal">Check your inbox</h1>
          <p class="text-sm leading-6 text-muted-foreground">We've sent a secure reset link to your registered email. Please click the link to set your new password.</p>
        </div>
        <div class="login-card-divider"></div>
        <button id="resendResetLinkBtn" class="btn btn-primary h-11 w-full ${remaining ? "opacity-60" : ""}" type="button" ${remaining ? "disabled" : ""}>${remaining ? `Resend link (${remaining}s)` : "Resend link"}</button>
        <button class="w-full text-center text-sm font-medium text-primary hover:underline" data-login-flow="login" type="button">Back to login</button>
      </div>
    `;
    return;
  }

  if (state.loginFlow === "newPassword") {
    const password = el("newPasswordInput")?.value || "";
    const confirm = el("confirmNewPasswordInput")?.value || "";
    const strength = passwordStrength(password);
    const showStrength = password.length > 0;
    const allowed = strength.score > 1 && password === confirm && confirm.length > 0;
    card.innerHTML = `
      <form id="newPasswordForm" class="space-y-5">
        <div class="space-y-2">
          <h1 class="text-xl font-semibold tracking-normal">Pick new password</h1>
          <p class="text-sm leading-5 text-muted-foreground">Please choose a strong password that you haven't used before.</p>
        </div>
        <div class="space-y-4">
          <label class="grid gap-2 text-sm">
            <span class="text-xs font-medium">New password</span>
            <input id="newPasswordInput" class="field h-11" autocomplete="new-password" type="password" placeholder="Enter new password" value="${escapeAttr(password)}" />
          </label>
          ${
            showStrength
              ? `
                <div class="space-y-3">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-medium text-muted-foreground">Strength</span>
                    <span class="font-semibold ${strength.score <= 1 ? "text-destructive" : "text-primary"}">${strength.label}</span>
                  </div>
                  <div class="flex gap-1">
                    ${[1, 2, 3, 4].map((index) => `<span class="password-strength-segment ${Math.min(strength.score, 4) >= index ? "active" : ""}"></span>`).join("")}
                  </div>
                  <div class="space-y-2">
                    ${renderPasswordRule("At least 8 characters", strength.rules.length)}
                    ${renderPasswordRule("Contains uppercase letter", strength.rules.upper)}
                    ${renderPasswordRule("Contains lowercase letter", strength.rules.lower)}
                    ${renderPasswordRule("Contains a number", strength.rules.number)}
                    ${renderPasswordRule("Contains a special character (!@#$%)", strength.rules.special)}
                  </div>
                </div>
              `
              : ""
          }
          <label class="grid gap-2 text-sm">
            <span class="text-xs font-medium">Confirm new password</span>
            <input id="confirmNewPasswordInput" class="field h-11" autocomplete="new-password" type="password" placeholder="Re-enter new password" value="${escapeAttr(confirm)}" />
          </label>
          ${confirm && password !== confirm ? '<p class="text-sm text-destructive">Passwords do not match.</p>' : ""}
        </div>
        <div class="login-card-divider"></div>
        <button id="resetPasswordSubmitBtn" class="btn btn-primary h-11 w-full ${allowed ? "" : "opacity-60"}" type="submit" ${allowed ? "" : "disabled"}>Reset password</button>
      </form>
    `;
    return;
  }

  if (state.loginFlow === "passwordSet") {
    card.innerHTML = `
      <div class="space-y-5">
        <div class="login-icon-tile">
          <svg class="icon h-6 w-6" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
        </div>
        <div class="space-y-2">
          <h1 class="text-xl font-semibold tracking-normal">Password is set</h1>
          <p class="text-sm leading-6 text-muted-foreground">Your password has been successfully updated. Return to login to access your account.</p>
        </div>
        <div class="login-card-divider"></div>
        <button class="btn btn-primary h-11 w-full" data-login-flow="login" type="button">Return to login</button>
      </div>
    `;
    return;
  }

  card.innerHTML = `
    <form id="loginForm" class="space-y-5">
      <h1 class="text-2xl font-semibold tracking-normal">Login</h1>
      ${
        state.loginError
          ? `
            <div class="flex items-start gap-3 rounded-[10px] border border-destructive/25 bg-destructive/10 px-3 py-2.5 text-sm text-destructive" role="alert">
              <svg class="icon mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
              <span>${escapeHtml(state.loginError)}</span>
            </div>
          `
          : ""
      }
      <label class="grid gap-2 text-sm">
        <span class="text-xs font-medium">Username</span>
        <input id="loginUserInput" class="field h-11" autocomplete="username" placeholder="Enter your username" value="${escapeAttr(state.loginUsername)}" />
      </label>
      <label class="grid gap-2 text-sm">
        <span class="text-xs font-medium">Password</span>
        <input id="loginPasswordInput" class="field h-11" autocomplete="current-password" type="password" placeholder="Enter your password" value="${escapeAttr(state.loginPassword)}" />
      </label>
      <button id="forgotPasswordBtn" class="text-sm font-medium text-primary hover:underline" type="button">Forgot password?</button>
      <div class="login-card-divider"></div>
      <button class="btn btn-primary h-11 w-full" type="submit">Login</button>
    </form>
  `;
}

function stopFabricScannerStream() {
  if (!state.fabricScannerStream) return;
  state.fabricScannerStream.getTracks().forEach((track) => track.stop());
  state.fabricScannerStream = null;
}

const fabricScannerDemoIds = ["FM12009-28", "F360484-15", "FM11789-49", "FM12100-31", "FM12101-38", "FM12102-45"];

function scannedFabricResults() {
  return state.fabricScannerResultIds.map((id) => fabricInventory.find((fabric) => fabric.id === id)).filter(Boolean);
}

function fabricScannerStockRows(fabric) {
  const baseStock = Number(fabric.onOrder) || 312;
  return [
    { atelier: "MTM - Suits A", status: fabric.availability, stock: `${baseStock} mtrs`, extraDays: fabric.extraDays === "-" ? "0 days" : fabric.extraDays },
    { atelier: "Italia - Suits", status: "Available", stock: `${Math.max(80, Math.round(baseStock * 0.72))} mtrs`, extraDays: "0 days" },
    { atelier: "MTM - Suits B", status: "Available", stock: `${Math.max(110, Math.round(baseStock * 1.15))} mtrs`, extraDays: "0 days" },
  ];
}

function renderFabricScannerModeTabs() {
  const modes = [
    { id: "webcam", label: "Webcam", badge: "" },
    { id: "barcode", label: "Barcode Scanner", badge: "" },
  ];
  return `
    <div class="grid grid-cols-2 gap-2 rounded-xl bg-secondary/50 p-1">
      ${modes
        .map(
          (mode) => `
            <button class="flex min-h-10 items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium transition ${state.fabricScannerActiveMode === mode.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}" type="button" data-fabric-scanner-mode="${mode.id}">
              ${escapeHtml(mode.label)}
              ${mode.badge ? `<span class="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">${escapeHtml(mode.badge)}</span>` : ""}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFabricScannerInputPanel(showHeader = true) {
  const readyMarkup = state.fabricScannerCameraReady
    ? `<span class="inline-flex items-center gap-2 text-sm text-muted-foreground"><span class="h-2.5 w-2.5 rounded-full bg-green-600"></span>Ready to scan</span>`
    : state.fabricScannerCameraError
      ? `<span class="inline-flex items-center gap-2 text-sm text-red-600"><span class="h-2.5 w-2.5 rounded-full bg-red-500"></span>${escapeHtml(state.fabricScannerCameraError)}</span>`
      : `<span class="inline-flex items-center gap-2 text-sm text-muted-foreground"><span class="h-2.5 w-2.5 rounded-full bg-orange-500"></span>Camera access needed</span>`;
  if (state.fabricScannerActiveMode === "barcode") {
    return `
      <div class="flex h-full min-h-0 flex-col p-6">
        ${
          showHeader
            ? `
              <div>
                <h2 class="text-xl font-semibold">Scan fabric</h2>
                <p class="mt-2 text-sm text-muted-foreground">Scan using either your camera or a connected barcode scanner.</p>
              </div>
            `
            : ""
        }
        <div class="${showHeader ? "mt-6" : ""}">${renderFabricScannerModeTabs()}</div>
        <label class="mt-7 grid gap-2 text-sm">
          <span class="font-medium">Scanner data input</span>
          <input id="fabricScannerBarcodeInput" class="field h-11" value="" placeholder="Waiting for scanner input" />
        </label>
        <div class="mt-auto border-t border-border pt-5">
          <button class="btn btn-soft h-11 w-full" type="button" data-fabric-scanner-action="file-scan">
            <svg class="icon" viewBox="0 0 24 24"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
            Or scan from uploaded file
          </button>
        </div>
      </div>
    `;
  }
  return `
      <div class="flex h-full min-h-0 flex-col p-6">
        ${
          showHeader
            ? `
              <div>
                <h2 class="text-xl font-semibold">Scan fabric</h2>
                <p class="mt-2 text-sm text-muted-foreground">Scan using either your camera or a connected barcode scanner.</p>
              </div>
            `
            : ""
        }
        <div class="${showHeader ? "mt-6" : ""}">${renderFabricScannerModeTabs()}</div>
      <div class="fabric-scanner-preview relative mt-7 overflow-hidden rounded-xl border border-border bg-black">
        ${
          state.fabricScannerCameraReady
            ? `<video id="fabricScannerVideo" class="block h-full w-full object-cover" autoplay muted playsinline></video>`
            : `
              <div class="flex h-full items-center justify-center">
                <div class="h-40 w-32 rounded-xl border border-white/70"></div>
              </div>
            `
        }
        <button class="absolute bottom-3 left-3 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white/90 px-3 text-sm font-medium text-foreground shadow-sm backdrop-blur hover:bg-white" type="button" data-fabric-scanner-action="simulate-scan">
          <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg>
          Test scan
        </button>
      </div>
      <div class="mt-6 flex items-center gap-4 text-sm">
        <button class="field flex h-11 flex-1 items-center justify-between px-3 text-left" type="button" data-fabric-scanner-action="allow-camera">
          <span>MacBook Pro Camera</span>
          <svg class="icon h-4 w-4 text-muted-foreground" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
        ${readyMarkup}
      </div>
      <div class="mt-auto border-t border-border pt-5">
        <button class="btn btn-soft h-11 w-full" type="button" data-fabric-scanner-action="file-scan">
          <svg class="icon" viewBox="0 0 24 24"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
          Or scan from uploaded file
        </button>
      </div>
    </div>
  `;
}

function fabricScannerResultRows() {
  return scannedFabricResults();
}

function renderFabricScannerResults(showChrome = true) {
  const scannedCount = state.fabricScannerResultIds.length;
  const rows = fabricScannerResultRows();
  return `
    <div class="fabric-scanner-results-pane flex h-full min-h-0 flex-col">
      ${
        showChrome
          ? `
            <div class="flex shrink-0 items-start justify-between gap-4 border-b border-border px-6 py-5">
              <div>
                <h2 class="text-xl font-semibold">Search results</h2>
                <p class="mt-1 text-sm text-muted-foreground">${scannedCount ? `${scannedCount} scanned result${scannedCount === 1 ? "" : "s"} added.` : "Results will build here as fabrics are scanned."}</p>
              </div>
              <button id="closeFabricScannerModalBtn" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-secondary" title="Close" data-fabric-scanner-action="close">
                <svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
              </button>
            </div>
          `
          : ""
      }
      <div class="fabric-scanner-results-table-wrap px-6">
        ${
          rows.length
            ? `
              <table class="w-full min-w-[1260px] text-left text-sm">
                <thead class="sticky top-0 z-10 border-b border-border bg-card text-muted-foreground">
                  <tr>
                    <th class="px-4 py-3 font-medium">Fabric</th>
                    <th class="px-4 py-3 font-medium">Availability</th>
                    <th class="px-4 py-3 font-medium">Sold out since</th>
                    <th class="px-4 py-3 font-medium">Cut Length</th>
                    <th class="px-4 py-3 font-medium">Extra days</th>
                    <th class="px-4 py-3 font-medium">Price cat</th>
                    <th class="px-4 py-3 font-medium">Fabric on order</th>
                    <th class="px-4 py-3 font-medium">Atelier</th>
                    <th class="px-4 py-3 font-medium">Description</th>
                    <th class="px-4 py-3 font-medium">Collection</th>
                    <th class="px-4 py-3 font-medium">Season</th>
                    <th class="px-4 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border">
                  ${rows
                    .map(
                      (fabric) => `
                        <tr>
                          <td class="px-4 py-3">
                            <div class="flex items-center gap-3">
                              <span class="fabric-swatch-preview" data-fabric-swatch="${escapeAttr(fabric.swatch)}" style="--fabric-swatch:${escapeAttr(fabric.swatch)}" tabindex="0" aria-label="Zoom fabric swatch for ${escapeAttr(fabric.id)}"></span>
                              <span>
                                <span class="block font-medium">${escapeHtml(fabric.id)}</span>
                                ${fabric.note ? `<span class="block text-muted-foreground">${escapeHtml(fabric.note)}</span>` : ""}
                              </span>
                            </div>
                          </td>
                          <td class="px-4 py-3">${fabricStatusMarkup(fabric.availability)}</td>
                          <td class="px-4 py-3">${fabric.soldOutSince === "-" ? '<span class="text-muted-foreground">-</span>' : `<span class="status bg-red-50 text-red-600">${escapeHtml(fabric.soldOutSince)}</span>`}</td>
                          <td class="px-4 py-3">${fabricCutLengthMarkup(fabric.cutLength)}</td>
                          <td class="px-4 py-3 text-muted-foreground">${escapeHtml(fabric.extraDays)}</td>
                          <td class="truncate px-4 py-3 text-muted-foreground">${escapeHtml(fabric.priceCat)}</td>
                          <td class="px-4 py-3 text-muted-foreground">${escapeHtml(fabric.onOrder)}</td>
                          <td class="px-4 py-3 text-muted-foreground">${escapeHtml(fabric.atelier)}</td>
                          <td class="px-4 py-3 text-muted-foreground">${escapeHtml(fabric.description)}</td>
                          <td class="px-4 py-3 text-muted-foreground">${escapeHtml(fabric.collection)}</td>
                          <td class="px-4 py-3 text-muted-foreground">${escapeHtml(fabric.season)}</td>
                          <td class="px-4 py-3">
                            <button class="flex h-8 w-8 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Remove result" data-fabric-scanner-remove="${escapeAttr(fabric.id)}"><svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg></button>
                          </td>
                        </tr>
                      `,
                    )
                    .join("")}
                </tbody>
              </table>
            `
            : `
              <div class="flex h-full min-h-[420px] items-center justify-center text-center">
                <div class="grid justify-items-center gap-4">
                  <div class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                    <svg class="icon h-7 w-7" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
                  </div>
                  <p class="max-w-sm text-sm text-muted-foreground">Scan to see results here.</p>
                  <button class="btn btn-primary" type="button" data-fabric-scanner-action="simulate-scan">Simulate scanning</button>
                </div>
              </div>
            `
        }
      </div>
      <div class="fabric-scanner-results-actions flex shrink-0 items-center justify-end gap-3 border-t border-border px-6 py-5">
        <button class="btn btn-soft" type="button" data-fabric-scanner-action="clear" ${scannedCount ? "" : "disabled"}>Clear results</button>
        <button class="btn btn-soft" type="button" data-fabric-scanner-action="close">Close</button>
      </div>
    </div>
  `;
}

function isFabricScannerCompact() {
  return window.matchMedia("(max-width: 1023px)").matches;
}

function renderFabricScannerCompactChrome(title, subtitle, body, showBack = false) {
  return `
    <div class="flex h-full min-h-0 flex-col bg-card">
      <div class="flex shrink-0 items-start justify-between gap-4 border-b border-border px-5 py-4">
        <div class="min-w-0">
          ${showBack ? `<button class="mb-3 inline-flex h-8 items-center gap-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground" type="button" data-fabric-scanner-action="show-scan"><svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>Back to scan</button>` : ""}
          <h2 class="text-xl font-semibold">${escapeHtml(title)}</h2>
          <p class="mt-1 text-sm text-muted-foreground">${escapeHtml(subtitle)}</p>
        </div>
        <button class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md hover:bg-secondary" type="button" title="Close" data-fabric-scanner-action="close">
          <svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
        </button>
      </div>
      <div class="min-h-0 flex-1 overflow-auto">${body}</div>
    </div>
  `;
}

function renderFabricScannerScanStep() {
  return renderFabricScannerCompactChrome(
    "Scan fabric",
    "Scan using either your camera or a connected barcode scanner.",
    `<div class="min-h-full bg-secondary/35">${renderFabricScannerInputPanel(false)}</div>`,
  );
}

function renderFabricScannerResultsStep() {
  return renderFabricScannerCompactChrome(
    "Search results",
    state.fabricScannerResultIds.length ? `${state.fabricScannerResultIds.length} scanned result${state.fabricScannerResultIds.length === 1 ? "" : "s"} added.` : "Results will build here as fabrics are scanned.",
    renderFabricScannerResults(false),
    true,
  );
}

function renderFabricScannerWorkspace() {
  if (isFabricScannerCompact()) {
    return state.fabricScannerView === "results" ? renderFabricScannerResultsStep() : renderFabricScannerScanStep();
  }
  return `
    <div class="grid h-full min-h-0 lg:grid-cols-[440px_minmax(0,1fr)]">
      <aside class="min-h-0 border-b border-border bg-secondary/35 lg:border-b-0 lg:border-r">
        ${renderFabricScannerInputPanel()}
      </aside>
      <section class="min-h-0 bg-card">
        ${renderFabricScannerResults()}
      </section>
    </div>
  `;
}

function attachFabricScannerStream() {
  const video = el("fabricScannerVideo");
  if (!video || !state.fabricScannerStream) return;
  video.srcObject = state.fabricScannerStream;
}

async function requestFabricScannerPermission() {
  if (!navigator.mediaDevices?.getUserMedia) {
    state.fabricScannerCameraReady = false;
    state.fabricScannerCameraError = "Camera unavailable";
    renderFabricScannerModal();
    return;
  }

  try {
    stopFabricScannerStream();
    state.fabricScannerStream = await navigator.mediaDevices.getUserMedia({ video: true });
    state.fabricScannerCameraReady = true;
    state.fabricScannerCameraError = "";
    renderFabricScannerModal();
    attachFabricScannerStream();
  } catch (error) {
    state.fabricScannerCameraReady = false;
    state.fabricScannerCameraError = "Camera blocked";
    renderFabricScannerModal();
  }
}

function renderFabricScannerNoMatch() {
  return `
    ${renderFabricScannerModeTabs()}
    <div class="grid gap-5 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)]">
      ${renderFabricScannerInputPanel()}
      <div class="rounded-xl border border-border bg-secondary/35 p-5">
        <h3 class="text-sm font-semibold">No fabric match found</h3>
        <p class="mt-2 text-sm text-muted-foreground">Try scanning again or check the label manually. Existing scanned results stay available when you return to a match state.</p>
      </div>
    </div>
  `;
}

function renderFabricScannerError(message = "The scanner could not read this label. Try again.") {
  return `
    ${renderFabricScannerModeTabs()}
    <div class="grid gap-5 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)]">
      ${renderFabricScannerInputPanel()}
      <div class="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
        <h3 class="text-sm font-semibold">Scanner error</h3>
        <p class="mt-2 text-sm">${escapeHtml(message)}</p>
      </div>
    </div>
  `;
}

function renderFabricScannerModal() {
  const resultCount = state.fabricScannerResultIds.length;
  const statusStyles = {
    ready: "bg-secondary text-muted-foreground",
    match: "bg-green-100 text-green-700",
    noMatch: "bg-orange-100 text-orange-700",
    error: "bg-red-50 text-red-600",
  };
  const statusLabels = {
    ready: resultCount ? `${resultCount} SCANNED` : "READY",
    match: `${resultCount} MATCH${resultCount === 1 ? "" : "ES"}`,
    noMatch: "NO MATCH",
    error: "ERROR",
  };
  const subtitles = {
    ready: "Choose a scan mode and scan multiple fabrics in this window.",
    match: "Matches are collecting here. The inventory table behind this sheet has not changed.",
    noMatch: "No matching fabric was found for this scan.",
    error: "The scanner could not complete this scan.",
  };
  const mode = state.fabricScannerMode;
  const status = el("fabricScannerStatus");
  if (status) status.className = `inline-flex h-7 items-center justify-center rounded-full px-3 text-xs font-semibold ${statusStyles[mode] || statusStyles.ready}`;
  if (status) setText(status, statusLabels[mode] || statusLabels.ready);
  setText(el("fabricScannerSubtitle"), subtitles[mode] || subtitles.ready);
  el("fabricScannerBody").innerHTML = mode === "noMatch" ? renderFabricScannerNoMatch() : mode === "error" ? renderFabricScannerError() : renderFabricScannerWorkspace();
  el("fabricScannerActions").innerHTML = "";
  attachFabricScannerStream();
}

function setFabricScannerModal(open) {
  el("fabricScannerModal").classList.toggle("open", open);
  if (open) {
    state.fabricScannerMode = "ready";
    state.fabricScannerActiveMode = state.fabricScannerActiveMode || "webcam";
    state.fabricScannerView = "scan";
    state.fabricScannerResultIds = [];
    state.fabricScannerCameraError = "";
    renderFabricScannerModal();
    if (state.fabricScannerActiveMode === "webcam") requestFabricScannerPermission();
  } else {
    stopFabricScannerStream();
    state.fabricScannerCameraReady = false;
  }
  setOverlay(open || anyModalOpen());
}

function addFabricScannerResult() {
  const nextId = fabricScannerDemoIds[state.fabricScannerResultIds.length % fabricScannerDemoIds.length];
  state.fabricScannerResultIds = [...state.fabricScannerResultIds, nextId];
  state.fabricScannerMode = "match";
  if (isFabricScannerCompact()) state.fabricScannerView = "results";
  renderFabricScannerModal();
}

function clearFabricScannerResults() {
  state.fabricScannerMode = "ready";
  state.fabricScannerResultIds = [];
  if (isFabricScannerCompact()) state.fabricScannerView = "results";
  renderFabricScannerModal();
}

function removeFabricScannerResult(id) {
  state.fabricScannerResultIds = state.fabricScannerResultIds.filter((resultId) => resultId !== id);
  state.fabricScannerMode = state.fabricScannerResultIds.length ? "match" : "ready";
  renderFabricScannerModal();
}

function renderFabricPriceModal() {
  const fabric = fabricInventory.find((item) => item.id === state.activeFabricPriceId) || fabricInventory[0];
  if (!fabric) return;
  setText(el("fabricPriceModalTitle"), `R.Price details for '${fabric.id}'`);
  setText(el("fabricPriceFabricPill"), `${fabric.item} · ${fabric.description}`);
  setText(el("fabricPriceMakePill"), fabric.make);
  setText(el("fabricPriceSeasonPill"), fabric.season);
  el("fabricPriceRows").innerHTML = fabricPriceItems
    .map(
      (item) => `
        <tr>
          <td class="px-4 py-3 font-medium text-foreground">${item}</td>
          <td class="px-4 py-3 text-muted-foreground">0.00</td>
        </tr>
      `,
    )
    .join("");
}

function setFabricPriceModal(open, fabricId = state.activeFabricPriceId) {
  state.activeFabricPriceId = open ? fabricId : null;
  el("fabricPriceModal").classList.toggle("open", open);
  if (open) renderFabricPriceModal();
  setOverlay(open || anyModalOpen());
}

function setFabricCustomerSelectionModal(open) {
  el("fabricCustomerSelectionModal")?.classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function setFabricAdvancedFiltersModal(open) {
  state.fabricAdvancedFiltersOpen = open;
  el("fabricAdvancedFiltersPanel").classList.toggle("open", open);
  el("fabricAdvancedFiltersBtn").setAttribute("aria-expanded", open ? "true" : "false");
  if (!open) {
    state.activeFabricSelect = null;
    state.activeFabricSelectInstance = null;
    state.activeFabricSelectPosition = null;
    renderFabricSelectMenu();
  }
  setOverlay(open || anyModalOpen());
}

function closeModals() {
  el("advancedModal").classList.remove("open");
  el("customerModal").classList.remove("open");
  el("deleteCustomerConfirmModal")?.classList.remove("open");
  el("salesAssociateModal").classList.remove("open");
  el("accountSettingsModal").classList.remove("open");
  el("storeSwitchModal")?.classList.remove("open");
  el("themeModal").classList.remove("open");
  el("cheatCodesModal").classList.remove("open");
  el("createOrderStopModal").classList.remove("open");
  el("createOrderFlowModal")?.classList.remove("open");
  if (state.invoiceViewPanelCloseTimer) window.clearTimeout(state.invoiceViewPanelCloseTimer);
  state.invoiceViewPanelCloseTimer = null;
  state.activeInvoiceNumber = null;
  el("invoiceViewModal")?.classList.remove("open", "closing");
  document.body.classList.remove("invoice-side-open");
  el("fabricScannerModal").classList.remove("open");
  el("fabricPriceModal").classList.remove("open");
  el("fabricCustomerSelectionModal")?.classList.remove("open");
  setOrderDetailSidePanel(false);
  setCustomerDetailSidePanel(false);
  el("fabricAdvancedFiltersPanel").classList.remove("open");
  el("ordersAdvancedSearchModal").classList.remove("open");
  el("ordersAdvancedModal").classList.remove("open");
  el("ordersStatusUpdateModal").classList.remove("open");
  el("orderRemarksModal")?.classList.remove("open");
  el("orderDetailStatusModal")?.classList.remove("open");
  el("helpCenterModal")?.classList.remove("open");
  el("ordersColumnSettingsModal").classList.remove("open");
  el("fitProfileModal").classList.remove("open");
  el("fitProfileHelpModal").classList.remove("open");
  el("onePageOrderCardModal")?.classList.remove("open");
  el("editFitProfileSaveModal").classList.remove("open");
  el("fitProfileNameModal")?.classList.remove("open");
  el("createFitProfileStartModal").classList.remove("open");
  el("orderFormStartModal")?.classList.remove("open");
  el("orderFormDesignOptionsModal")?.classList.remove("open");
  el("globalSearchModal").classList.remove("open");
  el("reportIssueModal").classList.remove("open");
  el("logoutConfirmModal").classList.remove("open");
  el("shopSettingsUnsavedModal")?.classList.remove("open");
  state.pendingShopSettingsNavigation = null;
  state.activeOnePageOrderCardIndex = null;
  state.pendingDeleteCustomerId = null;
  state.activeOrderRemarksModalId = null;
  state.orderDetailStatusDraft = "";
  state.renamingFitProfileId = null;
  closeAccountSettingsSelects();
  resetAccountPasswordPanel();
  state.activeOrdersSelect = null;
  state.activeOrdersSelectInstance = null;
  state.activeOrdersSelectPosition = null;
  state.activeOrdersStatusPosition = null;
  state.activeOrdersBulkStatusPosition = null;
  el("ordersSelectMenu")?.classList.remove("open");
  el("ordersStatusMenu")?.classList.remove("open");
  el("ordersBulkStatusMenu")?.classList.remove("open");
  state.fabricAdvancedFiltersOpen = false;
  state.activeFabricSelect = null;
  state.activeFabricSelectInstance = null;
  state.activeFabricSelectPosition = null;
  state.activeFabricActionId = null;
  state.activeFabricActionPosition = null;
  el("fabricActionMenu")?.classList.remove("open");
  el("fabricAdvancedFiltersBtn")?.setAttribute("aria-expanded", "false");
  el("fabricSelectMenu")?.classList.remove("open");
  state.activeFabricPriceId = null;
  stopFabricScannerStream();
  setOverlay(false);
}

function setThemeModal(open) {
  el("themeModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

const settingsThemeLabels = {
  neutral: "Neutral",
  amber: "Amber",
  blue: "Blue",
  stone: "Stone",
  cyan: "Cyan",
  emerald: "Emerald",
  fuchsia: "Fuchsia",
  canvas: "Green",
  indigo: "Indigo",
  lime: "Lime",
  orange: "Orange",
  pink: "Pink",
  purple: "Purple",
  red: "Red",
  rose: "Rose",
  sky: "Sky",
  teal: "Teal",
  violet: "Violet",
  yellow: "Yellow",
  noir: "Noir",
  "corporate-blue": "Corporate Blue",
  legacy: "Legacy",
};

const syncedThemeCycle = ["canvas", "blue", "stone", "yellow"];

function cycleSyncedTheme() {
  const currentIndex = syncedThemeCycle.indexOf(state.theme);
  const nextTheme = syncedThemeCycle[(currentIndex + 1) % syncedThemeCycle.length];
  state.theme = nextTheme;
  closeAccountSettingsSelects();
  applyTheme();
  showToast(`${settingsThemeLabels[nextTheme]} token theme applied.`);
}

const settingsFontLabels = {
  figtree: "Figtree",
  geist: "Geist",
  inter: "Inter",
  "ibm-plex-sans": "IBM Plex Sans",
  arial: "Arial",
};

const settingsModeLabels = {
  light: "Light",
  dark: "Dark",
};

const settingsDensityLabels = {
  dense: "Dense",
  comfortable: "Comfortable",
  large: "Large",
};

function closeAccountSettingsSelects() {
  state.accountSettingsSelect = null;
  document.querySelectorAll(".settings-select").forEach((select) => {
    select.classList.remove("open");
  });
  document.querySelectorAll(".settings-select-menu").forEach((menu) => {
    menu.removeAttribute("style");
    if (menu.dataset.settingsSelectOwner) {
      const owner = document.querySelector(`.settings-select[data-settings-select="${menu.dataset.settingsSelectOwner}"]`);
      if (owner) owner.appendChild(menu);
      menu.removeAttribute("data-settings-select-owner");
    }
  });
}

function getAccountSettingsSelectMenu(select) {
  const key = select.dataset.settingsSelect;
  return (
    select.querySelector(".settings-select-menu") ||
    document.querySelector(`.settings-select-menu[data-settings-select-owner="${key}"]`)
  );
}

function positionAccountSettingsSelect(select) {
  const trigger = select.querySelector("[data-settings-select-trigger]");
  const menu = getAccountSettingsSelectMenu(select);
  if (!trigger || !menu) return;
  if (menu.parentElement !== document.body) {
    menu.dataset.settingsSelectOwner = select.dataset.settingsSelect;
    document.body.appendChild(menu);
  }

  const rect = trigger.getBoundingClientRect();
  const viewportGap = 16;
  const menuGap = 6;
  const isThemeMenu = select.dataset.settingsSelect === "theme";
  const maxMenuHeight = isThemeMenu ? 460 : 320;
  const menuWidth = Math.min(isThemeMenu ? Math.max(rect.width, 460) : rect.width, window.innerWidth - viewportGap * 2);
  const left = Math.min(Math.max(viewportGap, rect.left), window.innerWidth - menuWidth - viewportGap);
  const spaceBelow = window.innerHeight - rect.bottom - viewportGap - menuGap;
  const spaceAbove = rect.top - viewportGap - menuGap;

  menu.style.display = isThemeMenu ? "grid" : "block";
  menu.style.visibility = "hidden";
  menu.style.left = `${left}px`;
  menu.style.width = `${menuWidth}px`;
  menu.style.maxHeight = `${maxMenuHeight}px`;
  menu.style.gridTemplateColumns = isThemeMenu ? "repeat(2, minmax(0, 1fr))" : "";

  const naturalHeight = Math.min(menu.scrollHeight || menu.offsetHeight || 180, maxMenuHeight);
  const openAbove = spaceBelow < naturalHeight && spaceAbove > spaceBelow;
  const availableHeight = Math.max(120, openAbove ? spaceAbove : spaceBelow);
  const menuHeight = Math.min(naturalHeight, availableHeight);

  menu.style.maxHeight = `${menuHeight}px`;
  menu.style.top = openAbove
    ? `${Math.max(viewportGap, rect.top - menuHeight - menuGap)}px`
    : `${rect.bottom + menuGap}px`;
  menu.style.visibility = "visible";
}

function renderAccountSettingsSelects() {
  const themeLabel = el("settingsThemeLabel");
  const themeSwatch = el("settingsThemeSwatch");
  const fontLabel = el("settingsFontLabel");
  const modeLabel = el("settingsModeLabel");

  setText(themeLabel, settingsThemeLabels[state.theme] || "Canvas");
  if (themeSwatch) themeSwatch.className = `settings-swatch ${state.theme}`;
  setText(fontLabel, settingsFontLabels[state.font] || "IBM Plex Sans");
  setText(modeLabel, settingsModeLabels[state.mode] || "Light");

  document.querySelectorAll(".settings-select").forEach((select) => {
    const isOpen = select.dataset.settingsSelect === state.accountSettingsSelect;
    const menu = getAccountSettingsSelectMenu(select);
    select.classList.toggle("open", isOpen);
    if (menu) {
      menu.removeAttribute("style");
      if (!isOpen && menu.dataset.settingsSelectOwner) {
        select.appendChild(menu);
        menu.removeAttribute("data-settings-select-owner");
      }
    }
    if (isOpen) positionAccountSettingsSelect(select);
  });
  document.querySelectorAll("[data-settings-check]").forEach((check) => {
    const [type, ...valueParts] = check.dataset.settingsCheck.split("-");
    const value = valueParts.join("-");
    const activeValue = type === "theme" ? state.theme : type === "font" ? state.font : state.mode;
    check.classList.toggle("hidden", value !== activeValue);
  });
}

function openAccountPasswordPanel() {
  setAccountSettingsModal(true, "account");
  el("accountPasswordPanel").classList.remove("hidden");
  requestAnimationFrame(() => el("accountCurrentPasswordInput").focus());
}

function resetAccountPasswordPanel() {
  const panel = document.getElementById("accountPasswordPanel");
  if (!panel) return;
  panel.classList.add("hidden");
  ["accountCurrentPasswordInput", "accountNewPasswordInput", "accountConfirmPasswordInput"].forEach((inputId) => {
    const input = document.getElementById(inputId);
    if (input) input.value = "";
  });
}

function renderAccountSettingsModal() {
  document.querySelectorAll("[data-account-settings-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.accountSettingsTab === state.accountSettingsTab);
  });
  el("accountSettingsAccountPanel").classList.toggle("hidden", state.accountSettingsTab !== "account");
  el("accountSettingsAppearancePanel").classList.toggle("hidden", state.accountSettingsTab !== "appearance");
  setTokenInspectorEnabled(state.tokenInspectorEnabled);
  applyDemoSlowMode();
  renderAccountSettingsSelects();
}

function captureShopSettingsSnapshot() {
  if (state.shopSettingsSnapshot) return;
  state.shopSettingsSnapshot = {
    shopEmployees: shopEmployees.map((employee) => ({ ...employee })),
    salesAssociates: salesAssociates.map((associate) => ({ ...associate })),
    shopItems: shopItems.map((item) => ({ ...item })),
    shopFitToolParts: shopFitToolParts.map((part) => ({
      ...part,
      fits: part.fits.map((fit) => ({
        ...fit,
        tools: fit.tools.map((tool) => ({ ...tool })),
      })),
    })),
    customerFieldGroups: customerFieldGroups.map((group) => ({
      ...group,
      fields: group.fields.map((field) => ({ ...field })),
    })),
    customCustomerFields: customCustomerFields.map((field) => ({ ...field })),
    currency: el("shopCurrencySelect")?.value || "EUR(€)",
    deliveryEmailFrequency: state.deliveryEmailFrequency,
    inspirationColors: { ...state.inspirationColors },
  };
}

function renderShopSettingsDirtyState() {
  const saveButton = el("saveShopSettingsBtn");
  if (!saveButton) return;
  saveButton.classList.toggle("opacity-70", !state.shopSettingsDirty);
  saveButton.setAttribute("aria-label", state.shopSettingsDirty ? "Save shop settings changes" : "Shop settings saved");
  setText("saveShopSettingsLabel", state.shopSettingsDirty ? "Save changes" : "Saved");
}

function markShopSettingsDirty() {
  captureShopSettingsSnapshot();
  state.shopSettingsDirty = true;
  renderShopSettingsDirtyState();
}

function saveShopSettingsChanges(showMessage = true) {
  state.shopSettingsDirty = false;
  state.shopSettingsSnapshot = null;
  renderShopSettingsDirtyState();
  if (showMessage) showToast("Shop settings saved.");
}

function restoreShopSettingsSnapshot() {
  const snapshot = state.shopSettingsSnapshot;
  if (!snapshot) return;
  shopEmployees.splice(0, shopEmployees.length, ...snapshot.shopEmployees.map((employee) => ({ ...employee })));
  salesAssociates = snapshot.salesAssociates.map((associate) => ({ ...associate }));
  shopItems.splice(0, shopItems.length, ...snapshot.shopItems.map((item) => ({ ...item })));
  shopFitToolParts.splice(
    0,
    shopFitToolParts.length,
    ...snapshot.shopFitToolParts.map((part) => ({
      ...part,
      fits: part.fits.map((fit) => ({
        ...fit,
        tools: fit.tools.map((tool) => ({ ...tool })),
      })),
    })),
  );
  customerFieldGroups.splice(
    0,
    customerFieldGroups.length,
    ...snapshot.customerFieldGroups.map((group) => ({
      ...group,
      fields: group.fields.map((field) => ({ ...field })),
    })),
  );
  customCustomerFields = snapshot.customCustomerFields.map((field) => ({ ...field }));
  state.inspirationColors = { ...snapshot.inspirationColors };
  state.deliveryEmailFrequency = snapshot.deliveryEmailFrequency || "Per order";
  if (el("shopCurrencySelect")) el("shopCurrencySelect").value = snapshot.currency;
  if (el("shopLogoUpload")) el("shopLogoUpload").value = "";
  setText("shopLogoFileLabel", "Optional - JPG, PNG or SVG");
  if (el("inspirationLogoUpload")) el("inspirationLogoUpload").value = "";
  if (el("inspirationHomepageUpload")) el("inspirationHomepageUpload").value = "";
  setText("inspirationLogoFileLabel", "Optional - JPG, PNG or SVG");
  setText("inspirationHomepageFileLabel", "Optional - JPG or PNG");
  clearInspirationUploadPreview("inspirationLogoPreviewUrl");
  clearInspirationUploadPreview("inspirationHomepagePreviewUrl");
}

function discardShopSettingsChanges() {
  restoreShopSettingsSnapshot();
  state.shopSettingsDirty = false;
  state.shopSettingsSnapshot = null;
  renderShopSettingsDirtyState();
  renderShopSettingsPage();
}

function runPendingShopSettingsNavigation() {
  const navigation = state.pendingShopSettingsNavigation;
  state.pendingShopSettingsNavigation = null;
  if (typeof navigation === "function") navigation();
}

function setShopSettingsUnsavedModal(open) {
  el("shopSettingsUnsavedModal")?.classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function clearInspirationUploadPreview(previewKey) {
  if (state[previewKey]) URL.revokeObjectURL(state[previewKey]);
  state[previewKey] = null;
}

function setInspirationUploadPreview(file, previewKey, labelId, fallbackLabel) {
  clearInspirationUploadPreview(previewKey);
  setText(labelId, file ? file.name : fallbackLabel);
  if (file) state[previewKey] = URL.createObjectURL(file);
  renderInspirationUploadPreviews();
}

function renderInspirationUploadPreviews() {
  [
    { key: "inspirationLogoPreviewUrl", wrapId: "inspirationLogoPreviewWrap", imageId: "inspirationLogoPreview" },
    { key: "inspirationHomepagePreviewUrl", wrapId: "inspirationHomepagePreviewWrap", imageId: "inspirationHomepagePreview" },
  ].forEach((preview) => {
    const wrap = el(preview.wrapId);
    const image = el(preview.imageId);
    const src = state[preview.key];
    if (!wrap || !image) return;
    wrap.classList.toggle("hidden", !src);
    if (src) image.src = src;
    else image.removeAttribute("src");
  });
}

function filteredShopEmployees() {
  const query = state.shopEmployeeQuery.trim().toLowerCase();
  if (!query) return shopEmployees;
  return shopEmployees.filter((employee) =>
    [employee.lastName, employee.firstName, employee.userName].some((value) => value.toLowerCase().includes(query)),
  );
}

function renderShopEmployees() {
  const rows = filteredShopEmployees();
  const body = el("shopEmployeeRows");
  if (!body) return;
  body.innerHTML = rows.length
    ? rows
        .map(
          (employee) => `
            <tr class="hover:bg-secondary/50">
              <td class="px-4 py-3 font-medium underline decoration-border underline-offset-2">${employee.lastName}</td>
              <td class="px-4 py-3 font-medium underline decoration-border underline-offset-2">${employee.firstName}</td>
              <td class="px-4 py-3 text-muted-foreground">${employee.userName}</td>
              <td class="px-4 py-3 text-muted-foreground">${employee.lastLogin}</td>
              <td class="px-4 py-3">
                <input type="checkbox" data-shop-employee="${employee.userName}" data-shop-employee-field="pPrice" ${employee.pPrice ? "checked" : ""} aria-label="P.Price access for ${employee.firstName} ${employee.lastName}" />
              </td>
              <td class="px-4 py-3">
                <input type="checkbox" data-shop-employee="${employee.userName}" data-shop-employee-field="viewOnly" ${employee.viewOnly ? "checked" : ""} aria-label="View only access for ${employee.firstName} ${employee.lastName}" />
              </td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td class="px-4 py-10 text-center text-muted-foreground" colspan="6">No matching employees found.</td></tr>`;
  setText("shopEmployeeCount", String(rows.length));
  const search = el("shopEmployeeSearch");
  if (search && search.value !== state.shopEmployeeQuery) search.value = state.shopEmployeeQuery;
}

function filteredSalesAssociates() {
  const query = state.salesAssociateQuery.trim().toLowerCase();
  if (!query) return salesAssociates;
  return salesAssociates.filter((associate) =>
    [associate.name, associate.partLevelLinking].some((value) => value.toLowerCase().includes(query)),
  );
}

function renderSalesAssociates() {
  const rows = filteredSalesAssociates();
  const body = el("salesAssociateRows");
  if (!body) return;
  body.innerHTML = rows.length
    ? rows
        .map(
          (associate) => `
            <tr class="hover:bg-secondary/50">
              <td class="sticky-action-cell ${state.activeSalesAssociateActionId === associate.id ? "action-cell-open" : ""} relative px-2 text-center">
                <button class="sales-associate-action-btn btn btn-soft h-9 px-3" data-sales-associate-actions="${associate.id}" type="button">
                  <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M12 8h.01M12 12h.01M12 16h.01"></path></svg>
                  Actions
                </button>
                <div class="dropdown sales-associate-action-menu fixed z-[1300] w-40 rounded-lg border border-border bg-card p-1 text-sm shadow-lg ${state.activeSalesAssociateActionId === associate.id ? "open" : ""}" style="left: ${state.activeSalesAssociateActionPosition?.left || 0}px; top: ${state.activeSalesAssociateActionPosition?.top || 0}px;" data-sales-associate-menu="${associate.id}">
                  <button class="sales-associate-menu-action flex w-full rounded-md px-3 py-2 text-left hover:bg-secondary" data-sales-associate-action="edit" data-sales-associate-id="${associate.id}">Edit name</button>
                  <button class="sales-associate-menu-action flex w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-secondary" data-sales-associate-action="delete" data-sales-associate-id="${associate.id}">Delete</button>
                </div>
              </td>
              <td class="px-4 py-3 font-medium">${associate.name}</td>
              <td class="px-4 py-3 text-muted-foreground">${associate.partLevelLinking || ""}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td class="px-4 py-10 text-center text-muted-foreground" colspan="3">No matching sales associates found.</td></tr>`;
  setText("salesAssociateCount", String(rows.length));
  const search = el("salesAssociateSearch");
  if (search && search.value !== state.salesAssociateQuery) search.value = state.salesAssociateQuery;
}

function filteredShopItems() {
  const query = state.shopItemQuery.trim().toLowerCase();
  if (!query) return shopItems;
  return shopItems.filter((item) =>
    [String(item.sequence), item.item].some((value) => value.toLowerCase().includes(query)),
  );
}

function renderShopItems() {
  const rows = filteredShopItems();
  const body = el("shopItemRows");
  if (!body) return;
  body.innerHTML = rows.length
    ? rows
        .map(
          (item) => `
            <tr class="hover:bg-secondary/50">
              <td class="px-4 py-3 text-muted-foreground">${item.sequence}</td>
              <td class="px-4 py-3 font-medium">${item.item}</td>
              <td class="px-4 py-3">
                <input type="checkbox" data-shop-item="${item.item}" ${item.enabled ? "checked" : ""} aria-label="Enable ${item.item}" />
              </td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td class="px-4 py-10 text-center text-muted-foreground" colspan="3">No matching items found.</td></tr>`;
  setText("shopItemCount", String(rows.length));
  const search = el("shopItemSearch");
  if (search && search.value !== state.shopItemQuery) search.value = state.shopItemQuery;
}

function customerFieldCheckbox(field, property, label) {
  return `<input type="checkbox" data-customer-field="${field.key}" data-customer-field-property="${property}" ${field[property] ? "checked" : ""} aria-label="${label} ${field.label}" />`;
}

function renderRegularCustomerFields() {
  const body = el("regularCustomerFieldRows");
  if (!body) return;
  body.innerHTML = customerFieldGroups
    .map(
      (group) => `
        <tr class="bg-secondary text-muted-foreground">
          <td class="px-4 py-2 font-semibold" colspan="4">${group.group}</td>
        </tr>
        ${group.fields
          .map(
            (field) => `
              <tr class="hover:bg-secondary/50">
                <td class="px-4 py-3 font-medium">${field.label}</td>
                <td class="px-4 py-3">${customerFieldCheckbox(field, "form", "Visible in form")}</td>
                <td class="px-4 py-3">${customerFieldCheckbox(field, "overview", "Visible in overview")}</td>
                <td class="px-4 py-3">${customerFieldCheckbox(field, "mandatory", "Mandatory")}</td>
              </tr>
            `,
          )
          .join("")}
      `,
    )
    .join("");
}

function renderCustomCustomerFields() {
  const body = el("customCustomerFieldRows");
  if (!body) return;
  body.innerHTML = customCustomerFields
    .map(
      (field, index) => `
        <tr class="hover:bg-secondary/50">
          <td class="px-4 py-3 text-muted-foreground">${index + 1}</td>
          <td class="px-4 py-3">
            <input class="field h-10" data-custom-customer-field="${field.id}" data-custom-customer-field-property="name" value="${field.name}" placeholder="Field name" />
          </td>
          <td class="px-4 py-3">
            <select class="field h-10" data-custom-customer-field="${field.id}" data-custom-customer-field-property="appearsAfter">
              ${customFieldPlacementOptions.map((option) => `<option ${option === field.appearsAfter ? "selected" : ""}>${option}</option>`).join("")}
            </select>
          </td>
          <td class="px-4 py-3">
            <input type="checkbox" data-custom-customer-field="${field.id}" data-custom-customer-field-property="overview" ${field.overview ? "checked" : ""} aria-label="Visible in overview for custom field ${index + 1}" />
          </td>
          <td class="px-4 py-3">
            <input type="checkbox" data-custom-customer-field="${field.id}" data-custom-customer-field-property="mandatory" ${field.mandatory ? "checked" : ""} aria-label="Mandatory for custom field ${index + 1}" />
          </td>
          <td class="px-4 py-3">
            <input type="checkbox" data-custom-customer-field="${field.id}" data-custom-customer-field-property="searchVisible" ${field.searchVisible ? "checked" : ""} aria-label="Search visible for custom field ${index + 1}" />
          </td>
        </tr>
      `,
    )
    .join("");
}

function renderCustomerFields() {
  document.querySelectorAll("[data-customer-field-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.customerFieldTab === state.customerFieldTab);
  });
  el("regularCustomerFieldsPanel")?.classList.toggle("hidden", state.customerFieldTab !== "regular");
  el("customCustomerFieldsPanel")?.classList.toggle("hidden", state.customerFieldTab !== "custom");
  if (state.customerFieldTab === "regular") renderRegularCustomerFields();
  if (state.customerFieldTab === "custom") renderCustomCustomerFields();
}

function normalizeHexColor(value, fallback = "#000000") {
  const raw = String(value || "").trim();
  const withHash = raw.startsWith("#") ? raw : `#${raw}`;
  if (/^#[0-9a-fA-F]{6}$/.test(withHash)) return withHash.toUpperCase();
  return fallback;
}

function shopFitToolCount(fit) {
  const active = fit.tools.filter((tool) => tool.enabled).length;
  return { active, total: fit.tools.length };
}

function currentShopFitToolSelection() {
  const part = shopFitToolParts.find((item) => item.id === state.activeShopFitToolPart);
  const fit = part?.fits.find((item) => item.id === state.activeShopFitToolFit);
  return { part, fit };
}

function shopFitToolEditorRow(part, fit) {
  const count = shopFitToolCount(fit);
  return `
    <tr class="bg-card">
      <td class="p-0" colspan="4">
        <div class="border-t border-border bg-secondary/20 p-4">
          <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 class="font-medium">${escapeHtml(part.part)} · ${escapeHtml(fit.name)}</h3>
              <p class="mt-1 text-sm text-muted-foreground">${count.active} of ${count.total} FitTools visible for this fit.</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-soft h-9 min-h-9 px-3" data-shop-fit-bulk="enable" type="button">Enable all</button>
              <button class="btn btn-soft h-9 min-h-9 px-3" data-shop-fit-bulk="disable" type="button">Disable all</button>
              <button class="btn btn-soft h-9 min-h-9 px-3" type="button">Copy setup</button>
            </div>
          </div>
          <div class="mt-4 overflow-hidden rounded-[10px] border border-border bg-card">
            <table class="w-full min-w-[560px] table-fixed text-left text-sm">
              <colgroup>
                <col />
                <col class="w-[140px]" />
              </colgroup>
              <thead class="bg-secondary text-muted-foreground">
                <tr class="border-b border-border">
                  <th class="px-4 py-3 font-medium">FitTool</th>
                  <th class="px-4 py-3 font-medium">Visible</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                ${fit.tools
                  .map(
                    (tool, index) => `
                      <tr>
                        <td class="px-4 py-3">${escapeHtml(tool.name)}</td>
                        <td class="px-4 py-3">
                          <input class="check" data-shop-fit-tool-toggle="${index}" type="checkbox" ${tool.enabled ? "checked" : ""} aria-label="${escapeAttr(tool.name)} visible" />
                        </td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </td>
    </tr>
  `;
}

function renderShopFitTools() {
  const rows = el("shopFitToolsRows");
  if (!rows) return;

  rows.innerHTML = shopFitToolParts
    .map((part) => {
      const expanded = state.expandedShopFitToolParts.has(part.id);
      const hasMultipleFits = part.fits.length > 1;
      const singleFit = part.fits[0];
      const singleFitCount = shopFitToolCount(singleFit);
      const singleFitActive = state.activeShopFitToolPart === part.id && state.activeShopFitToolFit === singleFit.id;
      const partRow = hasMultipleFits
        ? `
          <tr class="bg-card">
            <td class="px-4 py-3">
              <button class="flex min-w-0 items-center gap-2 font-medium" data-shop-fit-part-toggle="${part.id}" type="button" aria-expanded="${expanded}">
                <svg class="icon h-4 w-4 shrink-0 text-muted-foreground transition ${expanded ? "rotate-90" : ""}" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
                <span>${escapeHtml(part.part)}</span>
              </button>
            </td>
            <td class="px-4 py-3 text-muted-foreground">${part.fits.length} fits</td>
            <td class="px-4 py-3 text-muted-foreground">Expand to review</td>
            <td class="px-4 py-3 text-right"></td>
          </tr>
        `
        : `
          <tr class="bg-card">
            <td class="px-4 py-3">
              <div class="font-medium">${escapeHtml(part.part)}</div>
              <div class="mt-1 text-xs text-muted-foreground">${escapeHtml(singleFit.name)} fit</div>
            </td>
            <td class="px-4 py-3 text-muted-foreground">1 fit</td>
            <td class="px-4 py-3">
              <span class="status bg-emerald-50 text-emerald-700">${singleFitCount.active} of ${singleFitCount.total} visible</span>
            </td>
            <td class="px-4 py-3 text-right">
              <button class="btn btn-soft h-8 min-h-8 px-3" data-shop-fit-edit="${part.id}:${singleFit.id}" type="button">${singleFitActive ? "Close" : "Edit"}</button>
            </td>
          </tr>
          ${singleFitActive ? shopFitToolEditorRow(part, singleFit) : ""}
        `;

      const fitRows = hasMultipleFits && expanded
        ? part.fits
            .map((fit) => {
              const count = shopFitToolCount(fit);
              const active = state.activeShopFitToolPart === part.id && state.activeShopFitToolFit === fit.id;
              return `
                <tr class="${active ? "bg-primary/5" : "bg-secondary/25"}">
                  <td class="px-4 py-3">
                    <div class="flex min-w-0 items-center gap-3 pl-6">
                      <span class="h-px w-5 shrink-0 bg-border"></span>
                      <span class="font-medium">${escapeHtml(fit.name)}</span>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-muted-foreground">Fit</td>
                  <td class="px-4 py-3">
                    <span class="status ${count.active === count.total ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}">${count.active} of ${count.total} visible</span>
                  </td>
                  <td class="px-4 py-3 text-right">
                    <button class="btn btn-soft h-8 min-h-8 px-3" data-shop-fit-edit="${part.id}:${fit.id}" type="button">${active ? "Close" : "Edit"}</button>
                  </td>
                </tr>
                ${active ? shopFitToolEditorRow(part, fit) : ""}
              `;
            })
            .join("")
        : "";

      return partRow + fitRows;
    })
    .join("");
}

function renderEmailSettings() {
  setText("deliveryEmailFrequencyLabel", state.deliveryEmailFrequency);
  document.querySelectorAll("[data-delivery-email-frequency]").forEach((button) => {
    const selected = button.dataset.deliveryEmailFrequency === state.deliveryEmailFrequency;
    button.classList.toggle("selected", selected);
    button.innerHTML = `<span>${escapeHtml(button.dataset.deliveryEmailFrequency)}</span>${selected ? '<span class="text-muted-foreground">✓</span>' : ""}`;
  });
  translatePage(el("deliveryEmailFrequencyMenu"));
}

function renderInspirationAreaSettings() {
  const rows = el("inspirationColorRows");
  if (!rows) return;
  renderInspirationUploadPreviews();
  rows.innerHTML = inspirationColorFields
    .map((field) => {
      const current = normalizeHexColor(state.inspirationColors[field.key], field.swatches[0]);
      const swatches = [...field.swatches, current].filter((value, index, list) => list.indexOf(value) === index);
      return `
        <div class="grid gap-4 px-5 py-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-center">
          <div>
            <div class="text-sm font-medium text-muted-foreground">${field.label}</div>
            <p class="mt-1 text-sm text-muted-foreground">${field.helper}</p>
          </div>
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div class="flex flex-wrap items-center gap-3">
              ${swatches
                .map(
                  (color) => `
                    <button class="h-10 w-10 rounded-full border ${color === current ? "border-foreground ring-2 ring-primary/20" : "border-border"} shadow-sm" style="background:${color}" data-inspiration-color-key="${field.key}" data-inspiration-color-value="${color}" type="button" aria-label="${field.label} ${color}"></button>
                  `,
                )
                .join("")}
            </div>
            <label class="flex items-center gap-3 text-sm">
              <span class="text-muted-foreground">Custom</span>
              <span class="h-10 w-10 rounded-full border border-border shadow-sm" style="background:${current}"></span>
              <input class="field h-10 w-[150px] font-mono" data-inspiration-color-input="${field.key}" value="${current}" maxlength="7" />
            </label>
          </div>
        </div>
      `;
    })
    .join("");

  const previewSurface = el("inspirationPreviewSurface");
  const previewButton = el("inspirationPreviewButton");
  if (previewSurface) previewSurface.style.background = normalizeHexColor(state.inspirationColors.background, "#F5F5F5");
  if (previewButton) {
    previewButton.style.background = normalizeHexColor(state.inspirationColors.button, "#616362");
    previewButton.style.color = normalizeHexColor(state.inspirationColors.buttonText, "#FFFFFF");
    previewButton.style.boxShadow = `0 0 0 4px ${normalizeHexColor(state.inspirationColors.primary, "#6A6C6B")}22`;
  }
}

function renderShopSettingsPage() {
  document.querySelectorAll("[data-shop-settings-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.shopSettingsSection === state.shopSettingsSection);
  });
  document.querySelectorAll("[data-shop-settings-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.shopSettingsPanel !== state.shopSettingsSection);
  });
  if (state.shopSettingsSection === "employees") renderShopEmployees();
  if (state.shopSettingsSection === "salesAssociates") renderSalesAssociates();
  if (state.shopSettingsSection === "items") renderShopItems();
  if (state.shopSettingsSection === "customerFields") renderCustomerFields();
  if (state.shopSettingsSection === "inspirationArea") renderInspirationAreaSettings();
  if (state.shopSettingsSection === "fitTools") renderShopFitTools();
  if (state.shopSettingsSection === "email") renderEmailSettings();
  renderShopSettingsDirtyState();
  translatePage(el("shopSettingsPage"));
}

function delayCellMarkup(dateLabel, weeks) {
  if (!weeks) return `<td class="px-4 py-4">${dateLabel}</td>`;
  const tone = deliveryDelayClasses[weeks] || "bg-secondary";
  const label = `${weeks} week${weeks === 1 ? "" : "s"} delay`;
  return `
    <td class="delivery-delay-cell px-4 py-4 font-medium ${tone}" tabindex="0" title="${escapeAttr(label)}">
      ${dateLabel}
      <span class="delivery-delay-tooltip">${label}</span>
    </td>
  `;
}

function renderDeliveryCalendar() {
  setText("deliveryProductLabel", state.deliveryProduct);
  document.querySelectorAll("[data-delivery-product]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.deliveryProduct === state.deliveryProduct);
  });

  const monthNav = el("deliveryMonthNav");
  if (monthNav) {
    monthNav.innerHTML = deliveryCalendarMonths
      .map(
        (month) => `
          <button class="pill ${month.label === state.deliveryMonth ? "bg-sky-100 text-sky-700 ring-1 ring-inset ring-sky-300" : "bg-secondary text-foreground hover:bg-secondary/80"}" data-delivery-month="${month.label}" type="button">${month.label}</button>
        `,
      )
      .join("");
  }

  const rows = deliveryCalendarData[state.deliveryProduct]?.[state.deliveryMonth] || [];
  const body = el("deliveryCalendarRows");
  if (body) {
    body.innerHTML = rows
      .map(
        (row) => `
          <tr class="hover:bg-secondary/50">
            <td class="px-4 py-4">
              <div class="font-medium">${row.weekday}</div>
              <div class="mt-1 text-sm text-muted-foreground">${row.processLabel}</div>
            </td>
            ${delayCellMarkup(row.stockDate, row.delayWeeks.stock)}
            ${delayCellMarkup(row.cutLengthDate, row.delayWeeks.cutLength)}
            ${delayCellMarkup(row.fastTrackDate, row.delayWeeks.fastTrack)}
          </tr>
        `,
      )
      .join("");
  }

  translatePage(el("deliveryCalendarPage"));
}

function invoiceDateDisplay(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(/ /g, "-");
}

function invoiceMoney(value) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR" }).format(value);
}

const invoicePreviewTemplate = {
  from: ["Acme Tailoring Ltd", "100 Demo Street", "Sample City 1000 AA", "Example Country"],
  billTo: ["Acme Retail Partner", "200 Placeholder Avenue", "Example City 2000 BB", "Example Country"],
  invoiceType: "CustomMade",
  paymentTerm: "15 days",
  clientNo: "ACME-CLIENT-001",
  vatNo: "ACME-VAT-0001",
};

const invoiceLineItemsByNumber = {
  "11604135": [
    { order: "ACME-DEMO-0001", name: "Acme demo account - Placeholder customer A", product: "Shirt", details: "Make: traditional / Fabric: Demo cloth 11 / Options: B05, SW, SH", total: 33.25 },
    { order: "ACME-DEMO-0002", name: "Acme demo account - Placeholder customer B", product: "Shirt", details: "Make: traditional / Fabric: Demo cloth 17 / Options: B05, SW, SH", total: 33.25 },
    { order: "ACME-DEMO-0003", name: "Acme demo account - Placeholder customer C", product: "Shirt", details: "Make: traditional / Fabric: Demo cloth 11 / Options: B05, SW, SH", total: 33.25 },
    { order: "ACME-DEMO-0004", name: "Acme demo account - Placeholder customer D", product: "Shirt", details: "Make: traditional / Fabric: Demo cloth 17 / Options: B05, SW", total: 29.75 },
  ],
};

const invoiceTotalsByNumber = {
  "11604135": [
    { label: "Total amount excl. VAT", value: 129.5 },
    { label: "VAT", note: "21%", value: 27.2 },
    { label: "Extended credit surcharge", note: "1.02%", value: 1.6 },
    { label: "Total amount including surcharge", value: 158.29, strong: true },
  ],
};

const invoiceStatusOptions = ["Paid", "Due", "Overdue"];

function invoiceStatus(invoice) {
  if (invoice.outstanding <= 0) return "Paid";
  const dueDate = new Date(`${invoice.dueDate}T23:59:59`);
  return dueDate < new Date() ? "Overdue" : "Due";
}

function invoiceStatusClasses(status) {
  return {
    Paid: "bg-emerald-50 text-emerald-700",
    Due: "bg-amber-50 text-amber-700",
    Overdue: "bg-red-50 text-red-600",
  }[status] || "bg-secondary text-foreground";
}

function invoiceStatusMarkup(invoice) {
  const status = invoiceStatus(invoice);
  return `<span class="status ${invoiceStatusClasses(status)}">${escapeHtml(status)}</span>`;
}

function invoiceLineItems(invoice) {
  return invoiceLineItemsByNumber[invoice.number] || [
    {
      order: `INV-${invoice.number}`,
      name: "Acme demo account",
      product: "Invoice charges",
      details: `${invoicePreviewTemplate.invoiceType} invoice activity`,
      total: invoice.amount,
    },
  ];
}

function invoiceTotals(invoice) {
  if (invoiceTotalsByNumber[invoice.number]) return invoiceTotalsByNumber[invoice.number];
  const net = Math.round((invoice.amount / 1.21) * 100) / 100;
  const vat = Math.round((invoice.amount - net) * 100) / 100;
  return [
    { label: "Total amount excl. VAT", value: net },
    { label: "VAT", note: "21%", value: vat },
    { label: "Total amount incl. VAT", value: invoice.amount, strong: true },
  ];
}

function invoiceFiltersActive() {
  return Boolean(state.invoiceQuery.trim() || state.invoiceDateFrom || state.invoiceDateTo || state.invoiceStatusFilter);
}

function filteredInvoices() {
  const query = state.invoiceQuery.trim().toLowerCase();
  const from = state.invoiceDateFrom ? new Date(`${state.invoiceDateFrom}T00:00:00`) : null;
  const to = state.invoiceDateTo ? new Date(`${state.invoiceDateTo}T23:59:59`) : null;
  return invoices.filter((invoice) => {
    const invoiceDate = new Date(`${invoice.date}T12:00:00`);
    const matchesNumber = !query || invoice.number.toLowerCase().includes(query);
    const matchesFrom = !from || invoiceDate >= from;
    const matchesTo = !to || invoiceDate <= to;
    const matchesStatus = !state.invoiceStatusFilter || invoiceStatus(invoice) === state.invoiceStatusFilter;
    return matchesNumber && matchesFrom && matchesTo && matchesStatus;
  });
}

function findInvoice(number) {
  return invoices.find((invoice) => invoice.number === number) || null;
}

function syncInvoiceStatusFilter() {
  const label = state.invoiceStatusFilter || "Any status";
  setText("invoiceStatusLabel", label);
  el("invoiceStatusLabel")?.classList.toggle("text-muted-foreground", !state.invoiceStatusFilter);
  el("invoiceStatusLabel")?.classList.toggle("text-foreground", Boolean(state.invoiceStatusFilter));
  el("invoiceStatusBtn")?.setAttribute("aria-expanded", String(state.invoiceStatusMenuOpen));
  const menu = el("invoiceStatusMenu");
  menu?.classList.toggle("hidden", !state.invoiceStatusMenuOpen);
  menu?.classList.toggle("open", state.invoiceStatusMenuOpen);
  menu?.querySelectorAll("[data-invoice-status]").forEach((button) => {
    const selected = button.dataset.invoiceStatus === state.invoiceStatusFilter;
    button.classList.toggle("selected", selected);
    button.innerHTML = `<span>${button.dataset.invoiceStatus || "Any status"}</span>${selected ? icon("check", "h-4 w-4 text-muted-foreground") : ""}`;
  });
}

function renderInvoiceBulkActions() {
  const selectedCount = state.selectedInvoices.size;
  el("invoiceBulkActionShelf")?.classList.toggle("hidden", !selectedCount);
  setText("invoiceSelectedCount", `${selectedCount} invoice${selectedCount === 1 ? "" : "s"}`);
}

function renderInvoiceViewModal() {
  const invoice = findInvoice(state.activeInvoiceNumber);
  if (!invoice) return;
  const status = invoiceStatus(invoice);
  const lineItems = invoiceLineItems(invoice);
  const totals = invoiceTotals(invoice);
  setText("invoiceViewTitle", `${invoicePreviewTemplate.invoiceType} invoice`);
  setText("invoiceViewSubtitle", `Invoice issue date ${invoiceDateDisplay(invoice.date)}`);
  const statusNode = el("invoiceViewStatus");
  if (statusNode) {
    statusNode.className = `status ${invoiceStatusClasses(status)}`;
    statusNode.textContent = status;
  }
  const summary = el("invoiceViewSummary");
  if (summary) {
    summary.innerHTML = `
      <div><span class="block text-xs font-medium text-muted-foreground">Due date</span><span class="mt-1 block font-medium">${invoiceDateDisplay(invoice.dueDate)}</span></div>
      <div><span class="block text-xs font-medium text-muted-foreground">Status</span><span class="mt-1 block font-medium">${escapeHtml(status)}</span></div>
      <div><span class="block text-xs font-medium text-muted-foreground">Invoice number</span><span class="mt-1 block font-medium text-primary">${escapeHtml(invoice.number)}</span></div>
      <div><span class="block text-xs font-medium text-muted-foreground">Payment term</span><span class="mt-1 block font-medium">${escapeHtml(invoicePreviewTemplate.paymentTerm)}</span></div>
    `;
  }

  const body = el("invoiceViewBody");
  if (!body) return;
  body.innerHTML = `
    <section>
      <div class="flex items-center justify-between gap-4 rounded-[12px] border border-border bg-secondary/30 p-4">
        <div>
          <p class="text-sm font-medium text-muted-foreground">Invoice amount</p>
          <p class="mt-1 text-xl font-semibold text-foreground">${invoiceMoney(invoice.amount)}</p>
        </div>
        <div class="text-right">
          <p class="text-sm font-medium text-muted-foreground">Outstanding</p>
          <p class="mt-1 text-base font-semibold ${invoice.outstanding > 0 ? "text-red-600" : "text-foreground"}">${invoiceMoney(invoice.outstanding)}</p>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-semibold text-foreground">Invoice details</h3>
      <div class="grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <p class="text-xs font-medium text-muted-foreground">Bill to</p>
          <p class="mt-1 leading-6 text-foreground">${invoicePreviewTemplate.billTo.map(escapeHtml).join("<br />")}</p>
        </div>
        <div>
          <p class="text-xs font-medium text-muted-foreground">From</p>
          <p class="mt-1 leading-6 text-foreground">${invoicePreviewTemplate.from.map(escapeHtml).join("<br />")}</p>
        </div>
      </div>
      <div class="grid gap-3 rounded-[12px] border border-border p-4 text-sm sm:grid-cols-2">
        <div><span class="block text-xs font-medium text-muted-foreground">Type</span><span class="mt-1 block font-medium">${escapeHtml(invoicePreviewTemplate.invoiceType)}</span></div>
        <div><span class="block text-xs font-medium text-muted-foreground">Client no.</span><span class="mt-1 block font-medium">${escapeHtml(invoicePreviewTemplate.clientNo)}</span></div>
        <div><span class="block text-xs font-medium text-muted-foreground">VAT no.</span><span class="mt-1 block font-medium">${escapeHtml(invoicePreviewTemplate.vatNo)}</span></div>
        <div><span class="block text-xs font-medium text-muted-foreground">Line items</span><span class="mt-1 block font-medium">${lineItems.length}</span></div>
      </div>
    </section>

    <section class="space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-sm font-semibold text-foreground">Line items</h3>
        <span class="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">${lineItems.length} item${lineItems.length === 1 ? "" : "s"}</span>
      </div>
      <div class="divide-y divide-border rounded-[12px] border border-border">
        ${lineItems.map((item) => `
          <div class="flex flex-col gap-3 p-4 text-sm sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <p class="font-medium text-foreground">${escapeHtml(item.product)}</p>
              <p class="mt-1 text-muted-foreground">${escapeHtml(item.name)}</p>
              <p class="mt-1 text-xs text-muted-foreground">${escapeHtml(item.order)}</p>
              <p class="mt-2 text-xs leading-5 text-muted-foreground">${escapeHtml(item.details)}</p>
            </div>
            <div class="shrink-0 font-semibold text-foreground sm:text-right">${invoiceMoney(item.total)}</div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-semibold text-foreground">Totals</h3>
      <div class="space-y-3 border-t border-border pt-4">
        ${totals.map((row) => `
          <div class="flex items-center justify-between gap-4 text-sm ${row.strong ? "border-t border-border pt-3 font-semibold text-foreground" : "text-muted-foreground"}">
            <span>${escapeHtml(row.label)}${row.note ? ` <span class="text-xs">${escapeHtml(row.note)}</span>` : ""}</span>
            <span class="shrink-0 ${row.strong ? "text-foreground" : ""}">${invoiceMoney(row.value)}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function setInvoiceViewModal(open, invoiceNumber = state.activeInvoiceNumber) {
  const panel = el("invoiceViewModal");
  if (!panel) return;
  if (!open && !panel.classList.contains("open") && !panel.classList.contains("closing")) return;
  if (state.invoiceViewPanelCloseTimer) window.clearTimeout(state.invoiceViewPanelCloseTimer);
  state.invoiceViewPanelCloseTimer = null;

  if (open) {
    const invoice = findInvoice(invoiceNumber);
    if (!invoice) return;
    state.activeInvoiceNumber = invoice.number;
    renderInvoiceViewModal();
    panel.classList.remove("open");
    panel.classList.add("closing");
    requestAnimationFrame(() => {
      panel.classList.remove("closing");
      panel.classList.add("open");
    });
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("invoice-side-open");
    return;
  }

  state.activeInvoiceNumber = null;
  panel.classList.remove("open");
  panel.classList.add("closing");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("invoice-side-open");
  state.invoiceViewPanelCloseTimer = window.setTimeout(() => {
    panel.classList.remove("closing");
    state.invoiceViewPanelCloseTimer = null;
  }, 220);
}

function renderInvoicePagination(totalPages) {
  const container = el("invoicePagination");
  if (!container) return;
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button class="page-number ${page === state.invoicePage ? "bg-primary text-primary-foreground shadow-sm" : ""}" data-invoice-page="${page}">${page}</button>`;
  }).join("");

  container.innerHTML = `
    <button class="page-link" data-invoice-page-action="previous" ${state.invoicePage === 1 ? "disabled" : ""}>
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
      Previous
    </button>
    ${pageButtons}
    <button class="page-link" data-invoice-page-action="next" ${state.invoicePage === totalPages ? "disabled" : ""}>
      Next
      <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
    </button>
  `;
}

function renderInvoicePageSizeMenu() {
  const menu = el("invoicePageSizeMenu");
  if (!menu) return;
  menu.classList.toggle("hidden", !state.invoicePageSizeOpen);
  menu.querySelectorAll("[data-invoice-page-size]").forEach((button) => {
    const active = Number(button.dataset.invoicePageSize) === state.invoicePageSize;
    button.classList.toggle("bg-secondary", active);
    button.classList.toggle("font-medium", active);
  });
}

function renderInvoicesPage() {
  const rows = filteredInvoices();
  const totalPages = Math.max(1, Math.ceil(rows.length / state.invoicePageSize));
  state.invoicePage = Math.min(state.invoicePage, totalPages);
  const start = (state.invoicePage - 1) * state.invoicePageSize;
  const visibleRows = rows.slice(start, start + state.invoicePageSize);
  const body = el("invoiceRows");
  if (!body) return;

  body.innerHTML = visibleRows
    .map(
      (invoice) => `
        <tr class="h-14 cursor-pointer hover:bg-surface" data-invoice-row="${invoice.number}">
          <td class="sticky-action-cell px-4">
            <button class="btn btn-soft h-9 px-3" data-invoice-download="${invoice.number}" type="button" title="Download invoice ${invoice.number}">
              <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
              Download
            </button>
          </td>
          <td class="px-4"><input class="invoice-row-check check" type="checkbox" data-invoice-number="${invoice.number}" ${state.selectedInvoices.has(invoice.number) ? "checked" : ""} /></td>
          <td class="px-4 font-medium"><button class="pill max-w-full justify-start bg-sky-100 text-sky-700 hover:bg-sky-200/70" data-invoice-view="${invoice.number}" type="button" title="View invoice ${invoice.number}">${icon("file", "h-3.5 w-3.5")}<span class="truncate">${invoice.number}</span></button></td>
          <td class="px-4">${invoiceStatusMarkup(invoice)}</td>
          <td class="px-4 text-muted-foreground">${invoiceDateDisplay(invoice.date)}</td>
          <td class="px-4 text-muted-foreground">${invoiceDateDisplay(invoice.dueDate)}</td>
          <td class="px-4">${invoiceMoney(invoice.amount)}</td>
          <td class="px-4 ${invoice.outstanding > 0 ? "text-red-600" : "text-muted-foreground"}">${invoiceMoney(invoice.outstanding)}</td>
        </tr>
      `,
    )
    .join("");

  if (!rows.length) {
    body.innerHTML = `
      <tr>
        <td colspan="8" class="px-4 py-14 text-center text-sm text-muted-foreground">No invoices match these filters.</td>
      </tr>
    `;
  }

  const visibleIds = visibleRows.map((invoice) => invoice.number);
  const selectedCount = visibleIds.filter((number) => state.selectedInvoices.has(number)).length;
  const selectAll = el("selectAllInvoices");
  if (selectAll) {
    selectAll.checked = visibleIds.length > 0 && selectedCount === visibleIds.length;
    selectAll.indeterminate = selectedCount > 0 && selectedCount < visibleIds.length;
  }
  if (el("invoiceNumberSearch")) el("invoiceNumberSearch").value = state.invoiceQuery;
  if (el("invoiceDateFrom")) el("invoiceDateFrom").value = state.invoiceDateFrom;
  if (el("invoiceDateTo")) el("invoiceDateTo").value = state.invoiceDateTo;
  syncDateDisplayFor(el("invoiceDateFrom"));
  syncDateDisplayFor(el("invoiceDateTo"));
  el("resetInvoiceFiltersBtn")?.classList.toggle("hidden", !invoiceFiltersActive());
  syncInvoiceStatusFilter();
  renderInvoiceBulkActions();
  setText("invoicePageSizeLabel", String(state.invoicePageSize));
  setText("invoiceTotalCount", `of ${rows.length} entries`);
  renderInvoicePageSizeMenu();
  renderInvoicePagination(totalPages);
  translatePage(el("invoicesPage"));
}

function orderFormPartLabel(partId) {
  return orderFormParts.find((part) => part.id === partId)?.label || partId;
}

function orderFormPartFitLabel(form, partId) {
  return `${orderFormPartLabel(partId)} - ${(form.partFits || {})[partId] || form.fit || "Regular"}`;
}

function orderFormTodayLabel() {
  return new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "Europe/Amsterdam" });
}

function cloneOrderForm(form) {
  return {
    ...form,
    parts: [...form.parts],
    partFits: { ...(form.partFits || {}) },
    sectionVisibility: { ...(form.sectionVisibility || {}) },
    designOptions: Object.fromEntries(
      Object.entries(form.designOptions || {}).map(([partId, options]) => [partId, options.map((option) => normalizeOrderFormOption(option))]),
    ),
  };
}

function includedPartsForItem(item) {
  return orderFormParts.filter((part) => part.items.includes(item)).map((part) => part.id);
}

function orderFormStartAllItems() {
  return createOrderFlowAllItems();
}

function orderFormStartSelectedItem() {
  return orderFormStartAllItems().find((item) => item.id === state.orderFormStartSelectedItemId && !item.disabled) || null;
}

function orderFormStartItemSelected(item) {
  return !item.disabled && item.id === state.orderFormStartSelectedItemId;
}

function orderFormStartVisibleItems() {
  const query = state.orderFormStartSearch.trim().toLowerCase();
  const items = query
    ? orderFormStartAllItems()
    : createOrderFlowItemsForCategory(state.orderFormStartCategory).map((item) => ({
        ...item,
        categoryId: state.orderFormStartCategory,
        categoryLabel: createOrderFlowCategories.find((category) => category.id === state.orderFormStartCategory)?.label || "",
      }));
  if (!query) return items;
  return items.filter((item) => `${item.label} ${item.note || ""} ${item.categoryLabel || ""}`.toLowerCase().includes(query));
}

function setOrderFormStartItem(itemId) {
  const item = orderFormStartAllItems().find((option) => option.id === itemId && !option.disabled);
  if (!item) return;
  state.orderFormStartSelectedItemId = item.id;
  state.orderFormStartItem = item.fieldValue || item.label;
  state.orderFormStartCategory = item.categoryId || item.flowItem || item.id;
  renderOrderFormStartModal();
}

function orderFormDraftConfigForStartItem(item) {
  const itemName = item?.fieldValue || item?.label || "Trousers";
  const parts = includedPartsForItem(itemName);
  return {
    item: itemName,
    fit: item?.flowItem === "trousers" ? "T40" : "Regular",
    make: "Handmade",
    parts: parts.length ? parts : ["trousers"],
  };
}

function ensureOrderFormDraftParts() {
  const draft = state.orderFormDraft;
  if (!draft) return;
  const recommendedParts = includedPartsForItem(draft.item);
  if (!draft.parts.length) draft.parts = recommendedParts.length ? recommendedParts : ["jacket"];
  draft.sectionVisibility = draft.sectionVisibility || {};
  draft.parts.forEach((partId) => {
    if (!draft.designOptions[partId]) draft.designOptions[partId] = defaultOrderFormOptions(partId);
    draft.designOptions[partId] = draft.designOptions[partId].map((option) => normalizeOrderFormOption(option));
    draft.partFits = draft.partFits || {};
    if (!draft.partFits[partId]) draft.partFits[partId] = draft.fit || "Slim";
    ["fit", "design"].forEach((section) => {
      const key = orderFormSectionKey(section, partId);
      if (draft.sectionVisibility[key] === undefined) draft.sectionVisibility[key] = true;
    });
  });
  if (!draft.parts.includes(state.activeOrderFormPart)) {
    state.activeOrderFormPart = draft.parts[0] || recommendedParts[0] || "jacket";
  }
}

function createOrderFormDraft(form = null, startItem = null) {
  if (form) return cloneOrderForm(form);
  const config = orderFormDraftConfigForStartItem(startItem);
  const item = config.item;
  const parts = config.parts;
  return {
    id: `of-${Date.now()}`,
    name: `${item} order form`,
    productLine: "CustomMade",
    item,
    make: config.make,
    fit: config.fit,
    parts,
    partFits: Object.fromEntries(parts.map((partId) => [partId, config.fit])),
    sectionVisibility: Object.fromEntries(parts.flatMap((partId) => ["fit", "design"].map((section) => [orderFormSectionKey(section, partId), true]))),
    designOptions: Object.fromEntries(parts.map((partId) => [partId, defaultOrderFormOptions(partId)])),
    lastEdited: orderFormTodayLabel(),
    createdBy: "George Cauter",
  };
}

function filteredOrderForms() {
  const query = state.orderFormSearchQuery.trim().toLowerCase();
  if (!query) return orderForms;
  return orderForms.filter((form) => {
    return form.name.toLowerCase().includes(query);
  });
}

function renderOrderFormLibrary() {
  const rows = el("orderFormLibraryRows");
  if (!rows) return;
  const forms = filteredOrderForms();
  rows.innerHTML = forms
    .map(
      (form) => `
        <article class="group flex min-h-[220px] flex-col rounded-lg border border-border bg-card p-4 shadow-panel transition hover:border-muted-foreground/30">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="text-xs font-medium text-muted-foreground">Edited ${escapeHtml(form.lastEdited)}</div>
              <h2 class="mt-2 truncate text-lg font-semibold" title="${escapeAttr(form.name)}">${escapeHtml(form.name)}</h2>
            </div>
          </div>
          <div class="mt-4 flex flex-wrap gap-1">
            ${form.parts.map((partId) => `<span class="rounded-md bg-secondary px-2 py-1 text-xs font-medium">${escapeHtml(orderFormPartFitLabel(form, partId))}</span>`).join("")}
          </div>
          <div class="mt-auto flex flex-wrap justify-end gap-2 pt-5">
            ${
              state.orderFormPreviewUnlocked
                ? `<button class="btn btn-soft h-9 px-3 hover:bg-primary/10 hover:text-primary" data-order-form-action="preview" data-order-form-id="${escapeAttr(form.id)}" type="button" title="Preview form">
                    <svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Preview
                  </button>`
                : ""
            }
            <button class="btn btn-soft h-9 px-3" data-order-form-action="edit" data-order-form-id="${escapeAttr(form.id)}" type="button">Edit</button>
            <button class="btn btn-soft h-9 px-3" data-order-form-action="copy" data-order-form-id="${escapeAttr(form.id)}" type="button">Copy</button>
            <button class="btn btn-primary h-9 px-3" data-order-form-action="download" data-order-form-id="${escapeAttr(form.id)}" type="button">Download</button>
          </div>
        </article>
      `,
    )
    .join("");
  if (!forms.length) {
    rows.innerHTML = `<div class="rounded-lg border border-border p-10 text-center text-sm text-muted-foreground md:col-span-2 xl:col-span-3">No saved forms match your search.</div>`;
  }
  if (el("orderFormSearchInput")) el("orderFormSearchInput").value = state.orderFormSearchQuery;
}

function renderOrderFormSelect(selectId, values, selectedValue) {
  const select = el(selectId);
  if (!select) return;
  select.innerHTML = values.map((value) => `<option value="${escapeAttr(value)}" ${value === selectedValue ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function orderFormOptionCount(partId) {
  const options = state.orderFormDraft?.designOptions?.[partId] || [];
  return { active: options.filter((option) => option.enabled).length, total: options.length };
}

function orderFormSectionKey(section, partId) {
  return `${section}:${partId}`;
}

function isOrderFormSectionVisible(draft, section, partId) {
  const key = orderFormSectionKey(section, partId);
  return (draft.sectionVisibility || {})[key] !== false;
}

function orderFormSectionVisibilityButton(draft, section, partId) {
  const visible = isOrderFormSectionVisible(draft, section, partId);
  return `
    <button class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${visible ? "hover:bg-secondary" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}" data-order-form-section-toggle="${section}" data-order-form-section-part="${partId}" type="button" title="${visible ? "Hide section" : "Show section"}" aria-label="${visible ? "Hide section" : "Show section"}">
      ${
        visible
          ? `<svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
          : `<svg class="icon h-4 w-4" viewBox="0 0 24 24"><path d="M3 3l18 18"></path><path d="M10.6 10.6A2 2 0 0 0 12 14a2 2 0 0 0 1.4-.6"></path><path d="M9.9 4.2A10.6 10.6 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-3.1 4.3"></path><path d="M6.6 6.6C3.6 8.6 2 12 2 12s3.5 8 10 8a10.8 10.8 0 0 0 4.8-1.1"></path></svg>`
      }
    </button>
  `;
}

function orderFormPartConfigRows(draft) {
  const fitRow = (partId, label) => {
    const visible = isOrderFormSectionVisible(draft, "fit", partId);
    return `
    <tr class="bg-card hover:bg-secondary/50 ${visible ? "" : "opacity-60"}">
      <td class="px-4 py-3">
        <div class="font-medium">${escapeHtml(label)} FitTools</div>
      </td>
      <td class="px-4 py-3 text-muted-foreground">Fit</td>
      <td class="px-4 py-3">
        <select class="field h-9" data-order-form-part-fit="${partId}" ${visible ? "" : "disabled"}>
          ${orderFormFits.map((fit) => `<option value="${escapeAttr(fit)}" ${((draft.partFits || {})[partId] || draft.fit || "Slim") === fit ? "selected" : ""}>${escapeHtml(fit)}</option>`).join("")}
        </select>
      </td>
      <td class="px-4 py-3">
        <div class="flex justify-end">${orderFormSectionVisibilityButton(draft, "fit", partId)}</div>
      </td>
    </tr>
  `;
  };
  const designRow = (partId, label) => {
    const count = orderFormOptionCount(partId);
    const complete = count.active === count.total;
    const visible = isOrderFormSectionVisible(draft, "design", partId);
    return `
      <tr class="bg-card hover:bg-secondary/50 ${visible ? "" : "opacity-60"}">
        <td class="px-4 py-3">
          <div class="font-medium">${escapeHtml(label)} Design options</div>
        </td>
        <td class="px-4 py-3 text-muted-foreground">DesignOptions</td>
        <td class="px-4 py-3">
          <span class="status ${complete ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}">${count.active} of ${count.total} selected</span>
        </td>
        <td class="px-4 py-3 text-right">
          <div class="flex justify-end gap-2">
            <button class="btn btn-soft h-8 min-h-8 px-3" data-order-form-design-edit="${partId}" type="button" ${visible ? "" : "disabled"}>Edit</button>
            ${orderFormSectionVisibilityButton(draft, "design", partId)}
          </div>
        </td>
      </tr>
    `;
  };
  return [
    `<tr class="bg-card">
      <td class="px-4 py-3">
        <div class="font-medium">Customer details</div>
        <div class="mt-1 text-xs text-muted-foreground">Uneditable</div>
      </td>
      <td class="px-4 py-3 text-muted-foreground">Details</td>
      <td class="px-4 py-3">
        <span class="status bg-secondary text-muted-foreground">Always included</span>
      </td>
      <td class="px-4 py-3 text-right"></td>
    </tr>`,
    ...draft.parts.flatMap((partId) => {
      const label = orderFormPartLabel(partId);
      return [fitRow(partId, label), designRow(partId, label)];
    }),
  ].join("");
}

function renderOrderFormBuilder() {
  const draft = state.orderFormDraft;
  if (!draft) return;
  ensureOrderFormDraftParts();
  setText("orderFormBuilderTitle", state.editingOrderFormId ? "Edit order form" : "Create order form");
  el("orderFormNameInput").value = draft.name;
  renderOrderFormSelect("orderFormItemSelect", orderFormItems, draft.item);
  el("orderFormPartCards").innerHTML = orderFormPartConfigRows(draft);

}

function openOrderFormBuilder(formId = null) {
  const existing = formId ? orderForms.find((form) => form.id === formId) : null;
  state.editingOrderFormId = existing?.id || null;
  state.orderFormDraft = createOrderFormDraft(existing, orderFormStartSelectedItem());
  state.activeOrderFormPart = state.orderFormDraft.parts[0] || "jacket";
  state.orderFormView = "builder";
  renderDownloadsPage();
}

function copyOrderFormBuilder(formId) {
  const existing = orderForms.find((form) => form.id === formId);
  if (!existing) return;
  state.editingOrderFormId = null;
  state.orderFormDraft = {
    ...createOrderFormDraft(existing),
    id: `of-${Date.now()}`,
    name: `${existing.name} copy`,
    lastEdited: orderFormTodayLabel(),
  };
  state.activeOrderFormPart = state.orderFormDraft.parts[0] || "jacket";
  state.orderFormView = "builder";
  renderDownloadsPage();
}

function beginOrderFormBuilder() {
  const selectedItem = orderFormStartSelectedItem();
  if (!selectedItem) {
    showToast("Select an available form item first.");
    return;
  }
  setOrderFormStartModal(false);
  if (selectedItem.legacyReadyMade) {
    closeModals();
    setPage("legacyReadyMadeOrder");
    return;
  }
  openOrderFormBuilder();
}

function closeOrderFormBuilder() {
  state.orderFormView = "library";
  state.editingOrderFormId = null;
  state.orderFormDraft = null;
  renderDownloadsPage();
}

function saveOrderFormDraft() {
  const draft = state.orderFormDraft;
  if (!draft) return;
  draft.name = draft.name.trim() || "Untitled order form";
  draft.lastEdited = orderFormTodayLabel();
  ensureOrderFormDraftParts();
  const saved = cloneOrderForm(draft);
  const index = orderForms.findIndex((form) => form.id === state.editingOrderFormId);
  if (index >= 0) {
    orderForms[index] = saved;
    showToast(`${saved.name} updated.`);
  } else {
    orderForms.unshift(saved);
    showToast(`${saved.name} saved to the library.`);
  }
  state.previewOrderFormId = saved.id;
  closeOrderFormBuilder();
}

function renderDownloadsPage() {
  el("downloadsLockedPanel")?.classList.toggle("hidden", state.downloadsUnlocked);
  el("downloadsContentPanel")?.classList.toggle("hidden", !state.downloadsUnlocked);
  el("downloadsPasswordError")?.classList.toggle("hidden", !state.downloadsPasswordError);
  el("orderFormLibraryView")?.classList.toggle("hidden", state.orderFormView !== "library");
  el("orderFormBuilderView")?.classList.toggle("hidden", state.orderFormView !== "builder");
  if (state.downloadsUnlocked && state.orderFormView === "library") renderOrderFormLibrary();
  if (state.downloadsUnlocked && state.orderFormView === "builder") renderOrderFormBuilder();
  if (!state.downloadsUnlocked) {
    requestAnimationFrame(() => el("downloadsPasswordInput")?.focus());
  }
  translatePage(el("downloadsPage"));
}

function setAccountSettingsModal(open, tab = state.accountSettingsTab) {
  if (open) {
    state.accountSettingsTab = tab;
    renderAccountSettingsModal();
  } else {
    closeAccountSettingsSelects();
    resetAccountPasswordPanel();
  }
  el("accountSettingsModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function selectedStoreOption() {
  return storeSwitchOptions.find((option) => option.id === state.selectedStoreId) || storeSwitchOptions[0];
}

function renderStoreSwitchModal() {
  const selected = selectedStoreOption().id;
  const list = el("storeSwitchOptions");
  if (!list) return;
  list.innerHTML = storeSwitchOptions
    .map(
      (option) => `
        <button class="store-radio-card flex w-full items-center gap-3 px-3 py-2.5 text-left ${option.id === selected ? "selected" : ""}" data-store-option="${option.id}" type="button" role="radio" aria-checked="${option.id === selected ? "true" : "false"}">
          <span class="store-radio-indicator" aria-hidden="true"></span>
          <span class="text-sm font-medium text-foreground">${escapeHtml(option.label)}</span>
        </button>
      `,
    )
    .join("");
}

function setStoreSwitchModal(open) {
  if (open) {
    state.activeNavPopout = null;
    state.activeNavSubpopout = null;
    renderNavPopouts();
    el("mobileNavDrawer")?.classList.remove("open");
    el("mobileNavScrim")?.classList.remove("open");
    document.body.classList.remove("overflow-hidden");
    setAccountSettingsModal(false);
    renderStoreSwitchModal();
  }
  el("storeSwitchModal")?.classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function setCheatCodesModal(open) {
  el("cheatCodesModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function setCreateOrderStopModal(open) {
  el("createOrderStopModal").classList.toggle("open", open);
  if (!open) setOverlay(anyModalOpen());
  else setOverlay(true);
}

function setCreateOrderFlowModal(open) {
  el("createOrderFlowModal")?.classList.toggle("open", open);
  if (open) {
    state.createOrderFlowCategory = "formal";
    state.createOrderFlowSearch = "";
    setCreateOrderFlowItem("formal-two-piece");
    renderCreateOrderFlowModal();
  }
  setOverlay(open || anyModalOpen());
}

function setFitProfileModal(open) {
  el("fitProfileModal").classList.toggle("open", open);
  setOverlay(open || anyModalOpen());
}

function setFitProfileHelpModal(open, label = "Measurement guide") {
  el("fitProfileHelpModal").classList.toggle("open", open);
  if (open) {
    setText("fitProfileHelpTitle", label);
    setText("fitProfileHelpImageLabel", label);
  }
  setOverlay(open || anyModalOpen());
}

function setFitProfileNameModal(open, profileId = state.renamingFitProfileId) {
  const profile = fitProfiles.find((item) => item.id === profileId);
  state.renamingFitProfileId = open && profile ? profile.id : null;
  el("fitProfileNameModal")?.classList.toggle("open", open && Boolean(profile));
  if (open && profile) {
    el("fitProfileNameInput").value = profile.label;
    requestAnimationFrame(() => {
      el("fitProfileNameInput").focus();
      el("fitProfileNameInput").select();
    });
  }
  setOverlay((open && Boolean(profile)) || anyModalOpen());
}

function saveFitProfileName() {
  const profile = fitProfiles.find((item) => item.id === state.renamingFitProfileId);
  if (!profile) {
    setFitProfileNameModal(false);
    return;
  }
  const nextName = el("fitProfileNameInput").value.trim();
  if (!nextName) {
    showToast("Add a FitProfile name first.");
    el("fitProfileNameInput").focus();
    return;
  }
  profile.label = nextName;
  setFitProfileNameModal(false);
  renderFitProfiles();
  if (state.activeFitProfileId === profile.id && el("fitProfileModal")?.classList.contains("open")) {
    renderFitProfileModal(profile.id);
  }
  showToast("FitProfile name saved.");
}

function renderEditFitProfileSaveChoice() {
  document.querySelectorAll("[data-edit-fit-save-card]").forEach((card) => {
    const selected = card.dataset.editFitSaveCard === state.editFitProfileSaveChoice;
    card.classList.toggle("selected", selected);
  });
  document.querySelectorAll("[data-edit-fit-save-choice]").forEach((button) => {
    button.setAttribute("aria-checked", String(button.dataset.editFitSaveChoice === state.editFitProfileSaveChoice));
  });
  el("editFitProfileNewNameWrap").classList.toggle("hidden", state.editFitProfileSaveChoice !== "create");
}

function setEditFitProfileSaveModal(open) {
  el("editFitProfileSaveModal").classList.toggle("open", open);
  if (open) {
    state.editFitProfileSaveChoice = "create";
    setText("editFitProfileSaveTitle", "Save FitProfile");
    el("editFitProfileNewNameInput").value = "";
    renderEditFitProfileSaveChoice();
    requestAnimationFrame(() => el("editFitProfileNewNameInput").focus());
  }
  setOverlay(open || anyModalOpen());
}

function setCreateFitProfileStartModal(open) {
  el("createFitProfileStartModal").classList.toggle("open", open);
  if (open) {
    state.createFitProfileCustomerId = state.selectedCustomerId || state.createFitProfileCustomerId || customers[0].id;
    syncCreateFitProfileStartPackage(state.createFitProfilePackage || "three-piece");
  } else {
    el("createFitProfileStartPackageMenu").classList.add("hidden");
    el("createFitProfileStartPackageBtn").setAttribute("aria-expanded", "false");
  }
  setOverlay(open || anyModalOpen());
}

function setOrderFormStartModal(open) {
  el("orderFormStartModal")?.classList.toggle("open", open);
  if (open) {
    state.orderFormStartCategory = "informal";
    state.orderFormStartSearch = "";
    setOrderFormStartItem("legacy-informal-jacket-trouser");
    renderOrderFormStartModal();
  }
  setOverlay(open || anyModalOpen());
}

function renderOrderFormStartModal() {
  const categoriesWrap = el("orderFormStartCategories");
  const itemsWrap = el("orderFormStartItems");
  if (!categoriesWrap || !itemsWrap) return;
  categoriesWrap.innerHTML = createOrderFlowCategories
    .map(
      (category) => `
        <button class="shop-settings-section ${category.id === state.orderFormStartCategory ? "active" : ""}" data-order-form-start-category="${category.id}" type="button">
          <span>${escapeHtml(category.label)}</span>
          ${icon("chevron-right", "h-4 w-4 text-muted-foreground")}
        </button>
      `,
    )
    .join("");

  const visibleItems = orderFormStartVisibleItems();
  const selectedItem = orderFormStartSelectedItem();
  itemsWrap.innerHTML = visibleItems.length
    ? `
      <div class="grid gap-3">
        ${visibleItems
          .map((item) => {
            const selected = orderFormStartItemSelected(item);
            return `
              <button class="flex min-h-[72px] w-full items-center justify-between gap-4 rounded-[10px] border p-4 text-left transition ${
                selected
                  ? "border-primary bg-primary/10 ring-1 ring-primary/25"
                  : item.disabled
                    ? "cursor-not-allowed border-border bg-secondary/35 opacity-60"
                    : "border-border bg-card hover:bg-secondary"
              }" data-order-form-start-item="${escapeAttr(item.id)}" type="button" ${item.disabled ? "disabled" : ""}>
                <span class="min-w-0">
                  <span class="block font-medium">${escapeHtml(item.label)}</span>
                  ${item.note ? `<span class="mt-1 block text-sm text-muted-foreground">${escapeHtml(item.note)}</span>` : ""}
                </span>
                <span class="shrink-0">
                  ${item.disabled ? `<span class="pill bg-secondary text-muted-foreground">Coming soon</span>` : icon(selected ? "check" : "chevron-right", `h-4 w-4 ${selected ? "text-primary" : "text-muted-foreground"}`)}
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    `
    : `<div class="rounded-[10px] border border-dashed border-border bg-secondary/30 p-5 text-sm text-muted-foreground">No items match this search.</div>`;

  if (el("orderFormStartSearchInput")) el("orderFormStartSearchInput").value = state.orderFormStartSearch;
  const continueButton = el("beginOrderFormBtn");
  if (continueButton) {
    continueButton.disabled = !selectedItem;
    continueButton.classList.toggle("opacity-60", !selectedItem);
    continueButton.title = selectedItem ? "" : "Select an available item first.";
  }
}

function renderOrderFormDesignOptionsModal() {
  const partId = state.orderFormDesignModalPart;
  const options = (state.orderFormDraft?.designOptions?.[partId] || []).map((option) => normalizeOrderFormOption(option));
  if (state.orderFormDraft?.designOptions?.[partId]) state.orderFormDraft.designOptions[partId] = options;
  const count = options.filter((option) => option.enabled).length;
  const valueCount = options.reduce(
    (total, option) => {
      if (!option.enabled) return total;
      option.values.forEach((value) => {
        total.all += 1;
        if (value.enabled) total.enabled += 1;
      });
      return total;
    },
    { enabled: 0, all: 0 },
  );
  const partLabel = orderFormPartLabel(partId);
  setText("orderFormDesignOptionsTitle", `${partLabel} Design options`);
  setText("orderFormDesignOptionsSummary", `${count} of ${options.length} options selected - ${valueCount.enabled} of ${valueCount.all} values selected`);
  el("orderFormDesignOptionsList").innerHTML = options
    .map(
      (option, index) => `
        <article class="rounded-[10px] border border-border bg-card p-4 ${option.enabled ? "" : "bg-secondary/35 text-muted-foreground"}">
          <label class="flex items-center justify-between gap-4 text-sm">
            <span class="font-medium">${escapeHtml(option.name)}</span>
            <input class="check" data-order-form-design-modal-toggle="${index}" type="checkbox" ${option.enabled ? "checked" : ""} />
          </label>
          <div class="relative mt-3 inline-block max-w-full ${option.enabled ? "" : "opacity-45"}">
            <button class="field fabric-select flex h-9 w-full text-sm sm:w-[240px]" data-order-form-design-values-menu="${index}" type="button" ${option.enabled ? "" : "disabled"}>
              <span class="fabric-select-label">${option.values.filter((value) => value.enabled).length} of ${option.values.length} values selected</span>
              ${icon("chevron-down", `h-4 w-4 shrink-0 text-muted-foreground transition ${state.activeOrderFormDesignValueIndex === index ? "rotate-180" : ""}`)}
            </button>
            <div class="${state.activeOrderFormDesignValueIndex === index && option.enabled ? "" : "hidden"} absolute left-0 top-[calc(100%+6px)] z-[90] w-full rounded-[10px] border border-border bg-card p-2 shadow-xl" data-order-form-design-values-popout="${index}">
              <div class="grid gap-1">
                ${option.values
                  .map(
                    (value, valueIndex) => `
                      <label class="flex min-h-9 items-center justify-between gap-3 rounded-[8px] bg-card px-3 py-2 text-sm hover:bg-secondary">
                        <span>${escapeHtml(value.label)}</span>
                        <input class="check" data-order-form-design-value-toggle="${index}" data-order-form-design-value-index="${valueIndex}" type="checkbox" ${value.enabled ? "checked" : ""} />
                      </label>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
  translatePage(el("orderFormDesignOptionsModal"));
}

function setOrderFormDesignOptionsModal(open, partId = state.orderFormDesignModalPart) {
  state.orderFormDesignModalPart = open ? partId : null;
  if (!open) state.activeOrderFormDesignValueIndex = null;
  el("orderFormDesignOptionsModal")?.classList.toggle("open", open);
  if (open) renderOrderFormDesignOptionsModal();
  setOverlay(open || anyModalOpen());
}

function syncCreateFitProfileStartPackage(packageId) {
  const selectedPackage = createFitProfilePackages.find((item) => item.id === packageId) || createFitProfilePackages[0];
  el("createFitProfileStartPackage").value = selectedPackage.id;
  setText("createFitProfileStartPackageLabel", selectedPackage.label);
  document.querySelectorAll("[data-create-start-package]").forEach((button) => {
    const isSelected = button.dataset.createStartPackage === selectedPackage.id;
    button.classList.toggle("bg-secondary", isSelected);
    const icon = button.querySelector("svg");
    if (icon) icon.classList.toggle("hidden", !isSelected);
  });
}

function positionCreateFitProfileStartPackageMenu() {
  const menu = el("createFitProfileStartPackageMenu");
  if (!menu) return;
  menu.style.removeProperty("left");
  menu.style.removeProperty("top");
  menu.style.removeProperty("width");
  menu.style.removeProperty("max-height");
}

function applyGlobalChromeVisibility() {
  document.body.classList.toggle("ggg-global-chrome-hidden", state.globalChromeHidden);
  localStorage.setItem("relocate-ggg-global-chrome-hidden", String(state.globalChromeHidden));
}

function applyTheme() {
  state.interfaceDensity = settingsDensityLabels[state.interfaceDensity] ? state.interfaceDensity : "comfortable";
  state.denseModeEnabled = state.interfaceDensity === "dense";
  tokenInspectorCachedColorMap = null;
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.dataset.mode = state.mode;
  document.documentElement.dataset.nav = "sidebar";
  document.documentElement.dataset.font = state.font;
  document.documentElement.dataset.comic = state.comicSansEnabled ? "true" : "false";
  document.documentElement.dataset.density = state.interfaceDensity;
  document.documentElement.dataset.contentWidth = state.contentWidthMode;
  document.documentElement.dataset.accountMenu = state.accountMenuAdvanced ? "advanced" : "final";
  document.documentElement.dataset.sidebarAccount = state.sidebarAccountPosition === "bottom" ? "bottom" : "top";
  window.refreshAmbientPixelGrid?.();
  localStorage.setItem("relocate-theme", state.theme);
  localStorage.setItem("relocate-mode", state.mode);
  localStorage.removeItem("relocate-nav");
  localStorage.setItem("relocate-font", state.font);
  localStorage.setItem("relocate-comic-sans", String(state.comicSansEnabled));
  localStorage.setItem("relocate-density", state.interfaceDensity);
  localStorage.setItem("relocate-content-width", state.contentWidthMode);
  localStorage.setItem("relocate-sidebar-account-position-v2", state.sidebarAccountPosition === "bottom" ? "bottom" : "top");
  document.querySelectorAll(".dark-mode-toggle").forEach((toggle) => {
    toggle.checked = state.mode === "dark";
  });
  applyGlobalChromeVisibility();
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.themeOption === state.theme);
  });
  document.querySelectorAll("[data-settings-theme]").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTheme === state.theme);
  });
  document.querySelectorAll("[data-settings-font]").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsFont === state.font);
  });
  document.querySelectorAll("[data-settings-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsMode === state.mode);
  });
  document.querySelectorAll("[data-settings-density]").forEach((button) => {
    const active = button.dataset.settingsDensity === state.interfaceDensity;
    button.classList.toggle("active", active);
    button.setAttribute("aria-checked", String(active));
  });
  setTokenInspectorEnabled(state.tokenInspectorEnabled);
  document.querySelectorAll("[data-font-check]").forEach((check) => {
    check.classList.toggle("hidden", check.dataset.fontCheck !== state.font);
  });
  renderAccountSettingsSelects();
  applyCopyEditMode();
}

const copyEditSelector = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "button",
  "a",
  "th",
  "td",
  "label",
  "figcaption",
  "[data-copy-edit-text]",
].join(",");

function copyEditTextNodes(node) {
  return [...node.childNodes].filter((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
}

function copyEditElementText(node) {
  const directText = copyEditTextNodes(node)
    .map((child) => child.textContent.trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  return directText || node.textContent.replace(/\s+/g, " ").trim();
}

function copyEditNodePath(node) {
  const parts = [];
  let current = node;
  while (current && current.nodeType === Node.ELEMENT_NODE && current !== document.body) {
    const tag = current.tagName.toLowerCase();
    const id = current.id ? `#${current.id}` : "";
    const dataKey = current.dataset?.primaryNav || current.dataset?.popoutPanel || current.dataset?.ordersPage || current.dataset?.settingsNav || "";
    const siblings = current.parentElement ? [...current.parentElement.children].filter((child) => child.tagName === current.tagName) : [];
    const index = siblings.length > 1 ? `:nth-of-type(${siblings.indexOf(current) + 1})` : "";
    parts.unshift(`${tag}${id}${dataKey ? `[${dataKey}]` : ""}${id ? "" : index}`);
    current = current.parentElement;
  }
  return parts.join(">");
}

function copyEditIdFor(node) {
  if (!node.dataset.copyEditId) node.dataset.copyEditId = copyEditNodePath(node);
  return node.dataset.copyEditId;
}

function copyEditElementDescriptor(node) {
  const pieces = [node.tagName.toLowerCase()];
  if (node.id) pieces.push(`#${node.id}`);
  if (node.className && typeof node.className === "string") {
    const classes = node.className
      .split(/\s+/)
      .filter(Boolean)
      .filter((className) => !className.startsWith("copy-edit"))
      .slice(0, 5);
    if (classes.length) pieces.push(`.${classes.join(".")}`);
  }
  return pieces.join("");
}

function copyEditNearestLandmark(node) {
  const landmark = node.closest("main, aside, header, nav, section, article, form, dialog, [id]");
  if (!landmark || landmark === document.body) return "";
  return copyEditElementDescriptor(landmark);
}

function copyEditNearbyText(node) {
  const container = node.closest("section, article, form, aside, header, main, [id]") || node.parentElement;
  if (!container) return "";
  return container.textContent.replace(/\s+/g, " ").trim().slice(0, 360);
}

function copyEditPageTitle() {
  const visibleTitle = [...document.querySelectorAll("main h1, main h2")]
    .find((node) => node.offsetParent !== null && copyEditElementText(node));
  return visibleTitle ? copyEditElementText(visibleTitle) : state.currentPage;
}

function copyEditMetadataFor(node, originalText = copyEditElementText(node)) {
  return {
    id: copyEditIdFor(node),
    page: state.currentPage,
    pageTitle: copyEditPageTitle(),
    tag: node.tagName.toLowerCase(),
    element: copyEditElementDescriptor(node),
    path: copyEditNodePath(node),
    landmark: copyEditNearestLandmark(node),
    original: originalText,
    context: copyEditNearbyText(node),
    capturedAt: new Date().toISOString(),
  };
}

function isCopyEditCandidate(node) {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
  if (node.closest("[data-copy-edit-ignore], .copy-edit-toolbar, script, style, svg, input, textarea, select, option")) return false;
  if (node.matches("[contenteditable='false'], .icon, .sr-only")) return false;
  if (node.querySelector("input, textarea, select, option")) return false;
  const text = copyEditElementText(node);
  if (!text || text.length > 180) return false;
  const nestedEditable = [...node.children].some((child) => child.matches?.(copyEditSelector) && copyEditElementText(child));
  return !nestedEditable;
}

function writeCopyEditText(node, value) {
  const nextValue = String(value ?? "").trim();
  const directText = copyEditTextNodes(node);
  if (directText.length) {
    const original = directText[0].textContent;
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    directText[0].textContent = `${leading}${nextValue}${trailing}`;
    directText.slice(1).forEach((child) => {
      child.textContent = "";
    });
  } else {
    node.textContent = nextValue;
  }
}

function currentCopyEditMap() {
  return state.copyEditMode ? state.copyEditDraftOverrides : state.copyEditOverrides;
}

function applyCopyEditOverrides(root = document.body) {
  if (!root) return;
  root.querySelectorAll(copyEditSelector).forEach((node) => {
    if (!isCopyEditCandidate(node)) {
      node.removeAttribute("data-copy-edit-id");
      node.classList?.remove("copy-edit-active");
      return;
    }
    const id = copyEditIdFor(node);
    const override = currentCopyEditMap()[id];
    if (override?.value && document.activeElement !== node && copyEditElementText(node) !== override.value) {
      writeCopyEditText(node, override.value);
    }
  });
  document.querySelectorAll(".copy-edit-mode-toggle").forEach((toggle) => {
    toggle.checked = state.copyEditMode;
  });
}

function applyCopyEditMode() {
  document.body.classList.toggle("copy-edit-mode", state.copyEditMode);
  localStorage.setItem("relocate-copy-edit-mode", String(state.copyEditMode));
  document.querySelectorAll(".copy-edit-mode-toggle").forEach((toggle) => {
    toggle.checked = state.copyEditMode;
  });
  if (!state.copyEditMode) {
    state.activeCopyEditId = null;
    document.querySelectorAll(".copy-edit-active").forEach((node) => node.classList.remove("copy-edit-active"));
    if (el("copyEditField")) el("copyEditField").value = "";
    setText("copyEditTargetLabel", "Click text in the prototype to edit it.");
  }
  applyCopyEditOverrides();
}

function selectCopyEditNode(node) {
  if (!isCopyEditCandidate(node)) return;
  const id = copyEditIdFor(node);
  const text = copyEditElementText(node);
  if (!state.copyEditDraftOverrides[id]) {
    state.copyEditDraftOverrides[id] = {
      ...copyEditMetadataFor(node, text),
      value: text,
      firstEditedAt: new Date().toISOString(),
      lastEditedAt: new Date().toISOString(),
    };
  }
  state.activeCopyEditId = id;
  document.querySelectorAll(".copy-edit-active").forEach((item) => item.classList.remove("copy-edit-active"));
  node.classList.add("copy-edit-active");
  if (el("copyEditField")) {
    el("copyEditField").value = state.copyEditDraftOverrides[id].value || text;
    requestAnimationFrame(() => el("copyEditField")?.focus());
  }
  setText("copyEditTargetLabel", text);
}

function applyActiveCopyEdit() {
  if (!state.activeCopyEditId || !el("copyEditField")) return false;
  const value = el("copyEditField").value.trim();
  const node = document.querySelector(`[data-copy-edit-id="${CSS.escape(state.activeCopyEditId)}"]`);
  const original = state.copyEditDraftOverrides[state.activeCopyEditId]?.original || (node ? copyEditElementText(node) : value);
  const previous = state.copyEditDraftOverrides[state.activeCopyEditId] || {};
  const metadata = node ? copyEditMetadataFor(node, original) : previous;
  state.copyEditDraftOverrides[state.activeCopyEditId] = {
    ...previous,
    ...metadata,
    original,
    value,
    firstEditedAt: previous.firstEditedAt || new Date().toISOString(),
    lastEditedAt: new Date().toISOString(),
  };
  if (node) writeCopyEditText(node, value);
  return true;
}

function saveCopyEditOverrides() {
  applyActiveCopyEdit();
  state.copyEditOverrides = { ...state.copyEditDraftOverrides };
  localStorage.setItem(copyEditStorageKey, JSON.stringify(state.copyEditOverrides));
  showToast("Text edits saved for this prototype.");
  applyCopyEditOverrides();
}

function exportCopyEditOverrides() {
  applyActiveCopyEdit();
  const overrides = Object.entries(state.copyEditDraftOverrides || {}).filter(([, override]) => {
    return override?.value && override.value !== override.original;
  });
  if (!overrides.length) {
    showToast("No text edits to export yet.");
    return;
  }
  const edits = overrides.map(([id, override]) => {
    const node = document.querySelector(`[data-copy-edit-id="${CSS.escape(id)}"]`);
    const metadata = node ? copyEditMetadataFor(node, override.original || copyEditElementText(node)) : {};
    return {
      id,
      page: override.page || metadata.page || "",
      pageTitle: override.pageTitle || metadata.pageTitle || "",
      element: override.element || metadata.element || "",
      tag: override.tag || metadata.tag || "",
      path: override.path || metadata.path || id,
      landmark: override.landmark || metadata.landmark || "",
      context: override.context || metadata.context || "",
      original: override.original || metadata.original || "",
      value: override.value || "",
      firstEditedAt: override.firstEditedAt || "",
      lastEditedAt: override.lastEditedAt || "",
    };
  });
  const payload = {
    type: "relocate-copy-edit-session",
    version: 2,
    exportedAt: new Date().toISOString(),
    sessionStartedAt: state.copyEditSessionStartedAt,
    source: {
      title: document.title,
      page: state.currentPage,
      pageTitle: copyEditPageTitle(),
      path: window.location.pathname.split("/").pop() || "index.html",
      url: window.location.href,
      storageKey: copyEditStorageKey,
    },
    summary: {
      editCount: edits.length,
      pages: [...new Set(edits.map((edit) => edit.page).filter(Boolean))],
    },
    edits,
    overrides: Object.fromEntries(overrides),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  link.href = url;
  link.download = `relocate-text-edits-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Text edit export downloaded.");
}

function resetCopyEditOverrides() {
  state.copyEditOverrides = {};
  state.copyEditDraftOverrides = {};
  state.activeCopyEditId = null;
  localStorage.removeItem(copyEditStorageKey);
  if (el("copyEditField")) el("copyEditField").value = "";
  setText("copyEditTargetLabel", "Click text in the prototype to edit it.");
  setPage(state.currentPage);
  applyCopyEditOverrides();
  showToast("Text edits reset.");
}

function scheduleCopyEditRefresh() {
  window.clearTimeout(scheduleCopyEditRefresh.timeout);
  scheduleCopyEditRefresh.timeout = window.setTimeout(() => applyCopyEditOverrides(), 40);
}

function closeNavPopouts() {
  state.activeNavPopout = null;
  state.activeNavSubpopout = null;
  renderNavPopouts();
}

function closePageDropdowns() {
  state.activeFabricSelect = null;
  state.activeFabricSelectInstance = null;
  state.activeFabricSelectPosition = null;
  state.activeOrdersSelect = null;
  state.activeOrdersSelectInstance = null;
  state.activeOrdersSelectPosition = null;
  state.activeOrdersStatusPosition = null;
  state.activeOrdersBulkStatusPosition = null;
  el("fabricSelectMenu")?.classList.remove("open");
  el("ordersSelectMenu")?.classList.remove("open");
  el("ordersStatusMenu")?.classList.remove("open");
  el("ordersBulkStatusMenu")?.classList.remove("open");
  el("detailFilterMenu")?.classList.remove("open");
  el("detailFilterSubmenu")?.classList.remove("open");
  el("fitProfileFilterMenu")?.classList.remove("open");
  el("fitProfileFilterSubmenu")?.classList.remove("open");
}

function renderOptionalSections() {
  const sections = [];
  if (state.homeFieldsVisible) {
    sections.push(`
      <div class="rounded-lg border border-border p-4">
        <div class="mb-3 text-sm font-medium">Home address</div>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block space-y-2 sm:col-span-2">
            <span class="text-sm font-medium">Address</span>
            <input id="homeAddressInput" class="field" />
          </label>
          <label class="block space-y-2">
            <span class="text-sm font-medium">City</span>
            <input id="homeCityInput" class="field" />
          </label>
          <label class="block space-y-2">
            <span class="text-sm font-medium">Postcode</span>
            <input id="homePostcodeInput" class="field" />
          </label>
        </div>
      </div>
    `);
  }
  if (state.companyFieldsVisible) {
    sections.push(`
      <div class="rounded-lg border border-border p-4">
        <div class="mb-3 text-sm font-medium">Company details</div>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block space-y-2">
            <span class="text-sm font-medium">Company name</span>
            <input id="companyNameInput" class="field" />
          </label>
          <label class="block space-y-2">
            <span class="text-sm font-medium">Phone number</span>
            <input id="phoneInput" class="field" />
          </label>
        </div>
      </div>
    `);
  }
  el("optionalSections").innerHTML = sections.join("");
  el("addHomeAddressBtn")?.classList.toggle("hidden", state.homeFieldsVisible);
  el("addCompanyBtn")?.classList.toggle("hidden", state.companyFieldsVisible);
  el("optionalActionButtons")?.classList.toggle("hidden", state.homeFieldsVisible && state.companyFieldsVisible);
  translatePage(el("optionalSections"));
}

function clearCustomerForm() {
  state.editingId = null;
  state.homeFieldsVisible = false;
  state.companyFieldsVisible = false;
  setText("modalTitle", "Create customer");
  setText("submitCustomerBtn", "Create Customer");
  el("deleteCustomerBtn")?.classList.add("hidden");
  el("customerForm").reset();
  renderOptionalSections();
}

function splitName(customer) {
  return { firstName: customer.firstName, lastName: customer.lastName };
}

function openCustomer(id, editing = false) {
  const customer = customers.find((item) => item.id === id);
  if (!customer) return;

  state.editingId = id;
  state.homeFieldsVisible = true;
  state.companyFieldsVisible = true;
  setText("modalTitle", editing ? "Edit Customer" : "Customer details");
  setText("submitCustomerBtn", editing ? "Save changes" : "Done");
  el("deleteCustomerBtn")?.classList.toggle("hidden", !editing);
  el("customerForm").reset();
  renderOptionalSections();

  const nameParts = splitName(customer);
  el("firstNameInput").value = nameParts.firstName;
  el("lastNameInput").value = nameParts.lastName;
  el("emailInput").value = customer.email;
  el("mobileInput").value = customer.mobile === "-" ? "" : customer.mobile;
  el("dobInput").value = customer.dob || "";
  syncDateDisplayFor(el("dobInput"));
  el("homeAddressInput").value = customer.address || "";
  el("homeCityInput").value = customer.city || "";
  el("homePostcodeInput").value = customer.postcode || "";
  el("companyNameInput").value = customer.company || "";
  el("phoneInput").value = customer.phone || "";
  setCustomerModal(true);
}

function setDeleteCustomerConfirmModal(open, customerId = state.pendingDeleteCustomerId) {
  const customer = customers.find((item) => item.id === customerId);
  state.pendingDeleteCustomerId = open && customer ? customer.id : null;
  el("deleteCustomerConfirmModal")?.classList.toggle("open", open && Boolean(customer));
  if (open && customer) {
    setText("deleteCustomerConfirmMessage", `Are you sure you want to remove ${fullName(customer)} as a customer?`);
    requestAnimationFrame(() => el("confirmDeleteCustomerBtn")?.focus());
  }
  setOverlay((open && Boolean(customer)) || anyModalOpen());
}

function requestDeleteCustomer(customerId) {
  state.activeMenuId = null;
  state.activeMenuPosition = null;
  renderRows();
  setDeleteCustomerConfirmModal(true, customerId);
}

function confirmDeleteCustomer() {
  const customerId = state.pendingDeleteCustomerId;
  setDeleteCustomerConfirmModal(false);
  if (customerId) deleteCustomer(customerId);
}

function deleteCustomer(customerId) {
  const index = customers.findIndex((customer) => customer.id === customerId);
  if (index < 0) return;
  const [removed] = customers.splice(index, 1);
  if (state.selectedCustomerId === customerId) state.selectedCustomerId = customers[0]?.id || null;
  if (state.createFitProfileCustomerId === customerId) state.createFitProfileCustomerId = state.selectedCustomerId;
  if (state.editingId === customerId) state.editingId = null;
  state.pendingDeleteCustomerId = null;
  state.activeMenuId = null;
  state.activeMenuPosition = null;
  state.customerPage = 1;
  setCustomerModal(false);
  renderRows();
  renderDashboard();
  renderPrimaryNavigation();
  if (state.currentPage === "detail" || state.currentPage === "createFitProfile") setPage("overview");
  showAlert("Customer deleted", `${fullName(removed)} has been removed as a customer.`);
}

function collectAdvancedFilters() {
  const filters = {};
  advancedFields.forEach(([key, , id]) => {
    const value = el(id).value.trim();
    if (value) filters[key] = value;
  });
  return filters;
}

function syncAdvancedInputs() {
  advancedFields.forEach(([key, , id]) => {
    el(id).value = state.advancedFilters[key] || "";
  });
}

function resetCustomerTableFilters() {
  el("customerSearch").value = "";
  el("globalSearch").value = "";
  state.advancedFilters = {};
  state.customerPage = 1;
  syncAdvancedInputs();
  renderRows();
}

function resetFabricTableFilters() {
  if (el("fabricSearch")) el("fabricSearch").value = "";
  document.querySelectorAll("input[data-fabric-filter]").forEach((input) => {
    input.value = "";
    syncDateDisplayFor(input);
  });
  document.querySelectorAll("[data-fabric-select]").forEach((field) => syncFabricFilterField(field.dataset.fabricSelect, ""));
  state.fabricFilters = defaultFabricFilters();
  Object.entries(state.fabricFilters).forEach(([key, filter]) => syncFabricFilterField(key, filter.value));
  state.fabricPage = 1;
  state.activeFabricSelect = null;
  state.activeFabricSelectInstance = null;
  state.activeFabricSelectPosition = null;
  renderFabricSelectMenu();
  renderFabricInventory();
}

function handleTableSort(button) {
  const table = button.dataset.sortTable;
  const key = button.dataset.sortKey;
  if (!key) return;
  if (table === "customers") {
    state.customerSort = nextSortState(state.customerSort, key);
    state.customerPage = 1;
    renderRows();
  }
  if (table === "orders") {
    state.ordersSort = nextSortState(state.ordersSort, key);
    state.ordersPage = 1;
    renderOrdersPage();
  }
  if (table === "fabric") {
    state.fabricSort = nextSortState(state.fabricSort, key);
    state.fabricPage = 1;
    renderFabricInventory();
  }
}

function wireEvents() {
  el("prototypeGateForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = el("prototypeGatePassword")?.value || "";
    if (password === "letmein") {
      unlockPrototypeGate();
      return;
    }
    el("prototypeGateError")?.classList.remove("hidden");
    el("prototypeGatePassword")?.focus();
  });

  document.querySelectorAll("[data-suite-app]").forEach((button) => {
    button.addEventListener("click", () => setSuiteApp(button.dataset.suiteApp));
  });

  document.addEventListener(
    "click",
    (event) => {
      if (!state.copyEditMode || event.target.closest("[data-copy-edit-ignore], .copy-edit-toolbar")) return;
      const target = event.target.closest(copyEditSelector);
      if (!target || !isCopyEditCandidate(target)) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      selectCopyEditNode(target);
    },
    true,
  );

  document.querySelectorAll(".copy-edit-mode-toggle").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      state.copyEditMode = toggle.checked;
      state.copyEditDraftOverrides = { ...state.copyEditOverrides };
      applyCopyEditMode();
      closeNavPopouts();
      showToast(state.copyEditMode ? "Edit text mode enabled." : "Edit text mode disabled.");
    });
  });

  el("copyEditApplyBtn")?.addEventListener("click", () => {
    if (applyActiveCopyEdit()) showToast("Text applied. Press Save to keep it.");
  });

  el("copyEditSaveBtn")?.addEventListener("click", saveCopyEditOverrides);
  document.querySelectorAll(".copy-edit-export-action").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      exportCopyEditOverrides();
    });
  });
  el("copyEditResetBtn")?.addEventListener("click", resetCopyEditOverrides);
  el("copyEditCloseBtn")?.addEventListener("click", () => {
    state.copyEditMode = false;
    state.copyEditDraftOverrides = { ...state.copyEditOverrides };
    applyCopyEditMode();
    showToast("Edit text mode disabled.");
  });

  el("copyEditField")?.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      saveCopyEditOverrides();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      state.copyEditMode = false;
      state.copyEditDraftOverrides = { ...state.copyEditOverrides };
      applyCopyEditMode();
    }
  });

  el("copyEditField")?.addEventListener("input", () => {
    if (!state.activeCopyEditId) return;
    const existing = state.copyEditDraftOverrides[state.activeCopyEditId] || { original: "", firstEditedAt: new Date().toISOString() };
    state.copyEditDraftOverrides[state.activeCopyEditId] = {
      ...existing,
      value: el("copyEditField").value.trim(),
      lastEditedAt: new Date().toISOString(),
    };
  });

  document.querySelectorAll(".nav-popout-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      closePageDropdowns();
      const next = trigger.dataset.popout;
      state.activeNavPopout = state.activeNavPopout === next ? null : next;
      state.activeNavSubpopout = null;
      renderNavPopouts();
    });
  });

  document.querySelectorAll(".nav-subpopout-trigger").forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => {
      state.activeNavSubpopout = trigger.dataset.subpopout;
      renderNavPopouts();
    });
    trigger.addEventListener("focus", () => {
      state.activeNavSubpopout = trigger.dataset.subpopout;
      renderNavPopouts();
    });
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const next = trigger.dataset.subpopout;
      state.activeNavSubpopout = state.activeNavSubpopout === next ? null : next;
      renderNavPopouts();
    });
  });

  document.querySelectorAll("[data-popout-panel] > .popout-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (!state.activeNavSubpopout) return;
      state.activeNavSubpopout = null;
      renderNavPopouts();
    });
  });

  document.querySelectorAll("[data-popout-panel], [data-subpopout-panel]").forEach((panel) => {
    panel.addEventListener("click", (event) => event.stopPropagation());
  });

  const setMobileNavigation = (open) => {
    el("mobileNavDrawer")?.classList.toggle("open", open);
    el("mobileNavScrim")?.classList.toggle("open", open);
    document.body.classList.toggle("overflow-hidden", open);
    if (open) {
      document.querySelectorAll("[data-mobile-nav-page]").forEach((page) => page.classList.toggle("active", page.dataset.mobileNavPage === "main"));
    }
  };

  el("mobileNavOpenBtn")?.addEventListener("click", () => setMobileNavigation(true));
  el("mobileNavCloseBtn")?.addEventListener("click", () => setMobileNavigation(false));
  el("mobileNavScrim")?.addEventListener("click", () => setMobileNavigation(false));
  el("mobileNavDrawer")?.addEventListener("click", (event) => {
    const targetButton = event.target.closest("[data-mobile-nav-target]");
    if (targetButton) {
      document.querySelectorAll("[data-mobile-nav-page]").forEach((page) => page.classList.toggle("active", page.dataset.mobileNavPage === targetButton.dataset.mobileNavTarget));
      return;
    }
    if (event.target.closest("[data-mobile-nav-back]")) {
      document.querySelectorAll("[data-mobile-nav-page]").forEach((page) => page.classList.toggle("active", page.dataset.mobileNavPage === "main"));
      return;
    }
    if (event.target.closest("button, a")) setMobileNavigation(false);
  });

  document.addEventListener("click", (event) => {
    const dayButton = event.target.closest("[data-date-picker-day]");
    if (dayButton) {
      event.preventDefault();
      event.stopPropagation();
      selectDatePickerDay(dayButton.dataset.datePickerDay);
      return;
    }

    const monthButton = event.target.closest("[data-date-picker-month]");
    if (monthButton) {
      event.preventDefault();
      event.stopPropagation();
      setDatePickerMonth(Number(monthButton.dataset.datePickerMonth));
      return;
    }

    if (event.target.closest("#datePickerMenu")) return;

    const dateField = event.target.closest("[data-date-field]");
    if (dateField) {
      event.preventDefault();
      event.stopPropagation();
      openDatePicker(nativeDateInputFor(dateField));
      return;
    }

    closeDatePicker();
  });

  document.addEventListener("input", (event) => {
    const displayInput = event.target.closest("[data-date-display], [data-date-display-for]");
    if (displayInput) {
      const nativeInput = nativeDateInputFor(displayInput);
      const parsed = parseDisplayDate(displayInput.value);
      if (nativeInput && parsed !== null) {
        nativeInput.value = parsed;
        nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
      return;
    }

    const nativeInput = event.target.closest("[data-date-native]");
    if (nativeInput) syncDateDisplayFor(nativeInput);
  });

  document.addEventListener("change", (event) => {
    const nativeInput = event.target.closest("[data-date-native]");
    if (!nativeInput) return;
    syncDateDisplayFor(nativeInput);
    nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
  });

  document.querySelectorAll(".notification-nav-action").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNavPopout = null;
      state.activeNavSubpopout = null;
      renderNavPopouts();
      setMobileNavigation(false);
      showToast("Alerts coming next.");
    });
  });

  document.querySelectorAll(".help-center-action").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      setHelpCenterModal(true);
    });
  });

  document.querySelectorAll("[data-primary-nav='home']").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setPage("home");
    });
  });

  document.querySelectorAll("[data-primary-nav='customers']").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setPage("overview");
    });
  });

  document.querySelectorAll("[data-primary-nav='shopSettings']").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      setPage("shopSettings");
    });
  });

  document.querySelectorAll("[data-delivery-page]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      setPage("deliveryCalendar");
    });
  });

  document.querySelectorAll("[data-invoices-page]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      setPage("invoices");
    });
  });

  document.querySelectorAll("[data-legacy-rprice-page]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeNavPopouts();
      setMobileNavigation(false);
      setPage("legacyRPrice");
    });
  });

  document.querySelectorAll("[data-inspiration-site-page]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      state.shopSettingsSection = "inspirationArea";
      setPage("shopSettings");
    });
  });

  document.querySelectorAll("[data-downloads-page]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      state.downloadsPasswordError = false;
      setPage("downloads");
    });
  });

  document.querySelectorAll("[data-custom-size-action]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      showToast("Custom Size Creator coming next.");
    });
  });

  el("invoiceNumberSearch")?.addEventListener("input", (event) => {
    state.invoiceQuery = event.target.value;
    state.invoicePage = 1;
    renderInvoicesPage();
  });

  el("invoiceStatusBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.invoiceStatusMenuOpen = !state.invoiceStatusMenuOpen;
    syncInvoiceStatusFilter();
  });

  el("invoiceStatusMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-invoice-status]");
    if (!option) return;
    state.invoiceStatusFilter = option.dataset.invoiceStatus || "";
    state.invoiceStatusMenuOpen = false;
    state.invoicePage = 1;
    renderInvoicesPage();
    scheduleDemoFilterLoading("invoices");
  });

  el("invoiceDateFrom")?.addEventListener("input", (event) => {
    state.invoiceDateFrom = event.target.value;
    state.invoicePage = 1;
    renderInvoicesPage();
  });

  el("invoiceDateTo")?.addEventListener("input", (event) => {
    state.invoiceDateTo = event.target.value;
    state.invoicePage = 1;
    renderInvoicesPage();
  });

  el("invoicePageSizeBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.invoicePageSizeOpen = !state.invoicePageSizeOpen;
    renderInvoicePageSizeMenu();
  });

  el("invoicePageSizeMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-invoice-page-size]");
    if (!option) return;
    state.invoicePageSize = Number(option.dataset.invoicePageSize);
    state.invoicePage = 1;
    state.invoicePageSizeOpen = false;
    renderInvoicesPage();
  });

  el("resetInvoiceFiltersBtn")?.addEventListener("click", () => {
    state.invoiceQuery = "";
    state.invoiceDateFrom = "";
    state.invoiceDateTo = "";
    state.invoiceStatusFilter = "";
    state.invoiceStatusMenuOpen = false;
    state.invoicePage = 1;
    if (el("invoiceNumberSearch")) el("invoiceNumberSearch").value = "";
    if (el("invoiceDateFrom")) el("invoiceDateFrom").value = "";
    if (el("invoiceDateTo")) el("invoiceDateTo").value = "";
    syncDateDisplayFor(el("invoiceDateFrom"));
    syncDateDisplayFor(el("invoiceDateTo"));
    renderInvoicesPage();
  });

  el("closeInvoiceViewModalBtn")?.addEventListener("click", () => setInvoiceViewModal(false));
  el("invoiceViewBackdrop")?.addEventListener("click", () => setInvoiceViewModal(false));
  el("invoiceViewDownloadBtn")?.addEventListener("click", () => {
    if (state.activeInvoiceNumber) showToast(`Invoice ${state.activeInvoiceNumber} download ready.`);
  });

  el("deliveryProductBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = el("deliveryProductMenu");
    const isOpen = menu?.classList.toggle("open");
    el("deliveryProductBtn")?.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  el("deliveryProductMenu")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delivery-product]");
    if (!button) return;
    state.deliveryProduct = button.dataset.deliveryProduct;
    el("deliveryProductMenu")?.classList.remove("open");
    el("deliveryProductBtn")?.setAttribute("aria-expanded", "false");
    renderDeliveryCalendar();
  });

  el("deliveryEmailFrequencyBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = el("deliveryEmailFrequencyMenu");
    const isOpen = menu?.classList.toggle("open");
    el("deliveryEmailFrequencyBtn")?.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  el("deliveryEmailFrequencyMenu")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delivery-email-frequency]");
    if (!button) return;
    state.deliveryEmailFrequency = button.dataset.deliveryEmailFrequency;
    el("deliveryEmailFrequencyMenu")?.classList.remove("open");
    el("deliveryEmailFrequencyBtn")?.setAttribute("aria-expanded", "false");
    markShopSettingsDirty();
    renderEmailSettings();
  });

  el("deliveryMonthNav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delivery-month]");
    if (!button) return;
    state.deliveryMonth = button.dataset.deliveryMonth;
    renderDeliveryCalendar();
  });

  el("deliveryPrintBtn")?.addEventListener("click", () => {
    window.print();
  });

  document.querySelectorAll("[data-shop-settings-section]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shopSettingsSection = button.dataset.shopSettingsSection;
      renderShopSettingsPage();
    });
  });

  el("shopFitToolsRows")?.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-shop-fit-part-toggle]");
    if (toggle) {
      const partId = toggle.dataset.shopFitPartToggle;
      if (state.expandedShopFitToolParts.has(partId)) {
        state.expandedShopFitToolParts.delete(partId);
        if (state.activeShopFitToolPart === partId) {
          state.activeShopFitToolPart = null;
          state.activeShopFitToolFit = null;
        }
      } else {
        state.expandedShopFitToolParts.add(partId);
      }
      renderShopFitTools();
      return;
    }

    const bulkButton = event.target.closest("[data-shop-fit-bulk]");
    if (bulkButton) {
      const { fit } = currentShopFitToolSelection();
      if (!fit) return;
      const enabled = bulkButton.dataset.shopFitBulk === "enable";
      fit.tools.forEach((tool) => {
        tool.enabled = enabled;
      });
      markShopSettingsDirty();
      renderShopFitTools();
      return;
    }

    const edit = event.target.closest("[data-shop-fit-edit]");
    if (!edit) return;
    const [partId, fitId] = edit.dataset.shopFitEdit.split(":");
    const isActive = state.activeShopFitToolPart === partId && state.activeShopFitToolFit === fitId;
    state.activeShopFitToolPart = isActive ? null : partId;
    state.activeShopFitToolFit = isActive ? null : fitId;
    state.expandedShopFitToolParts.add(partId);
    renderShopFitTools();
  });

  el("shopFitToolsRows")?.addEventListener("change", (event) => {
    const toggle = event.target.closest("[data-shop-fit-tool-toggle]");
    if (!toggle) return;
    const { fit } = currentShopFitToolSelection();
    if (!fit) return;
    const tool = fit.tools[Number(toggle.dataset.shopFitToolToggle)];
    if (!tool) return;
    tool.enabled = toggle.checked;
    markShopSettingsDirty();
    renderShopFitTools();
  });

  el("shopLogoUploadBtn")?.addEventListener("click", () => el("shopLogoUpload")?.click());
  el("shopLogoUpload")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    setText("shopLogoFileLabel", file ? file.name : "Optional - JPG, PNG or SVG");
    if (file) markShopSettingsDirty();
  });

  el("inspirationLogoUploadBtn")?.addEventListener("click", () => el("inspirationLogoUpload")?.click());
  el("inspirationLogoUpload")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    setInspirationUploadPreview(file, "inspirationLogoPreviewUrl", "inspirationLogoFileLabel", "Optional - JPG, PNG or SVG");
    if (file) markShopSettingsDirty();
  });

  el("inspirationHomepageUploadBtn")?.addEventListener("click", () => el("inspirationHomepageUpload")?.click());
  el("inspirationHomepageUpload")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    setInspirationUploadPreview(file, "inspirationHomepagePreviewUrl", "inspirationHomepageFileLabel", "Optional - JPG or PNG");
    if (file) markShopSettingsDirty();
  });

  el("inspirationColorRows")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-inspiration-color-key]");
    if (!button) return;
    state.inspirationColors[button.dataset.inspirationColorKey] = normalizeHexColor(button.dataset.inspirationColorValue);
    markShopSettingsDirty();
    renderInspirationAreaSettings();
  });

  el("inspirationColorRows")?.addEventListener("input", (event) => {
    const input = event.target.closest("[data-inspiration-color-input]");
    if (!input) return;
    const key = input.dataset.inspirationColorInput;
    const nextColor = normalizeHexColor(input.value, state.inspirationColors[key]);
    if (nextColor === state.inspirationColors[key] && input.value.length < 7) return;
    state.inspirationColors[key] = nextColor;
    markShopSettingsDirty();
    renderInspirationAreaSettings();
  });

  document.querySelectorAll("[data-customer-field-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.customerFieldTab = button.dataset.customerFieldTab;
      renderCustomerFields();
    });
  });

  el("shopEmployeeSearch")?.addEventListener("input", (event) => {
    state.shopEmployeeQuery = event.target.value;
    renderShopEmployees();
  });

  el("salesAssociateSearch")?.addEventListener("input", (event) => {
    state.salesAssociateQuery = event.target.value;
    renderSalesAssociates();
  });

  el("shopItemSearch")?.addEventListener("input", (event) => {
    state.shopItemQuery = event.target.value;
    renderShopItems();
  });

  el("addCustomCustomerFieldBtn")?.addEventListener("click", () => {
    customCustomerFields = [
      ...customCustomerFields,
      {
        id: `custom-${Date.now()}`,
        name: "",
        appearsAfter: "Date of birth",
        overview: false,
        mandatory: false,
        searchVisible: false,
      },
    ];
    markShopSettingsDirty();
    renderCustomCustomerFields();
  });

  el("saveShopSettingsBtn")?.addEventListener("click", () => {
    if (!state.shopSettingsDirty) {
      showToast("No shop setting changes to save.");
      return;
    }
    saveShopSettingsChanges();
  });

  el("keepEditingShopSettingsBtn")?.addEventListener("click", () => {
    state.pendingShopSettingsNavigation = null;
    setShopSettingsUnsavedModal(false);
  });

  el("discardShopSettingsBtn")?.addEventListener("click", () => {
    discardShopSettingsChanges();
    setShopSettingsUnsavedModal(false);
    runPendingShopSettingsNavigation();
  });

  el("saveAndLeaveShopSettingsBtn")?.addEventListener("click", () => {
    saveShopSettingsChanges();
    setShopSettingsUnsavedModal(false);
    runPendingShopSettingsNavigation();
  });

  el("shopSettingsPage")?.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches("#shopEmployeeSearch, #salesAssociateSearch, #shopItemSearch")) return;
    markShopSettingsDirty();

    const employeeField = target.closest("[data-shop-employee-field]");
    if (employeeField) {
      const employee = shopEmployees.find((item) => item.userName === employeeField.dataset.shopEmployee);
      if (employee) employee[employeeField.dataset.shopEmployeeField] = employeeField.checked;
      return;
    }

    const itemToggle = target.closest("[data-shop-item]");
    if (itemToggle) {
      const item = shopItems.find((entry) => entry.item === itemToggle.dataset.shopItem);
      if (item) item.enabled = itemToggle.checked;
      return;
    }

    const customerFieldToggle = target.closest("[data-customer-field]");
    if (customerFieldToggle) {
      const field = customerFieldGroups.flatMap((group) => group.fields).find((entry) => entry.key === customerFieldToggle.dataset.customerField);
      if (field) field[customerFieldToggle.dataset.customerFieldProperty] = customerFieldToggle.checked;
      return;
    }

    const customFieldControl = target.closest("[data-custom-customer-field]");
    if (customFieldControl) {
      const field = customCustomerFields.find((entry) => entry.id === customFieldControl.dataset.customCustomerField);
      if (!field) return;
      const property = customFieldControl.dataset.customCustomerFieldProperty;
      field[property] = customFieldControl.type === "checkbox" ? customFieldControl.checked : customFieldControl.value;
    }
  });

  el("shopSettingsPage")?.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const customFieldControl = target.closest("[data-custom-customer-field]");
    if (!customFieldControl || customFieldControl.dataset.customCustomerFieldProperty !== "name") return;
    const field = customCustomerFields.find((entry) => entry.id === customFieldControl.dataset.customCustomerField);
    if (!field) return;
    markShopSettingsDirty();
    field.name = customFieldControl.value;
  });

  el("addSalesAssociateBtn")?.addEventListener("click", () => setSalesAssociateModal(true));
  el("closeSalesAssociateModalBtn")?.addEventListener("click", () => setSalesAssociateModal(false));
  el("cancelSalesAssociateModalBtn")?.addEventListener("click", () => setSalesAssociateModal(false));
  el("salesAssociateForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = el("salesAssociateNameInput").value.trim();
    if (!name) {
      showToast("Enter a sales associate name.");
      return;
    }
    markShopSettingsDirty();
    if (state.editingSalesAssociateId) {
      const associate = salesAssociates.find((item) => item.id === state.editingSalesAssociateId);
      if (associate) associate.name = name;
      showToast("Sales associate updated.");
    } else {
      salesAssociates = [
        ...salesAssociates,
        { id: `sales-${Date.now()}`, name, partLevelLinking: "" },
      ];
      state.salesAssociateQuery = "";
      showToast(`${name} added.`);
    }
    setSalesAssociateModal(false);
    renderSalesAssociates();
  });

  el("shopSettingsPage")?.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-sales-associate-actions]");
    if (actionButton) {
      const rect = actionButton.getBoundingClientRect();
      const isOpen = state.activeSalesAssociateActionId === actionButton.dataset.salesAssociateActions;
      state.activeSalesAssociateActionId = isOpen ? null : actionButton.dataset.salesAssociateActions;
      state.activeSalesAssociateActionPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6 };
      renderSalesAssociates();
      return;
    }

    const menuAction = event.target.closest(".sales-associate-menu-action");
    if (!menuAction) return;
    const associate = salesAssociates.find((item) => item.id === menuAction.dataset.salesAssociateId);
    if (!associate) return;
    state.activeSalesAssociateActionId = null;
    state.activeSalesAssociateActionPosition = null;
    if (menuAction.dataset.salesAssociateAction === "edit") {
      setSalesAssociateModal(true, associate.id);
      renderSalesAssociates();
      return;
    }
    if (menuAction.dataset.salesAssociateAction === "delete") {
      markShopSettingsDirty();
      salesAssociates = salesAssociates.filter((item) => item.id !== associate.id);
      showToast(`${associate.name} deleted.`);
    }
    renderSalesAssociates();
  });

  el("customerOverviewNavChild")?.addEventListener("click", () => {
    closeNavPopouts();
    setPage("overview");
  });

  el("activeCustomerNavChild")?.addEventListener("click", () => {
    closeNavPopouts();
    renderCustomerDetail(el("activeCustomerNavChild").dataset.customerId || state.selectedCustomerId || customers[0].id);
  });

  el("customerFitProfilesNavChild")?.addEventListener("click", () => {
    closeNavPopouts();
    const customerId = el("customerFitProfilesNavChild").dataset.customerId || state.createFitProfileCustomerId || state.selectedCustomerId || customers[0].id;
    renderCustomerDetail(customerId);
    state.detailTab = "fitprofiles";
    renderDetailTabs();
    renderFitProfiles();
    renderPrimaryNavigation();
  });

  el("activeFitProfileTaskNavChild")?.addEventListener("click", () => {
    closeNavPopouts();
    setPage("createFitProfile");
  });

  document.querySelectorAll("[data-stock-fabric]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      setMobileNavigation(false);
      setPage(button.dataset.stockFabric === "labels" ? "labelInventory" : "fabricInventory");
    });
  });

  document.querySelectorAll("[data-orders-page]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      state.ordersType = button.dataset.ordersPage;
      state.ordersPage = 1;
      resetOrdersTransientState();
      setPage("orders");
    });
  });

  document.querySelectorAll("[data-order-nav-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      closeNavPopouts();
      if (button.dataset.orderId) renderOrderDetail(button.dataset.orderId);
    });
  });

  el("customerSearch").addEventListener("input", () => {
    state.activeMenuId = null;
    state.customerPage = 1;
    renderRows();
  });
  el("customerTableHead").addEventListener("click", (event) => {
    const button = event.target.closest("[data-sort-table]");
    if (button) handleTableSort(button);
  });
  el("resetCustomerFiltersBtn")?.addEventListener("click", () => {
    resetCustomerTableFilters();
    showToast("Customer filters reset.");
  });

  el("globalSearch").addEventListener("focus", () => setGlobalSearchModal(true, el("globalSearch").value));
  el("globalSearch").addEventListener("click", () => setGlobalSearchModal(true, el("globalSearch").value));
  el("globalSearch").addEventListener("input", () => {
    setGlobalSearchModal(true, el("globalSearch").value);
    el("globalSearch").value = "";
  });

  el("filterChips").addEventListener("click", (event) => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    if (chip.dataset.key === "quick") {
      el("customerSearch").value = "";
      el("globalSearch").value = "";
    } else {
      delete state.advancedFilters[chip.dataset.key];
      syncAdvancedInputs();
    }
    state.customerPage = 1;
    renderRows();
  });

  el("advancedBtn").addEventListener("click", () => {
    syncAdvancedInputs();
    setAdvanced(true);
  });

  document.querySelectorAll(".close-panel").forEach((button) => button.addEventListener("click", () => setAdvanced(false)));

  el("advancedForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.advancedFilters = collectAdvancedFilters();
    state.customerPage = 1;
    setAdvanced(false);
    renderRows();
  });

  el("cancelAdvancedBtn").addEventListener("click", () => {
    setAdvanced(false);
  });

  el("pageSizeBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    state.customerPageSizeOpen = !state.customerPageSizeOpen;
    renderCustomerPageSizeMenu();
  });

  el("pageSizeMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-customer-page-size]");
    if (!option) return;
    state.customerPageSize = Number(option.dataset.customerPageSize);
    state.customerPage = 1;
    state.customerPageSizeOpen = false;
    renderRows();
  });

  el("customerPagination").addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-customer-page]");
    const actionButton = event.target.closest("[data-customer-page-action]");
    const totalPages = Math.max(1, Math.ceil(filteredCustomers().length / state.customerPageSize));
    if (pageButton) state.customerPage = Number(pageButton.dataset.customerPage);
    if (actionButton?.dataset.customerPageAction === "previous") state.customerPage = Math.max(1, state.customerPage - 1);
    if (actionButton?.dataset.customerPageAction === "next") state.customerPage = Math.min(totalPages, state.customerPage + 1);
    if (pageButton || actionButton) renderRows();
  });

  el("exportBtn").addEventListener("click", () => showToast(`Export ready for ${filteredCustomers().length} customers.`));
  el("dashboardMetrics")?.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-dashboard-orders-filter]");
    if (!filterButton) return;
    openOrdersFromDashboardFilter(filterButton);
  });
  document.querySelectorAll("[data-home-search-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.homeSearchMode = button.dataset.homeSearchMode || "order";
      state.homeSearchQuery = "";
      el("homeSearchModeMenu")?.classList.add("hidden");
      renderDashboard();
      el("homeSearchInput")?.focus();
    });
  });
  el("homeSearchModeBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    el("homeSearchModeMenu")?.classList.toggle("hidden");
  });
  el("homeSearchInput")?.addEventListener("input", (event) => {
    state.homeSearchQuery = event.target.value;
  });
  el("homeSearchInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    submitHomeSearch();
  });
  el("homeSearchBtn")?.addEventListener("click", submitHomeSearch);
  el("homeSwitchStoreBtn")?.addEventListener("click", () => setStoreSwitchModal(true));
  el("homeCreateOrderBtn")?.addEventListener("click", () => setCreateOrderStopModal(true));
  el("homeCreateCustomerBtn")?.addEventListener("click", () => {
    clearCustomerForm();
    setCustomerModal(true);
  });
  el("dashboardCreateOrderBtn").addEventListener("click", () => setCreateOrderStopModal(true));
  el("dashboardAddCustomerBtn")?.addEventListener("click", () => {
    clearCustomerForm();
    setCustomerModal(true);
  });
  el("hideDashboardWipOverlayBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.dashboardOverlayHidden = true;
    renderDashboard();
  });
  el("ordersExportBtn").addEventListener("click", () => {
    const rows = currentOrdersRows();
    showToast(`Export ready for ${rows.length} ${isReadyMadeDraftsOrdersView() ? "drafts" : "orders"}.`);
  });
  el("ordersCreateOrderBtn").addEventListener("click", () => setCreateOrderStopModal(true));

  el("fabricSearch").addEventListener("input", () => {
    state.fabricPage = 1;
    renderFabricInventory();
  });
  el("clearFabricSearchBtn")?.addEventListener("click", () => {
    el("fabricSearch").value = "";
    state.fabricPage = 1;
    renderFabricInventory();
    el("fabricSearch")?.focus();
  });
  el("resetFabricTableFiltersBtn")?.addEventListener("click", () => {
    resetFabricTableFilters();
    showToast("Fabric filters reset.");
  });
  el("scanFabricBtn").addEventListener("click", () => setFabricScannerModal(true));
  el("labelSearch")?.addEventListener("input", (event) => {
    state.labelSearchQuery = event.target.value;
    state.labelPage = 1;
    renderLabelInventory();
  });
  el("clearLabelSearchBtn")?.addEventListener("click", () => {
    state.labelSearchQuery = "";
    state.labelPage = 1;
    renderLabelInventory();
    el("labelSearch")?.focus();
  });
  el("labelRows")?.addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-empty-reset='labels']");
    if (!resetButton) return;
    state.labelSearchQuery = "";
    state.labelPage = 1;
    renderLabelInventory();
    el("labelSearch")?.focus();
    showToast("Label search reset.");
  });
  el("labelExportBtn")?.addEventListener("click", () => showToast(`Export ready for ${filteredLabelInventory().length} labels.`));
  el("labelPageSizeBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.labelPageSizeOpen = !state.labelPageSizeOpen;
    renderLabelPageSizeMenu();
  });
  el("labelPageSizeMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-label-page-size]");
    if (!option) return;
    state.labelPageSize = Number(option.dataset.labelPageSize);
    state.labelPage = 1;
    state.labelPageSizeOpen = false;
    renderLabelInventory();
  });
  el("labelPagination")?.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-label-page]");
    const actionButton = event.target.closest("[data-label-page-action]");
    const totalPages = Math.max(1, Math.ceil(filteredLabelInventory().length / state.labelPageSize));
    if (pageButton) state.labelPage = Number(pageButton.dataset.labelPage);
    if (actionButton?.dataset.labelPageAction === "previous") state.labelPage = Math.max(1, state.labelPage - 1);
    if (actionButton?.dataset.labelPageAction === "next") state.labelPage = Math.min(totalPages, state.labelPage + 1);
    if (pageButton || actionButton) renderLabelInventory();
  });
  el("labelRows")?.addEventListener("mouseover", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("labelRows")?.addEventListener("mousemove", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("labelRows")?.addEventListener("mouseout", (event) => {
    if (event.target.closest(".fabric-swatch-preview")) hideFabricSwatchZoom();
  });
  el("labelRows")?.addEventListener("focusin", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("labelRows")?.addEventListener("focusout", (event) => {
    if (event.target.closest(".fabric-swatch-preview")) hideFabricSwatchZoom();
  });
  el("fabricScannerActions").addEventListener("click", (event) => {
    const action = event.target.closest("[data-fabric-scanner-action]")?.dataset.fabricScannerAction;
    if (!action) return;
    if (action === "scan") addFabricScannerResult();
    if (action === "clear") clearFabricScannerResults();
    if (action === "no-match") {
      state.fabricScannerMode = "noMatch";
      renderFabricScannerModal();
    }
  });
  el("fabricScannerBody").addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-fabric-scanner-mode]");
    if (modeButton) {
      state.fabricScannerActiveMode = modeButton.dataset.fabricScannerMode;
      state.fabricScannerMode = state.fabricScannerResultIds.length ? "match" : "ready";
      state.fabricScannerView = "scan";
      renderFabricScannerModal();
      return;
    }
    const removeButton = event.target.closest("[data-fabric-scanner-remove]");
    if (removeButton) {
      removeFabricScannerResult(removeButton.dataset.fabricScannerRemove);
      return;
    }
    const action = event.target.closest("[data-fabric-scanner-action]")?.dataset.fabricScannerAction;
    if (action === "allow-camera") requestFabricScannerPermission();
    if (action === "close") setFabricScannerModal(false);
    if (action === "show-scan") {
      state.fabricScannerView = "scan";
      renderFabricScannerModal();
    }
    if (action === "clear") clearFabricScannerResults();
    if (action === "no-match") {
      state.fabricScannerMode = "noMatch";
      renderFabricScannerModal();
    }
    if (action === "file-scan" || action === "scan" || action === "simulate-scan") addFabricScannerResult();
  });
  el("closeFabricScannerModalBtn")?.addEventListener("click", () => setFabricScannerModal(false));
  el("closeFabricPriceModalBtn").addEventListener("click", () => setFabricPriceModal(false));
  el("closeCreateOrderStopModalBtn").addEventListener("click", () => setCreateOrderStopModal(false));
  el("dismissCreateOrderStopModalBtn").addEventListener("click", () => setCreateOrderStopModal(false));
  el("closeCreateOrderFlowModalBtn")?.addEventListener("click", () => setCreateOrderFlowModal(false));
  el("cancelCreateOrderFlowModalBtn")?.addEventListener("click", () => setCreateOrderFlowModal(false));
  el("createOrderFlowModal")?.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-create-order-flow-category]");
    if (categoryButton) {
      event.stopPropagation();
      state.createOrderFlowCategory = categoryButton.dataset.createOrderFlowCategory;
      state.createOrderFlowSearch = "";
      renderCreateOrderFlowModal();
      return;
    }

    const itemButton = event.target.closest("[data-create-order-flow-item]");
    if (!itemButton) return;
    event.stopPropagation();
    setCreateOrderFlowItem(itemButton.dataset.createOrderFlowItem);
  });
  el("createOrderFlowSearchInput")?.addEventListener("input", (event) => {
    state.createOrderFlowSearch = event.target.value;
    renderCreateOrderFlowModal();
    requestAnimationFrame(() => {
      const input = el("createOrderFlowSearchInput");
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    });
  });
  el("continueCreateOrderAnywayBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    setCreateOrderStopModal(false);
    setCreateOrderFlowModal(true);
  });
  el("beginCreateOrderFlowBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    const selectedItem = selectedCreateOrderFlowItem();
    if (!selectedItem) {
      showToast("Select an available order item first.");
      return;
    }
    startOnePageOrderFlow();
  });
  el("onePageOrderWorkspace")?.addEventListener("click", (event) => {
    const backButton = event.target.closest("#backToOrdersFromOnePageOrderBtn");
    if (backButton) {
      event.stopPropagation();
      setPage("orders");
      return;
    }

    const materialOption = event.target.closest("[data-one-page-material-option]");
    if (materialOption) {
      event.stopPropagation();
      updateOnePageOrderLine(
        Number(materialOption.dataset.onePageMaterialIndex),
        materialOption.dataset.onePageMaterialField,
        materialOption.dataset.onePageMaterialOption || "",
      );
      state.activeOnePageMaterialSearch = null;
      state.activeOnePageMaterialSearchPosition = null;
      renderOnePageOrderPage();
      return;
    }

    const materialInputClick = event.target.closest("[data-one-page-material-input]");
    if (materialInputClick) {
      event.stopPropagation();
      const index = Number(materialInputClick.dataset.onePageMaterialInput);
      const key = materialInputClick.dataset.onePageMaterialField;
      setOnePageMaterialSearchPosition(index, key, materialInputClick);
      state.activeOnePageOrderSelect = null;
      state.activeOnePageOrderSelectPosition = null;
      requestAnimationFrame(() => {
        renderOnePageOrderPage();
        const input = document.querySelector(`[data-one-page-material-input="${index}"][data-one-page-material-field="${key}"]`);
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    const fabricOption = event.target.closest("[data-one-page-fabric-option]");
    if (fabricOption) {
      event.stopPropagation();
      updateOnePageOrderLine(Number(fabricOption.dataset.onePageFabricIndex), "fabric", fabricOption.dataset.onePageFabricOption || "");
      state.activeOnePageFabricSearch = null;
      state.activeOnePageFabricSearchPosition = null;
      renderOnePageOrderPage();
      return;
    }

    const fabricInputClick = event.target.closest("[data-one-page-fabric-input]");
    if (fabricInputClick) {
      event.stopPropagation();
      const index = Number(fabricInputClick.dataset.onePageFabricInput);
      setOnePageFabricSearchPosition(index, fabricInputClick);
      state.activeOnePageOrderSelect = null;
      state.activeOnePageOrderSelectPosition = null;
      requestAnimationFrame(() => {
        renderOnePageOrderPage();
        const input = document.querySelector(`[data-one-page-fabric-input="${index}"]`);
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    const orderSelectButton = event.target.closest("[data-one-page-order-select]");
    if (orderSelectButton) {
      event.stopPropagation();
      openOnePageOrderSelect(orderSelectButton);
      return;
    }

    const summaryEditButton = event.target.closest("[data-one-page-order-summary-edit]");
    if (summaryEditButton) {
      event.stopPropagation();
      navigateMultiPageOrderStep(summaryEditButton.dataset.onePageOrderSummaryEdit);
      return;
    }

    const fitToolsGarmentButton = event.target.closest("[data-one-page-order-fit-tools-garment]");
    if (fitToolsGarmentButton) {
      event.stopPropagation();
      state.onePageOrderActiveFitGarment = fitToolsGarmentButton.dataset.onePageOrderFitToolsGarment;
      renderOnePageOrderPage();
      return;
    }

    const fitModeButton = event.target.closest("[data-one-page-order-fit-mode]");
    if (fitModeButton) {
      event.stopPropagation();
      if (onePageOrderUsesMultiPageFlow()) {
        updateOnePageOrderGarmentFitProfile(fitModeButton.dataset.onePageOrderFitGarment, "mode", fitModeButton.dataset.onePageOrderFitMode);
      } else {
        state.onePageOrderFields.fitProfileMode = fitModeButton.dataset.onePageOrderFitMode;
      }
      renderOnePageOrderPage();
      return;
    }

    const fitProfileButton = event.target.closest("[data-one-page-order-fit-profile]");
    if (fitProfileButton) {
      event.stopPropagation();
      if (onePageOrderUsesMultiPageFlow()) {
        updateOnePageOrderGarmentFitProfile(fitProfileButton.dataset.onePageOrderFitGarment, "existing", fitProfileButton.dataset.onePageOrderFitProfile);
      } else {
        state.onePageOrderFields.fitProfileExisting = fitProfileButton.dataset.onePageOrderFitProfile;
        state.onePageOrderFields.fitProfileName = fitProfileButton.dataset.onePageOrderFitProfile;
      }
      renderOnePageOrderPage();
      return;
    }

    const designHelpButton = event.target.closest("[data-one-page-order-design-help]");
    if (designHelpButton) {
      event.stopPropagation();
      setHelpCenterModal(true, helpCenterArticleForTerm(designHelpButton.dataset.onePageOrderDesignHelp));
      return;
    }

    const designCopyAllButton = event.target.closest("[data-one-page-order-design-copy-all]");
    if (designCopyAllButton) {
      event.stopPropagation();
      setAllOnePageOrderDesignCopyRows(
        designCopyAllButton.dataset.onePageOrderDesignCopyAll === "on",
        [...document.querySelectorAll("[data-one-page-order-design-copy-row]")].map((button) => button.dataset.onePageOrderDesignCopyRow),
      );
      renderOnePageOrderPage();
      return;
    }

    const designRowCopyButton = event.target.closest("[data-one-page-order-design-copy-row]");
    if (designRowCopyButton) {
      event.stopPropagation();
      toggleOnePageOrderDesignCopyRow(designRowCopyButton.dataset.onePageOrderDesignCopyRow);
      renderOnePageOrderPage();
      return;
    }

    const designOrderCopyButton = event.target.closest("[data-one-page-order-design-copy-order]");
    if (designOrderCopyButton) {
      event.stopPropagation();
      copyOnePageOrderDesignToAll(Number(designOrderCopyButton.dataset.onePageOrderDesignCopyOrder));
      renderOnePageOrderPage();
      return;
    }

    const designExtraButton = event.target.closest("[data-one-page-order-design-extra]");
    if (designExtraButton) {
      event.stopPropagation();
      const index = Number(designExtraButton.dataset.onePageOrderDesignIndex);
      const key = designExtraButton.dataset.onePageOrderDesignExtra;
      const design = state.onePageOrderDesigns[index] || onePageOrderDesignDefaults();
      const enabled = !(design[key] || design[`${key}Enabled`]);
      updateOnePageOrderDesign(index, key, enabled);
      updateOnePageOrderDesign(index, `${key}Enabled`, enabled);
      showToast(`${key === "monogram" ? "Monogram" : "Branding options"} ${enabled ? "added to" : "removed from"} Order ${index + 1}.`);
      renderOnePageOrderPage();
      return;
    }

    const stepNavButton = event.target.closest("[data-one-page-order-step-nav]");
    if (stepNavButton) {
      event.stopPropagation();
      navigateOnePageOrderStep(stepNavButton.dataset.onePageOrderStepNav, stepNavButton.dataset.onePageOrderStepTarget);
      return;
    }

    const runningInfoToggle = event.target.closest("[data-one-page-running-info-toggle]");
    if (runningInfoToggle) {
      event.stopPropagation();
      state.onePageOrderRunningInfoCollapsed = !state.onePageOrderRunningInfoCollapsed;
      renderOnePageOrderPage();
      return;
    }

    const orderCard = event.target.closest("[data-one-page-order-card]");
    if (orderCard) {
      event.stopPropagation();
      setOnePageOrderCardModal(true, Number(orderCard.dataset.onePageOrderCard));
      return;
    }

    const sectionButton = event.target.closest("[data-one-page-order-section]");
    if (sectionButton) {
      event.stopPropagation();
      const sectionId = sectionButton.dataset.onePageOrderSection;
      if (state.onePageOrderCollapsedSections.has(sectionId)) {
        state.onePageOrderCollapsedSections.delete(sectionId);
      } else {
        state.onePageOrderCollapsedSections.add(sectionId);
      }
      renderOnePageOrderPage();
      return;
    }

    const actionButton = event.target.closest("[data-one-page-order-action]");
    if (actionButton) {
      event.stopPropagation();
      if (actionButton.dataset.onePageOrderAction === "process") {
        showAlert("Order created", "The order has been processed and added.");
        return;
      }
      const messages = {
        hold: "Order hold previewed.",
        discount: "Discount preview opened.",
      };
      showToast(messages[actionButton.dataset.onePageOrderAction] || "Order action previewed.");
    }
  });
  el("onePageOrderWorkspace")?.addEventListener("change", (event) => {
    const designCopyAllInput = event.target.closest("[data-one-page-order-design-copy-all]");
    if (designCopyAllInput) {
      event.stopPropagation();
      setAllOnePageOrderDesignCopyRows(
        designCopyAllInput.dataset.onePageOrderDesignCopyAll === "on",
        [...document.querySelectorAll("[data-one-page-order-design-copy-row]")].map((button) => button.dataset.onePageOrderDesignCopyRow),
      );
      renderOnePageOrderPage();
      return;
    }

    const designCopyRowInput = event.target.closest("[data-one-page-order-design-copy-row]");
    if (designCopyRowInput) {
      event.stopPropagation();
      toggleOnePageOrderDesignCopyRow(designCopyRowInput.dataset.onePageOrderDesignCopyRow);
      renderOnePageOrderPage();
      return;
    }

    const lineField = event.target.closest("[data-one-page-order-line-field]");
    if (lineField) {
      event.stopPropagation();
      updateOnePageOrderLine(Number(lineField.dataset.onePageOrderLine), lineField.dataset.onePageOrderLineField, lineField.value);
      renderOnePageOrderPage();
      return;
    }

    const paymentField = event.target.closest("[data-one-page-order-payment-field]");
    if (paymentField) {
      event.stopPropagation();
      updateOnePageOrderPayment(Number(paymentField.dataset.onePageOrderPaymentIndex), paymentField.dataset.onePageOrderPaymentField, paymentField.value);
      renderOnePageOrderPage();
      return;
    }

    const detailField = event.target.closest("[data-one-page-order-detail-field]");
    if (detailField) {
      event.stopPropagation();
      updateOnePageOrderDetail(Number(detailField.dataset.onePageOrderDetailIndex), detailField.dataset.onePageOrderDetailField, detailField.value);
      renderOnePageOrderPage();
      return;
    }

    const garmentFitField = event.target.closest("[data-one-page-order-garment-fit-field]");
    if (garmentFitField) {
      event.stopPropagation();
      updateOnePageOrderGarmentFitProfile(garmentFitField.dataset.onePageOrderFitGarment, garmentFitField.dataset.onePageOrderGarmentFitField, garmentFitField.value);
      renderOnePageOrderPage();
      requestAnimationFrame(() => {
        const input = document.querySelector(`[data-one-page-order-garment-fit-field="${garmentFitField.dataset.onePageOrderGarmentFitField}"][data-one-page-order-fit-garment="${garmentFitField.dataset.onePageOrderFitGarment}"]`);
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    const field = event.target.closest("[data-one-page-order-field]");
    if (!field) return;
    event.stopPropagation();
    const key = field.dataset.onePageOrderField;
    updateOnePageOrderField(key, field.type === "checkbox" ? field.checked : field.value);
    renderOnePageOrderPage();
  });
  el("onePageOrderWorkspace")?.addEventListener("focusin", (event) => {
    const materialInput = event.target.closest("[data-one-page-material-input]");
    if (materialInput) {
      const index = Number(materialInput.dataset.onePageMaterialInput);
      const key = materialInput.dataset.onePageMaterialField;
      const searchKey = onePageOrderMaterialSearchKey(index, key);
      if (state.activeOnePageMaterialSearch === searchKey && document.querySelector(`[data-one-page-material-menu="${searchKey}"]`)) return;
      setOnePageMaterialSearchPosition(index, key, materialInput);
      state.activeOnePageOrderSelect = null;
      state.activeOnePageOrderSelectPosition = null;
      requestAnimationFrame(() => {
        renderOnePageOrderPage();
        const input = document.querySelector(`[data-one-page-material-input="${index}"][data-one-page-material-field="${key}"]`);
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    const fabricInput = event.target.closest("[data-one-page-fabric-input]");
    if (!fabricInput) return;
    const index = Number(fabricInput.dataset.onePageFabricInput);
    if (state.activeOnePageFabricSearch === index && document.querySelector(`[data-one-page-fabric-menu="${index}"]`)) return;
    setOnePageFabricSearchPosition(index, fabricInput);
    state.activeOnePageOrderSelect = null;
    state.activeOnePageOrderSelectPosition = null;
    requestAnimationFrame(() => {
      renderOnePageOrderPage();
      const input = document.querySelector(`[data-one-page-fabric-input="${index}"]`);
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    });
  });
  el("onePageOrderWorkspace")?.addEventListener("input", (event) => {
    const materialInput = event.target.closest("[data-one-page-material-input]");
    if (materialInput) {
      event.stopPropagation();
      const index = Number(materialInput.dataset.onePageMaterialInput);
      const key = materialInput.dataset.onePageMaterialField;
      setOnePageMaterialSearchPosition(index, key, materialInput);
      updateOnePageOrderLine(index, key, materialInput.value);
      renderOnePageOrderPage();
      requestAnimationFrame(() => {
        const input = document.querySelector(`[data-one-page-material-input="${index}"][data-one-page-material-field="${key}"]`);
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    const fabricInput = event.target.closest("[data-one-page-fabric-input]");
    if (fabricInput) {
      event.stopPropagation();
      const index = Number(fabricInput.dataset.onePageFabricInput);
      setOnePageFabricSearchPosition(index, fabricInput);
      updateOnePageOrderLine(index, "fabric", fabricInput.value);
      renderOnePageOrderPage();
      requestAnimationFrame(() => {
        const input = document.querySelector(`[data-one-page-fabric-input="${index}"]`);
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    const designInput = event.target.closest("[data-one-page-order-design-input]");
    if (designInput) {
      event.stopPropagation();
      updateOnePageOrderDesign(
        Number(designInput.dataset.onePageOrderDesignIndex),
        designInput.dataset.onePageOrderDesignInput,
        designInput.value,
      );
      return;
    }

    const paymentInput = event.target.closest("[data-one-page-order-payment-field]");
    if (paymentInput) {
      event.stopPropagation();
      updateOnePageOrderPayment(Number(paymentInput.dataset.onePageOrderPaymentIndex), paymentInput.dataset.onePageOrderPaymentField, paymentInput.value);
      return;
    }

    const detailInput = event.target.closest("[data-one-page-order-detail-field]");
    if (detailInput) {
      event.stopPropagation();
      updateOnePageOrderDetail(Number(detailInput.dataset.onePageOrderDetailIndex), detailInput.dataset.onePageOrderDetailField, detailInput.value);
      return;
    }

    const field = event.target.closest("[data-one-page-order-field]");
    if (!field || field.type === "checkbox") return;
    event.stopPropagation();
    const key = field.dataset.onePageOrderField;
    updateOnePageOrderField(key, field.value);
    if (key === "fitProfileSearchQuery") {
      renderOnePageOrderPage();
      requestAnimationFrame(() => {
        const input = document.querySelector('[data-one-page-order-field="fitProfileSearchQuery"]');
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
    }
  });
  el("onePageOrderSelectMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest(".one-page-order-select-option");
    if (!option || !state.activeOnePageOrderSelect) return;
    updateOnePageOrderSelectValue(state.activeOnePageOrderSelect, option.dataset.value || "");
    state.activeOnePageOrderSelect = null;
    state.activeOnePageOrderSelectPosition = null;
    renderOnePageOrderPage();
  });
  el("doneFabricPriceModalBtn").addEventListener("click", () => setFabricPriceModal(false));
  el("closeFabricCustomerSelectionBtn")?.addEventListener("click", () => setFabricCustomerSelectionModal(false));
  el("closeFabricCustomerSelectionIconBtn")?.addEventListener("click", () => setFabricCustomerSelectionModal(false));
  el("fabricExportBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const isOpen = Boolean(state.activeFabricExportPosition);
    state.activeFabricSelect = null;
    state.activeFabricSelectInstance = null;
    state.activeFabricSelectPosition = null;
    renderFabricSelectMenu();
    state.activeFabricExportPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: Math.max(rect.width, 260) };
    renderFabricExportMenu();
  });

  el("fabricExportMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-fabric-export-option]");
    if (!option) return;
    const labels = {
      stock: "Export Fabric Stock",
      clPriceCat: "Export fabric CL price cat list",
    };
    state.activeFabricExportPosition = null;
    renderFabricExportMenu();
    showToast(`${labels[option.dataset.fabricExportOption] || "Export"} ready.`);
  });

  el("fabricDescriptionToggle").addEventListener("click", () => {
    state.fabricDescriptionVisible = !state.fabricDescriptionVisible;
    renderFabricInventory();
  });

  el("fabricPageSizeBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    state.fabricPageSizeOpen = !state.fabricPageSizeOpen;
    renderFabricPageSizeMenu();
  });

  el("fabricPageSizeMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-fabric-page-size]");
    if (!option) return;
    state.fabricPageSize = Number(option.dataset.fabricPageSize);
    state.fabricPage = 1;
    state.fabricPageSizeOpen = false;
    renderFabricInventory();
  });

  el("fabricRows").addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-empty-reset='fabric']");
    if (resetButton) {
      resetFabricTableFilters();
      showToast("Fabric filters reset.");
      return;
    }
    const actionButton = event.target.closest("[data-fabric-action-id]");
    if (!actionButton) return;
    event.stopPropagation();
    const rect = actionButton.getBoundingClientRect();
    const isOpen = state.activeFabricActionId === actionButton.dataset.fabricActionId;
    state.activeFabricActionId = isOpen ? null : actionButton.dataset.fabricActionId;
    state.activeFabricActionPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6, width: Math.max(rect.width, 240) };
    renderFabricActionMenu();
  });
  el("fabricActionMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-fabric-action-option]");
    if (!option) return;
    state.activeFabricActionId = null;
    state.activeFabricActionPosition = null;
    renderFabricActionMenu();
    if (option.dataset.fabricActionOption === "custom-made") {
      setFabricCustomerSelectionModal(true);
      return;
    }
    showToast("ReadyMade order prototype action selected.");
  });
  el("fabricRows").addEventListener("mouseover", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("fabricRows").addEventListener("mousemove", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("fabricRows").addEventListener("mouseout", (event) => {
    if (event.target.closest(".fabric-swatch-preview")) hideFabricSwatchZoom();
  });
  el("fabricRows").addEventListener("focusin", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("fabricRows").addEventListener("focusout", (event) => {
    if (event.target.closest(".fabric-swatch-preview")) hideFabricSwatchZoom();
  });
  document.querySelector("#fabricTable thead")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sort-table]");
    if (button) handleTableSort(button);
  });

  el("fabricInventoryPage").addEventListener("click", (event) => {
    const field = event.target.closest("[data-fabric-select]");
    if (!field) return;
    event.stopPropagation();
    openFabricSelect(field);
  });

  el("fabricSelectMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest(".fabric-select-option");
    if (!option || !state.activeFabricSelect) return;
    const activeButton = document.querySelector(`[data-fabric-select="${state.activeFabricSelect}"][data-select-instance="${state.activeFabricSelectInstance}"]`);
    const isAdvanced = activeButton?.closest("#fabricAdvancedFiltersPanel");
    syncFabricFilterField(state.activeFabricSelect, option.dataset.value || "");
    state.activeFabricSelect = null;
    state.activeFabricSelectInstance = null;
    state.activeFabricSelectPosition = null;
    renderFabricSelectMenu();
    if (!isAdvanced) {
      state.fabricFilters = collectFabricFilters();
      state.fabricPage = 1;
      renderFabricInventory();
      scheduleDemoFilterLoading("fabricInventory");
    }
  });

  el("fabricInventoryPage").addEventListener("change", (event) => {
    const exposedDateFilter = event.target.closest("input[data-fabric-filter]");
    if (!exposedDateFilter) return;
    syncFabricFilterField(exposedDateFilter.dataset.fabricFilter, exposedDateFilter.value);
    if (exposedDateFilter.closest("#fabricAdvancedFiltersPanel")) return;
    state.fabricFilters = collectFabricFilters();
    state.fabricPage = 1;
    renderFabricInventory();
  });

  el("fabricInventoryPage").addEventListener("input", (event) => {
    const exposedDateFilter = event.target.closest("input[data-fabric-filter]");
    if (!exposedDateFilter) return;
    syncFabricFilterField(exposedDateFilter.dataset.fabricFilter, exposedDateFilter.value);
    if (exposedDateFilter.closest("#fabricAdvancedFiltersPanel")) return;
    state.fabricFilters = collectFabricFilters();
    state.fabricPage = 1;
    renderFabricInventory();
  });

  el("fabricAdvancedFiltersBtn").addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  el("fabricAdvancedFiltersBtn").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    state.activeFabricSelect = null;
    state.activeFabricSelectInstance = null;
    state.activeFabricSelectPosition = null;
    renderFabricSelectMenu();
    setFabricAdvancedFiltersModal(true);
  });

  el("fabricAdvancedFiltersPanel").addEventListener("click", (event) => {
    const field = event.target.closest("[data-fabric-select]");
    if (field) openFabricSelect(field);
    event.stopPropagation();
  });
  el("fabricAdvancedFiltersBody")?.addEventListener("scroll", repositionFabricFloatingControls, { passive: true });
  el("closeFabricFiltersIconBtn").addEventListener("click", () => {
    setFabricAdvancedFiltersModal(false);
  });
  el("applyFabricFiltersBtn").addEventListener("click", () => {
    state.fabricFilters = collectFabricFilters();
    Object.entries(state.fabricFilters).forEach(([key, filter]) => syncFabricFilterField(key, filter.value));
    setFabricAdvancedFiltersModal(false);
    state.fabricPage = 1;
    renderFabricInventory();
    showToast("Fabric filters applied.");
  });
  el("resetFabricFiltersBtn").addEventListener("click", () => {
    resetFabricTableFilters();
    showToast("Fabric filters reset.");
  });

  document.querySelectorAll("[data-fabric-favorite]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!state.fabricFutureFeaturesUnlocked) return;
      const key = button.dataset.fabricFavorite;
      state.fabricFavoriteFilters = state.fabricFavoriteFilters.includes(key)
        ? state.fabricFavoriteFilters.filter((item) => item !== key)
        : [...state.fabricFavoriteFilters, key];
      persistFabricFavorites();
      renderFabricFavoriteFilters();
      showToast(state.fabricFavoriteFilters.includes(key) ? `${button.closest("label")?.innerText.split("\n")[0] || "Filter"} added to visible filters.` : "Filter removed from visible filters.");
    });
  });

  el("fabricFilterChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-fabric-filter-key]");
    if (!chip) return;
    delete state.fabricFilters[chip.dataset.fabricFilterKey];
    syncFabricFilterField(chip.dataset.fabricFilterKey, "");
    state.fabricPage = 1;
    renderFabricInventory();
  });

  el("fabricPagination").addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-fabric-page]");
    const actionButton = event.target.closest("[data-fabric-page-action]");
    const rows = filteredFabricInventory();
    const totalPages = Math.max(1, Math.ceil(rows.length / state.fabricPageSize));

    if (pageButton) {
      state.fabricPage = Number(pageButton.dataset.fabricPage);
      renderFabricInventory();
      return;
    }

    if (actionButton?.dataset.fabricPageAction === "previous") {
      state.fabricPage = Math.max(1, state.fabricPage - 1);
      renderFabricInventory();
      return;
    }

    if (actionButton?.dataset.fabricPageAction === "next") {
      state.fabricPage = Math.min(totalPages, state.fabricPage + 1);
      renderFabricInventory();
    }
  });

  el("ordersPage").addEventListener("change", (event) => {
    if (event.target.id === "selectAllOrders") {
      const { visibleRows } = paginatedStandaloneOrders(currentOrdersRows());
      visibleRows.forEach((order) => {
        event.target.checked ? state.selectedOrders.add(order.id) : state.selectedOrders.delete(order.id);
      });
      renderOrdersPage();
      return;
    }
    const rowCheck = event.target.closest(".orders-row-check");
    if (rowCheck) {
      rowCheck.checked ? state.selectedOrders.add(rowCheck.dataset.orderId) : state.selectedOrders.delete(rowCheck.dataset.orderId);
      renderOrdersPage();
    }
  });

  el("ordersSearch").addEventListener("input", (event) => {
    state.ordersSearchQuery = event.target.value;
    state.ordersPage = 1;
    renderOrdersPage();
  });
  document.querySelectorAll("#ordersSearchOrderNumber, #ordersSearchFirstName, #ordersSearchLastName").forEach((input) => {
    input.addEventListener("input", (event) => {
      const key = event.target.id === "ordersSearchOrderNumber" ? "order" : event.target.id === "ordersSearchFirstName" ? "firstName" : event.target.id === "ordersSearchLastName" ? "lastName" : "";
      if (!key) return;
      state.ordersStructuredSearchDraft[key] = event.target.value;
    });
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      applyOrdersStructuredSearch();
    });
  });
  el("ordersStructuredSearchBtn")?.addEventListener("click", applyOrdersStructuredSearch);
  el("ordersTableHead").addEventListener("click", (event) => {
    const button = event.target.closest("[data-sort-table]");
    if (button) handleTableSort(button);
  });
  el("resetOrdersFiltersBtn")?.addEventListener("click", () => {
    resetOrdersTableFilters();
    showToast("Order filters reset.");
  });

  document.querySelectorAll("[data-orders-status-trigger]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const rect = button.getBoundingClientRect();
      const menuOpen = el("ordersStatusMenu").classList.contains("open");
      const samePosition =
        state.activeOrdersStatusPosition &&
        Math.abs(state.activeOrdersStatusPosition.left - rect.left) < 1 &&
        Math.abs(state.activeOrdersStatusPosition.top - (rect.bottom + 6)) < 1;
      state.activeOrdersSelect = null;
      state.activeOrdersSelectInstance = null;
      state.activeOrdersSelectPosition = null;
      state.activeOrdersBulkStatusPosition = null;
      state.activeOrdersPrintPosition = null;
      closeOrdersCascadeItemMenu();
      el("ordersBulkStatusMenu").classList.remove("open");
      renderOrdersPrintMenu();
      renderOrdersSelectMenu();
      state.activeOrdersStatusPosition = menuOpen && samePosition ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
      renderOrdersStatusMenu();
      el("ordersStatusMenu").classList.toggle("open", Boolean(state.activeOrdersStatusPosition));
      el("ordersStatusSearch").focus();
    });
  });

  el("ordersStatusMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const selectAll = event.target.closest("[data-orders-status-action='selectAll']");
    if (selectAll) {
      const statusOptions = ordersStatusOptionsForCurrentView();
      const allSelected = statusOptions.every((status) => state.ordersStatusFilter.has(status));
      state.ordersStatusFilter = allSelected ? new Set() : new Set(statusOptions);
      state.ordersPage = 1;
      syncOrdersStatusFields();
      renderOrdersStatusMenu();
      renderOrdersPage();
      scheduleDemoFilterLoading("orders");
      return;
    }

    const option = event.target.closest("[data-orders-status-option]");
    if (!option) return;
    const status = option.dataset.ordersStatusOption;
    state.ordersStatusFilter.has(status) ? state.ordersStatusFilter.delete(status) : state.ordersStatusFilter.add(status);
    state.ordersPage = 1;
    syncOrdersStatusFields();
    renderOrdersStatusMenu();
    renderOrdersPage();
    scheduleDemoFilterLoading("orders");
  });

  el("ordersStatusSearch").addEventListener("input", (event) => {
    state.ordersStatusQuery = event.target.value;
    renderOrdersStatusMenu();
  });

  function openOrdersBulkActionsMenuFrom(event) {
    event.preventDefault();
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const menuOpen = el("ordersBulkActionsMenu")?.classList.contains("open");
    const samePosition =
      state.activeOrdersBulkActionsPosition &&
      Math.abs(state.activeOrdersBulkActionsPosition.left - rect.left) < 1 &&
      Math.abs(state.activeOrdersBulkActionsPosition.top - (rect.bottom + 6)) < 1;
    state.inlineStatusOrderId = null;
    state.activeOrdersBulkStatusPosition = null;
    el("ordersBulkStatusMenu")?.classList.remove("open");
    const bottomAnchored = event.currentTarget.id === "ordersBottomBulkActionsBtn";
    state.activeOrdersBulkActionsPosition = menuOpen && samePosition ? null : { left: rect.left, top: bottomAnchored ? Math.max(16, rect.top - 150) : rect.bottom + 6, width: rect.width };
    renderOrdersBulkActionsMenu();
  }

  el("ordersBulkActionsBtn")?.addEventListener("click", openOrdersBulkActionsMenuFrom);
  el("ordersBottomBulkActionsBtn")?.addEventListener("click", openOrdersBulkActionsMenuFrom);
  el("ordersBottomStatusBtn")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!state.selectedOrders.size) {
      showToast("Select at least one order first.");
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    state.inlineStatusOrderId = null;
    state.statusUpdateContext = "orders";
    state.ordersBulkStatus = "";
    state.activeOrdersBulkActionsPosition = null;
    el("ordersBulkActionsMenu")?.classList.remove("open");
    const menuHeight = Math.min(360, ordersStatusOptionsForCurrentView().length * 38 + 8);
    const belowTop = rect.bottom + 6;
    const aboveTop = rect.top - menuHeight - 6;
    const top = belowTop + menuHeight <= window.innerHeight - 16 ? belowTop : Math.max(16, aboveTop);
    state.activeOrdersBulkStatusPosition = { left: rect.left, top, width: Math.max(rect.width, 260) };
    renderOrdersBulkStatusMenu();
  });

  el("ordersBulkActionsMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const action = event.target.closest("[data-orders-bulk-action]");
    if (!action) return;
    const selectedCount = state.selectedOrders.size;
    const actionKey = action.dataset.ordersBulkAction;
    state.activeOrdersBulkActionsPosition = null;
    el("ordersBulkActionsMenu")?.classList.remove("open");
    if (!selectedCount) {
      showToast("Select at least one order first.");
      return;
    }
    if (actionKey === "changeStatus") {
      const anchor = el("ordersBottomStatusBtn") || el("ordersBottomBulkActionsBtn") || el("ordersBulkActionsBtn");
      const rect = anchor.getBoundingClientRect();
      state.statusUpdateContext = "orders";
      state.ordersBulkStatus = "";
      state.activeOrdersBulkStatusPosition = { left: rect.left, top: rect.bottom + 6, width: Math.max(rect.width, 260) };
      renderOrdersBulkStatusMenu();
      return;
    }
    if (actionKey === "deleteDrafts") {
      deleteReadyMadeDraftOrders([...state.selectedOrders]);
      return;
    }
    showToast(`${actionKey === "print" ? "Print" : "Export"} ready for ${selectedCount} selected order${selectedCount === 1 ? "" : "s"}.`);
  });

  document.querySelectorAll("[data-orders-bottom-bulk-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const selectedCount = state.selectedOrders.size;
      if (!selectedCount) {
        showToast("Select at least one order first.");
        return;
      }
      const actionKey = event.currentTarget.dataset.ordersBottomBulkAction;
      showToast(`${actionKey === "print" ? "Print" : "Export"} ready for ${selectedCount} selected order${selectedCount === 1 ? "" : "s"}.`);
    });
  });

  el("ordersBulkStatusBtn").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    state.inlineStatusOrderId = null;
    const rect = event.currentTarget.getBoundingClientRect();
    const menuOpen = el("ordersBulkStatusMenu").classList.contains("open");
    const samePosition =
      state.activeOrdersBulkStatusPosition &&
      Math.abs(state.activeOrdersBulkStatusPosition.left - rect.left) < 1 &&
      Math.abs(state.activeOrdersBulkStatusPosition.top - (rect.bottom + 6)) < 1;
    state.statusUpdateContext = "orders";
    state.activeOrdersStatusPosition = null;
    state.activeOrdersSelect = null;
    state.activeOrdersSelectInstance = null;
    state.activeOrdersSelectPosition = null;
    closeOrdersCascadeItemMenu();
    el("ordersStatusMenu").classList.remove("open");
    renderOrdersSelectMenu();
    state.activeOrdersBulkStatusPosition = menuOpen && samePosition ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
    renderOrdersBulkStatusMenu();
  });

  el("ordersBulkStatusMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-orders-bulk-status-option]");
    if (!option) return;
    state.ordersBulkStatus = option.dataset.ordersBulkStatusOption;
    state.activeOrdersBulkStatusPosition = null;
    el("ordersBulkStatusMenu").classList.remove("open");
    if (state.inlineStatusOrderId && state.statusUpdateContext === "orders") {
      state.selectedOrders = new Set([state.inlineStatusOrderId]);
      setOrdersStatusUpdateModal(true);
      return;
    }
    if (state.statusUpdateContext === "orders" && state.selectedOrders.size) {
      setOrdersStatusUpdateModal(true);
      return;
    }
    state.statusUpdateContext === "detail" ? renderDetailOrdersBulkActions() : renderOrdersBulkActions();
  });

  el("ordersBulkApplyBtn").addEventListener("click", () => {
    if (!state.selectedOrders.size) {
      showToast("Select at least one order first.");
      return;
    }
    if (!state.ordersBulkStatus) {
      showToast("Choose an order status first.");
      return;
    }
    setOrdersStatusUpdateModal(true);
  });

  el("ordersBulkClearBtn").addEventListener("click", () => {
    state.selectedOrders.clear();
    state.ordersBulkStatus = "";
    state.activeOrdersBulkActionsPosition = null;
    state.activeOrdersBulkStatusPosition = null;
    renderOrdersPage();
  });

  el("ordersBottomBulkClearBtn")?.addEventListener("click", () => {
    state.selectedOrders.clear();
    state.ordersBulkStatus = "";
    state.activeOrdersBulkActionsPosition = null;
    state.activeOrdersBulkStatusPosition = null;
    renderOrdersPage();
  });

  el("ordersBulkDeleteBtn").addEventListener("click", () => {
    if (!state.selectedOrders.size) {
      showToast("Select at least one draft order first.");
      return;
    }
    deleteReadyMadeDraftOrders([...state.selectedOrders]);
  });

  el("closeOrdersStatusUpdateModalBtn").addEventListener("click", () => setOrdersStatusUpdateModal(false));
  el("cancelOrdersStatusUpdateBtn").addEventListener("click", () => setOrdersStatusUpdateModal(false));
  el("confirmOrdersStatusUpdateBtn").addEventListener("click", applySelectedOrdersStatusUpdate);
  el("closeOrderRemarksModalBtn")?.addEventListener("click", () => setOrderRemarksModal(false));
  el("cancelOrderRemarksModalBtn")?.addEventListener("click", () => setOrderRemarksModal(false));
  el("saveOrderRemarksModalBtn")?.addEventListener("click", saveOrderRemarksModal);

  el("ordersPage").addEventListener("pointerdown", (event) => {
    const field = event.target.closest("[data-orders-select]");
    if (!field) return;
    event.preventDefault();
    event.stopPropagation();
    closeOrdersCascadeItemMenu();
    openOrdersSelect(field);
  });

  el("ordersAdvancedModal").addEventListener("pointerdown", (event) => {
    const field = event.target.closest("[data-orders-select]");
    if (!field) return;
    event.preventDefault();
    event.stopPropagation();
    closeOrdersCascadeItemMenu();
    openOrdersSelect(field);
  });

  el("ordersAdvancedModal").addEventListener("input", (event) => {
    const dateField = event.target.closest("[data-orders-date-filter]");
    if (!dateField) return;
    syncOrdersDateFilterField(dateField.dataset.ordersDateFilter, dateField.value);
    state.ordersPage = 1;
  });

  el("ordersPage").addEventListener("input", (event) => {
    const dateField = event.target.closest("[data-orders-date-filter]");
    if (!dateField) return;
    syncOrdersDateFilterField(dateField.dataset.ordersDateFilter, dateField.value);
    state.ordersPage = 1;
    renderOrdersPage();
  });

  document.querySelectorAll("[data-orders-favorite]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!state.ordersFavoritesUnlocked) return;
      const key = button.dataset.ordersFavorite;
      state.ordersFavoriteFilters = state.ordersFavoriteFilters.includes(key)
        ? state.ordersFavoriteFilters.filter((item) => item !== key)
        : [...state.ordersFavoriteFilters, key];
      persistOrdersFavorites();
      renderOrdersFavoriteFilters();
      showToast(state.ordersFavoriteFilters.includes(key) ? `${ordersFavoriteDefinitions[key]?.label || "Filter"} added to visible filters.` : "Filter removed from visible filters.");
    });
  });

  el("ordersCascadeItemBtn")?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = state.activeOrdersCascadeOpen;
    state.activeOrdersStatusPosition = null;
    state.activeOrdersBulkStatusPosition = null;
    state.activeOrdersPrintPosition = null;
    state.activeOrdersSelect = null;
    state.activeOrdersSelectInstance = null;
    state.activeOrdersSelectPosition = null;
    el("ordersStatusMenu")?.classList.remove("open");
    el("ordersBulkStatusMenu")?.classList.remove("open");
    renderOrdersPrintMenu();
    renderOrdersSelectMenu();
    state.activeOrdersCascadeOpen = !isOpen;
    renderOrdersCascadeItemMenu();
  });

  el("ordersCascadeItemMenu")?.addEventListener("pointerover", (event) => {
    const category = event.target.closest("[data-orders-cascade-category]");
    if (!category || category.dataset.ordersCascadeCategory === state.activeOrdersCascadeCategory) return;
    state.activeOrdersCascadeCategory = category.dataset.ordersCascadeCategory || "Clothing";
    renderOrdersCascadeItemMenu();
  });

  el("ordersCascadeItemMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const clear = event.target.closest("[data-orders-cascade-clear]");
    if (clear) {
      state.ordersFilters.item = new Set();
      state.ordersPage = 1;
      syncOrdersExposedFilterFields();
      syncOrdersCascadeItemField();
      renderOrdersCascadeItemMenu();
      renderOrdersPage();
      scheduleDemoFilterLoading("orders");
      return;
    }
    const categoryToggle = event.target.closest("[data-orders-cascade-category-toggle]");
    if (categoryToggle) {
      const group = orderItemGroups.find((entry) => entry.label === categoryToggle.dataset.ordersCascadeCategoryToggle);
      if (!group) return;
      const selectedCount = group.items.filter((value) => state.ordersFilters.item.has(value)).length;
      if (selectedCount === group.items.length) {
        group.items.forEach((value) => state.ordersFilters.item.delete(value));
      } else {
        group.items.forEach((value) => state.ordersFilters.item.add(value));
      }
      state.ordersPage = 1;
      syncOrdersExposedFilterFields();
      syncOrdersCascadeItemField();
      renderOrdersCascadeItemMenu();
      renderOrdersPage();
      scheduleDemoFilterLoading("orders");
      return;
    }
    const item = event.target.closest("[data-orders-cascade-item]");
    if (!item) return;
    const value = item.dataset.ordersCascadeItem;
    if (state.ordersFilters.item.has(value)) {
      state.ordersFilters.item.delete(value);
    } else {
      state.ordersFilters.item.add(value);
    }
    state.ordersPage = 1;
    syncOrdersExposedFilterFields();
    syncOrdersCascadeItemField();
    renderOrdersCascadeItemMenu();
    renderOrdersPage();
    scheduleDemoFilterLoading("orders");
  });

  el("ordersSelectMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const tab = event.target.closest("[data-orders-item-tab]");
    if (tab) {
      state.activeOrdersItemCategory = tab.dataset.ordersItemTab || "All";
      renderOrdersSelectMenu();
      return;
    }
    const option = event.target.closest(".orders-select-option");
    if (!option || !state.activeOrdersSelect) return;
    const value = option.dataset.value || "";
    if (!value) {
      state.ordersFilters[state.activeOrdersSelect] = new Set();
    } else if (state.ordersFilters[state.activeOrdersSelect].has(value)) {
      state.ordersFilters[state.activeOrdersSelect].delete(value);
    } else {
      state.ordersFilters[state.activeOrdersSelect].add(value);
    }
    state.ordersPage = 1;
    syncOrdersExposedFilterFields();
    renderOrdersSelectMenu();
    renderOrdersPage();
    scheduleDemoFilterLoading("orders");
  });

  el("ordersSelectMenu").addEventListener("input", (event) => {
    const search = event.target.closest("[data-orders-select-search]");
    if (!search) return;
    event.stopPropagation();
    state.ordersSelectQueries[search.dataset.ordersSelectSearch] = search.value;
    renderOrdersSelectMenu();
  });

  el("ordersAdvancedSearchBtn")?.addEventListener("click", () => {
    if (isReadyMadeDraftsOrdersView()) return;
    syncOrdersAdvancedSearchInputs();
    el("ordersAdvancedSearchModal").classList.add("open");
    setOverlay(true);
  });
  el("closeOrdersAdvancedSearchModalBtn").addEventListener("click", closeModals);
  el("applyOrdersAdvancedSearchBtn").addEventListener("click", () => {
    document.querySelectorAll(".orders-advanced-search").forEach((input) => {
      state.ordersAdvancedSearch[input.dataset.ordersSearchField] = input.value.trim();
    });
    state.ordersPage = 1;
    closeModals();
    renderOrdersPage();
    showToast("Order search applied.");
  });
  el("clearOrdersAdvancedSearchBtn").addEventListener("click", () => {
    state.ordersAdvancedSearch = emptyOrdersAdvancedSearch();
    syncOrdersAdvancedSearchInputs();
    state.ordersPage = 1;
    closeModals();
    renderOrdersPage();
  });

  el("ordersAdvancedFiltersBtn").addEventListener("click", () => {
    if (isReadyMadeDraftsOrdersView()) return;
    syncOrdersAdvancedInputs();
    el("ordersAdvancedModal").classList.add("open");
    setOverlay(true);
  });
  el("closeOrdersAdvancedModalBtn").addEventListener("click", closeModals);
  el("applyOrdersFiltersBtn").addEventListener("click", () => {
    state.ordersPage = 1;
    closeModals();
    renderOrdersPage();
    showToast("Order filters applied.");
  });
  el("clearOrdersFiltersBtn").addEventListener("click", () => {
    resetOrdersTableFilters();
    closeModals();
  });

  el("ordersFilterChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-orders-chip-key]");
    if (!chip) return;
    if (chip.dataset.ordersChipKey === "statusDropdown") state.ordersStatusFilter.delete(chip.dataset.ordersChipValue);
    if (chip.dataset.ordersChipKey === "typeToggle") state.ordersTypeUnlocked = false;
    if (chip.dataset.ordersChipKey === "structuredSearch") {
      state.ordersStructuredSearch[chip.dataset.ordersChipValue] = "";
      state.ordersStructuredSearchDraft[chip.dataset.ordersChipValue] = "";
    }
    if (chip.dataset.ordersChipKey === "advancedSearch") state.ordersAdvancedSearch[chip.dataset.ordersChipValue] = "";
    if (chip.dataset.ordersChipKey === "dateFilter") state.ordersDateFilters[chip.dataset.ordersChipValue] = "";
    if (state.ordersFilters[chip.dataset.ordersChipKey]) state.ordersFilters[chip.dataset.ordersChipKey].delete(chip.dataset.ordersChipValue);
    state.ordersPage = 1;
    syncOrdersAdvancedInputs();
    syncOrdersAdvancedSearchInputs();
    syncOrdersStructuredSearchInputs();
    renderOrdersPage();
  });

  document.querySelectorAll("[data-orders-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.ordersView;
      state.ordersViews[view] = !state.ordersViews[view];
      renderOrdersPage();
    });
  });

  el("ordersColumnSettingsBtn").addEventListener("click", () => {
    renderOrdersColumnSettings();
    el("ordersColumnSettingsModal").classList.add("open");
    setOverlay(true);
  });
  el("closeOrdersColumnSettingsBtn").addEventListener("click", closeModals);
  el("doneOrdersColumnsBtn").addEventListener("click", closeModals);
  el("resetOrdersColumnsBtn").addEventListener("click", () => {
    state.ordersColumnOrder = [...defaultOrdersColumnOrder];
    persistOrdersColumnSettings();
    renderOrdersPage();
    renderOrdersColumnSettings();
    showToast("Order columns reset.");
  });
  el("ordersColumnSettingsList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-orders-column-move]");
    if (!button) return;
    moveOrdersColumn(button.dataset.ordersColumnMove, Number(button.dataset.direction));
  });
  el("ordersColumnSettingsList").addEventListener("dragstart", (event) => {
    const row = event.target.closest("[data-orders-column-key]");
    if (!row) return;
    state.draggedOrdersColumn = row.dataset.ordersColumnKey;
    row.classList.add("opacity-50", "ring-2", "ring-primary/30");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", state.draggedOrdersColumn);
  });
  el("ordersColumnSettingsList").addEventListener("dragover", (event) => {
    const row = event.target.closest("[data-orders-column-key]");
    if (!row || !state.draggedOrdersColumn || row.dataset.ordersColumnKey === state.draggedOrdersColumn) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    document.querySelectorAll(".orders-column-row").forEach((item) => item.classList.remove("ring-2", "ring-primary", "bg-secondary"));
    row.classList.add("ring-2", "ring-primary", "bg-secondary");
  });
  el("ordersColumnSettingsList").addEventListener("drop", (event) => {
    const row = event.target.closest("[data-orders-column-key]");
    if (!row) return;
    event.preventDefault();
    dropOrdersColumn(state.draggedOrdersColumn || event.dataTransfer.getData("text/plain"), row.dataset.ordersColumnKey);
    state.draggedOrdersColumn = null;
  });
  el("ordersColumnSettingsList").addEventListener("dragend", () => {
    state.draggedOrdersColumn = null;
    document.querySelectorAll(".orders-column-row").forEach((item) => item.classList.remove("opacity-50", "ring-2", "ring-primary", "ring-primary/30", "bg-secondary"));
  });

  document.querySelectorAll("[data-orders-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ordersType = button.dataset.ordersType;
      state.ordersPage = 1;
      resetOrdersTransientState();
      renderOrdersPage();
    });
  });

  el("ordersPageSizeBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    state.ordersPageSizeOpen = !state.ordersPageSizeOpen;
    el("ordersPageSizeMenu").classList.toggle("hidden", !state.ordersPageSizeOpen);
  });
  el("ordersPageSizeMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-orders-page-size]");
    if (!option) return;
    state.ordersPageSize = Number(option.dataset.ordersPageSize);
    state.ordersPage = 1;
    state.ordersPageSizeOpen = false;
    el("ordersPageSizeMenu").classList.add("hidden");
    renderOrdersPage();
  });
  el("ordersPagination").addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-orders-page-number]");
    const actionButton = event.target.closest("[data-orders-page-action]");
    const totalPages = Math.max(1, Math.ceil(currentOrdersRows().length / state.ordersPageSize));
    if (pageButton) state.ordersPage = Number(pageButton.dataset.ordersPageNumber);
    if (actionButton?.dataset.ordersPageAction === "previous") state.ordersPage = Math.max(1, state.ordersPage - 1);
    if (actionButton?.dataset.ordersPageAction === "next") state.ordersPage = Math.min(totalPages, state.ordersPage + 1);
    renderOrdersPage();
  });

  el("ordersRows").addEventListener("mouseover", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("ordersRows").addEventListener("mousemove", (event) => {
    const swatch = event.target.closest(".fabric-swatch-preview");
    if (swatch) positionFabricSwatchZoom(swatch);
  });
  el("ordersRows").addEventListener("mouseout", (event) => {
    if (event.target.closest(".fabric-swatch-preview")) hideFabricSwatchZoom();
  });

  el("ordersRows").addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-empty-reset='orders']");
    if (resetButton) {
      resetOrdersTableFilters();
      showToast("Order filters reset.");
      return;
    }
    const statusChip = event.target.closest("[data-order-status-chip]");
    if (statusChip) {
      event.preventDefault();
      event.stopPropagation();
      openSingleOrderStatusShelf(statusChip.dataset.orderStatusChip);
      return;
    }

    const customerButton = event.target.closest("[data-order-customer-id]");
    if (customerButton) {
      event.stopPropagation();
      renderCustomerDetail(customerButton.dataset.orderCustomerId);
      return;
    }

    const orderButton = event.target.closest("[data-order-number]");
    if (orderButton) {
      event.stopPropagation();
      renderOrderDetail(orderButton.dataset.orderNumber);
      return;
    }

    const actionButton = event.target.closest("[data-standalone-order-action]");
    if (actionButton) {
      event.stopPropagation();
      const rect = actionButton.getBoundingClientRect();
      const menuWidth = 292;
      const isOpen = state.activeStandaloneOrderActionId === actionButton.dataset.standaloneOrderAction;
      state.activeStandaloneOrderActionId = isOpen ? null : actionButton.dataset.standaloneOrderAction;
      state.activeStandaloneOrderActionPosition = isOpen ? null : {
        left: Math.max(12, Math.min(rect.left, window.innerWidth - menuWidth)),
        top: rect.bottom + 6,
      };
      state.activeStandaloneOrderPrintId = null;
      state.activeStandaloneOrderPrintPosition = null;
      renderOrdersPage();
      return;
    }
    const menuAction = event.target.closest("[data-standalone-order-menu]");
    if (menuAction) {
      event.stopPropagation();
      const action = menuAction.dataset.standaloneOrderMenu;
      const orderId = menuAction.dataset.orderId;
      const order = findStandaloneOrder(orderId);
      if (action === "printMenu") {
        const rect = menuAction.getBoundingClientRect();
        const width = 292;
        const opensLeft = rect.right + width + 8 > window.innerWidth - 12;
        state.activeStandaloneOrderPrintId = state.activeStandaloneOrderPrintId === orderId ? null : orderId;
        state.activeStandaloneOrderPrintPosition =
          state.activeStandaloneOrderPrintId === orderId
            ? {
                left: opensLeft ? Math.max(12, rect.left - width - 8) : rect.right + 8,
                top: Math.max(12, Math.min(rect.top, window.innerHeight - 210)),
              }
            : null;
        renderOrdersPage();
        return;
      }
      state.activeStandaloneOrderActionId = null;
      state.activeStandaloneOrderActionPosition = null;
      state.activeStandaloneOrderPrintId = null;
      state.activeStandaloneOrderPrintPosition = null;
      if (action === "view") {
        renderOrderDetail(orderId);
        return;
      }
      if (action === "remark") {
        setOrderRemarksModal(true, orderId);
        return;
      }
      if (action === "changeStatus") {
        openSingleOrderStatusShelf(orderId);
        return;
      }
      if (action === "copy") {
        if (navigator.clipboard && order) navigator.clipboard.writeText(order.order || order.orderNumber || order.orderName).catch(() => {});
        renderOrdersPage();
        showToast("Order number copied.");
        return;
      }
      if (action === "copyDraft") {
        if (navigator.clipboard && order) navigator.clipboard.writeText(order.orderName || order.order || "").catch(() => {});
        renderOrdersPage();
        showToast("Draft order copied.");
        return;
      }
      if (action === "deleteDraft") {
        deleteReadyMadeDraftOrders([orderId]);
        return;
      }
      if (ordersPrintOptions.some((item) => item.key === action)) {
        const item = ordersPrintOptions.find((entry) => entry.key === action);
        renderOrdersPage();
        showToast(`${item?.label || "Print"} selected.`);
        return;
      }
      renderOrdersPage();
      showToast(`${menuAction.textContent.trim()} selected.`);
    }
    const printAction = event.target.closest("[data-standalone-order-print]");
    if (printAction) {
      event.stopPropagation();
      const item = ordersPrintOptions.find((entry) => entry.key === printAction.dataset.standaloneOrderPrint);
      state.activeStandaloneOrderActionId = null;
      state.activeStandaloneOrderActionPosition = null;
      state.activeStandaloneOrderPrintId = null;
      state.activeStandaloneOrderPrintPosition = null;
      renderOrdersPage();
      showToast(`${item?.label || "Print"} selected.`);
      return;
    }

    if (event.target.closest("input, select, textarea, [data-order-customer-id], [data-order-status-chip], [data-standalone-order-action], [data-standalone-order-menu], [data-standalone-order-print]")) return;
    const orderRow = event.target.closest("[data-order-row]");
    if (orderRow) {
      event.stopPropagation();
      renderOrderDetail(orderRow.dataset.orderRow);
    }
  });

  el("orderDetailSideBackdrop")?.addEventListener("click", () => setOrderDetailSidePanel(false));

  el("backToOrdersBtn").addEventListener("click", () => {
    if (orderDetailSidePanelOpen()) {
      setOrderDetailSidePanel(false);
      return;
    }
    setPage("orders");
  });
  el("orderDetailCreateBtn").addEventListener("click", () => setCreateOrderStopModal(true));
  el("orderDetailActionsBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    el("orderDetailActionsMenu").classList.toggle("open");
    el("orderDetailPrintMenu")?.classList.remove("open");
  });
  el("orderDetailHeaderRemark")?.addEventListener("click", (event) => {
    event.stopPropagation();
    setOrderRemarksModal(true, state.selectedOrderId);
  });
  el("orderDetailActionsMenu").addEventListener("click", async (event) => {
    event.stopPropagation();
    const action = event.target.closest("[data-order-detail-action]");
    if (!action) return;
    const actionKey = action.dataset.orderDetailAction;
    const order = findStandaloneOrder(state.selectedOrderId) || orders.find((item) => item.id === state.selectedOrderId);
    if (actionKey === "printMenu") {
      el("orderDetailPrintMenu")?.classList.toggle("open");
      return;
    }
    el("orderDetailActionsMenu").classList.remove("open");
    el("orderDetailPrintMenu")?.classList.remove("open");
    if (actionKey === "remarks") {
      setOrderRemarksModal(true, state.selectedOrderId);
      return;
    }
    if (actionKey === "changeStatus") {
      setOrderDetailStatusModal(true);
      return;
    }
    if (actionKey === "copy") {
      if (navigator.clipboard && order) await navigator.clipboard.writeText(order.order || order.orderNumber || order.orderName);
      showToast("Order number copied.");
      return;
    }
    if (actionKey === "duplicate") {
      showToast("Duplicate order selected.");
      return;
    }
    if (actionKey === "expressDelivery") {
      showToast("Express delivery selected.");
      return;
    }
    if (actionKey === "issue") {
      setReportIssueModal(true);
      return;
    }
    showToast("Action selected.");
  });
  el("orderDetailPrintMenu")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const printAction = event.target.closest("[data-order-detail-print]");
    if (!printAction) return;
    const item = ordersPrintOptions.find((entry) => entry.key === printAction.dataset.orderDetailPrint);
    el("orderDetailActionsMenu")?.classList.remove("open");
    el("orderDetailPrintMenu")?.classList.remove("open");
    showToast(`${item?.label || "Print"} selected.`);
  });
  el("closeOrderDetailStatusModalBtn")?.addEventListener("click", () => setOrderDetailStatusModal(false));
  el("cancelOrderDetailStatusModalBtn")?.addEventListener("click", () => setOrderDetailStatusModal(false));
  el("confirmOrderDetailStatusModalBtn")?.addEventListener("click", applyOrderDetailStatusUpdate);
  el("orderDetailStatusOptions")?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-order-detail-status-option]");
    if (!option) return;
    const order = state.selectedOrderId ? findStandaloneOrder(state.selectedOrderId) || orders.find((item) => item.id === state.selectedOrderId) : null;
    state.orderDetailStatusDraft = option.dataset.orderDetailStatusOption;
    if (order) renderOrderDetailStatusOptions(order);
  });
  el("orderDetailSummaryCard").addEventListener("click", (event) => {
    const customerButton = event.target.closest("[data-order-detail-customer-id]");
    if (!customerButton) return;
    event.stopPropagation();
    renderCustomerDetail(customerButton.dataset.orderDetailCustomerId);
  });
  el("orderDetailTabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-order-detail-tab]");
    if (!tab) return;
    state.orderDetailTab = tab.dataset.orderDetailTab;
    renderOrderDetailTab();
  });
  el("orderDetailContent").addEventListener("click", (event) => {
    const detailAction = event.target.closest("[data-order-detail-action]");
    if (detailAction?.dataset.orderDetailAction === "remarks") {
      event.stopPropagation();
      setOrderRemarksModal(true, state.selectedOrderId);
      return;
    }

    const fabricButton = event.target.closest("[data-order-detail-fabric]");
    if (fabricButton) {
      event.stopPropagation();
      showToast(`${fabricButton.dataset.orderDetailFabric} selected.`);
      return;
    }

    const customerButton = event.target.closest("[data-order-detail-customer-id]");
    if (customerButton) {
      event.stopPropagation();
      renderCustomerDetail(customerButton.dataset.orderDetailCustomerId);
      return;
    }

    const categoryButton = event.target.closest("[data-order-detail-category]");
    if (categoryButton) {
      const sectionKey = categoryButton.dataset.orderDetailCategory;
      if (state.orderDetailCollapsedSections.has(sectionKey)) {
        state.orderDetailCollapsedSections.delete(sectionKey);
      } else {
        state.orderDetailCollapsedSections.add(sectionKey);
      }
      renderOrderDetailTab();
      return;
    }

    const fitToolButton = event.target.closest("[data-order-detail-fit-tool-section]");
    if (fitToolButton) {
      const sectionKey = fitToolButton.dataset.orderDetailFitToolSection;
      if (state.orderDetailOpenFitTools.has(sectionKey)) {
        state.orderDetailOpenFitTools.delete(sectionKey);
      } else {
        state.orderDetailOpenFitTools.add(sectionKey);
      }
      renderOrderDetailTab();
      return;
    }

    const finishedMeasurementsButton = event.target.closest("[data-order-detail-finished-measurements-toggle]");
    if (finishedMeasurementsButton) {
      state.orderDetailFinishedMeasurementsOpen = !state.orderDetailFinishedMeasurementsOpen;
      renderOrderDetailTab();
      return;
    }

    const designSectionButton = event.target.closest("[data-order-detail-design-section]");
    if (designSectionButton) {
      const sectionKey = designSectionButton.dataset.orderDetailDesignSection;
      if (state.orderDetailOpenDesignSections.has(sectionKey)) {
        state.orderDetailOpenDesignSections.delete(sectionKey);
      } else {
        state.orderDetailOpenDesignSections.add(sectionKey);
      }
      renderOrderDetailTab();
      return;
    }

    const partButton = event.target.closest("[data-order-detail-part]");
    if (partButton) {
      state.orderDetailActivePart = partButton.dataset.orderDetailPart;
      document.querySelectorAll("[data-order-detail-part]").forEach((button) => {
        button.classList.toggle("active", button.dataset.orderDetailPart === state.orderDetailActivePart);
      });
      document.querySelector(`[data-order-detail-part-section="${partButton.dataset.orderDetailPart}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const fitProfileButton = event.target.closest("[data-order-fit-profile-id]");
    if (fitProfileButton) {
      renderFitProfileModal(fitProfileButton.dataset.orderFitProfileId);
      return;
    }
  });
  el("onePageOrderCardModal")?.addEventListener("click", (event) => {
    const closeButton = event.target.closest("#closeOnePageOrderCardModalBtn");
    if (closeButton) {
      setOnePageOrderCardModal(false);
      return;
    }
    const saveRemarksButton = event.target.closest("#saveOnePageOrderRemarksBtn");
    if (saveRemarksButton) {
      const key = String(Number.isInteger(state.activeOnePageOrderCardIndex) ? state.activeOnePageOrderCardIndex : 0);
      state.onePageOrderRemarks[key] = el("onePageOrderRemarksInput")?.value || "";
      localStorage.setItem("relocate-one-page-order-remarks", JSON.stringify(state.onePageOrderRemarks));
      showToast("Remarks saved.");
      return;
    }
    const tabButton = event.target.closest("[data-one-page-order-card-tab]");
    if (tabButton) {
      state.activeOnePageOrderCardTab = tabButton.dataset.onePageOrderCardTab;
      el("onePageOrderCardModal").innerHTML = renderOnePageOrderCardModal();
      return;
    }
    const columnButton = event.target.closest("[data-one-page-order-card-column]");
    if (columnButton) {
      state.activeOnePageOrderCardIndex = Number(columnButton.dataset.onePageOrderCardColumn);
      el("onePageOrderCardModal").innerHTML = renderOnePageOrderCardModal();
    }
  });

  el("companyInfoViewBtn").addEventListener("click", () => {
    state.companyInfoVisible = !state.companyInfoVisible;
    renderCompanyView();
  });

  el("languageBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    el("languageMenu").classList.toggle("open");
  });

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      el("languageMenu").classList.remove("open");
      applyLanguage();
      showToast(state.language === "fr" ? "Français sélectionné." : "English selected.");
    });
  });

  el("customerDetailSideBackdrop")?.addEventListener("click", () => setCustomerDetailSidePanel(false));

  el("backToCustomersBtn").addEventListener("click", () => {
    if (customerDetailSidePanelOpen()) {
      setCustomerDetailSidePanel(false);
      return;
    }
    setPage("overview");
  });

  el("detailEditBtn").addEventListener("click", () => {
    if (state.selectedCustomerId) openCustomer(state.selectedCustomerId, true);
  });

  el("detailCreateOrderBtn").addEventListener("click", () => setCreateOrderStopModal(true));

  document.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTab = button.dataset.detailTab;
      if (!["orders", "fitprofiles", "account"].includes(nextTab)) {
        showToast(`${button.textContent.trim()} coming next.`);
        return;
      }
      state.detailTab = nextTab;
      if (nextTab === "account") {
        const customer = customers.find((item) => item.id === state.selectedCustomerId) || customers[0];
        renderCustomerAccount(customer);
      }
      renderDetailTabs();
      renderPrimaryNavigation();
    });
  });

  el("detailOrderSearch").addEventListener("input", () => {
    state.detailOrdersPage = 1;
    renderDetailOrders();
  });

  el("detailOrdersPagination").addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-detail-orders-page]");
    const actionButton = event.target.closest("[data-detail-orders-page-action]");
    const totalPages = Math.max(1, Math.ceil(detailOrders().length / state.detailOrdersPageSize));
    if (pageButton) state.detailOrdersPage = Number(pageButton.dataset.detailOrdersPage);
    if (actionButton?.dataset.detailOrdersPageAction === "previous") state.detailOrdersPage = Math.max(1, state.detailOrdersPage - 1);
    if (actionButton?.dataset.detailOrdersPageAction === "next") state.detailOrdersPage = Math.min(totalPages, state.detailOrdersPage + 1);
    if (pageButton || actionButton) renderDetailOrders();
  });
  el("detailOrdersPaginationSummary").addEventListener("click", (event) => {
    handleDetailPageSizeMenu(event, "detailOrdersPage", "detailOrdersPageSize", "detailOrdersPageSizeOpen", renderDetailOrders);
  });

  el("detailOrdersPanel").addEventListener("change", (event) => {
    if (event.target.id === "detailSelectAllOrders") {
      const { visibleRows } = paginateDetailRows(detailOrders(), "detailOrdersPage", "detailOrdersPageSize");
      visibleRows.forEach((order) => {
        event.target.checked ? state.selectedDetailOrders.add(order.id) : state.selectedDetailOrders.delete(order.id);
      });
      renderDetailOrders();
      return;
    }
    const rowCheck = event.target.closest(".detail-orders-row-check");
    if (rowCheck) {
      rowCheck.checked ? state.selectedDetailOrders.add(rowCheck.dataset.detailOrderId) : state.selectedDetailOrders.delete(rowCheck.dataset.detailOrderId);
      renderDetailOrders();
    }
  });

  el("detailOrdersBulkStatusBtn").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const menuOpen = el("ordersBulkStatusMenu").classList.contains("open");
    const samePosition =
      state.activeOrdersBulkStatusPosition &&
      Math.abs(state.activeOrdersBulkStatusPosition.left - rect.left) < 1 &&
      Math.abs(state.activeOrdersBulkStatusPosition.top - (rect.bottom + 6)) < 1;
    state.statusUpdateContext = "detail";
    state.activeOrdersStatusPosition = null;
    state.activeOrdersSelect = null;
    state.activeOrdersSelectInstance = null;
    state.activeOrdersSelectPosition = null;
    el("ordersStatusMenu").classList.remove("open");
    renderOrdersSelectMenu();
    state.activeOrdersBulkStatusPosition = menuOpen && samePosition ? null : { left: rect.left, top: rect.bottom + 6, width: rect.width };
    renderOrdersBulkStatusMenu();
  });

  el("detailOrdersBulkApplyBtn").addEventListener("click", () => {
    if (!state.selectedDetailOrders.size) {
      showToast("Select at least one order first.");
      return;
    }
    if (!state.ordersBulkStatus) {
      showToast("Choose an order status first.");
      return;
    }
    state.statusUpdateContext = "detail";
    setOrdersStatusUpdateModal(true);
  });

  el("detailOrdersBulkClearBtn").addEventListener("click", () => {
    state.selectedDetailOrders.clear();
    state.ordersBulkStatus = "";
    state.activeOrdersBulkStatusPosition = null;
    state.statusUpdateContext = "orders";
    renderDetailOrders();
  });

  el("detailFilterBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = el("detailFilterMenu");
    menu.classList.toggle("open");
    el("detailFilterSubmenu").classList.toggle("open", menu.classList.contains("open"));
    renderDetailFilterMenu();
  });

  el("detailFilterMenu").addEventListener("click", (event) => event.stopPropagation());
  el("detailFilterMenu").addEventListener("pointerdown", (event) => event.stopPropagation());

  el("detailFilterCategorySearch").addEventListener("input", (event) => {
    state.detailFilterCategoryQuery = event.target.value;
    renderDetailFilterMenu();
  });

  el("detailFilterOptionSearch").addEventListener("input", (event) => {
    state.detailFilterOptionQuery = event.target.value;
    renderDetailFilterMenu();
  });

  el("detailFilterCategories").addEventListener("pointerover", (event) => {
    const category = event.target.closest("[data-detail-filter-category]");
    if (!category) return;
    state.activeDetailFilterCategory = category.dataset.detailFilterCategory;
    state.detailFilterOptionQuery = "";
    el("detailFilterSubmenu").classList.add("open");
    renderDetailFilterMenu();
  });

  el("detailFilterCategories").addEventListener("click", (event) => {
    const category = event.target.closest("[data-detail-filter-category]");
    if (!category) return;
    state.activeDetailFilterCategory = category.dataset.detailFilterCategory;
    state.detailFilterOptionQuery = "";
    el("detailFilterSubmenu").classList.add("open");
    renderDetailFilterMenu();
  });

  el("detailFilterOptions").addEventListener("click", (event) => {
    const option = event.target.closest("[data-detail-filter-option]");
    if (!option) return;
    const selected = state.detailFilters[state.activeDetailFilterCategory];
    const value = option.dataset.detailFilterOption;
    selected.has(value) ? selected.delete(value) : selected.add(value);
    state.detailOrdersPage = 1;
    renderDetailOrders();
  });

  el("resetDetailFiltersBtn").addEventListener("click", () => {
    state.detailFilters = { item: new Set(), status: new Set(), type: new Set() };
    state.detailFilterCategoryQuery = "";
    state.detailFilterOptionQuery = "";
    state.detailOrdersPage = 1;
    renderDetailOrders();
  });

  el("resetDetailCategoryBtn").addEventListener("click", () => {
    state.detailFilters[state.activeDetailFilterCategory].clear();
    state.detailFilterOptionQuery = "";
    state.detailOrdersPage = 1;
    renderDetailOrders();
  });

  el("detailFilterChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-detail-filter]");
    if (!chip) return;
    state.detailFilters[chip.dataset.detailFilter].delete(chip.dataset.value);
    state.detailOrdersPage = 1;
    renderDetailOrders();
  });

  el("fitProfileNameSearch").addEventListener("input", (event) => {
    state.fitProfileNameQuery = event.target.value;
    state.fitProfilesPage = 1;
    renderFitProfiles();
  });

  el("fitProfilePagination").addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-fit-profile-page]");
    const actionButton = event.target.closest("[data-fit-profile-page-action]");
    const totalPages = Math.max(1, Math.ceil(filteredFitProfiles().length / state.fitProfilesPageSize));
    if (pageButton) state.fitProfilesPage = Number(pageButton.dataset.fitProfilePage);
    if (actionButton?.dataset.fitProfilePageAction === "previous") state.fitProfilesPage = Math.max(1, state.fitProfilesPage - 1);
    if (actionButton?.dataset.fitProfilePageAction === "next") state.fitProfilesPage = Math.min(totalPages, state.fitProfilesPage + 1);
    if (pageButton || actionButton) renderFitProfiles();
  });
  el("fitProfilePaginationSummary").addEventListener("click", (event) => {
    handleDetailPageSizeMenu(event, "fitProfilesPage", "fitProfilesPageSize", "fitProfilesPageSizeOpen", renderFitProfiles);
  });

  el("fitProfileFilterBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = el("fitProfileFilterMenu");
    menu.classList.toggle("open");
    el("fitProfileFilterSubmenu").classList.toggle("open", menu.classList.contains("open"));
    renderFitProfileFilterMenu();
  });

  el("fitProfileFilterMenu").addEventListener("click", (event) => event.stopPropagation());
  el("fitProfileFilterMenu").addEventListener("pointerdown", (event) => event.stopPropagation());

  el("fitProfileFilterCategorySearch").addEventListener("input", (event) => {
    event.stopPropagation();
    state.fitProfileFilterCategoryQuery = event.target.value;
    renderFitProfileFilterMenu();
  });

  el("fitProfileFilterOptionSearch").addEventListener("input", (event) => {
    event.stopPropagation();
    state.fitProfileFilterOptionQuery = event.target.value;
    renderFitProfileFilterMenu();
  });

  el("fitProfileFilterCategories").addEventListener("pointerover", (event) => {
    const category = event.target.closest("[data-fit-filter-category]");
    if (!category) return;
    state.activeFitProfileFilterCategory = category.dataset.fitFilterCategory;
    state.fitProfileFilterOptionQuery = "";
    el("fitProfileFilterSubmenu").classList.add("open");
    renderFitProfileFilterMenu();
  });

  el("fitProfileFilterCategories").addEventListener("click", (event) => {
    event.stopPropagation();
    const category = event.target.closest("[data-fit-filter-category]");
    if (!category) return;
    state.activeFitProfileFilterCategory = category.dataset.fitFilterCategory;
    state.fitProfileFilterOptionQuery = "";
    el("fitProfileFilterSubmenu").classList.add("open");
    renderFitProfileFilterMenu();
  });

  el("fitProfileFilterOptions").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest("[data-fit-filter-option]");
    if (!option) return;
    const selected = state.fitProfileFilters[state.activeFitProfileFilterCategory];
    selected.has(option.dataset.fitFilterOption) ? selected.delete(option.dataset.fitFilterOption) : selected.add(option.dataset.fitFilterOption);
    state.fitProfilesPage = 1;
    renderFitProfiles();
  });

  el("resetFitProfileFiltersBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    state.fitProfileFilters = { status: new Set(), item: new Set(), productLine: new Set() };
    state.fitProfileFilterCategoryQuery = "";
    state.fitProfileFilterOptionQuery = "";
    state.fitProfilesPage = 1;
    renderFitProfiles();
  });

  el("resetFitProfileCategoryBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    state.fitProfileFilters[state.activeFitProfileFilterCategory].clear();
    state.fitProfileFilterOptionQuery = "";
    state.fitProfilesPage = 1;
    renderFitProfiles();
  });

  el("createFitProfileBtn").addEventListener("click", () => {
    state.createFitProfilePackage = "three-piece";
    setCreateFitProfileStartModal(true);
  });

  el("createFitProfileWorkspace").addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-create-fit-mode]");
    if (modeButton) {
      state.createFitProfileMode = modeButton.dataset.createFitMode;
      if (state.createFitProfileMode === "create") state.createFitProfileOrderQuery = "";
      renderCreateFitProfileWorkspace();
      return;
    }

    const orderResultButton = event.target.closest("[data-create-fit-order-result]");
    if (orderResultButton) {
      const order = findStandaloneOrder(orderResultButton.dataset.createFitOrderResult);
      if (order) {
        applyCreateFitProfileOrder(order);
        renderCreateFitProfileWorkspace();
      }
      return;
    }

    const fitToolSelect = event.target.closest("[data-fit-tool-select]");
    if (fitToolSelect) {
      event.stopPropagation();
      openFitToolValueMenu(fitToolSelect);
      return;
    }

    const createFitSelect = event.target.closest("[data-create-fit-select]");
    if (createFitSelect) {
      event.stopPropagation();
      openCreateFitProfileSelect(createFitSelect);
      return;
    }

    const redoStartButton = event.target.closest("#redoCreateFitProfileStartBtn");
    if (redoStartButton) {
      setCreateFitProfileStartModal(true);
      return;
    }

    const backButton = event.target.closest("#backToFitProfilesTableBtn");
    if (backButton) {
      state.creatingFitProfile = false;
      state.editingFitProfileId = null;
      state.copyingFitProfileId = null;
      state.selectedCustomerId = state.createFitProfileCustomerId || state.selectedCustomerId;
      state.detailTab = "fitprofiles";
      renderDetailTabs();
      renderFitProfiles();
      setPage("detail");
      return;
    }

    const levelButton = event.target.closest("[data-create-fit-level]");
    if (levelButton) {
      state.createFitProfileLevel = levelButton.dataset.createFitLevel;
      renderCreateFitProfileWorkspace();
      return;
    }

    const garmentButton = event.target.closest("[data-create-fit-garment]");
    if (garmentButton) {
      state.createFitProfileGarment = garmentButton.dataset.createFitGarment;
      renderCreateFitProfileWorkspace();
      return;
    }

    const garmentJumpButton = event.target.closest("[data-create-fit-jump]");
    if (garmentJumpButton) {
      state.createFitProfileGarment = garmentJumpButton.dataset.createFitJump;
      renderCreateFitProfileWorkspace();
      return;
    }

    const garmentContinueButton = event.target.closest("[data-create-fit-continue]");
    if (garmentContinueButton) {
      state.createFitProfileSavedItems.add(state.createFitProfileGarment);
      state.createFitProfileGarment = garmentContinueButton.dataset.createFitContinue;
      renderCreateFitProfileWorkspace();
      return;
    }

    const garmentFinalSaveButton = event.target.closest("[data-create-fit-save-final]");
    if (garmentFinalSaveButton) {
      state.createFitProfileSavedItems.add(garmentFinalSaveButton.dataset.createFitSaveFinal);
      saveCreateFitProfilePackage();
      return;
    }

    const bottomProfileSaveButton = event.target.closest("[data-fit-profile-save-bottom]");
    if (bottomProfileSaveButton) {
      if (state.copyingFitProfileId) {
        saveCopiedFitProfile();
        return;
      }
      setEditFitProfileSaveModal(true);
      return;
    }

    const sectionToggle = event.target.closest("[data-create-fit-section]");
    if (sectionToggle) {
      const sectionId = sectionToggle.dataset.createFitSection;
      if (state.createFitProfileCollapsedSections.has(sectionId)) {
        state.createFitProfileCollapsedSections.delete(sectionId);
      } else {
        state.createFitProfileCollapsedSections.add(sectionId);
      }
      renderCreateFitProfileWorkspace();
      return;
    }

    const helpButton = event.target.closest("[data-fit-help]");
    if (helpButton) {
      setHelpCenterModal(true, helpCenterArticleForTerm(helpButton.dataset.fitHelp));
      return;
    }

    const resetButton = event.target.closest("#resetCreateFitProfileBtn");
    if (resetButton) {
      if (state.editingFitProfileId) {
        startEditFitProfile(state.editingFitProfileId);
        showToast("FitProfile changes reset.");
        return;
      }
      if (state.copyingFitProfileId) {
        startCopyFitProfile(state.copyingFitProfileId);
        showToast("Copied FitProfile reset.");
        return;
      }
      state.createFitProfileLevel = "standard";
      state.createFitProfilePackage = "three-piece";
      state.createFitProfileGarment = "jacket";
      state.createFitProfileSavedItems = new Set();
      state.createFitProfileSelections = {};
      renderCreateFitProfileWorkspace();
      showToast("FitProfile draft reset.");
      return;
    }

    const finishButton = event.target.closest("#finishCreateFitProfileBtn");
    if (finishButton) {
      state.creatingFitProfile = false;
      state.detailTab = "fitprofiles";
      state.selectedCustomerId = state.createFitProfileCustomerId || state.selectedCustomerId;
      renderDetailTabs();
      renderFitProfiles();
      setPage("detail");
      return;
    }

    const saveButton = event.target.closest("#saveCreateFitProfileBtn");
    if (saveButton) {
      if (state.editingFitProfileId) {
        setEditFitProfileSaveModal(true);
        return;
      }
      if (state.copyingFitProfileId) {
        saveCopiedFitProfile();
        return;
      }
      saveCreateFitProfilePackage();
    }
  });

  el("createFitProfileWorkspace").addEventListener("input", (event) => {
    if (event.target.id === "createFitProfileNameInput") {
      state.createFitProfileSelections[state.createFitProfileGarment] = {
        ...(state.createFitProfileSelections[state.createFitProfileGarment] || {}),
        name: event.target.value,
      };
      return;
    }
    if (event.target.id !== "createFitProfileOrderSearchInput") return;
    state.createFitProfileOrderQuery = event.target.value;
    renderCreateFitProfileWorkspace();
    requestAnimationFrame(() => {
      const input = el("createFitProfileOrderSearchInput");
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    });
  });

  el("createFitProfileSelectMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest(".create-fit-select-option");
    if (!option || !state.activeCreateFitProfileSelect) return;
    const selectedKey = state.activeCreateFitProfileSelect;
    state.createFitProfileSelections[state.createFitProfileGarment] = {
      ...(state.createFitProfileSelections[state.createFitProfileGarment] || {}),
      [selectedKey]: option.dataset.value,
    };
    if (selectedKey === "fit") delete state.createFitProfileSelections[state.createFitProfileGarment].size;
    state.activeCreateFitProfileSelect = null;
    state.activeCreateFitProfileSelectPosition = null;
    renderCreateFitProfileSelectMenu();
    renderCreateFitProfileWorkspace();
  });

  el("fitToolValueMenu").addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest(".fit-tool-value-option");
    if (!option || !state.activeFitToolSelect) return;
    state.createFitProfileToolValues[state.activeFitToolSelect] = option.dataset.value;
    state.activeFitToolSelect = null;
    state.activeFitToolSelectPosition = null;
    state.activeFitToolDirection = null;
    renderFitToolValueMenu();
    renderCreateFitProfileWorkspace();
  });

  el("closeCreateFitProfileStartBtn").addEventListener("click", () => setCreateFitProfileStartModal(false));
  el("cancelCreateFitProfileStartBtn").addEventListener("click", () => setCreateFitProfileStartModal(false));
  el("createFitProfileStartPackageBtn").addEventListener("click", () => {
    const menu = el("createFitProfileStartPackageMenu");
    const isOpen = !menu.classList.contains("hidden");
    if (isOpen) {
      menu.classList.add("hidden");
      el("createFitProfileStartPackageBtn").setAttribute("aria-expanded", "false");
      return;
    }
    menu.classList.remove("hidden");
    positionCreateFitProfileStartPackageMenu();
    el("createFitProfileStartPackageBtn").setAttribute("aria-expanded", "true");
  });
  el("createFitProfileStartPackageMenu").addEventListener("click", (event) => {
    const packageButton = event.target.closest("[data-create-start-package]");
    if (!packageButton) return;
    state.createFitProfilePackage = packageButton.dataset.createStartPackage;
    syncCreateFitProfileStartPackage(state.createFitProfilePackage);
    el("createFitProfileStartPackageMenu").classList.add("hidden");
    el("createFitProfileStartPackageBtn").setAttribute("aria-expanded", "false");
  });
  el("beginCreateFitProfileBtn").addEventListener("click", () => {
    startCreateFitProfile(el("createFitProfileStartPackage").value);
  });

  document.querySelectorAll(".dark-mode-toggle").forEach((toggle) => {
    toggle.addEventListener("change", (event) => {
      state.mode = event.target.checked ? "dark" : "light";
      applyTheme();
    });
  });

  document.querySelectorAll(".account-settings-action").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNavPopout = null;
      state.activeNavSubpopout = null;
      renderNavPopouts();
      setAccountSettingsModal(true, "account");
    });
  });
  document.querySelectorAll(".account-password-action").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNavPopout = null;
      state.activeNavSubpopout = null;
      renderNavPopouts();
      openAccountPasswordPanel();
    });
  });

  document.querySelectorAll(".report-issue-action").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNavPopout = null;
      state.activeNavSubpopout = null;
      renderNavPopouts();
      setReportIssueModal(true);
    });
  });

  el("reportIssueAreaBtn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = el("reportIssueAreaMenu");
    const isOpen = menu?.classList.toggle("open");
    el("reportIssueAreaBtn")?.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  el("reportIssueAreaMenu")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-report-area]");
    if (!button) return;
    state.reportIssueArea = button.dataset.reportArea;
    el("reportIssueAreaMenu")?.classList.remove("open");
    el("reportIssueAreaBtn")?.setAttribute("aria-expanded", "false");
    renderReportIssueModal();
  });

  document.querySelectorAll("[data-report-priority]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportIssuePriority = button.dataset.reportPriority;
      renderReportIssueModal();
    });
  });

  el("reportIssueDescriptionInput")?.addEventListener("input", renderReportIssueModal);
  el("reportIssueUploadBtn")?.addEventListener("click", () => el("reportIssueFileInput")?.click());
  el("reportIssueFileInput")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    setText("reportIssueFileLabel", file ? file.name : "Optional - JPG, PNG or MP4");
  });
  el("closeReportIssueModalBtn")?.addEventListener("click", () => setReportIssueModal(false));
  el("cancelReportIssueBtn")?.addEventListener("click", () => setReportIssueModal(false));
  el("reportIssueForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (el("submitReportIssueBtn")?.disabled) return;
    setReportIssueModal(false);
    showToast("Issue report ready to send.");
  });

  document.querySelectorAll(".change-theme-action").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNavPopout = null;
      renderNavPopouts();
      setThemeModal(true);
    });
  });

  document.querySelectorAll(".font-option").forEach((button) => {
    button.addEventListener("click", () => {
      state.font = button.dataset.fontOption;
      applyTheme();
      showToast(`${settingsFontLabels[state.font] || "IBM Plex Sans"} font applied.`);
    });
  });
  document.querySelectorAll(".switch-store-action").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.activeNavPopout = null;
      state.activeNavSubpopout = null;
      renderNavPopouts();
      setStoreSwitchModal(true);
    });
  });

  el("storeSwitchOptions")?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-store-option]");
    if (!option) return;
    state.selectedStoreId = option.dataset.storeOption;
    renderStoreSwitchModal();
  });
  el("closeStoreSwitchModalBtn")?.addEventListener("click", () => setStoreSwitchModal(false));
  el("cancelStoreSwitchModalBtn")?.addEventListener("click", () => setStoreSwitchModal(false));
  el("confirmStoreSwitchModalBtn")?.addEventListener("click", () => {
    const selected = selectedStoreOption();
    state.selectedStoreId = selected.id;
    localStorage.setItem("relocate-selected-store-id", selected.id);
    setStoreSwitchModal(false);
    showToast(`${selected.label} selected.`);
  });

  el("closeAccountSettingsModalBtn").addEventListener("click", () => setAccountSettingsModal(false));
  document.querySelectorAll("[data-account-settings-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      closeAccountSettingsSelects();
      state.accountSettingsTab = button.dataset.accountSettingsTab;
      renderAccountSettingsModal();
    });
  });
  document.querySelectorAll("[data-settings-select-trigger]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const selectKey = button.dataset.settingsSelectTrigger;
      state.accountSettingsSelect = state.accountSettingsSelect === selectKey ? null : selectKey;
      renderAccountSettingsSelects();
    });
  });
  document.querySelectorAll("[data-settings-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.theme = button.dataset.settingsTheme;
      closeAccountSettingsSelects();
      applyTheme();
      showToast(`${settingsThemeLabels[state.theme]} theme applied.`);
    });
  });
  document.querySelectorAll("[data-settings-font]").forEach((button) => {
    button.addEventListener("click", () => {
      state.font = button.dataset.settingsFont;
      closeAccountSettingsSelects();
      applyTheme();
      showToast(`${settingsFontLabels[state.font]} font applied.`);
    });
  });
  document.querySelectorAll("[data-settings-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.settingsMode;
      closeAccountSettingsSelects();
      applyTheme();
      showToast(`${settingsModeLabels[state.mode]} mode applied.`);
    });
  });
  document.querySelectorAll("[data-settings-density]").forEach((button) => {
    button.addEventListener("click", () => {
      state.interfaceDensity = button.dataset.settingsDensity;
      applyTheme();
      showToast(`${settingsDensityLabels[state.interfaceDensity]} interface enabled.`);
    });
  });
  el("tokenInspectorToggleBtn")?.addEventListener("click", () => {
    setTokenInspectorEnabled(!state.tokenInspectorEnabled);
    showToast(state.tokenInspectorEnabled ? "Token inspector enabled." : "Token inspector disabled.");
  });
  el("demoSlowSpeedSlider")?.addEventListener("input", (event) => {
    state.demoSlowSpeed = Math.min(8, Math.max(1, Number(event.target.value) || 3));
    applyDemoSlowMode();
  });
  el("demoSlowSpeedSlider")?.addEventListener("change", () => {
    showToast(`Demo speed set to ${state.demoSlowSpeed} / 8.`);
  });
  document.addEventListener("input", handleDemoFilterInteraction);
  document.addEventListener("change", handleDemoFilterInteraction);
  document.addEventListener("click", handleDemoFilterInteraction);
  el("accountAdjustPasswordBtn").addEventListener("click", () => {
    openAccountPasswordPanel();
  });
  el("accountCancelPasswordBtn").addEventListener("click", () => {
    resetAccountPasswordPanel();
  });
  el("accountSavePasswordBtn").addEventListener("click", () => {
    const currentPassword = el("accountCurrentPasswordInput").value.trim();
    const newPassword = el("accountNewPasswordInput").value.trim();
    const confirmPassword = el("accountConfirmPasswordInput").value.trim();

    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast("Complete all password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("New passwords do not match.");
      return;
    }

    resetAccountPasswordPanel();
    showToast("Password updated.");
  });
  el("accountSettingsLogoutBtn").addEventListener("click", () => {
    closeAccountSettingsSelects();
    setLogoutConfirmModal(true);
  });

  document.querySelectorAll(".logout-action").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNavPopout = null;
      state.activeNavSubpopout = null;
      renderNavPopouts();
      setLogoutConfirmModal(true);
    });
  });
  el("cancelLogoutBtn")?.addEventListener("click", () => setLogoutConfirmModal(false));
  el("confirmLogoutBtn")?.addEventListener("click", () => setLoggedIn(false));
  el("loginCard")?.addEventListener("click", (event) => {
    const flowButton = event.target.closest("[data-login-flow]");
    if (flowButton) {
      setLoginFlow(flowButton.dataset.loginFlow);
      return;
    }
    if (event.target.closest("#forgotPasswordBtn")) {
      setLoginFlow("forgot");
      return;
    }
    if (event.target.closest("#resendResetLinkBtn")) {
      if (resetCooldownRemainingSeconds() > 0) return;
      setLoginFlow("newPassword");
    }
  });
  el("loginCard")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.id === "loginForm") {
      state.loginUsername = el("loginUserInput")?.value.trim() || "";
      state.loginPassword = el("loginPasswordInput")?.value || "";
      if (state.loginUsername.includes("!")) {
        state.loginError = "Incorrect username or password. Please try again.";
        renderLoginCard();
        requestAnimationFrame(() => el("loginUserInput")?.focus());
        return;
      }
      state.loginError = "";
      setLoggedIn(true);
      showToast("Logged in.");
      return;
    }
    if (event.target.id === "resetRequestForm") {
      startResetCooldown();
      setLoginFlow("inbox");
      showToast("Reset link sent.");
      return;
    }
    if (event.target.id === "newPasswordForm") {
      const password = el("newPasswordInput")?.value || "";
      const confirm = el("confirmNewPasswordInput")?.value || "";
      const strength = passwordStrength(password);
      if (strength.score <= 1) {
        showToast("Choose a password stronger than weak.");
        return;
      }
      if (password !== confirm) {
        showToast("Passwords do not match.");
        return;
      }
      setLoginFlow("passwordSet");
    }
  });
  el("loginCard")?.addEventListener("input", (event) => {
    if (event.target.closest("#loginUserInput, #loginPasswordInput")) {
      state.loginUsername = el("loginUserInput")?.value || state.loginUsername;
      state.loginPassword = el("loginPasswordInput")?.value || state.loginPassword;
      if (state.loginError) {
        state.loginError = "";
        renderLoginCard();
        requestAnimationFrame(() => {
          const nextTarget = event.target.id === "loginPasswordInput" ? el("loginPasswordInput") : el("loginUserInput");
          nextTarget?.focus();
          const valueLength = nextTarget?.value.length || 0;
          nextTarget?.setSelectionRange(valueLength, valueLength);
        });
      }
      return;
    }
    if (event.target.closest("#newPasswordInput, #confirmNewPasswordInput")) {
      renderLoginCard();
      requestAnimationFrame(() => {
        const nextTarget = event.target.id === "confirmNewPasswordInput" ? el("confirmNewPasswordInput") : el("newPasswordInput");
        nextTarget?.focus();
        const valueLength = nextTarget?.value.length || 0;
        nextTarget?.setSelectionRange(valueLength, valueLength);
      });
    }
  });

  el("closeThemeModalBtn").addEventListener("click", () => setThemeModal(false));
  el("closeCheatCodesModalBtn").addEventListener("click", () => setCheatCodesModal(false));
  el("closeGlobalSearchModalBtn").addEventListener("click", () => setGlobalSearchModal(false));
  el("closeHelpCenterModalBtn")?.addEventListener("click", () => setHelpCenterModal(false));
  document.querySelectorAll("[data-tool-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavoriteTool(button.dataset.toolFavorite));
  });
  el("helpCenterSearchInput")?.addEventListener("input", (event) => {
    state.helpCenterSearch = event.target.value;
    renderHelpCenter();
  });
  el("helpCenterModal")?.addEventListener("click", (event) => {
    const homeButton = event.target.closest("[data-help-home]");
    if (homeButton) {
      state.activeHelpChapterId = "";
      state.activeHelpArticleId = "";
      state.helpCenterSearch = "";
      renderHelpCenter();
      return;
    }
    const articleButton = event.target.closest("[data-help-article]");
    if (articleButton) {
      state.activeHelpArticleId = articleButton.dataset.helpArticle;
      state.activeHelpChapterId = helpCenterChapterForArticle(state.activeHelpArticleId).id;
      state.helpCenterSearch = "";
      renderHelpCenter();
      return;
    }
    const chapterButton = event.target.closest("[data-help-chapter]");
    if (chapterButton) {
      state.activeHelpChapterId = chapterButton.dataset.helpChapter;
      state.activeHelpArticleId = "";
      state.helpCenterSearch = "";
      renderHelpCenter();
      return;
    }
    const categoryButton = event.target.closest("[data-help-category]");
    if (categoryButton) {
      const firstArticle = helpCenterChapterArticles(state.activeHelpChapterId).find((article) => article.category === categoryButton.dataset.helpCategory) || helpCenterArticlesList().find((article) => article.category === categoryButton.dataset.helpCategory);
      if (firstArticle) {
        state.activeHelpArticleId = firstArticle.id;
        state.activeHelpChapterId = helpCenterChapterForArticle(firstArticle.id, firstArticle).id;
        state.helpCenterSearch = "";
        renderHelpCenter();
      }
    }
  });
  el("helpCenterModal")?.addEventListener("input", (event) => {
    if (!event.target.matches("[data-help-browse-search]")) return;
    state.helpCenterSearch = event.target.value;
    state.activeHelpArticleId = "";
    renderHelpCenter();
    requestAnimationFrame(() => {
      const searchInput = el("helpCenterSearchInput");
      searchInput?.focus({ preventScroll: true });
      searchInput?.setSelectionRange(state.helpCenterSearch.length, state.helpCenterSearch.length);
    });
  });
  el("globalSearchModalInput").addEventListener("input", (event) => {
    state.globalSearchQuery = event.target.value;
    renderGlobalSearch();
  });
  el("globalSearchResults").addEventListener("click", (event) => {
    const result = event.target.closest("[data-result-type]");
    if (!result) return;
    activateSearchResult(result.dataset.resultType, result.dataset.resultId);
  });
  el("closeFitProfileModalBtn").addEventListener("click", () => setFitProfileModal(false));
  el("closeFitProfileHelpBtn").addEventListener("click", () => setFitProfileHelpModal(false));
  el("previousFitProfileBtn").addEventListener("click", () => navigateFitProfile(-1));
  el("nextFitProfileBtn").addEventListener("click", () => navigateFitProfile(1));
  el("toggleFitProfileHistoryBtn").addEventListener("click", () => {
    state.fitProfileHistoryVisible = !state.fitProfileHistoryVisible;
    renderFitProfileModal(state.activeFitProfileId || fitProfiles[0].id);
  });
  el("printFitProfileBtn").addEventListener("click", () => showToast("FitProfile print view ready."));
  el("copyFitProfileBtn").addEventListener("click", () => startCopyFitProfile(state.activeFitProfileId || fitProfiles[0].id));
  el("editFitProfileBtn").addEventListener("click", () => startEditFitProfile(state.activeFitProfileId || fitProfiles[0].id));
  el("closeEditFitProfileSaveModalBtn").addEventListener("click", () => setEditFitProfileSaveModal(false));
  el("cancelEditFitProfileSaveModalBtn").addEventListener("click", () => setEditFitProfileSaveModal(false));
  el("closeFitProfileNameModalBtn").addEventListener("click", () => setFitProfileNameModal(false));
  el("cancelFitProfileNameModalBtn").addEventListener("click", () => setFitProfileNameModal(false));
  el("saveFitProfileNameBtn").addEventListener("click", saveFitProfileName);
  el("fitProfileNameInput").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    saveFitProfileName();
  });
  el("editFitProfileSaveOptions").addEventListener("click", (event) => {
    const choiceButton = event.target.closest("[data-edit-fit-save-choice]");
    if (!choiceButton) return;
    state.editFitProfileSaveChoice = choiceButton.dataset.editFitSaveChoice;
    renderEditFitProfileSaveChoice();
    if (state.editFitProfileSaveChoice === "create") {
      requestAnimationFrame(() => el("editFitProfileNewNameInput").focus());
    }
  });
  el("confirmEditFitProfileSaveBtn").addEventListener("click", () => {
    if (state.editFitProfileSaveChoice === "override") {
      overrideEditedFitProfile();
      return;
    }
    createNewFromEditedFitProfile();
  });

  document.querySelectorAll(".theme-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.theme = card.dataset.themeOption;
      applyTheme();
      showToast(`${card.textContent.trim().split(/\s+/)[0]} theme applied.`);
    });
  });

  el("addCustomerBtn").addEventListener("click", () => {
    clearCustomerForm();
    setCustomerModal(true);
  });

  el("closeCustomerModalBtn").addEventListener("click", () => setCustomerModal(false));
  el("deleteCustomerBtn")?.addEventListener("click", () => {
    if (state.editingId) requestDeleteCustomer(state.editingId);
  });
  el("closeDeleteCustomerConfirmBtn")?.addEventListener("click", () => setDeleteCustomerConfirmModal(false));
  el("cancelDeleteCustomerConfirmBtn")?.addEventListener("click", () => setDeleteCustomerConfirmModal(false));
  el("confirmDeleteCustomerBtn")?.addEventListener("click", confirmDeleteCustomer);
  el("overlay").addEventListener("click", closeModals);

  el("addHomeAddressBtn").addEventListener("click", () => {
    state.homeFieldsVisible = true;
    renderOptionalSections();
  });

  el("addCompanyBtn").addEventListener("click", () => {
    state.companyFieldsVisible = true;
    renderOptionalSections();
  });

  el("customerRows").addEventListener("click", (event) => {
    const actionsButton = event.target.closest(".actions-btn");
    if (actionsButton) {
      const rect = actionsButton.getBoundingClientRect();
      const isOpen = state.activeMenuId === actionsButton.dataset.id;
      state.activeMenuId = isOpen ? null : actionsButton.dataset.id;
      state.activeMenuPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6 };
      renderRows();
      return;
    }

    const menuAction = event.target.closest(".menu-action");
    if (menuAction) {
      const customer = customers.find((item) => item.id === menuAction.dataset.id);
      if (!customer) return;
      state.activeMenuId = null;
      state.activeMenuPosition = null;
      if (menuAction.dataset.action === "view") renderCustomerDetail(customer.id);
      if (menuAction.dataset.action === "edit") openCustomer(customer.id, true);
      if (menuAction.dataset.action === "delete") {
        requestDeleteCustomer(customer.id);
        return;
      }
      if (menuAction.dataset.action === "fit") {
        renderCustomerDetail(customer.id);
        state.detailTab = "fitprofiles";
        state.createFitProfilePackage = "three-piece";
        renderDetailTabs();
        setCreateFitProfileStartModal(true);
      }
      if (menuAction.dataset.action === "order") setCreateOrderStopModal(true);
      renderRows();
      return;
    }

    const openButton = event.target.closest(".open-customer");
    if (openButton) renderCustomerDetail(openButton.dataset.id);
  });

  el("customerMobileCards").addEventListener("click", (event) => {
    const menuAction = event.target.closest(".menu-action");
    if (menuAction) {
      const customer = customers.find((item) => item.id === menuAction.dataset.id);
      if (!customer) return;
      if (menuAction.dataset.action === "view") renderCustomerDetail(customer.id);
      if (menuAction.dataset.action === "edit") openCustomer(customer.id, true);
      if (menuAction.dataset.action === "delete") {
        requestDeleteCustomer(customer.id);
        return;
      }
      if (menuAction.dataset.action === "fit") {
        renderCustomerDetail(customer.id);
        state.detailTab = "fitprofiles";
        state.createFitProfilePackage = "three-piece";
        renderDetailTabs();
        setCreateFitProfileStartModal(true);
      }
      if (menuAction.dataset.action === "order") setCreateOrderStopModal(true);
      renderRows();
      return;
    }

    const openButton = event.target.closest(".open-customer");
    if (openButton) renderCustomerDetail(openButton.dataset.id);
  });

  el("dashboardRecentCustomers").addEventListener("click", (event) => {
    const openButton = event.target.closest(".open-customer");
    if (openButton) renderCustomerDetail(openButton.dataset.id);
  });

  el("dashboardAttentionRows").addEventListener("click", (event) => {
    const customerButton = event.target.closest("[data-order-customer-id]");
    if (customerButton) {
      renderCustomerDetail(customerButton.dataset.orderCustomerId);
      return;
    }
    const orderButton = event.target.closest("[data-order-number]");
    if (orderButton) renderOrderDetail(orderButton.dataset.orderNumber);
  });

  el("detailOrderRows").addEventListener("click", (event) => {
    const fitProfileButton = event.target.closest("[data-fit-profile-id]");
    if (fitProfileButton) {
      event.stopPropagation();
      renderFitProfileModal(fitProfileButton.dataset.fitProfileId);
      return;
    }

    const orderNumberButton = event.target.closest("[data-order-number]");
    if (orderNumberButton) {
      event.stopPropagation();
      renderOrderDetail(orderNumberButton.dataset.orderNumber);
      return;
    }

    const openOrderButton = event.target.closest(".open-order-detail");
    if (openOrderButton) {
      renderOrderDetail(openOrderButton.dataset.orderId);
      return;
    }

    const actionButton = event.target.closest(".order-action-btn");
    if (actionButton) {
      const rect = actionButton.getBoundingClientRect();
      const isOpen = state.activeOrderActionId === actionButton.dataset.orderActionId;
      state.activeOrderActionId = isOpen ? null : actionButton.dataset.orderActionId;
      state.activeOrderActionPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6 };
      renderDetailOrders();
      return;
    }

    const menuAction = event.target.closest(".order-menu-action");
    if (!menuAction) {
      const detailOrderRow = event.target.closest("[data-detail-order-row]");
      if (detailOrderRow && !event.target.closest("input, button, a, [role='button']")) {
        renderOrderDetail(detailOrderRow.dataset.detailOrderRow);
      }
      return;
    }
    state.activeOrderActionId = null;
    state.activeOrderActionPosition = null;
    if (menuAction.dataset.orderAction === "view") showToast(`Viewing ${menuAction.dataset.orderId}.`);
    if (menuAction.dataset.orderAction === "print") showToast(`Print ready for ${menuAction.dataset.orderId}.`);
    if (menuAction.dataset.orderAction === "edit") showToast(`Editing ${menuAction.dataset.orderId}.`);
    renderDetailOrders();
  });

  el("fitProfileRows").addEventListener("click", (event) => {
    const actionButton = event.target.closest(".fit-profile-action-btn");
    if (actionButton) {
      event.stopPropagation();
      const rect = actionButton.getBoundingClientRect();
      const isOpen = state.activeFitProfileActionId === actionButton.dataset.fitActionId;
      state.activeFitProfileActionId = isOpen ? null : actionButton.dataset.fitActionId;
      state.activeFitProfileActionPosition = isOpen ? null : { left: rect.left, top: rect.bottom + 6 };
      renderFitProfiles();
      return;
    }

    const menuAction = event.target.closest(".fit-profile-menu-action");
    if (menuAction) {
      event.stopPropagation();
      const profile = fitProfiles.find((item) => item.id === menuAction.dataset.fitProfileId);
      state.activeFitProfileActionId = null;
      state.activeFitProfileActionPosition = null;
      if (!profile) return;
      if (menuAction.dataset.fitAction === "view") renderFitProfileModal(profile.id);
      if (menuAction.dataset.fitAction === "edit") startEditFitProfile(profile.id);
      if (menuAction.dataset.fitAction === "copy") {
        startCopyFitProfile(profile.id);
        return;
      }
      if (menuAction.dataset.fitAction === "rename") {
        renderFitProfiles();
        setFitProfileNameModal(true, profile.id);
        return;
      }
      if (menuAction.dataset.fitAction === "print") showToast(`Print ready for ${profile.label}.`);
      if (menuAction.dataset.fitAction === "toggle") {
        profile.status = profile.status === "Active" ? "Inactive" : "Active";
        showToast(`${profile.label} is now ${profile.status.toLowerCase()}.`);
      }
      if (menuAction.dataset.fitAction === "delete") {
        const index = fitProfiles.findIndex((item) => item.id === profile.id);
        if (index >= 0) fitProfiles.splice(index, 1);
        showAlert("FitProfile deleted", `${profile.label} has been removed.`);
      }
      renderFitProfiles();
      return;
    }

    const opener = event.target.closest("[data-fit-profile-id]");
    if (!opener) return;
    renderFitProfileModal(opener.dataset.fitProfileId);
  });

  el("invoicesPage")?.addEventListener("click", (event) => {
    const selectAll = event.target.closest("#selectAllInvoices");
    if (selectAll) {
      const rows = filteredInvoices();
      const start = (state.invoicePage - 1) * state.invoicePageSize;
      rows.slice(start, start + state.invoicePageSize).forEach((invoice) => {
        if (selectAll.checked) state.selectedInvoices.add(invoice.number);
        else state.selectedInvoices.delete(invoice.number);
      });
      renderInvoicesPage();
      return;
    }

    const rowCheck = event.target.closest(".invoice-row-check");
    if (rowCheck) {
      event.stopPropagation();
      if (rowCheck.checked) state.selectedInvoices.add(rowCheck.dataset.invoiceNumber);
      else state.selectedInvoices.delete(rowCheck.dataset.invoiceNumber);
      renderInvoicesPage();
      return;
    }

    const bulkDownload = event.target.closest("#invoiceBulkDownloadBtn");
    if (bulkDownload) {
      const count = state.selectedInvoices.size;
      showToast(count ? `Download ready for ${count} selected invoice${count === 1 ? "" : "s"}.` : "Select invoices to download.");
      return;
    }

    const bulkClear = event.target.closest("#invoiceBulkClearBtn");
    if (bulkClear) {
      state.selectedInvoices.clear();
      renderInvoicesPage();
      return;
    }

    const pageButton = event.target.closest("[data-invoice-page]");
    if (pageButton) {
      state.invoicePage = Number(pageButton.dataset.invoicePage);
      renderInvoicesPage();
      return;
    }

    const pageAction = event.target.closest("[data-invoice-page-action]");
    if (pageAction) {
      const totalPages = Math.max(1, Math.ceil(filteredInvoices().length / state.invoicePageSize));
      state.invoicePage = pageAction.dataset.invoicePageAction === "next" ? Math.min(totalPages, state.invoicePage + 1) : Math.max(1, state.invoicePage - 1);
      renderInvoicesPage();
      return;
    }

    const downloadButton = event.target.closest("[data-invoice-download]");
    if (downloadButton) {
      event.stopPropagation();
      showToast(`Invoice ${downloadButton.dataset.invoiceDownload} download ready.`);
      return;
    }

    const viewButton = event.target.closest("[data-invoice-view]");
    if (viewButton) {
      setInvoiceViewModal(true, viewButton.dataset.invoiceView);
      return;
    }

    const row = event.target.closest("[data-invoice-row]");
    if (row) setInvoiceViewModal(true, row.dataset.invoiceRow);
  });

  el("downloadsPasswordForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = el("downloadsPasswordInput")?.value.trim() || "";
    if (password.toUpperCase() === "FORM") {
      state.downloadsUnlocked = true;
      state.downloadsPasswordError = false;
      el("downloadsPasswordInput").value = "";
      renderDownloadsPage();
      return;
    }
    state.downloadsPasswordError = true;
    renderDownloadsPage();
  });

  el("downloadsLockBtn")?.addEventListener("click", () => {
    state.downloadsUnlocked = false;
    state.downloadsPasswordError = false;
    state.orderFormView = "library";
    renderDownloadsPage();
  });

  el("createOrderFormBtn")?.addEventListener("click", () => setOrderFormStartModal(true));
  document.querySelectorAll("[data-legacy-back]").forEach((button) => {
    button.addEventListener("click", () => {
      setPage("home");
      setCreateOrderFlowModal(true);
    });
  });
  document.querySelectorAll("[data-legacy-home]").forEach((button) => {
    button.addEventListener("click", () => setPage("home"));
  });
  el("closeOrderFormStartBtn")?.addEventListener("click", () => setOrderFormStartModal(false));
  el("cancelOrderFormStartBtn")?.addEventListener("click", () => setOrderFormStartModal(false));
  el("beginOrderFormBtn")?.addEventListener("click", beginOrderFormBuilder);
  el("orderFormStartModal")?.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-order-form-start-category]");
    if (categoryButton) {
      event.stopPropagation();
      state.orderFormStartCategory = categoryButton.dataset.orderFormStartCategory;
      state.orderFormStartSearch = "";
      renderOrderFormStartModal();
      return;
    }

    const itemButton = event.target.closest("[data-order-form-start-item]");
    if (!itemButton) return;
    event.stopPropagation();
    setOrderFormStartItem(itemButton.dataset.orderFormStartItem);
  });
  el("orderFormStartSearchInput")?.addEventListener("input", (event) => {
    state.orderFormStartSearch = event.target.value;
    renderOrderFormStartModal();
    requestAnimationFrame(() => {
      const input = el("orderFormStartSearchInput");
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    });
  });
  el("closeOrderFormDesignOptionsBtn")?.addEventListener("click", () => setOrderFormDesignOptionsModal(false));
  el("doneOrderFormDesignOptionsBtn")?.addEventListener("click", () => setOrderFormDesignOptionsModal(false));
  el("backOrderFormBuilderBtn")?.addEventListener("click", closeOrderFormBuilder);
  el("saveOrderFormBuilderBtn")?.addEventListener("click", saveOrderFormDraft);
  el("orderFormSearchInput")?.addEventListener("input", (event) => {
    state.orderFormSearchQuery = event.target.value;
    renderOrderFormLibrary();
  });

  ["orderFormNameInput", "orderFormItemSelect"].forEach((inputId) => {
    el(inputId)?.addEventListener("input", (event) => {
      const draft = state.orderFormDraft;
      if (!draft) return;
      if (inputId === "orderFormNameInput") draft.name = event.target.value;
      if (inputId === "orderFormItemSelect") {
        draft.item = event.target.value;
        const recommendedParts = includedPartsForItem(draft.item);
        draft.parts = recommendedParts.length ? recommendedParts : draft.parts;
        recommendedParts.forEach((partId) => {
          if (!draft.designOptions[partId]) draft.designOptions[partId] = defaultOrderFormOptions(partId);
          draft.partFits = draft.partFits || {};
          if (!draft.partFits[partId]) draft.partFits[partId] = draft.fit || "Slim";
        });
        state.activeOrderFormPart = draft.parts[0] || "jacket";
      }
      renderOrderFormBuilder();
    });
  });

  el("downloadsPage")?.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-order-form-action]");
    if (actionButton) {
      const form = orderForms.find((item) => item.id === actionButton.dataset.orderFormId);
      if (!form) return;
      if (actionButton.dataset.orderFormAction === "edit") {
        openOrderFormBuilder(form.id);
        return;
      }
      if (actionButton.dataset.orderFormAction === "copy") {
        copyOrderFormBuilder(form.id);
        return;
      }
      if (actionButton.dataset.orderFormAction === "preview") {
        showToast(`${form.name} preview ready.`);
        return;
      }
      showToast(`${form.name} download ready.`);
      return;
    }

    const sectionToggle = event.target.closest("[data-order-form-section-toggle]");
    if (sectionToggle && state.orderFormDraft) {
      const section = sectionToggle.dataset.orderFormSectionToggle;
      const partId = sectionToggle.dataset.orderFormSectionPart;
      state.orderFormDraft.sectionVisibility = state.orderFormDraft.sectionVisibility || {};
      const key = orderFormSectionKey(section, partId);
      state.orderFormDraft.sectionVisibility[key] = !isOrderFormSectionVisible(state.orderFormDraft, section, partId);
      renderOrderFormBuilder();
      return;
    }

    const designEdit = event.target.closest("[data-order-form-design-edit]");
    if (designEdit) {
      setOrderFormDesignOptionsModal(true, designEdit.dataset.orderFormDesignEdit);
      return;
    }

    const valuesMenuButton = event.target.closest("[data-order-form-design-values-menu]");
    if (valuesMenuButton && state.orderFormDraft && state.orderFormDesignModalPart) {
      const index = Number(valuesMenuButton.dataset.orderFormDesignValuesMenu);
      state.activeOrderFormDesignValueIndex = state.activeOrderFormDesignValueIndex === index ? null : index;
      renderOrderFormDesignOptionsModal();
      return;
    }

    const modalBulkButton = event.target.closest("[data-order-form-design-modal-bulk]");
    if (modalBulkButton && state.orderFormDraft && state.orderFormDesignModalPart) {
      const options = state.orderFormDraft.designOptions[state.orderFormDesignModalPart] || [];
      const enabled = modalBulkButton.dataset.orderFormDesignModalBulk === "enable";
      options.forEach((option) => {
        option.enabled = enabled;
        option.values = (option.values || defaultOrderFormOptionValues(option.name)).map((value) => ({
          ...(typeof value === "string" ? { label: value } : value),
          enabled,
        }));
      });
      renderOrderFormDesignOptionsModal();
      renderOrderFormBuilder();
      return;
    }

    const button = event.target.closest("[data-download-file]");
    if (!button) return;
    showToast(`${button.dataset.downloadFile} download ready.`);
  });

  el("downloadsPage")?.addEventListener("change", (event) => {
    const partToggle = event.target.closest("[data-order-form-part-toggle]");
    if (partToggle && state.orderFormDraft) {
      const partId = partToggle.dataset.orderFormPartToggle;
      if (partToggle.checked && !state.orderFormDraft.parts.includes(partId)) {
        state.orderFormDraft.parts.push(partId);
        state.orderFormDraft.designOptions[partId] = state.orderFormDraft.designOptions[partId] || defaultOrderFormOptions(partId);
        state.orderFormDraft.partFits = state.orderFormDraft.partFits || {};
        state.orderFormDraft.partFits[partId] = state.orderFormDraft.partFits[partId] || state.orderFormDraft.fit || "Slim";
        state.activeOrderFormPart = partId;
      }
      if (!partToggle.checked) {
        state.orderFormDraft.parts = state.orderFormDraft.parts.filter((item) => item !== partId);
        if (state.activeOrderFormPart === partId) state.activeOrderFormPart = state.orderFormDraft.parts[0] || "";
      }
      renderOrderFormBuilder();
      return;
    }

    const partFit = event.target.closest("[data-order-form-part-fit]");
    if (partFit && state.orderFormDraft) {
      state.orderFormDraft.partFits = state.orderFormDraft.partFits || {};
      state.orderFormDraft.partFits[partFit.dataset.orderFormPartFit] = partFit.value;
      renderOrderFormBuilder();
      return;
    }

    const designToggle = event.target.closest("[data-order-form-design-modal-toggle]");
    if (designToggle && state.orderFormDraft) {
      const options = state.orderFormDraft.designOptions[state.orderFormDesignModalPart] || [];
      const option = options[Number(designToggle.dataset.orderFormDesignModalToggle)];
      if (!option) return;
      option.enabled = designToggle.checked;
      if (!option.enabled && state.activeOrderFormDesignValueIndex === Number(designToggle.dataset.orderFormDesignModalToggle)) state.activeOrderFormDesignValueIndex = null;
      option.values = (option.values || defaultOrderFormOptionValues(option.name)).map((value) => ({
        ...normalizeOrderFormOption({ name: option.name, values: [value] }).values[0],
        enabled: designToggle.checked,
      }));
      renderOrderFormDesignOptionsModal();
      renderOrderFormBuilder();
      return;
    }

    const designValueToggle = event.target.closest("[data-order-form-design-value-toggle]");
    if (designValueToggle && state.orderFormDraft) {
      const options = state.orderFormDraft.designOptions[state.orderFormDesignModalPart] || [];
      const option = options[Number(designValueToggle.dataset.orderFormDesignValueToggle)];
      if (!option) return;
      option.values = (option.values || defaultOrderFormOptionValues(option.name)).map((value) =>
        typeof value === "string" ? { label: value, enabled: true } : { ...value, enabled: value.enabled !== false },
      );
      const value = option.values[Number(designValueToggle.dataset.orderFormDesignValueIndex)];
      if (!value) return;
      value.enabled = designValueToggle.checked;
      renderOrderFormDesignOptionsModal();
      renderOrderFormBuilder();
    }
  });

  el("orderFormDesignOptionsModal")?.addEventListener("click", (event) => {
    const valuesMenuButton = event.target.closest("[data-order-form-design-values-menu]");
    if (valuesMenuButton && state.orderFormDraft && state.orderFormDesignModalPart) {
      event.stopPropagation();
      const index = Number(valuesMenuButton.dataset.orderFormDesignValuesMenu);
      state.activeOrderFormDesignValueIndex = state.activeOrderFormDesignValueIndex === index ? null : index;
      renderOrderFormDesignOptionsModal();
      return;
    }

    const modalBulkButton = event.target.closest("[data-order-form-design-modal-bulk]");
    if (modalBulkButton && state.orderFormDraft && state.orderFormDesignModalPart) {
      event.stopPropagation();
      const options = state.orderFormDraft.designOptions[state.orderFormDesignModalPart] || [];
      const enabled = modalBulkButton.dataset.orderFormDesignModalBulk === "enable";
      options.forEach((option) => {
        option.enabled = enabled;
        option.values = (option.values || defaultOrderFormOptionValues(option.name)).map((value) => ({
          ...(typeof value === "string" ? { label: value } : value),
          enabled,
        }));
      });
      state.activeOrderFormDesignValueIndex = null;
      renderOrderFormDesignOptionsModal();
      renderOrderFormBuilder();
    }
  });

  el("orderFormDesignOptionsModal")?.addEventListener("change", (event) => {
    const designToggle = event.target.closest("[data-order-form-design-modal-toggle]");
    if (designToggle && state.orderFormDraft) {
      event.stopPropagation();
      const options = state.orderFormDraft.designOptions[state.orderFormDesignModalPart] || [];
      const option = options[Number(designToggle.dataset.orderFormDesignModalToggle)];
      if (!option) return;
      option.enabled = designToggle.checked;
      if (!option.enabled && state.activeOrderFormDesignValueIndex === Number(designToggle.dataset.orderFormDesignModalToggle)) state.activeOrderFormDesignValueIndex = null;
      option.values = (option.values || defaultOrderFormOptionValues(option.name)).map((value) => ({
        ...normalizeOrderFormOption({ name: option.name, values: [value] }).values[0],
        enabled: designToggle.checked,
      }));
      renderOrderFormDesignOptionsModal();
      renderOrderFormBuilder();
      return;
    }

    const designValueToggle = event.target.closest("[data-order-form-design-value-toggle]");
    if (designValueToggle && state.orderFormDraft) {
      event.stopPropagation();
      const options = state.orderFormDraft.designOptions[state.orderFormDesignModalPart] || [];
      const option = options[Number(designValueToggle.dataset.orderFormDesignValueToggle)];
      if (!option) return;
      option.values = (option.values || defaultOrderFormOptionValues(option.name)).map((value) =>
        typeof value === "string" ? { label: value, enabled: true } : { ...value, enabled: value.enabled !== false },
      );
      const value = option.values[Number(designValueToggle.dataset.orderFormDesignValueIndex)];
      if (!value) return;
      value.enabled = designValueToggle.checked;
      renderOrderFormDesignOptionsModal();
      renderOrderFormBuilder();
    }
  });

  document.addEventListener("click", (event) => {
    const createOrderTrigger = event.target.closest("#homeCreateOrderBtn, #dashboardCreateOrderBtn, #ordersCreateOrderBtn, #orderDetailCreateBtn, #detailCreateOrderBtn");
    if (createOrderTrigger) {
      setCreateOrderStopModal(true);
      return;
    }

    if (!event.target.closest(".actions-btn") && !event.target.closest(".action-menu") && state.activeMenuId) {
      state.activeMenuId = null;
      state.activeMenuPosition = null;
      renderRows();
    }
    if (!event.target.closest(".order-action-btn") && !event.target.closest(".order-action-menu") && state.activeOrderActionId) {
      state.activeOrderActionId = null;
      state.activeOrderActionPosition = null;
      renderDetailOrders();
    }
    if (!event.target.closest(".fit-profile-action-btn") && !event.target.closest(".fit-profile-action-menu") && state.activeFitProfileActionId) {
      state.activeFitProfileActionId = null;
      state.activeFitProfileActionPosition = null;
      renderFitProfiles();
    }
    if (!event.target.closest(".orders-action-btn") && !event.target.closest(".orders-action-menu") && !event.target.closest(".orders-action-print-menu") && state.activeStandaloneOrderActionId) {
      state.activeStandaloneOrderActionId = null;
      state.activeStandaloneOrderActionPosition = null;
      state.activeStandaloneOrderPrintId = null;
      state.activeStandaloneOrderPrintPosition = null;
      renderOrdersPage();
    }
    if (!event.target.closest(".sales-associate-action-btn") && !event.target.closest(".sales-associate-action-menu") && state.activeSalesAssociateActionId) {
      state.activeSalesAssociateActionId = null;
      state.activeSalesAssociateActionPosition = null;
      renderSalesAssociates();
    }
    if (!event.target.closest("#orderDetailActionsBtn") && !event.target.closest("#orderDetailActionsMenu") && !event.target.closest("#orderDetailPrintMenu")) {
      el("orderDetailActionsMenu").classList.remove("open");
      el("orderDetailPrintMenu")?.classList.remove("open");
    }
    if (!event.target.closest("#homeSearchModeBtn") && !event.target.closest("#homeSearchModeMenu")) {
      el("homeSearchModeMenu")?.classList.add("hidden");
    }
    if (!event.target.closest(".sidebar") && !event.target.closest("[data-popout-panel]") && state.activeNavPopout) closeNavPopouts();
    if (!event.target.closest("#languageBtn") && !event.target.closest("#languageMenu")) {
      el("languageMenu").classList.remove("open");
    }
    if (!event.target.closest(".settings-select") && !event.target.closest(".settings-select-menu")) {
      closeAccountSettingsSelects();
    }
    if (!event.target.closest("#detailFilterMenu") && !event.target.closest("#detailFilterBtn")) {
      el("detailFilterMenu").classList.remove("open");
      el("detailFilterSubmenu").classList.remove("open");
    }
    if (!event.target.closest("#fitProfileFilterMenu") && !event.target.closest("#fitProfileFilterBtn")) {
      el("fitProfileFilterMenu").classList.remove("open");
      el("fitProfileFilterSubmenu").classList.remove("open");
    }
    if (!event.target.closest("#deliveryProductBtn") && !event.target.closest("#deliveryProductMenu")) {
      el("deliveryProductMenu")?.classList.remove("open");
      el("deliveryProductBtn")?.setAttribute("aria-expanded", "false");
    }
    if (!event.target.closest("#deliveryEmailFrequencyBtn") && !event.target.closest("#deliveryEmailFrequencyMenu")) {
      el("deliveryEmailFrequencyMenu")?.classList.remove("open");
      el("deliveryEmailFrequencyBtn")?.setAttribute("aria-expanded", "false");
    }
    if (!event.target.closest("#reportIssueAreaBtn") && !event.target.closest("#reportIssueAreaMenu")) {
      el("reportIssueAreaMenu")?.classList.remove("open");
      el("reportIssueAreaBtn")?.setAttribute("aria-expanded", "false");
    }
    if (state.activeOrderFormDesignValueIndex !== null && !event.target.closest("[data-order-form-design-values-menu]") && !event.target.closest("[data-order-form-design-values-popout]")) {
      state.activeOrderFormDesignValueIndex = null;
      if (el("orderFormDesignOptionsModal")?.classList.contains("open")) renderOrderFormDesignOptionsModal();
    }
    if (!event.target.closest("#pageSizeBtn") && !event.target.closest("#pageSizeMenu")) {
      state.customerPageSizeOpen = false;
      renderCustomerPageSizeMenu();
    }
    if (!event.target.closest("[data-detail-page-size-trigger]") && !event.target.closest("[data-detail-page-size-menu]")) {
      if (state.detailOrdersPageSizeOpen || state.fitProfilesPageSizeOpen) {
        state.detailOrdersPageSizeOpen = false;
        state.fitProfilesPageSizeOpen = false;
        if (state.currentPage === "detail") {
          renderDetailOrders();
          renderFitProfiles();
        }
      }
    }
    if (
      state.fabricAdvancedFiltersOpen &&
      !event.target.closest("#fabricAdvancedFiltersPanel") &&
      !event.target.closest("#fabricAdvancedFiltersBtn") &&
      !event.target.closest("#fabricSelectMenu")
    ) {
      setFabricAdvancedFiltersModal(false);
    }
    if (!event.target.closest("[data-fabric-select]") && !event.target.closest("#fabricSelectMenu")) {
      state.activeFabricSelect = null;
      state.activeFabricSelectInstance = null;
      state.activeFabricSelectPosition = null;
      renderFabricSelectMenu();
    }
    if (!event.target.closest("#fabricPageSizeBtn") && !event.target.closest("#fabricPageSizeMenu")) {
      state.fabricPageSizeOpen = false;
      renderFabricPageSizeMenu();
    }
    if (!event.target.closest("#labelPageSizeBtn") && !event.target.closest("#labelPageSizeMenu")) {
      state.labelPageSizeOpen = false;
      renderLabelPageSizeMenu();
    }
    if (!event.target.closest("#fabricExportBtn") && !event.target.closest("#fabricExportMenu")) {
      state.activeFabricExportPosition = null;
      renderFabricExportMenu();
    }
    if (!event.target.closest("[data-fabric-action-id]") && !event.target.closest("#fabricActionMenu")) {
      state.activeFabricActionId = null;
      state.activeFabricActionPosition = null;
      renderFabricActionMenu();
    }
    if (!event.target.closest("[data-orders-status-trigger]") && !event.target.closest("#ordersStatusMenu")) {
      state.activeOrdersStatusPosition = null;
      el("ordersStatusMenu").classList.remove("open");
    }
    if (!event.target.closest("#ordersBulkStatusBtn") && !event.target.closest("#ordersBottomStatusBtn") && !event.target.closest("#ordersBulkStatusMenu")) {
      state.activeOrdersBulkStatusPosition = null;
      if (!el("ordersStatusUpdateModal")?.classList.contains("open")) state.inlineStatusOrderId = null;
      el("ordersBulkStatusMenu")?.classList.remove("open");
    }
    if (!event.target.closest("#ordersBulkActionsBtn") && !event.target.closest("#ordersBottomBulkActionsBtn") && !event.target.closest("#ordersBulkActionsMenu")) {
      state.activeOrdersBulkActionsPosition = null;
      el("ordersBulkActionsMenu")?.classList.remove("open");
    }
    if (!event.target.closest("[data-orders-select]") && !event.target.closest("#ordersSelectMenu")) {
      state.activeOrdersSelect = null;
      state.activeOrdersSelectInstance = null;
      state.activeOrdersSelectPosition = null;
      renderOrdersSelectMenu();
    }
    if (!event.target.closest("#ordersCascadeItemBtn") && !event.target.closest("#ordersCascadeItemMenu")) {
      closeOrdersCascadeItemMenu();
    }
    if (!event.target.closest("[data-create-fit-select]") && !event.target.closest("#createFitProfileSelectMenu")) {
      state.activeCreateFitProfileSelect = null;
      state.activeCreateFitProfileSelectPosition = null;
      renderCreateFitProfileSelectMenu();
    }
    if (!event.target.closest("[data-one-page-order-select]") && !event.target.closest("#onePageOrderSelectMenu")) {
      state.activeOnePageOrderSelect = null;
      state.activeOnePageOrderSelectPosition = null;
      renderOnePageOrderSelectMenu();
    }
    if (state.activeOnePageMaterialSearch !== null && !event.target.closest("[data-one-page-material-picker]")) {
      state.activeOnePageMaterialSearch = null;
      state.activeOnePageMaterialSearchPosition = null;
      if (state.currentPage === "onePageOrder") renderOnePageOrderPage();
    }
    if (state.activeOnePageFabricSearch !== null && !event.target.closest("[data-one-page-fabric-picker]")) {
      state.activeOnePageFabricSearch = null;
      state.activeOnePageFabricSearchPosition = null;
      if (state.currentPage === "onePageOrder") renderOnePageOrderPage();
    }
    if (!event.target.closest("[data-fit-tool-select]") && !event.target.closest("#fitToolValueMenu")) {
      state.activeFitToolSelect = null;
      state.activeFitToolSelectPosition = null;
      state.activeFitToolDirection = null;
      renderFitToolValueMenu();
    }
    if (!event.target.closest("#createFitProfileStartPackageBtn") && !event.target.closest("#createFitProfileStartPackageMenu")) {
      el("createFitProfileStartPackageMenu").classList.add("hidden");
      el("createFitProfileStartPackageBtn").setAttribute("aria-expanded", "false");
    }
    if (!event.target.closest("#ordersPageSizeBtn") && !event.target.closest("#ordersPageSizeMenu")) {
      state.ordersPageSizeOpen = false;
      el("ordersPageSizeMenu").classList.add("hidden");
    }
    if (!event.target.closest("#invoiceStatusBtn") && !event.target.closest("#invoiceStatusMenu")) {
      state.invoiceStatusMenuOpen = false;
      syncInvoiceStatusFilter();
    }
    if (!event.target.closest("#invoicePageSizeBtn") && !event.target.closest("#invoicePageSizeMenu")) {
      state.invoicePageSizeOpen = false;
      renderInvoicePageSizeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!state.tokenInspectorEnabled) return;
    if (event.target.closest("#tokenInspectorReadout") || event.target.closest("#tokenInspectorOutline")) return;
    event.preventDefault();
    event.stopPropagation();
    state.tokenInspectorPinnedNode = tokenInspectorTarget(event.target);
    renderTokenInspector(state.tokenInspectorPinnedNode, event, { measureSpacing: true });
  }, true);

  document.addEventListener("mousemove", (event) => {
    if (!state.tokenInspectorEnabled) return;
    if (state.tokenInspectorPinnedNode) return;
    clearTokenSpacingOverlay();
    renderTokenInspector(event.target, event);
  });

  document.addEventListener("mouseleave", () => {
    if (!state.tokenInspectorEnabled) return;
    if (state.tokenInspectorPinnedNode) return;
    el("tokenInspectorReadout")?.classList.remove("open");
    el("tokenInspectorOutline")?.classList.remove("open");
    clearTokenSpacingOverlay();
  });

  document.addEventListener("keydown", (event) => {
    if (!event.metaKey && !event.ctrlKey && !event.altKey && event.key.length === 1) {
      state.secretActionSequence = `${state.secretActionSequence}${event.key.toUpperCase()}`.slice(-5);
      if (state.secretActionSequence.endsWith("YYY")) {
        state.actionColumnSide = state.actionColumnSide === "left" ? "right" : "left";
        state.activeMenuId = null;
        state.activeFitProfileActionId = null;
        state.activeStandaloneOrderActionId = null;
        state.activeStandaloneOrderActionPosition = null;
        applyActionColumnMode();
        renderRows();
        renderDetailOrders();
        renderFitProfiles();
        renderFabricInventory();
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("FFF")) {
        state.ordersFavoritesUnlocked = !state.ordersFavoritesUnlocked;
        persistOrdersFavorites();
        renderFabricFavoriteFilters();
        renderFabricFavoriteButtons();
        renderOrdersFavoriteFilters();
        renderOrdersPage();
        showToast(state.ordersFavoritesUnlocked ? "Order favourite filters unlocked." : "Order favourite filters locked.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("PPP")) {
        state.orderFormPreviewUnlocked = !state.orderFormPreviewUnlocked;
        if (state.currentPage === "downloads" && state.downloadsUnlocked && state.orderFormView === "library") renderOrderFormLibrary();
        showToast(state.orderFormPreviewUnlocked ? "Order form preview unlocked." : "Order form preview hidden.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("OOO")) {
        openOnePageOrderCheatPage();
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("TOP")) {
        state.sidebarAccountPosition = state.sidebarAccountPosition === "bottom" ? "top" : "bottom";
        closeNavPopouts();
        applyTheme();
        renderPrimaryNavigation();
        showToast(state.sidebarAccountPosition === "bottom" ? "Account button moved to bottom." : "Account button moved to top.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("NEST")) {
        state.sidebarNestMode = state.sidebarNestMode === "nested" ? "section" : "nested";
        localStorage.setItem("relocate-sidebar-nest-mode", state.sidebarNestMode);
        closeNavPopouts();
        renderPrimaryNavigation();
        showToast(state.sidebarNestMode === "nested" ? "Nested breadcrumb sidebar enabled." : "Section sidebar expansion enabled.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("CHIP")) {
        state.fabricChipFiltersVisible = !state.fabricChipFiltersVisible;
        localStorage.setItem("relocate-fabric-chip-filters-visible", String(state.fabricChipFiltersVisible));
        renderFabricInventory();
        showToast(state.fabricChipFiltersVisible ? "Fabric filter chips shown." : "Fabric filter chips hidden.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("THEME")) {
        cycleSyncedTheme();
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("2026")) {
        setPrototypeVersion("2026");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("2027")) {
        setPrototypeVersion("2027");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("2028")) {
        if (state.currentPage !== "suitePlaceholder") {
          state.lastGoCreatePage = state.currentPage;
          localStorage.setItem("relocate-last-gocreate-page", state.lastGoCreatePage);
        }
        setPrototypeVersion("2028");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("TTT")) {
        state.ordersTypeUnlocked = !state.ordersTypeUnlocked;
        state.ordersPage = 1;
        renderOrdersPage();
        showToast(state.ordersTypeUnlocked ? "Order type switch unlocked." : "Order type switch locked.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("SSS")) {
        state.ordersSearchFirstMode = !state.ordersSearchFirstMode;
        state.ordersPage = 1;
        resetOrdersTransientState();
        if (state.currentPage !== "orders") setPage("orders");
        else renderOrdersPage();
        showToast(state.ordersSearchFirstMode ? "Search-first Orders test enabled." : "Search-first Orders test disabled.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("RRR")) {
        state.ordersColumnSettingsUnlocked = !state.ordersColumnSettingsUnlocked;
        persistOrdersColumnSettings();
        renderOrdersPage();
        showToast(state.ordersColumnSettingsUnlocked ? "Column rearrange unlocked." : "Column rearrange locked.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("CCC")) {
        state.comicSansEnabled = !state.comicSansEnabled;
        applyTheme();
        showToast(state.comicSansEnabled ? "Comic Sans mode enabled." : "Comic Sans mode disabled.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("AAA")) {
        state.accountMenuAdvanced = !state.accountMenuAdvanced;
        applyTheme();
        showToast(state.accountMenuAdvanced ? "Full account menu enabled." : "Final account menu enabled.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("DDD")) {
        state.interfaceDensity = state.interfaceDensity === "dense" ? "comfortable" : "dense";
        state.denseModeEnabled = state.interfaceDensity === "dense";
        applyTheme();
        showToast(`${settingsDensityLabels[state.interfaceDensity]} interface enabled.`);
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("BIG")) {
        state.contentWidthMode = state.contentWidthMode === "max" ? "full" : "max";
        applyTheme();
        showToast(state.contentWidthMode === "max" ? "1440px max width enabled." : "Full width enabled.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("GDPR")) {
        state.gdprMaskEnabled = !state.gdprMaskEnabled;
        localStorage.setItem("relocate-gdpr-mask", String(state.gdprMaskEnabled));
        renderRows();
        if (state.currentPage === "detail") {
          const customer = customers.find((item) => item.id === state.selectedCustomerId);
          if (customer) {
            setText("detailEmail", `${customer.mobile || "-"} · ${customerEmailDisplay(customer)}`);
            renderCustomerAccount(customer);
          }
        }
        showToast(state.gdprMaskEnabled ? "Customer emails masked." : "Customer emails restored.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("GGG")) {
        state.globalChromeHidden = !state.globalChromeHidden;
        applyGlobalChromeVisibility();
        el("languageMenu")?.classList.remove("open");
        setGlobalSearchModal(false);
        showToast(state.globalChromeHidden ? "Presentation chrome hidden." : "Presentation chrome shown.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("III")) {
        setTokenInspectorEnabled(true);
        showToast("Token inspector enabled. Press Escape to close.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("CFP")) {
        state.createFitProfilePackage = "three-piece";
        setCreateFitProfileStartModal(true);
        showToast("Create FitProfile flow opened.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence.endsWith("777")) {
        state.onePageOrderStepJumpUnlocked = !state.onePageOrderStepJumpUnlocked;
        localStorage.setItem("relocate-order-step-jump-unlocked", String(state.onePageOrderStepJumpUnlocked));
        if (state.currentPage === "onePageOrder") renderOnePageOrderPage();
        showToast(state.onePageOrderStepJumpUnlocked ? "Order step jump unlocked." : "Order step jump locked.");
        state.secretActionSequence = "";
      }
      if (state.secretActionSequence === "ABAB") {
        setCheatCodesModal(true);
        state.secretActionSequence = "";
      }
    }

    if (event.key === "Escape") {
      if (state.tokenInspectorEnabled) {
        setTokenInspectorEnabled(false);
        showToast("Token inspector disabled.");
      }
      const hadModalOpen = anyModalOpen();
      if (hadModalOpen) closeModals();
      if (state.activeNavPopout) closeNavPopouts();
      if (state.activeOnePageOrderSelect) {
        state.activeOnePageOrderSelect = null;
        state.activeOnePageOrderSelectPosition = null;
        renderOnePageOrderSelectMenu();
      }
      if (state.activeOnePageFabricSearch !== null) {
        state.activeOnePageFabricSearch = null;
        state.activeOnePageFabricSearchPosition = null;
        if (state.currentPage === "onePageOrder") renderOnePageOrderPage();
      }
      if (state.activeMenuId) {
        state.activeMenuId = null;
        renderRows();
      }
      if (!hadModalOpen && state.currentPage === "home" && !state.dashboardOverlayHidden) {
        state.dashboardOverlayHidden = true;
        renderDashboard();
      }
    }
  });

  const repositionOpenDropdowns = () => {
    hideFabricSwatchZoom();
    if (state.activeDatePickerInput) renderDatePickerMenu();
    if (state.activeCreateFitProfileSelect) renderCreateFitProfileSelectMenu();
    if (state.activeOnePageOrderSelect) renderOnePageOrderSelectMenu();
    if (state.activeOnePageFabricSearch !== null && state.currentPage === "onePageOrder") {
      const input = document.querySelector(`[data-one-page-fabric-input="${state.activeOnePageFabricSearch}"]`);
      setOnePageFabricSearchPosition(state.activeOnePageFabricSearch, input);
      renderOnePageOrderPage();
    }
    if (state.activeFitToolSelect) renderFitToolValueMenu();
    if (state.accountSettingsSelect) renderAccountSettingsSelects();
    positionCreateFitProfileStartPackageMenu();
    updateCreateFitMeasurementsStickiness();
    updateOrderDetailStickyOffsets();
    syncOrderDetailPartNav();
    updateOrderDetailPartNavStickiness();
    updateSidebarOverflow();
    if (state.activeOrdersCascadeOpen) renderOrdersCascadeItemMenu();
    if (state.currentPage === "fabricInventory") renderFabricFilterChips();
    repositionFabricFloatingControls();
    if (el("fabricScannerModal")?.classList.contains("open")) renderFabricScannerModal();
  };
  window.addEventListener("scroll", repositionOpenDropdowns, true);
  window.addEventListener("resize", repositionOpenDropdowns);

  el("customerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = el("firstNameInput").value.trim();
    const lastName = el("lastNameInput").value.trim();
    const payload = {
      id: state.editingId || `CUS-${String(customers.length + 1).padStart(3, "0")}`,
      firstName,
      lastName,
      email: el("emailInput").value.trim(),
      status: "Active",
      mobile: el("mobileInput").value.trim() || "-",
      phone: el("phoneInput")?.value.trim() || "",
      address: el("homeAddressInput")?.value.trim() || "",
      city: el("homeCityInput")?.value.trim() || "",
      postcode: el("homePostcodeInput")?.value.trim() || "",
      company: el("companyNameInput")?.value.trim() || "",
      dob: el("dobInput").value,
    };

    const existingIndex = customers.findIndex((customer) => customer.id === payload.id);
    if (existingIndex >= 0) {
      customers[existingIndex] = payload;
      showToast("Customer updated.");
    } else {
      customers.unshift(payload);
      showAlert("Customer created", `${fullName(payload)} has been added.`);
    }
    setCustomerModal(false);
    renderRows();
    if (state.currentPage === "detail" && state.selectedCustomerId === payload.id) renderCustomerDetail(payload.id);
  });
}

if (state.suiteModeUnlocked && !state.fabricFutureFeaturesUnlocked) {
  state.fabricFutureFeaturesUnlocked = true;
  localStorage.setItem("relocate-fabric-future-features-unlocked", "true");
}

renderRows();
renderDashboard();
renderOrdersPage();
renderFabricFavoriteFilters();
renderFabricInventory();
renderLabelInventory();
renderOptionalSections();
renderFitProfiles();
renderDetailTabs();
renderNavPopouts();
renderPrimaryNavigation();
renderCompanyView();
applyTheme();
applyActionColumnMode();
if (state.suiteModeUnlocked && state.activeSuiteApp !== "gocreate") {
  setPage("suitePlaceholder", { force: true });
} else {
  applySuiteMode();
}
syncAllDateDisplays();
renderLoginCard();
applyPrototypeGate();
applyDemoSlowMode();
initAmbientPixelGrid();
wireEvents();
renderToolFavorites();
const copyEditObserver = new MutationObserver(scheduleCopyEditRefresh);
copyEditObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
applyCopyEditMode();
window.addEventListener("beforeunload", (event) => {
  if (!state.shopSettingsDirty) return;
  event.preventDefault();
  event.returnValue = "";
});
applyLanguage();
state.demoSlowBooted = true;
