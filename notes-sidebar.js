// SIDEBAR POPOUT

document.addEventListener('DOMContentLoaded', function () {
    // Array of topics - you can dynamically generate this from your existing content
    var topics = [
      "The General Care of the Newborn",
      "Bacterial Meningitis in the Newborn",
      "Hypocalcemia in the Newborn",
      "Hypoglycemia in the Newborn",
      "Infant of the Diabetic Mother",
      "Neonatal Seizures",
      "Neonatal Sepsis",
      "Neonatal Hyperbilirubinemia",
      "Physical Examination of the Newborn",
      "Polycythemia in the Newborn",
      "Classification of the Newborn",
      "Congenital Infections",
      "Congenital Anomalies",
      "Neonatal Resuscitation",
      "Acute Bronchiolitis",
      "Acute Respiratory Tract Infections",
      "Anatomy and Physiology of the Respiratory Tract",
      "Bronchiectasis",
      "Empyema Thoracis",
      "Obstructive Airway Disorders",
      "Oxygen Therapy",
      "Perinatal Asphyxia",
      "Pleural Effusion",
      "Pneumothorax",
      "Respiratory Disorders in the Newborn",
      "Childhood Bronchial Asthma",
      "Congenital Heart Disease",
      "Hypertension in Children",
      "Cardiomyopathies",
      "Acute Rheumatic Fever",
      "Cerebrovascular Accident in Sickle Cell Disease",
      "Diseases of the Pericardium",
      "Infective Endocarditis",
      "Heart Failure",
      "Fever",
      "Cholestasis in Children",
      "Hepatic Disorders in Children",
      "Intestinal Helminthic Infestations",
      "Intussusception and Management",
      "Diarrhea",
      "Classification and Management of Anaemias",
      "Bleeding Disorders in Childhood",
      "Blood and Blood Products",
      "Kawasaki Disease",
      "Sickle Cell Disease Crises and Management",
      "Blood Transfusion",
      "Breast Feeding",
      "Inborn Errors of Metabolism",
      "Nutrition in Paediatrics",
      "Nutritional Assessment",
      "Complementary Feeding",
      "Diabetes Mellitus in Children",
      "Pediatric Obesity",
      "Protein Energy Malnutrition",
      "Rickets",
      "Cerebral Palsy",
      "Neurocutaneous Syndrome",
      "Neuromuscular Disorders",
      "Childhood Epilepsies",
      "Conditions that Mimic Seizures",
      "Status Epilepticus",
      "Attention Deficit Hyperactivity Disorder",
      "Mental Retardation",
      "Congenital Adrenal Hyperplasia",
      "Disorders of Sexual Differentiation",
      "Puberty Disorders",
      "Thyroid Disorders",
      "Short Stature",
      "Tall Stature",
      "Acute Kidney Injury",
      "Developmental and Structural Anomalies of the Genitourinary Tract",
      "Chronic Kidney Disease",
      "Hematuria",
      "Evaluation of Proteinuria",
      "Renal Function Tests",
      "Paediatric Urinary Tract Infection",
      "Atopic Dermatitis",
      "Bacterial Skin Infections",
      "Disorders of Pigmentation",
      "Fungal Diseases of the Skin",
      "Introduction to Dermatology",
      "Parasitic Skin Infections",
      "Viral Skin Infections",
      "Principles of Oncology",
      "Burkitt Lymphoma",
      "Hodgkin's Lymphoma",
      "Acute Leukaemias",
      "Rhabdomyosarcoma",
      "Neuroblastoma",
      "Nephroblastoma",
      "Retinoblastoma",
      "Oncological Emergencies",
      "Bereavement and Separation Loss",
      "Infectious Diseases",
      "Paediatric Immunology",
      "Malaria",
      "Amoebiasis",
      "Cholera",
      "Giardiasis",
      "Osteomyelitis",
      "Poliomyelitis",
      "Septic Arthritis",
      "Measles",
      "Mumps",
      "Roseola Infantum",
      "Rubella",
      "Tuberculosis",
      "Varicella",
      "Yellow Fever",
      "Pediatric HIV",
      "Social/Community Child Health",
      "Child Survival Strategies",
      "The Right of The Worlds Children",
      "Psychoactive Substance Use and Abuse",
      "Spectrum of Problems at Adolescence",
      "Cardiopulmonary Resuscitation",
      "Burns",
      "Birth Trauma",
      "Paediatric shock",
      "Principles of Management of Poisoning in Children",
      "Snake Bite and Envenomation",
      "",
      "",
      
      // Add more topics as needed
    ];

    // Function to create sidebar menu items
    function createSidebarMenu() {
      var sidebarMenu = document.querySelector('.toggle-menu');
      topics.forEach(function (topic) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
        link.href = '../lectures/' + topicSlug + '.html'; // Adjust the href based on your file structure
        link.textContent = topic;

        // Highlight the current page
        if (isCurrentPage(topicSlug)) {
          listItem.classList.add('current-page');
        }

        listItem.appendChild(link);
        sidebarMenu.appendChild(listItem);
      });
    }

    // Function to toggle the sidebar
    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '250px';
    }

    // Function to close the sidebar
    function closeSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '0';
    }

    // Function to check if the current page matches the provided topic slug
    function isCurrentPage(topicSlug) {
      var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
      return currentPage === topicSlug;
    }

    // Attach event listener to the toggle button
    document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);

    // Attach event listener to the close button
    document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);

    // Function to close the sidebar when clicking outside of it
    function closeSidebarOnClickOutside(event) {
      var sidebar = document.getElementById('sidebar');
      var sidebarBtn = document.getElementById('toggleSidebarBtn');

      // Check if the clicked element is not part of the sidebar or the toggle button
      if (!sidebar.contains(event.target) && event.target !== sidebarBtn) {
        closeSidebar();
      }
    }

    // Attach event listener to the document for clicks
    document.addEventListener('click', closeSidebarOnClickOutside);

    // Create the sidebar menu on page load
    createSidebarMenu();
  });

