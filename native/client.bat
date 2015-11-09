for /l %%x in (1, 1, 3) do (
	start cmd /c "cd clients & node client-%%x.js & pause"
)