class RecommendationSystem {
     constructor(stock) {
         this.stock = stock; 
        } 
        getRecommendations(category) { 
            return this.stock[category]; 
        }
     } 
     const stock = { "Electronics": ["Laptop", "Smartphone", "Headphones", "TV"], "Fashion": ["T-shirt", "Watch", "Shoes"] }; 
     const recommendationSystem = new RecommendationSystem(stock); 
     const preferredCategory = "Electronics"; 
      const recommendations = recommendationSystem.getRecommendations(preferredCategory); 
      console.log(`Recommended items in the ${preferredCategory} category:`); 
      if (recommendations) { 
        recommendations.forEach(item => console.log(item)); 
    }