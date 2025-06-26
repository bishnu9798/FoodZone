let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


let time = document.getElementById("current-time");

setInterval(() =>{
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
},1000)



                                      //  try
                                      

// // define food categories for organization
// enum FoodCategory {
// 	fruit,
// 	vegetable,
// 	meat,
// 	dairy
// }

// enum PantryItemAction {
// 	add,
// 	remove
// }

// // describe the shape of a category of foods
// interface FoodCategoryShape {
// 	label: FoodCategory;
// 	color?: string;
// 	foods: Array<InventoryItemModel | undefined>;
// }

// // describe the shape of a food item
// interface FoodItemShape {
// 	name: string;
// 	description: string;
// 	order?: number;
// }

// // destructure any commonly used constructs from React global
// const {
// 	Fragment,
// 	useCallback,
// 	useContext,
// 	useState,
// 	useEffect,
// 	useLayoutEffect,
// 	useRef,
// 	useMemo
// } = React;

// // create a react context to access draggable item state & methods
// const DragContext = React.createContext();

// /*
// /	Data representing a complete list of all items in the
// /	shopping cart, broken down by category. This is the singular
// /	source of truth which ultimately is passed into <App />
// */
// const groceryHaul: Array<FoodCategoryShape> = [
// 	{
// 		label: FoodCategory.fruit,
// 		color: "yellow",
// 		foods: [
// 			{
// 				name: "apple",
// 				description: "an apple a day..."
// 			},
// 			{
// 				name: "banana",
// 				description: "I'm quite appealing!"
// 			},
// 			{
// 				name: "pear",
// 				description: "Sweet and deliciously juicy"
// 			},
// 			{
// 				name: "orange",
// 				description: "citrusy, plump and packed full of vitamin C"
// 			}
// 		]
// 	},
// 	{
// 		label: FoodCategory.vegetable,
// 		color: "green",
// 		foods: [
// 			{
// 				name: "carrot",
// 				description: "they'll give you night vision powers..."
// 			},
// 			{
// 				name: "broccoli",
// 				description: "magically flavorful florets"
// 			}
// 		]
// 	},
// 	{
// 		label: FoodCategory.meat,
// 		color: "red",
// 		foods: [
// 			{
// 				name: "beef",
// 				description: "it's what's for dinner?"
// 			},
// 			{
// 				name: "chicken",
// 				description: "tastes sort of like a frog's leg"
// 			},
// 			{
// 				name: "salmon",
// 				description: "sushi anyone?"
// 			}
// 		]
// 	}
// ];

// // feather icon svg
// const addIcon = (
// 	<svg
// 		viewBox="0 0 24 24"
// 		width="24"
// 		height="24"
// 		stroke="currentColor"
// 		stroke-width="2"
// 		fill="none"
// 		stroke-linecap="round"
// 		stroke-linejoin="round"
// 		class="css-i6dzq1"
// 	>
// 		<circle cx="12" cy="12" r="10"></circle>
// 		<line x1="12" y1="8" x2="12" y2="16"></line>
// 		<line x1="8" y1="12" x2="16" y2="12"></line>
// 	</svg>
// );

// const closeIcon = (
// 	<svg
// 		xmlns="http://www.w3.org/2000/svg"
// 		width="24"
// 		height="24"
// 		viewBox="0 0 24 24"
// 		fill="none"
// 		stroke="currentColor"
// 		stroke-width="2"
// 		stroke-linecap="round"
// 		stroke-linejoin="round"
// 	>
// 		<line x1="18" y1="6" x2="6" y2="18" />
// 		<line x1="6" y1="6" x2="18" y2="18" />
// 	</svg>
// );

// /*
// /	Accepts a list of inventory items by category, and returns
// /	a flattened list of all items throughout all categories.
// */
// function getAllItemsFromInventory(
// 	inventory: Array<FoodCategoryShape>
// ): Array<FoodItemShape> {
// 	return inventory
// 		.reduce(
// 			(fullList, { foods }: FoodCategoryShape) => fullList.concat(foods),
// 			[]
// 		)
// 		.flat();
// }

// function getCategoryDetailsByItem(
// 	itemName: string,
// 	inventory: Array<FoodCategoryShape>
// ): string {
// 	let matchingCategory: string | undefined;
// 	inventory.some(
// 		({ label, foods }: FoodCategoryShape) =>
// 			(matchingCategory = foods.some(
// 				(food: FoodItemShape = {}) => food.name === itemName
// 			)
// 				? label
// 				: matchingCategory)
// 	);
// 	return matchingCategory;
// }

// function getItemRefByName(
// 	itemName: string,
// 	inventory: Array<FoodCategoryShape>
// ): FoodItemShape {
// 	return (function findCurrentItemIndex(
// 		allItems: Array<FoodItemShape>,
// 		index: number
// 	): number {
// 		return index >= allItems.length || itemName === undefined
// 			? undefined
// 			: allItems[index].name === itemName
// 			? allItems[index]
// 			: findCurrentItemIndex(allItems, index + 1);
// 	})(getAllItemsFromInventory(inventory), 0);
// }

// /* 
// / returns a copy of the complete inventory of groceries array with
// / food items cleared from each category
// */
// function getEmptyInventoryCopy(
// 	inventory: Array<FoodCategoryShape>
// ): Array<FoodCategoryShape> {
// 	return inventory.map((shelf: FoodCategoryShape) =>
// 		Object.assign({}, shelf, {
// 			foods: Array(shelf.foods.length).fill(null)
// 		})
// 	);
// }

// /* 
// /	Takes a flattened array of items and randomizes them,
// /	then returns the new array
// */
// function randomizeItemsFromInventory(
// 	inventory: Array<FoodCategoryShape>
// ): Array<FoodItemShape>;

// /*
// /
// */
// function useA11yItemList(itemList: Array<any>) {
// 	// list of key tags to respond to within the list during keyboard interaction.
// 	const registerKeys = useRef([
// 		"ArrowUp",
// 		"ArrowDown",
// 		"ArrowLeft",
// 		"ArrowRight",
// 		"Enter"
// 	]);

// 	// keep state of current item focus within the scope of this list
// 	const [focusIndex, setFocusIndex] = useState<number>(-1);

// 	// keep a memo-ized list of RefObjects to be applied to each child upon render.
// 	// update the memo-ized list when the list parameter updates.
// 	const itemRefs = useMemo(
// 		() =>
// 			Array(itemList.length)
// 				.fill("")
// 				.map(() => React.createRef()),
// 		[itemList]
// 	);

// 	// Manage behavior for keydown behavior. Only manages navigation of the list.
// 	// Firing context handlers managing selection state is delegated to the item component.
// 	const navigateList = useCallback(
// 		(event: React.KeyboardEvent) => {
// 			if (registerKeys.current.includes(event.key)) {
// 				// prevent simultaneous container scrolling
// 				event.preventDefault();
// 				// list navigation by updating focusIndex.
// 				// an effect hook listens to index updates to apply focus to the
// 				// appropriate RefObject kept within the itemRef list.
// 				switch (event.key) {
// 					case "ArrowUp":
// 					case "ArrowLeft":
// 						setFocusIndex(focusIndex > 0 ? focusIndex - 1 : 0);
// 						break;
// 					case "ArrowDown":
// 					case "ArrowRight":
// 						setFocusIndex(
// 							focusIndex < itemList.length - 1 ? focusIndex + 1 : itemList.length - 1
// 						);
// 						break;
// 				}
// 			}
// 		},
// 		[itemList, focusIndex]
// 	);

// 	// set focus to child in list when the focus index is updated
// 	useEffect(() => {
// 		itemRefs[focusIndex] ? itemRefs[focusIndex].current.focus() : null;
// 	}, [itemRefs, focusIndex]);

// 	return {
// 		focusIndex,
// 		navigateList,
// 		itemRefs,
// 		setFocusIndex
// 	};
// }

// /*
// /
// */
// function useDragOffset(target: React.RefObject<any>) {}

// /*
// /	Component to represent a list of shopping cart items
// /	represented in a flat list. Items within the list are
// /	draggable.
// */
// function GroceryCart({ list }: Array<FoodItemShape>): React.ReactElement {
// 	const { focusIndex, navigateList, itemRefs, setFocusIndex } = useA11yItemList(
// 		list
// 	);

// 	// Update the focus index if a child item receives focus via mouse or touch
// 	// interactions with default browser behaviors.
// 	const handleChildItemFocus = useCallback(
// 		(index: number) => {
// 			if (index !== focusIndex) {
// 				setFocusIndex(index);
// 			}
// 		},
// 		[focusIndex]
// 	);

// 	return (
// 		<ul class="grocery-cart-list" onKeyDown={navigateList}>
// 			{list.length ? (
// 				list.map(
// 					(food: FoodItemShape, index: number): React.ReactNode => (
// 						<GroceryItem
// 							{...food}
// 							key={food.name}
// 							index={index}
// 							tabIndex={focusIndex === index || (!index && focusIndex < 0) ? 0 : -1}
// 							onFocus={handleChildItemFocus}
// 							ref={itemRefs[index]}
// 						/>
// 					)
// 				)
// 			) : (
// 				<span class="error-msg">Your grocery bag is sadly empty</span>
// 			)}
// 		</ul>
// 	);
// }

// /*
// /	Component to represent an inventory item with additional 
// /	props to describe its interaction expectations.
// */
// const GroceryItem = React.forwardRef(
// 	(
// 		{ name, description, index, onFocus, tabIndex }: any,
// 		ref
// 	): React.ReactElement => {
// 		// receive context properties
// 		const { currentItem, setDraggedItemAs } = useContext(DragContext);

// 		// 'Select' this item on Enter key press for a11y
// 		const handleKeyUp = useCallback((event: React.KeyboardEvent) => {
// 			if (event.key === "Enter") {
// 				setDraggedItemAs(name);
// 			}
// 		}, []);

// 		// 'Select' this item from mouse/touch interaction initiation
// 		const handleTouchStart = useCallback(
// 			(event: React.MouseEvent | React.TouchEvent) => {
// 				setDraggedItemAs(name);
// 			},
// 			[]
// 		);

// 		// When item is focused, fire any callback passed by parent list to update
// 		// the focus index so they are in sync.
// 		const handleFocus = useCallback(
// 			(event: React.FocusEvent) => {
// 				if (onFocus instanceof Function) {
// 					onFocus(index);
// 				}
// 			},
// 			[index]
// 		);

// 		// renderer
// 		return (
// 			<li
// 				class="grocery-item"
// 				tabIndex={tabIndex}
// 				onMouseDown={handleTouchStart}
// 				onKeyUp={handleKeyUp}
// 				onFocus={handleFocus}
// 				ref={ref}
// 			>
// 				<dl class="grocery-item-details">
// 					<dt class="grocery-item-name">{name}</dt>
// 					<dd class="grocery-item-description">
// 						<small>{description}</small>
// 					</dd>
// 				</dl>
// 			</li>
// 		);
// 	}
// );

// /*
// /	Component to display droppable areas within the empty pantry
// /	the user can drag shopping cart items into. Renders the complete
// /	shape of the cart by category.
// */
// function Pantry({ inventory }: Array<FoodCategoryShape>): React.ReactElement {
// 	return (
// 		<section class="pantry-list">
// 			{inventory.map((category: FoodCategoryShape, index: number) => (
// 				<PantryShelf {...category} />
// 			))}
// 		</section>
// 	);
// }

// function PantryShelf({ label, foods }: any): React.ReactElement {
// 	const { currentItemCategory } = useContext(DragContext);
// 	const shelfRef = useRef<HTMLElement>(null);
// 	const focusableItems = useMemo(
// 		(): Array<FoodItemShape> =>
// 			currentItemCategory !== undefined && currentItemCategory === label
// 				? foods
// 				: !currentItemCategory
// 				? foods
// 				: [],
// 		[foods, label, currentItemCategory]
// 	);

// 	const {
// 		navigateList,
// 		itemRefs = [],
// 		focusIndex = -1,
// 		setFocusIndex
// 	} = useA11yItemList(focusableItems);

// 	// Update the focus index if a child item receives focus via mouse or touch
// 	// interactions with default browser behaviors.
// 	const handleChildItemFocus = useCallback(
// 		(index: number) => {
// 			if (index !== focusIndex) {
// 				setFocusIndex(index);
// 			}
// 		},
// 		[focusIndex]
// 	);

// 	const memoizedItems = useMemo(() => {
// 		let wasTabIndexSet: boolean = false;
// 		return foods.map((food: FoodItemShape, index: number) => {
// 			let tabIndex: number = -1;
// 			if (currentItemCategory !== null) {
// 				if (currentItemCategory === label && !food) {
// 					wasTabIndexSet = true;
// 					tabIndex = 0;
// 				}
// 			} else {
// 				if (food & !wasTabIndexSet) {
// 					wasTabIndexSet = true;
// 					tabIndex = 0;
// 				}
// 			}
// 			const pantryItemProps: any = Object.assign({}, food || {}, {
// 				category: label,
// 				index,
// 				droppable: food === null,
// 				key: `${label}_food_${index}`,
// 				ref: itemRefs[index],
// 				tabIndex: tabIndex,
// 				onFocus: handleChildItemFocus
// 			});
// 			return <PantryItem {...pantryItemProps} />;
// 		});
// 	}, [currentItemCategory, foods, label, itemRefs, handleChildItemFocus]);

// 	// Scroll pantry shelf into view if items on this shelf are droppable.
// 	// currentItemCategory is provided through context from <App />.
// 	useEffect(() => {
// 		if (currentItemCategory === label && shelfRef.current) {
// 			shelfRef.current.scrollIntoView({ behavior: "smooth" });
// 		}
// 	}, [currentItemCategory, shelfRef]);

// 	return (
// 		<section
// 			class="pantry-shelf"
// 			key={label}
// 			onKeyDown={navigateList}
// 			ref={shelfRef}
// 		>
// 			<span class="pantry-shelf-name">{FoodCategory[label]}</span>
// 			{memoizedItems}
// 		</section>
// 	);
// }

// const PantryItem = React.forwardRef(
// 	(
// 		{ name, description, category, droppable, index, tabIndex, onFocus }: any,
// 		ref: React.RefObject
// 	): React.ReactElement => {
// 		const [isActive, setIsActive] = useState<boolean>(false);

// 		const {
// 			currentItem,
// 			currentItemCategory,
// 			setDraggedItemAs,
// 			addPantryItem,
// 			removePantryItem
// 		} = useContext(DragContext);

// 		const availableToDrop: boolean =
// 			droppable && currentItemCategory === category;

// 		const handleButtonKeyUp: void = useCallback(
// 			(event: React.KeyboardEvent) => {
// 				event.stopPropagation();
// 				if (event.key === "Enter") {
// 					removeItem(name);
// 				}
// 			},
// 			[removePantryItem]
// 		);

// 		const handleDragOver = useCallback(
// 			(event: MouseEvent) => {
// 				const isSameCategory: boolean =
// 					category && currentItemCategory === category;
// 				if (isSameCategory && !isActive) {
// 					setIsActive(true);
// 				}
// 			},
// 			[currentItem, currentItemCategory]
// 		);

// 		const handleDragOut = useCallback(() => {
// 			setIsActive(false);
// 		}, [currentItem, currentItemCategory]);

// 		const handleDragEnd = useCallback(
// 			(event: MouseEvent) => {
// 				if (currentItem && currentItemCategory === category) {
// 					event.stopPropagation();
// 					addPantryItem(currentItem, index);
// 					setIsActive(false);
// 				}
// 			},
// 			[currentItem, currentItemCategory, addPantryItem]
// 		);

// 		const handleKeyUp = useCallback(
// 			(event: React.KeyboardEvent) => {
// 				if (currentItem && event.key === "Enter") {
// 					addPantryItem(currentItem, index);
// 				}
// 			},
// 			[currentItem, addPantryItem, index]
// 		);

// 		const handleFocus = useCallback((event: React.FocusEvent) => {
// 			if (onFocus instanceof Function) {
// 				onFocus(index);
// 			}
// 		}, []);

// 		const removeItem = useCallback(() => {
// 			removePantryItem(name);
// 		}, [name, removePantryItem]);

// 		const itemCx: string = [
// 			"pantry-item",
// 			droppable ? "droppable" : undefined,
// 			availableToDrop ? "available" : undefined,
// 			isActive ? "active" : undefined
// 		]
// 			.filter((n) => n)
// 			.join(" ");

// 		return (
// 			<dl
// 				class={itemCx}
// 				onMouseUp={droppable ? handleDragEnd : undefined}
// 				onMouseMove={droppable ? handleDragOver : undefined}
// 				onMouseOut={droppable ? handleDragOut : undefined}
// 				onKeyUp={droppable ? handleKeyUp : undefined}
// 				onFocus={handleFocus}
// 				ref={ref}
// 				tabIndex={tabIndex}
// 			>
// 				{availableToDrop ? (
// 					addIcon
// 				) : droppable ? null : (
// 					<Fragment>
// 						<dt class="grocery-item-name">
// 							{name}
// 							<button
// 								class="pantry-item-close"
// 								onClick={removeItem}
// 								onKeyUp={handleButtonKeyUp}
// 							>
// 								<small>remove</small>
// 							</button>
// 						</dt>
// 						<dd class="grocery-item-description">{description}</dd>
// 					</Fragment>
// 				)}
// 			</dl>
// 		);
// 	}
// );

// /*
// /	Application level component: Will keep statefulness of the app
// /	and pass along state-relevant props to the children components
// /	to manage for rendering purposes only
// */
// function App({ groceries }: any): React.ReactElement {
// 	/*
// 	/ Used to keep state of pantry inventory with items in-place. Mirrors
// 	/ structure of groceries prop with foods list initialized to 'undefined'.
// 	*/
// 	const [pantryInventory, setPantryInventory] = useState<
// 		Array<FoodCategoryShape>
// 	>(getEmptyInventoryCopy(groceries));

// 	/*
// 	/ manages state of foot items list to be rendered in the <GroceryCart />. 
// 	*/
// 	const [groceryList, setGroceryList] = useState<Array<FoodItemShape>>(
// 		getAllItemsFromInventory(groceries)
// 	);

// 	// indicates the current food item which is being interacted with during drag & drop
// 	const [currentItem, setCurrentItem] = useState<string | undefined>();

// 	// indactes the currentItem food/shelf category
// 	const [currentItemCategory, setCurrentItemCategory] = useState<
// 		string | undefined
// 	>();

// 	// Provider method to expose adding item to pantry inventory
// 	const addPantryItem = useCallback(
// 		(itemName: string, atIndex: number) => {
// 			setPantryItem(itemName, PantryItemAction.add, atIndex);
// 			setDraggedItemAs(undefined);
// 		},
// 		[pantryInventory]
// 	);

// 	const handleDragEnd = useCallback(() => {
// 		if (currentItem) {
// 			setDraggedItemAs(undefined);
// 		}
// 	}, [currentItem]);

// 	// Provider method to expose removing item from pantry inventory
// 	const removePantryItem = useCallback(
// 		(itemName: string) => {
// 			setPantryItem(itemName, PantryItemAction.remove);
// 		},
// 		[pantryInventory]
// 	);

// 	// Reset the app to its original state
// 	const resetAppState = useCallback(() => {
// 		setDraggedItemAs(undefined);
// 		setPantryInventory(getEmptyInventoryCopy(groceries));
// 	}, []);

// 	/*
// 	/	Method to allow children components to mark a food item as being
// 	/ stocked in the pantry. Places the item in the proper location within
// 	/ the pantry's shape. Manages application state values to be passed
// 	/ down through the context provider.
// 	*/
// 	const setPantryItem = useCallback(
// 		(itemName: string, action: PantryItemAction, atIndex?: number) => {
// 			const shelfLabel = getCategoryDetailsByItem(itemName, groceries);
// 			setPantryInventory(
// 				pantryInventory.map((shelf: FoodCategoryShape) => {
// 					return shelf.label === shelfLabel
// 						? Object.assign({}, shelf, {
// 								foods: shelf.foods.map((food: FoodItemShape, index: number) => {
// 									switch (action) {
// 										case PantryItemAction.add:
// 											if (atIndex === undefined || shelf.foods[atIndex] === undefined) {
// 												throw new Error(
// 													"tried to set pantry item at an invalid location:",
// 													`placement index was "${atIndex}"`
// 												);
// 											} else {
// 												return index === atIndex
// 													? getItemRefByName(itemName, groceries)
// 													: food;
// 											}
// 											break;
// 										case PantryItemAction.remove:
// 											return food !== null && food.name === itemName ? null : food;
// 											break;
// 									}
// 								})
// 						  })
// 						: Object.assign({}, shelf);
// 				})
// 			);
// 		},
// 		[pantryInventory]
// 	);

// 	/*
// 	/ Method to allow children components to set which grocery items
// 	/	are currently being interacted with by grocery name. Manages internal
// 	/ application state to fetch other key data about the dragged item.
// 	*/
// 	const setDraggedItemAs = useCallback((itemName: string) => {
// 		setCurrentItem(itemName || null);
// 		setCurrentItemCategory(getCategoryDetailsByItem(itemName, groceries));
// 	}, []);

// 	// build grocery list array to render in <GroceryCart/>
// 	useEffect(
// 		function deriveGroceryListFromPantry() {
// 			// grab flattened list of all items currently in the pantry
// 			const itemsInPantry: Array<FoodItemShape> = getAllItemsFromInventory(
// 				pantryInventory
// 			).filter((n) => n);
// 			/*
// 			/	iterate through grocery list and remove any items that 
// 			/ may have already been stocked in the pantry
// 			*/
// 			setGroceryList(
// 				getAllItemsFromInventory(groceries)
// 					.map((food: FoodItemShape) =>
// 						itemsInPantry.some(({ name }: FoodItemShape) =>
// 							name === food.name ? true : false
// 						)
// 							? undefined
// 							: Object.assign({}, food)
// 					)
// 					.filter((n) => n)
// 			);
// 		},
// 		[pantryInventory]
// 	);

// 	return (
// 		<DragContext.Provider
// 			value={{
// 				addPantryItem,
// 				currentItem,
// 				currentItemCategory,
// 				removePantryItem,
// 				setDraggedItemAs
// 			}}
// 		>
// 			<div class="app-container" onMouseUp={handleDragEnd}>
// 				<header>
// 					<h1>
// 						<strong>Stock the pantry</strong>
// 					</h1>
// 					<div class="app-actions">
// 						<button onClick={resetAppState}>Reset pantry</button>
// 					</div>
// 				</header>
// 				<section class="grocery-cart">
// 					<header class="section-header">
// 						<small>Drag items from this list...</small>
// 					</header>
// 					<GroceryCart list={groceryList} />
// 				</section>
// 				<section class="pantry">
// 					<header class="section-header">
// 						<small>And place them over here</small>
// 					</header>
// 					<Pantry inventory={pantryInventory} />
// 				</section>
// 			</div>
// 		</DragContext.Provider>
// 	);
// }

// // render output to view
// ReactDOM.render(
// 	<App groceries={groceryHaul} />,
// 	document.querySelector("#app-entry")
// );
